'use strict';

const sicinfoCms = require('sicinfo-cms');

/**
 * cms - config
 */


class Head {

  static doGetById(/** @type {ArangoCollection} */ config) {
    return Promise.resolve({
      data: {
        head: {
          title: "this.databaseName"
        }
      }
    })
  }

  /** 
   * @typedef {import("arangojs/documents").Document<any>} Document
   * @arg {Promise<Document>} config
   * @this {Service} 
   */
  static doGetByQuery(config) {
    console.log('passei.', __filename);
    return this.collection.then(config => config.document('head').then(head => ({data: { head }})))
  }

}

/**
 * cms - config
 */

class Login {

  /** @this {*} */
  static doGetById() {
    return Promise.resolve({
      data: {
        head: {
          title: this.databaseName
        }
      }
    })
  }

  /** @this {*} */
  static doGetByQuery() {
    // return new Promise(resolve => {

      // setTimeout(() => {

        // resolve({
          return Promise.resolve({data: {
            head: {
              title: this.router.appName.toUpperCase()
            }
          }})
        // })

      // }, 2000);

    // })
  }

  /** @this {*} */
  static doPost() {
    return this.body.then(data => {
      return { data }
    })
  }


}

/**
 * cms - config/contato
 */

class Contato {

  /** @this {import('./index')} */
  static doPut() {
    return this.body.then((/** @type {any} */ data) => {
      console.log('>', this.databaseName);
      return { data }
    })
  }

}

/**
 * config.srevice,
 */


class index extends sicinfoCms.Service {

  // constructor(/** @type {any} */ arg) {
  //   super(arg)
  // }


  /** @override */
  get subs() {
    return {
      head: Head,
      login: Login,
      contato: Contato
    }
  }

}

module.exports = index;
