'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const sicinfoRouter = require('sicinfo-router');
const arangojs = require('arangojs');

/**
 * 
 * https://arangodb.github.io/arangojs/8.6.0/classes/database.Database.html
 * 
 * https://github.com/arangodb/arangojs
 * https://arangodb.github.io/arangojs/latest/modules/_index_.html
 * 
 * https://arangodb.github.io/arangojs/latest/classes/_database_.database.html
 * 
 * https://arangodb.github.io/arangojs/latest/
 * 
 * 
 */


const {
  ARANGODB_URL: url,
  ARANGODB_USER: username,
  ARANGODB_PASS: password,
  NODE_ENV
} = process.env;

const _system = new arangojs.Database({
  url, auth: { username, password }
});

class Db {

  static getDatabase(/** @type {string} */ databaseName) {
    return (_db => _db.exists().then(
      exist => (console.log('_db.name', _db.name), exist) ? _db : _system.createDatabase(_db.name, {
        users: [{ username: databaseName, passwd: databaseName, active: true }]
      })
    ))(_system.database((console.log('databaseName', `cms_${databaseName}_${NODE_ENV}`), `cms_${databaseName}_${NODE_ENV}`)))
  }

  /**
   * @arg {string[]} args
   * @returns {Promise<ArangoCollection>}
   */
  static getCollection(...[collectionName, databaseName]) {
    return this.getDatabase(databaseName).then(_db => (_col => _col.exists().then(
      exist => exist ? _col : _db.createCollection(_col.name)
    ))(_db.collection(collectionName)))
  }

}



// 'use strict'

// const { Database } = require('arangojs');

// const { 
//   ARANGODB_USER: username, 
//   ARANGODB_PASS: password, 
//   NODE_ENV 
// } = process.env;

// const _system = new Database({
//   auth: { username, password }
// });

// module.exports = class {

//   /** @typedef {import('arangojs/collection').DocumentCollection} ArangoCollection */
//   /** @typedef {import('arangojs/documents').Document} ArangoDocument */

//   /**
//    * @param {string} databaseName 
//    * @returns {Promise<Database>}
//    */
//   static getDatabase(databaseName) {
//     return (_db => _db.exists().then(
//       exist => exist ? _db : _system.createDatabase(_db.name, {
//         users: [{ username: databaseName, passwd: databaseName, active: true }]
//       })
//     ))(_system.database(`cms_${databaseName}_${NODE_ENV}`))
//   }

//   /**
//    * @arg {string[]} arg
//    * @returns {Promise<ArangoCollection>}
//    */
//   static getCollection(...[collectionName, databaseName]) {
//     return this.getDatabase(databaseName).then(_db => (_col => _col.exists().then(
//       exist => exist ? _col : _db.createCollection(_col.name)
//     ))(_db.collection(collectionName)))
//   }

//   /**
//    * @arg {any} arg
//    * @returns {Promise<ArangoDocument>}
//    */
//   static getDocument(...[documentName, collectionName, databaseName]) {
//     return this.getCollection(collectionName, databaseName).then(
//       _col => _col.document(documentName).catch(
//         err => ({ message: `[${documentName}] document not found!` })
//       )
//     )
//   } 

// }

/**
 * cms
 * 
 */


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
};

// /** @type {WeakMap<any,Router>} */
// const _router = new WeakMap();

class service extends sicinfoRouter.Service {

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

/**
 * cms
 *  @author moreira
 */


class index extends sicinfoRouter.Router {

  get Db() {
    return Db;
  }

  get database() {
    return Db.getDatabase(this.appName)
  }

  /**  @override */
  get url() {   
    return super.url.slice(1);
  }

  /** @override */
  get dirName() { 
    return __dirname 
  }

}

exports.Service = service;
exports.default = index;
