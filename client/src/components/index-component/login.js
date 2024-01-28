/**
 * @module login-component
 * 
 * @author moreira 2023-11-02
 */

import { createElement as h } from "react";

// @ts-ignore
import { formComponent, labelComponent } from 'react-utils';
import axios from '../utils.src/axios';

const URL_CONFIG_LOGIN = 'config/login'

export default (/** @type {any} */ props) => (children => {
  return h('div', { ...props, children })
})(h(formComponent, {
  send: (/** @type {FormData} */ data) => axios.post(URL_CONFIG_LOGIN, data, {
    headers: {'content-type': 'multipart/form-data'}
  }),
  name: 'login',
  title: 'acesso',
  width: '250px',
  contents: [
    h(labelComponent, { input: 'usuario', label: 'Usuário', title: 'Nome do usuário' }),
    h(labelComponent, { input: 'senha', label: 'Senha', type: 'password' }),
  ]
})  
)




// const style = {};

// export default props => {

//   (props || (props = {})).style || (props.style = {});

//   const children = 'hello world - login';

//   return h('div', { ...props, ... { children, style: { ...style, ...props.style } } })  
// }

// 'use strict'

// System.register(['react'], (_export, _context) => {

//   /** @type {ReactJs['createElement']} */ let h;
  
//   const HomeComponent = () => {

//     return h('section', {
//       // style: {
//       //   backgroundColor: 'green',
//       //   color: 'white',
//       //   height: '60%'
//       // },
//       children: 'home'
//     })
//   }

//   return {

//     setters: [

//       ({ default: d }) => {
//         h = d.createElement;
//       }

//     ],

//     execute: () => {
//       _export('version', '0.1.0');
//       _export('default', HomeComponent)
//     }

//   }

// })
