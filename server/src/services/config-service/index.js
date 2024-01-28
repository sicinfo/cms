/**
 * config.srevice,
 */

import { Service } from 'sicinfo-cms';

import Head from './head';
import Login from './login';
import Contato from './contato';

export default class extends Service {

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
