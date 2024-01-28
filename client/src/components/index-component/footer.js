/**
 * @module footer-component
 * 
 * @author moreira 2023-10-11
 */

import { createElement as h } from "react"
import { Link } from "react-router-dom";

export default (/** @type {any} */ props) => {
  
  props.title = 'rodape';

  return ((children, style) => h('footer', { ...props, children, style }))([
    h(Link, { to: '/contato', children: 'contato' }),
    h('div', { children: props.title })
  ], {
    ...props.style,
    backgroundColor: 'black',
    color: 'white'
  })
}



// export default props => {

//   props || (props = {});

//   props.children = h(Link, { 
//     to: '/contato', 
//     children: 'contato' 
//   })

//   return h('footer', props)
// }



// System.register(['react'], (_export, _context) => {

//   /** @type {React.createElement} */ let h;

//   const FooterComponent = props => {
//     return h('footer', Object.assign(props, {
//       style: {
//         backgroundColor: 'black',
//         color: 'white',
//         height: '25%'
//       },
//       // children: 'FOOTER'
//     }))
//   }

//   return { 
    
//     setters: [
    
//       ({ default: React }) => {
//         h = React.createElement;
//       }
      
//     ], 
    
//     execute: () => {
//       _export('version', '0.1.0');
//       _export('default', FooterComponent)
//     } }
// })
