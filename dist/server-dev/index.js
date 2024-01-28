'use strict';

var sicinfoRouter = require('sicinfo-router');

/**
 * @author moreira
 */


/** @type {() => string[]} */ const url = sicinfoRouter._get();

class index extends sicinfoRouter.Router {
  get dirName() { return __dirname }
  get url() { return url.call(this, () => super.url.slice(1)) }
}

console.log(__filename, 'ola');

module.exports = index;
