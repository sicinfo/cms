/**
 * @module header-component
 * 
 * @author moreira 2023-10-11
 */

import { createElement as h, Suspense, useState } from "react";
import { Link } from "react-router-dom";
// import axios, { wrapPromise } from '../utils.src/axios';

// const header = WrapPromise(axios.get('config/header').then(() => {
//   return 0
// }))

export default (/** @type {any} */ props) => (([style, ...children]) => {
  return h('header', { ...props, children, style })
})([
  {
    ...props.style
  },

  h('div', { children: props.title }),
  
  ...[['/', 'home'], ['/login', 'login']].map(([to, children]) => h('div', {
      children: h(Link, { to, children })
    }))
  
])





//   const { title } = props;



//   const children = [
//     h('div', { children: title }),
//     ...[['/', 'home'], ['/login', 'login']].map(([to, children]) => h('div', {
//       children: h(Link, { to, children })
//     }))

//   ]

//   return h('header', Object.assign({}, props, { children }))
// }





// System.register(['react', 'react-router-dom', 'react-util', 'axios-util'], (_export, _context) => {

//   /** @type {ReactJs['createElement']} */ let h;
//   /** @type {ReactJs['useState']} */ let useState;
//   /** @type {ReactRouterDom['Link']} */ let Link;
//   /** @type {WrapPromise} */ let wrapPromise;
//   /** @type {Axios} */ let Axios;

//   const HeaderComponent = props => {

//     const [config] = useState(() => {

//     })


//     return h('header', Object.assign(props, {
//       style: Object.assign({
//         backgroundColor: 'blue',
//         color: 'white',
//         height: '25%'
//       }, style),
//       children: h(Link, {
//         to: '/',
//         children: 'home'
//       })
//     }))
//   }

//   return {

//     setters: [

//       ({ default: d }) => {
//         h = d.createElement;
//         useState = d.useState;
//       },

//       ({ default: d }) => {
//         Link = d.Link;
//       },

//       ({ default: d }) => {
//         wrapPromise = d.wrapPromise;
//       },

//       ({ default: axios }) => { Axios = axios }

//     ],

//     execute: () => {
//       _export('version', '0.1.0');
//       _export('default', HeaderComponent)
//     }

//   }

// })
