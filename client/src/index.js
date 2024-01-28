/**
 * @module cms
 */

import './components/index-component/index';

// import { Suspense, createElement as h, useEffect, useState } from "react";
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';

// import HeaderComponent from './components/index-component/header';
// import RouterComponent from './components/router';
// import FooterComponent from './components/index-component/footer';

// import axios, { WrapPromise } from './utils.src/axios';

// const head = WrapPromise(axios.get('config/head/1').then(
//   ({ data: { head: { title, favicon } } }) => {

//     title && (document.title = title);

//     favicon && (
//       rel => (
//         link => {
//           link.setAttribute('rel', rel);
//           link.setAttribute('href', favicon);
//         }
//       )(document.head.querySelector(`link[rel="${rel}"]`))
//     )('shortcut icon')

//   }
// ));

// const children = h(() => {

//   head.read();

//   return h(Router, {
//     children: [
//       h(HeaderComponent, {
//         style: {
//           backgroundColor: 'blue',
//           color: 'white',
//           height: '20%'
//         }
//       }),
//       h(RouterComponent, {
//         style: {
//           height: '60%'
//         }
//       }),
//       h(FooterComponent, {
//         style: {
//           backgroundColor: 'black',
//           color: 'white',
//           height: '20%'
//         }
//       })
//     ]
//   })
// })

// const fallback = h('span', { children: 'wait...' });

// const _html = document.querySelector('html');
// const _body = document.body;
// const _elem = document.createElement('div');
// _elem.classList.add('app');
// _elem.style.backgroundColor = 'snow';

// [_html, _body, _elem].forEach(el => {
//   el.style.height = '100%';
//   el.style.margin = '0'
// });

// _body.insertAdjacentElement('afterbegin', _elem);
// createRoot(_elem).render(h(Suspense, { fallback, children }));
