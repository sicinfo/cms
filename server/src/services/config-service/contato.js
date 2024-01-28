/**
 * cms - config/contato
 */

export default class {

  /** @this {import('./index')} */
  static doPut() {
    return this.body.then((/** @type {any} */ data) => {
      console.log('>', this.databaseName);
      return { data }
    })
  }

}