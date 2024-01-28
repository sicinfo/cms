/**
 * 
 */

import { createElement as h, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import loginComponent from './login';
import homeComponent from './home';
import contatoComponent from './contato';

export default (/** @type {any} */ props) => {

  const children = ((props, style) => [

    {
      path: '/',
      element: h(homeComponent, props),
    },

    {
      path: '/login',
      element: h(loginComponent, props)
    },

    {
      path: '/contato',
      element: h(contatoComponent, props)
    },

    {
      path: '*',
      element: h(Navigate, { replace: true, to: '/' })
    }

  ].map(props => {

    (({ element: children }, key, tag) => {
      children && Reflect.set(props, key, h(tag, { children, style }))
    })(props, 'element', 'section')

    return h(Route, props)
  }))(
    { ...props, style: { ...props.style, height: '100%' } },
    { height: props.style?.height }
  )
  
  return h(Routes, { children });
 



  // return h('div', props);
}

// System.register(['react', 'react-router-dom'], (_export, _context) => {

//   /** @type {ReactJs['createElement']} */ let h;
//   /** @type {ReactJs['lazy']} */ let lazy;
//   /** @type {ReactJs['Suspense']} */ let Suspense;
//   /** @type {ReactRouterDom['Navigate']} */ let Navigate;
//   /** @type {ReactRouterDom['Routes']} */ let Routes;
//   /** @type {ReactRouterDom['Route']} */ let Route;
//   /** @type {Axios} */ let Axios;

//   const RouterComponent = () => {

//     const routes = [
//       {
//         path: '/',
//         element: h(lazy(() => System.import('home-component')))
//       },
//       {
//         path: '*',
//         element: h(Navigate, { replace: true, to: '/' })
//       }
//     ];

//     return h(Routes, {
//       children: h(Suspense, {
//         children: routes.map(props => h(Route, props))
//       })
//     })

//   }

//   return {
//     setters: [
//       ({ default: d }) => {
//         h = d.createElement;
//         lazy = d.lazy;
//         Suspense = d.Suspense;
//       },
//       ({ default: d }) => {
//         Navigate = d.createElement;
//         Routes = d.Routes;
//         Route = d.Route;
//       },
//       ({ default: d }) => {
//         Axios = d.Axios
//       }
//     ],

//     execute: () => {
//       _export('default', RouterComponent)
//     }
//   }

// })