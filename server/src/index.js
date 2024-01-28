/**
 * cms
 *  @author moreira
 */

import { Router } from 'sicinfo-router';

import { default as Db } from './arangodb';
import { default as Service } from './service';

export default class extends Router {

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

export { Service }