System.register(['react', 'react-dom/client', 'react-router-dom', 'react-utils', 'axios-utils'], (function () {
  'use strict';
  var createElement, Suspense, createRoot, BrowserRouter, wrapPromise, config;
  return {
    setters: [module => {
      createElement = module.createElement;
      Suspense = module.Suspense;
    }, module => {
      createRoot = module.createRoot;
    }, module => {
      BrowserRouter = module.BrowserRouter;
    }, module => {
      wrapPromise = module.wrapPromise;
    }, module => {
      config = module.config;
    }],
    execute: (function () {

      /** 
       * 
       */


      /** @type {import('axios').AxiosInstance} */
      const axios = config({ baseUrl: '/api/' });

      /**
       * @name cms
       * 
       * @author moreira - 2023-08-02
       */
      /**
       * cms
       */

      // import { title } from "process";

      const URL_CONFIG_HEAD = 'config/head';

      Promise.all([

        // link canonical
        ((rel, href) => (
          link => {
            link.setAttribute('rel', rel);
            link.setAttribute('href', href);
          }
        )(document.head.querySelector(`link[rel="${rel}"]`) || document.head.appendChild(document.createElement('link')))
        )('canonical', `${location.origin}`),
        
        // createRouter
        ((elem, children, fallback) => {
          createRoot(elem).render(createElement(Suspense, { fallback, children }));
        })(

          // elem
          ((body, elem) => {

            elem.classList.add('app');
            elem.style.backgroundColor = 'snow';

            [body.parentElement, body, elem].forEach(el => {
              el.style.height = '100%';
              el.style.margin = '0';
            });

            body.insertAdjacentElement('afterbegin', elem);

            return elem

          })(
            document.body,
            document.createElement('div')
          ),

          // children
          (head => createElement(() => {
            head.read();
            return createElement(BrowserRouter, {
              children: [
                // h(headerComponent, { title: sessionStorage.title, style: { height: '20%' } }),
                // h(routerComponent, { title: sessionStorage.title, style: { height: '60%' } }),
                // h(footerComponent, { title: sessionStorage.title, style: { height: '20%' } })
              ]
            })
          }))(
            wrapPromise(axios.get(URL_CONFIG_HEAD).then(
              ({ data }, error) => {
                (({ title, favicon }) => {
                  
                  title && (document.title = title);
        
                  favicon && (
                    (rel, href) => (
                      link => {
                        link && link.setAttribute('rel', rel);
                        link && link.setAttribute('href', favicon);
                      }
                    )(document.head.querySelector(`link[rel="${rel}"][href="${href}"]`))
                  )('shortcut icon', 'data:;base64,=');
        
                })(data?.head || {});
              }
            ))
          ),

          // fallback
          createElement('span', { children: 'wait...' })
        )

      ]);













      // 'use strict';


      // // Promise.all(['react', 'react-dom'].map(
      // //   component => System.import(component).then(component => component.default)
      // // )).then(([{ Suspense, lazy, createElement: h }, { createRoot }]) => createRoot(
      // //   document.body.querySelector('div.app')
      // // ).render(h(Suspense, {
      // //   fallback: h('span', { children: 'wait...' }),
      // //   children: h(lazy(() => System.import('index')))
      // // })))





      // // )

      // // Promise.all(['react', 'react-dom', 'react-router-dom', 'axios-util'].map(
      // //   arg => System.import(arg).then(arg => arg.default)
      // // )).then((
      // //   /** @type {[ReactJs,ReactDom,ReactRouterDom,Axios]} */
      // //   [

      // // System.import('react').then( 
      // //   (/** @type {ReactJs} */ ReactJs) => System.import('react-dom').then(
      // //     (/** @type {ReactDom} */ ReactDom) => System.import('react-router-dom').then(
      // //       (/** @type {ReactRouterDom} */ ReactRouterDom) => System.import('axios-util').then(
      // //         (/** @type {AxiosInstance} */ Axios) => [ReactJs, ReactDom, ReactRouterDom, Axios].map(
      // //           ({default:arg}) => arg
      // //         )
      // //       )
      // //     )
      // //   )
      // // ).then(

      // // System.import('react').then(
      // //   arg0 => System.import('react-dom').then(
      // //     // arg1 => System.import('react-router-dom').then(
      // //       arg2 => System.import('axios-util').then(
      // //         arg3 => [arg0, arg2, arg3].map(
      // //           arg => arg.then(arg => arg.default)
      // //         )
      // //       // )
      // //     )
      // //   )
      // // ).then((

      // //   /** @type {[ReactJs,ReactDom,ReactRouterDom,Axios]} */

      // //   [
      // //     { Suspense, lazy, createElement: h },
      // //     { createRoot },
      // //     { BrowserRouter, Navigate, Routes, Route },
      // //     Axios
      // //   ]
      // // ) => {

      // // console.log('a');
        
      //   // const Authorization = 'authorization';
      //   // const LINKS = 'links';
      //   // const LINK = 'link';
      //   // const REL = 'rel';
      //   // const X_BASEURL = 'x-baseurl';
      //   // const BASEURL = 'baseURL';
      //   // const LINK_AUTH = `link-auth`;

      //   // /** @arg {...string[]} arg */
      //   // const _btoa = (...[a, b]) => window.btoa(`${a.toUpperCase()} ${b}`)

      //   // Reflect.set(Axios.defaults, BASEURL, 'api');

      //   // Axios.interceptors.request.use(req => {

      //   //   if (!Reflect.has(req.headers, Authorization)) {
      //   //     if (localStorage.hasOwnProperty(Authorization)) {
      //   //       Reflect.set(req.headers, Authorization, localStorage.getItem(Authorization))
      //   //     }
      //   //   }

      //   //   (key => sessionStorage.hasOwnProperty(key)
      //   //     && Reflect.set(req.headers, LINK_AUTH, sessionStorage.getItem(key))
      //   //     && sessionStorage.removeItem(key)
      //   //   )(_btoa(req.method, req.url))

      //   //   return req;

      //   // })

      //   // Axios.interceptors.response.use(

      //   //   res => {

      //   //     if (Reflect.has(res.headers, Authorization)) {
      //   //       localStorage.setItem(Authorization, Reflect.get(res.headers, Authorization))
      //   //     }
      //   //     else if (localStorage.hasOwnProperty(Authorization)) {
      //   //       localStorage.removeItem(Authorization);
      //   //     }

      //   //     'data' in res && (data => data && (vals => vals && (Array.isArray(vals) ? vals : [vals]).forEach(
      //   //       ({ token, method, rel }) => sessionStorage.setItem(_btoa(method, rel), token)
      //   //     ))((key => key && data[key])([LINKS, LINK].find(key => key in data))))(res['data'] || null)

      //   //     return res
      //   //   },

      //   //   ({ response: res }) => {
      //   //     return Promise.reject(res);
      //   //   }

      //   // )


      //   // Axios.get('config/head').then(({ data: { data: { head: { title, favicon } = {} } = {} } }) => {

      //   //   title && (document.title = title);

      //   //   favicon && (link => {
      //   //     link.setAttribute('rel', 'shortcut icon');
      //   //     link.setAttribute('href', favicon);
      //   //     document.head.appendChild(link);
      //   //   })(document.createElement('link'));

      //   //   createRoot(

      //   //     (el => {
      //   //       return el;
      //   //     })(document.body.querySelector('div.app'))

      //   //   ).render(
      //   //     h(Suspense, {
      //   //       fallback: h('p', { children: 'wait...' }),
      //   //       children: ['header', 'section', 'footer'].map(
      //   //         name => h(lazy(() => System.import(`app_${name}-component`)), {})
      //   //       )
      //   //     })
      //   //   )

      //   // })

      // //Promise.all(['react', 'react-dom', 'react-router-dom', 'axios-util'].map(
      // // Promise.all(['react', 'react-dom', 'axios-util'].map(
      // //       arg => System.import(arg).then(arg => arg.default)
      // // )).then((
      // //   /** @type {[ReactJs,ReactDom,ReactRouterDom,Axios]} */
      // //   []
      // // ) => System.import('react-router-dom').then(arg => arg.default).then(() => {

      // // }))


      // Promise.all(['react', 'react-dom', 'react-router-dom', 'axios-util'].map(
      //   key => System.import(key).then(({ default: res }) => res)
      // )).then((
      //   /** @type {[ReactJs,ReactDom,ReactRouterDom,Axios]} */
      //   [
      //     { Suspense, lazy, createElement: h },
      //     { createRoot },
      //     { BrowserRouter },
      //     Axios
      //   ]
      // ) => {

      //   const props = {
      //     config: {}
      //   };

      //   createRoot(
      //     document.body.querySelector('div.app'),
      //   ).render(
      //     h(BrowserRouter, {
      //       children: h(Suspense, {
      //         fallback: h('p', { children: 'wait...' }),
      //         children: ['header', 'router', 'footer'].map(
      //           key => h(lazy(() => System.import(`app-${key}-component`)), props)
      //         )
      //       })
      //     })
      //   )

      // })

    })
  };
}));
