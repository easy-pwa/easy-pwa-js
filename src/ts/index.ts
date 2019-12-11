import '@babel/polyfill';

import {pwaManager} from "./service";
import '../css/base.scss';

if (document.head.querySelector('link[rel="manifest"]')) {
  require('../../node_modules/pwacompat/pwacompat.min.js');
}

if (typeof exports === 'object') {
  module.exports = pwaManager;
} else {
  /* eslint-disable */
  (window as any).EasyPwaManager = pwaManager;
}
