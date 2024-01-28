/**
 * cms - config
 */

export default class {

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