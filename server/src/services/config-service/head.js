/**
 * cms - config
 */

import Service from "./index";

export default class {

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