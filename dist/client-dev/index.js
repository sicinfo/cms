System.register(['react', 'react-dom/client', 'react-router-dom', 'react-utils', 'axios-utils'], (function () {
  'use strict';
  var createElement, Suspense, createRoot, Link, Navigate, Route, Routes, BrowserRouter, WrapPromise, config;
  return {
    setters: [function (module) {
      createElement = module.createElement;
      Suspense = module.Suspense;
    }, function (module) {
      createRoot = module.createRoot;
    }, function (module) {
      Link = module.Link;
      Navigate = module.Navigate;
      Route = module.Route;
      Routes = module.Routes;
      BrowserRouter = module.BrowserRouter;
    }, function (module) {
      WrapPromise = module.WrapPromise;
    }, function (module) {
      config = module.config;
    }],
    execute: (function () {

      const axios = config({ baseUrl: '/api/' });

      var HeaderComponent = props => {
        const children = [
          createElement('div', { children: document.title }),
          createElement(Link, { to: '/', children: 'home' }),
          createElement(Link, { to: '/login', children: 'login' })
        ];
        return createElement('header', Object.assign({}, props, { children }))
      };

      var LoginComponent = props => {
        props || (props = {});
        props.children = 'hello world - login';
        return createElement('section', props)
      };

      var HomeComponent = props => {
        props || (props = {});
        props.children = 'hello world - home';
        return createElement('section', props)
      };

      var ContatoComponent = props => {
        props || (props = {});
        const Header = createElement('header', null, 'header');
        const Section = createElement('section', null, 'header');
        const Footer = createElement('footer', null, 'header');
        props.children = [Header, Section, Footer];
        return createElement('div', props)
      };

      var RouterComponent = props => {
        const children = [
          {
            path: '/',
            element: createElement(HomeComponent, props),
          },
          {
            path: '/login',
            element: createElement(LoginComponent, props)
          },
          {
            path: '/contato',
            element: createElement(ContatoComponent, props)
          },
          {
            path: '*',
            element: createElement(Navigate, { replace: true, to: '/' })
          }
        ].map(props => createElement(Route, props));
        return createElement(Routes, { children });
      };

      var FooterComponent = props => {
        props || (props = {});
        props.children = createElement(Link, {
          to: '/contato',
          children: 'contato'
        });
        return createElement('footer', props)
      };

      const head = WrapPromise(axios.get('config/head').then(
        ({ data: { head: { title, favicon } } }) => {
          title && (document.title = title);
          favicon && (link => {
            link.setAttribute('rel', 'shortcut icon');
            link.setAttribute('href', favicon);
          })(document.head.querySelector('link[rel="shortcut icon"]'));
        }
      ));
      const children = createElement(() => {
        head.read();
        return createElement(BrowserRouter, {
          children: [
            createElement(HeaderComponent, {
              style: {
                backgroundColor: 'blue',
                color: 'white',
                height: '20%'
              }
            }),
            createElement(RouterComponent, {
              style: {
                height: '60%'
              }
            }),
            createElement(FooterComponent, {
              style: {
                backgroundColor: 'black',
                color: 'white',
                height: '20%'
              }
            })
          ]
        })
      });
      const fallback = createElement('span', { children: 'wait...' });
      const _html = document.querySelector('html');
      const _body = document.body;
      const _elem = document.createElement('div');
      _elem.classList.add('app');
      _elem.style.backgroundColor = 'snow';
      [_html, _body, _elem].forEach(el => {
        el.style.height = '100%';
        el.style.margin = '0';
      });
      _body.insertAdjacentElement('afterbegin', _elem);
      createRoot(_elem).render(createElement(Suspense, { fallback, children }));

    })
  };
}));
