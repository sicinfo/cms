/**
 * @module home-component
 * 
 * @author moreira 2023-10-20
 */

import { createElement as h, useState } from "react";

const STYLE = {
  // background: 'center ',
  // backgroundImage: `url(/img/home-background.png`,
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'contain'
}

export default ({ style, ...props}) => (
  children => h('div', { ...props, children, style: { ...STYLE, ...style } })
)('hello world - home')



  // Reflect.set(props, 'children', h('img', {
  //   src: `/${sessionStorage.title}/img/home-background.png`,
  //   alt: '',
  //   style: {
  //     width: '100%',
  //     height: '100%'
  //   }
  // }))

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
