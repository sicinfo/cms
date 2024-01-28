/**
 * cms
 */
const html = require('@rollup/plugin-html');
const cleanup = require('rollup-plugin-cleanup');
const terser = require('@rollup/plugin-terser');
const buildDelay = 6 * 10 ** 3;

const terserOptions = {
  format: {
    comments: false,
    ecma: 6
  }
}

const externals = [
  ['axios', 'https://cdn.jsdelivr.net/gh/axios/axios@1/dist/axios.min.js'],

  ['react',             'https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js'],
  ['react-dom',         'https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js'],
  ['react-dom/client',  'https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js'],
  ['react-router',      'https://cdn.jsdelivr.net/npm/react-router@6/dist/umd/react-router.production.min.js'],
  ['react-router-dom',  'https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.production.min.js'],
  ['@remix-run/router', 'https://cdn.jsdelivr.net/npm/@remix-run/router@1/dist/router.umd.min.js'],

  ['axios-utils',  '/sicinfo-axios-utils/dist/axios-utils.js'],
  ['react-utils', '/sicinfo-react-utils/dist/react-utils.js']
];

const htmlTemplate = file => (title => `
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="data:;base64,=">
  <title>${title}</title>
  <script defer type="systemjs-importmap">{"imports":{${externals.map(([k, v]) => `"${k}":"${v}"`).join(',')}}}</script>
  <script defer src="https://cdn.jsdelivr.net/npm/systemjs@6/dist/system.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/systemjs@6/dist/extras/amd.min.js"></script>
  <!-- script defer src="https://cdn.jsdelivr.net/npm/systemjs@6/dist/extras/named-register.min.js"></script -->
  <script>onload = () => System.import('./${file}')</script>
</head>
`)('loading...');

module.exports = ({ environment: env = '' }) => {

  const generatedCode = { arrowFunctions: true, constBindings: true, preset: "es2015" };
  const watch_ = (exclude => ({ exclude, buildDelay, clearScreen: false }))([ 
    'rollup.config.js' 
  ])

  // const {
  //   NODE_ENV = 'deve'
  // } = Object.fromEntries(env.split(',').map(a => (([k, v = true]) => [k, v])(a.split('='))))
  // const isProd = NODE_ENV.startsWith('prod');

  const components = (...args) => args.map(name => ({
    input: `client/src/components/${name}-component/index.js`,
    output: { file: `client/dist/components/${name}-component.js`, format: 'system' },
    plugins: [ /* terser(terserOptions) */ ]
  }));

  const services = (...args) => args.map(name => ({
    input: `server/src/services/${name}-service/index.js`,
    output: { file: `server/dist/services/${name}-service.js`, format: 'cjs' },
    plugins: [ /* terser(terserOptions) */ ]
  }));

  return [

    // {
    //   input: 'client/src/app-components/index.js',
    //   output: {
    //     file: 'client/src/app-components.js',
    //     format: 'system'
    //   }
    // },

    {
      input: 'client/src/index.js',
      external: externals.map(([external]) => external),
      output: { file: 'client/dist/index.js', format: 'system' },
      exclude: {},
      plugins: [
        html({ template: () => htmlTemplate('index.js') }),
        /* terser(terserOptions) */
        // isProd ? /* terser(terserOptions) */ : cleanup({ comments: 'none' })
      ]
    },

    // server
    {
      input: 'server/src/index.js',
      output: { file: 'server/dist/index.js', format: 'cjs' },
      plugins: [ /* terser(terserOptions) */ ]
    }

  ].concat(
    services(
      'config', 
      'contato'
    ),
    components('index'),     
    
    { 
      input: 'test/test.js',
      output: { file: `test/test.spec.js`, format: 'cjs' }
    },

    { 
      input: 'test/index.js',
      output: { file: `test/dist/x-app/index.js`, format: 'cjs' }
    } 

  ).map(({ output, watch = watch_, cache = true, ...obj }) => Object.assign(
    { watch, cache, output: Object.assign({ generatedCode }, output) }, obj
  ))
  
}