!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);self.EasyPwaSW=new i.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),r=function(){function t(){this.initSkipWaiting()}return t.prototype.initSkipWaiting=function(){self.addEventListener("message",(function(t){"skipWaiting"===t.data&&skipWaiting()}))},t.prototype.pageSubstitutionPlugin=function(){return new i.default},t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){}return t.prototype.run=function(t,e){this.cacheKey=t,this.substitutionFile=e,self.addEventListener("install",this.onInstalled.bind(this)),self.addEventListener("fetch",this.onFetched.bind(this))},t.prototype.onInstalled=function(t){var e=this;t.waitUntil(caches.open(this.cacheKey).then((function(t){return t.add(e.substitutionFile)})))},t.prototype.onFetched=function(t){var e=this;t.respondWith(fetch(t.request).catch((function(){return caches.match(e.substitutionFile)})))},t}();e.default=i}]);