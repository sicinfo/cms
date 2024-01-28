/**
 * cms
 * 
 */

import { Service } from 'sicinfo-router';
import Router from './index';

// const { default as Db } = require('./arangodb');

/**
 * @arg {string} arg
 * @this {any}
 * @returns {any}
*/
const _sub = function (arg) {
  console.log(arg);
  return (([coll, sub]) => sub && Reflect.has(this.subs, sub) && (
    sub => Reflect.has(sub, arg) && Reflect.apply(
      Reflect.get(sub, arg),
      this,
      []
    )
  )(Reflect.get(this.subs, sub)))((console.log(this.url),this.url))
}

// /** @type {WeakMap<any,Router>} */
// const _router = new WeakMap();

export default class extends Service {

  /**
   * @this {Record<'router',Router>}}
   */
  get collection() {
    console.log(this.serviceName, this.router.appName);
    return this.router.Db.getCollection(this.serviceName, this.router.appName)
  }

  /** 
   * @returns {Record<string,any>}
   */
  get subs() {
    return {}
  }


  /** 
   * @override
   */
  doGetById() {
    return _sub.call(this, 'doGetById');
  }

  /** 
   * @override
   */
  doGetByQuery() {
    return _sub.call(this, 'doGetByQuery');
  }

  /** 
   * @override
   */
  doPost() {
    return _sub.call(this, 'doPost');
  }

  /** 
   * @override
   */
  doPut() {
    return _sub.call(this, 'doPut');
  }

}


// 'use strict';

// const { Service: SicinfoRouterService } = require('sicinfo-router');


// const Db = require('../arangodb');

// /** @type {ServiceCommonConstructor} */
// module.exports = class extends SicinfoRouterService {

//   /** @this {ServiceCommonConstructor & {service:string}} */

//   get databaseName() { return this.app }
//   get collectionName() { return this.service }
//   get documentName() { return this.id }

//   getCollection(/** @type {string} */ collectionName) {
//     return Db.getCollection(collectionName, this.databaseName)
//   }

//   getDocument(/** @type {string} */ documentName) {
//     return Db.getDocument(documentName, this.collectionName, this.databaseName)
//   }

//   doGetById() {
//     return this.getDocument(this.documentName).then(
//       value => ({
//         data: {
//           [`${value._key}`]: Object.fromEntries(Object.entries(value).filter(
//             ([k]) => !['_id', '_key'].includes(k)
//           ))
//         }
//       })
//     )
//   }

// }