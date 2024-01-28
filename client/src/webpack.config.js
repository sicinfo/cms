/**
 * 
 * 
 * /gh/jquery/jquery@3.1.0/dist/jquery.min.js
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = ({
  production = false,
  clean = false
}) => {

  const mode = production ? 'production' : 'development';
  
  const plugins = [

    new HtmlWebpackPlugin({
      filename: 'index.html',
      // scriptLoading: 'defered',
      templateContent: (title => `
      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="data:;base64,=">
        <title>${title}</title>
        <script defer src="https://cdn.jsdelivr.net/npm/systemjs@6/dist/system.min.js"></script>
      </head>
      <body>
        <div class="app">${title}</div>
      </body>
      `)('loading...')
    })

  ]

  const filename = `index.js`

  const output = {
    clean,
    filename,
    // library: { 
    //   type: 'system' 
    // },
    // environment: { module: true }
  }

  const experiments = {
    // outputModule: true
  }

  const externalsType = 'umd', externals = {

    'react': ['https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js', 'umd'],
    'react-dom': 'https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js',

    'System': ['https://cdn.jsdelivr.net/npm/systemjs@6.14.2/dist/system.min.js', 'this'],

    'react-utils': ['http://cage.dev.br/github/react-utils/dist/react-utils.development.js', 'system']
  }

  const common_config = {
    mode,
    plugins, 
    externalsType, 
    externals,
    // experiments,
    output
  }

  const deve_config = {}

  const prod_config = {};
    
  return Object.assign(common_config, production ? prod_config : deve_config )
}