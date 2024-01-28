'use strict';

require('http');
var sicinfoRouter = require('sicinfo-router');

/**
 * @author moreira
 */


class index extends sicinfoRouter.Router {

  /** @override */
  get url() { return super.url.split(1) }
  
  /** @override */
  get dirName() { return __dirname }
  
  
}

module.exports = index;
