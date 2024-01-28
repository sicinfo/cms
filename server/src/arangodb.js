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

import { Database } from "arangojs";

const {
  ARANGODB_URL: url,
  ARANGODB_USER: username,
  ARANGODB_PASS: password,
  NODE_ENV
} = process.env;

const _system = new Database({
  url, auth: { username, password }
});

export default class {

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