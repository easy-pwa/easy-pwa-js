import '@babel/polyfill';

import '../../node_modules/pwacompat/pwacompat.min.js';

import PushManager from './class/PushManager';
import PwaManager from './class/PwaManager';
import HomeScreenManager from './class/HomeScreenManager';

import '../css/base.scss';

const Pwa: PwaManager = new PwaManager(new HomeScreenManager(), new PushManager());

if (typeof exports === 'object') {
  module.exports = Pwa;
} else {
  /* eslint-disable */
  (window as any).PwaManager = Pwa;
}
