!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1);self.EasyPwaSW=new i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=class{constructor(){this.initSkipWaiting()}initSkipWaiting(){self.addEventListener("message",e=>{"skipWaiting"===e.data&&skipWaiting()})}pageSubstitutionPlugin(){return new i.default}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{run(e,t){this.cacheKey=e,this.substitutionFile=t,self.addEventListener("install",this.onInstalled.bind(this)),self.addEventListener("fetch",this.onFetched.bind(this))}onInstalled(e){e.waitUntil(caches.open(this.cacheKey).then(e=>e.add(this.substitutionFile)))}onFetched(e){e.respondWith(fetch(e.request).catch(()=>caches.match(this.substitutionFile)))}}}]);