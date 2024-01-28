/**
 * 
 */

import { equal } from 'assert/strict';
import http from 'http';

import { middleware, listen } from 'sicinfo-middleware';

const { PWD } = process.env;
const host = 'localhost'
const NODE_PORT = 3999;
const NODE_ENV = 'test';
const addUrl = (/** @type {string[]} */ ...arg) => [`http://${host}:${NODE_PORT}`, ...arg].join('/');
const _m = middleware({ 
  host,
  NODE_PORT, 
  NODE_ENV, 
  dist: `${PWD}/test/dist` 
});

before(() => _m.server.listen(NODE_PORT, host, listen(_m)));
after(() => _m.server.close());

describe("cms unit test", () => {

  it('#1. ')

});
  





// 'use strict';

// const assert = require('assert');

// describe("cms basic test", () => {

//   it('#0. appname', () => {
    
//   })

//   it('#1. router', () => {
//     const { Router } = Index;
//     assert.equal(typeof(Router), 'function', 'shold be "function"');
//     assert.equal(typeof(new Router({req:{}, opt:{}})), 'object', 'shold be "object"');
//   })

//   it('#2. service', () => {
//     const { Service } = Index;
//     assert.equal(typeof(Service), 'function', 'shold be "function"');
//     assert.equal(typeof(new Service()), 'object', 'shold be "object"');
//   })

//   it('index static property', () => {
//     [
//       [Index.ContentType, 'content-type'], 
//       [Index.TypeTextPlain, 'text/plain; charset=utf-8'],
//       [Index.TypeApplicationJson, 'application/json; charset=utf-8']
//     ].some(([k,v]) => { assert.equal(k, v, `shold be "${v}"`) });
//   })

//   it('#4.1. router property', done => {
//     const Router = class extends Index.Router {
//       get dirname() { return __dirname }
//     }
//     const url = '/app/client/service';
//     const router = new Router(({ req: { url } }));
//     if (![
//       [router.dirname, __dirname],
//       [router.originalUrl, url],
//       [router.url.join(''), url.split('/').slice(1).join('')]
//     ].some(([k, v]) => { assert.equal(k, v, `shold be "${v}"`) })) done();
//   })

//   it('#4.2 router property (herança)', done => {

//     const Router = class extends Index.Router {
//       get dirname() { return __dirname }
//       get url() { return super.url.slice(1) }
//     }
//     const url = '/app/client/service';
//     const router = new Router(({ req: { url } }));
//     if (![
//       [router.dirname, __dirname],
//       [router.originalUrl, url],
//       [router.url.join(''), url.split('/').slice(2).join('')]
//     ].some(([k, v]) => { assert.equal(k, v, `shold be "${v}"`) })) done();
//   })

//   // it('index http erros - bad request', done => {
//   //   const IndexValor = Index.BadRequest
//   //   expect(IndexValor, 'function').to.be.an('function')
//   //   expect(IndexValor(), 'instanceof').to.be.an.instanceof(Error)
//   //   expect(IndexValor().status, 'status').to.equal(400)
//   //   expect(IndexValor('message').message, 'message').to.equal('message')
//   //   done();
//   // })

//   // it('index http erros - internal server error', done => {
//   //   const IndexValor = Index.InternalServerError
//   //   expect(IndexValor, 'function').to.be.an('function')
//   //   expect(IndexValor(), 'instanceof').to.be.an.instanceof(Error)
//   //   expect(IndexValor().status, 'status').to.equal(500)
//   //   expect(IndexValor('message').message, 'message').to.equal('message')
//   //   done();
//   // })

//   // it('index http erros - method not allowed', done => {
//   //   const IndexValor = Index.MethodNotAllowed
//   //   expect(IndexValor, 'function').to.be.an('function')
//   //   expect(IndexValor(), 'instanceof').to.be.an.instanceof(Error)
//   //   expect(IndexValor().status, 'status').to.equal(405)
//   //   expect(IndexValor('message').message, 'message').to.equal('message')
//   //   done();
//   // })

//   // it('index setters - _get', function(done) {
//   //   const { _get } = Index;
//   //   expect(_get, 'function').to.be.an('function');
//   //   expect((_get(this, 'a', () => 1), _get(this, 'a')), 'get value').to.equal(1)
//   //   expect((_get(this, 'a', () => 2, true), _get(this, 'a')), 'get value').to.equal(2)
//   //   expect((_get(this, 'a', undefined), _get(this, 'a')), 'get value').to.equal(2)
//   //   expect((_get(this, 'a', undefined, true), _get(this, 'a')), 'get value').to.be.undefined
//   //   done();
//   // })

// })
