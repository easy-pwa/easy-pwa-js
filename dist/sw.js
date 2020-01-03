/*! For license information please see sw.js.LICENSE */
!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./src/ts/service-worker-base.ts")}({"./src/ts/service-worker-base.ts":function(module,exports,__webpack_require__){"use strict";eval('\n/* eslint-env serviceworker */\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar ServiceWorkerManager_1 = __webpack_require__(/*! ./sw/ServiceWorkerManager */ "./src/ts/sw/ServiceWorkerManager.ts"); // eslint-disable-next-line\n\n\nself.EasyPwaSW = new ServiceWorkerManager_1.default();\n\n//# sourceURL=webpack:///./src/ts/service-worker-base.ts?')},"./src/ts/sw/Plugins/SubstitutionPage.ts":function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar SubstitutionPage =\n/** @class */\nfunction () {\n  function SubstitutionPage() {}\n\n  SubstitutionPage.prototype.run = function (cacheKey, substitutionFile) {\n    this.cacheKey = cacheKey;\n    this.substitutionFile = substitutionFile;\n    self.addEventListener('install', this.onInstalled);\n    self.addEventListener('fetch', this.onFetched);\n  };\n\n  SubstitutionPage.prototype.onInstalled = function (event) {\n    var _this = this;\n\n    event.waitUntil(caches.open(this.cacheKey).then(function (cache) {\n      return cache.addAll([_this.substitutionFile]);\n    }));\n  };\n\n  SubstitutionPage.prototype.onFetched = function (event) {\n    var _this = this;\n\n    event.respondWith(fetch(event.request).catch(function () {\n      return caches.match(_this.substitutionFile);\n    }));\n  };\n\n  return SubstitutionPage;\n}();\n\nexports.default = SubstitutionPage;\n\n//# sourceURL=webpack:///./src/ts/sw/Plugins/SubstitutionPage.ts?")},"./src/ts/sw/ServiceWorkerManager.ts":function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar SubstitutionPage_1 = __webpack_require__(/*! ./Plugins/SubstitutionPage */ \"./src/ts/sw/Plugins/SubstitutionPage.ts\");\n\nvar ServiceWorkerManager =\n/** @class */\nfunction () {\n  function ServiceWorkerManager() {\n    this.initSkipWaiting();\n  }\n\n  ServiceWorkerManager.prototype.initSkipWaiting = function () {\n    self.addEventListener('message', function (messageEvent) {\n      if (messageEvent.data === 'skipWaiting') {\n        skipWaiting();\n      }\n    });\n  };\n\n  ServiceWorkerManager.prototype.pageSubstitutionPlugin = function () {\n    return new SubstitutionPage_1.default();\n  };\n\n  return ServiceWorkerManager;\n}();\n\nexports.default = ServiceWorkerManager;\n\n//# sourceURL=webpack:///./src/ts/sw/ServiceWorkerManager.ts?")}});