!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=333)}({0:function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",(function(){return o})),r.d(t,"__assign",(function(){return i})),r.d(t,"__rest",(function(){return a})),r.d(t,"__decorate",(function(){return s})),r.d(t,"__param",(function(){return c})),r.d(t,"__metadata",(function(){return u})),r.d(t,"__awaiter",(function(){return f})),r.d(t,"__generator",(function(){return h})),r.d(t,"__exportStar",(function(){return l})),r.d(t,"__values",(function(){return p})),r.d(t,"__read",(function(){return d})),r.d(t,"__spread",(function(){return b})),r.d(t,"__spreadArrays",(function(){return v})),r.d(t,"__await",(function(){return y})),r.d(t,"__asyncGenerator",(function(){return g})),r.d(t,"__asyncDelegator",(function(){return _})),r.d(t,"__asyncValues",(function(){return w})),r.d(t,"__makeTemplateObject",(function(){return m})),r.d(t,"__importStar",(function(){return S})),r.d(t,"__importDefault",(function(){return k}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function s(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function c(e,t){return function(r,n){t(r,n,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new r((function(t){t(e.value)})).then(a,s)}c((n=n.apply(e,t||[])).next())}))}function h(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function l(e,t){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}function p(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}function d(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]));return e}function v(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function g(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||s(e,t)}))})}function s(e,t){try{(r=o[e](t)).value instanceof y?Promise.resolve(r.value.v).then(c,u):f(i[0][2],r)}catch(e){f(i[0][3],e)}var r}function c(e){s("next",e)}function u(e){s("throw",e)}function f(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function _(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:y(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=p(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function m(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function k(e){return e&&e.__esModule?e:{default:e}}},28:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw a(t)},a=function(e){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):55296==(64512&o)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++n)),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],o=0;o<e.length;o+=3){var i=e[o],a=o+1<e.length,s=a?e[o+1]:0,c=o+2<e.length,u=c?e[o+2]:0,f=i>>2,h=(3&i)<<4|s>>4,l=(15&s)<<2|u>>6,p=63&u;c||(p=64,a||(l=64)),n.push(r[f],r[h],r[l],r[p])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){var i=e[r++];t[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){var a=((7&o)<<18|(63&(i=e[r++]))<<12|(63&(s=e[r++]))<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{i=e[r++];var s=e[r++];t[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],o=0;o<e.length;){var i=r[e.charAt(o++)],a=o<e.length?r[e.charAt(o)]:0,s=++o<e.length?r[e.charAt(o)]:64,c=++o<e.length?r[e.charAt(o)]:64;if(++o,null==i||null==a||null==s||null==c)throw Error();var u=i<<2|a>>4;if(n.push(u),64!==s){var f=a<<4&240|s>>2;if(n.push(f),64!==c){var h=s<<6&192|c;n.push(h)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){try{return c.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&(e[r]=f(e[r],t[r]));return e}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var h=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,r){e.resolve=t,e.reject=r}))}return e.prototype.wrapCallback=function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var p="FirebaseError",d=function(e){function t(r,n){var o=e.call(this,n)||this;return o.code=r,o.name=p,Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,b.prototype.create),o}return n.__extends(t,e),t}(Error),b=function(){function e(e,t,r){this.service=e,this.serviceName=t,this.errors=r}return e.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=t[0]||{},o=this.service+"/"+e,i=this.errors[e],a=i?v(i,n):"Error",s=this.serviceName+": "+a+" ("+o+").",c=new d(o,s),u=0,f=Object.keys(n);u<f.length;u++){var h=f[u];"_"!==h.slice(-1)&&(h in c&&console.warn('Overwriting FirebaseError base field "'+h+'" can cause unexpected behavior.'),c[h]=n[h])}return c},e}();function v(e,t){return e.replace(y,(function(e,r){var n=t[r];return null!=n?n.toString():"<"+r+"?>"}))}var y=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e){return JSON.parse(e)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _=function(e){var t={},r={},n={},o="";try{var i=e.split(".");t=g(u(i[0])||""),r=g(u(i[1])||""),o=i[2],n=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:n,signature:o}};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var w=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var r=this.W_;if("string"==typeof e)for(var n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(n=16;n<80;n++){var o=r[n-3]^r[n-8]^r[n-14]^r[n-16];r[n]=4294967295&(o<<1|o>>>31)}var i,a,s=this.chain_[0],c=this.chain_[1],u=this.chain_[2],f=this.chain_[3],h=this.chain_[4];for(n=0;n<80;n++){n<40?n<20?(i=f^c&(u^f),a=1518500249):(i=c^u^f,a=1859775393):n<60?(i=c&u|f&(c|u),a=2400959708):(i=c^u^f,a=3395469782);o=(s<<5|s>>>27)+i+h+a+r[n]&4294967295;h=f,f=u,u=4294967295&(c<<30|c>>>2),c=s,s=o}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=0,o=this.buf_,i=this.inbuf_;n<t;){if(0===i)for(;n<=r;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(o[i]=e.charCodeAt(n),++n,++i===this.blockSize){this.compress_(o),i=0;break}}else for(;n<t;)if(o[i]=e[n],++n,++i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);var n=0;for(r=0;r<5;r++)for(var o=24;o>=0;o-=8)e[n]=this.chain_[r]>>o&255,++n;return e},e}();var m=function(){function e(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(r)})).catch((function(e){r.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,r){var n,o=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;for(var r=0,n=t;r<n.length;r++){var o=n[r];if(o in e&&"function"==typeof e[o])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=S),void 0===n.error&&(n.error=S),void 0===n.complete&&(n.complete=S);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(e){}})),this.observers.push(n),i},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function S(){}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t,r){var n="";switch(t){case 1:n=r?"first":"First";break;case 2:n=r?"second":"Second";break;case 3:n=r?"third":"Third";break;case 4:n=r?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var o=e+" failed: ";return o+=n+" argument "}t.CONSTANTS=o,t.Deferred=h,t.ErrorFactory=b,t.FirebaseError=d,t.Sha1=w,t.assert=i,t.assertionError=a,t.async=function(e,t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];Promise.resolve(!0).then((function(){e.apply(void 0,r)})).catch((function(e){t&&t(e)}))}},t.base64=c,t.base64Decode=u,t.base64Encode=function(e){var t=s(e);return c.encodeByteArray(t,!0)},t.contains=
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.createSubscribe=function(e,t){var r=new m(e,t);return r.subscribe.bind(r)},t.decode=_,t.deepCopy=
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return f(void 0,e)},t.deepExtend=f,t.errorPrefix=k,t.getUA=l,t.isAdmin=function(e){var t=_(e).claims;return"object"==typeof t&&!0===t.admin},t.isBrowser=function(){return"object"==typeof self&&self.self===self},t.isEmpty=function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},t.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())},t.isNode=function(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}},t.isNodeSdk=function(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN},t.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},t.isValidFormat=function(e){var t=_(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},t.isValidTimestamp=function(e){var t=_(e).claims,r=Math.floor((new Date).getTime()/1e3),n=0,o=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?n=t.nbf:t.hasOwnProperty("iat")&&(n=t.iat),o=t.hasOwnProperty("exp")?t.exp:n+86400),!!r&&!!n&&!!o&&r>=n&&r<=o},t.issuedAtTime=function(e){var t=_(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},t.jsonEval=g,t.map=function(e,t,r){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=t.call(r,e[o],o,e));return n}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,t.querystring=function(e){for(var t=[],r=function(e,r){Array.isArray(r)?r.forEach((function(r){t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))},n=0,o=Object.entries(e);n<o.length;n++){var i=o[n];r(i[0],i[1])}return t.length?"&"+t.join("&"):""},t.querystringDecode=function(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=e.split("=");t[r[0]]=r[1]}})),t},t.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},t.stringLength=function(e){for(var t=0,r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,r++):t+=3}return t},t.stringToByteArray=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);if(o>=55296&&o<=56319){var a=o-55296;n++,i(n<e.length,"Surrogate pair missing trail surrogate."),o=65536+(a<<10)+(e.charCodeAt(n)-56320)}o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):o<65536?(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},t.stringify=function(e){return JSON.stringify(e)},t.validateArgCount=function(e,t,r,n){var o;if(n<t?o="at least "+t:n>r&&(o=0===r?"none":"no more than "+r),o)throw new Error(e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+o+".")},t.validateCallback=function(e,t,r,n){if((!n||r)&&"function"!=typeof r)throw new Error(k(e,t,n)+"must be a valid function.")},t.validateContextObject=function(e,t,r,n){if((!n||r)&&("object"!=typeof r||null===r))throw new Error(k(e,t,n)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,t.validateNamespace=function(e,t,r,n){if((!n||r)&&"string"!=typeof r)throw new Error(k(e,t,n)+"must be a valid firebase namespace.")}}).call(this,r(49))},31:function(e,t,r){"use strict";var n,o=(n=r(42))&&"object"==typeof n&&"default"in n?n.default:n;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e.exports=o},333:function(e,t,r){"use strict";r.r(t);var n=r(31),o=(r(98),location.href.match(/messagingSenderId=([\w]+)/));null!==o&&(n.initializeApp({messagingSenderId:o[1]}),n.messaging()),self.addEventListener("message",(function(e){"skipWaiting"===e.data&&skipWaiting()}))},42:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(0),i=r(96),a=r(97),s=((n={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",n["bad-app-name"]="Illegal App name: '{$appName}",n["duplicate-app"]="Firebase App named '{$appName}' already exists",n["app-deleted"]="Firebase App named '{$appName}' already deleted",n["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",n),c=new i.ErrorFactory("app","Firebase",s),u="[DEFAULT]",f=[],h=function(){function e(e,t,r){this.firebase_=r,this.isDeleted_=!1,this.services_={},this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=i.deepCopy(e),this.INTERNAL={getUid:function(){return null},getToken:function(){return Promise.resolve(null)},addAuthTokenListener:function(e){f.push(e),setTimeout((function(){return e(null)}),0)},removeAuthTokenListener:function(e){f=f.filter((function(t){return t!==e}))}}}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!0,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){e.firebase_.INTERNAL.removeApp(e.name_);for(var t=[],r=0,n=Object.keys(e.services_);r<n.length;r++)for(var o=n[r],i=0,a=Object.keys(e.services_[o]);i<a.length;i++){var s=a[i];t.push(e.services_[o][s])}return Promise.all(t.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))})).then((function(){e.isDeleted_=!0,e.services_={}}))},e.prototype._getService=function(e,t){if(void 0===t&&(t=u),this.checkDestroyed_(),this.services_[e]||(this.services_[e]={}),!this.services_[e][t]){var r=t!==u?t:void 0,n=this.firebase_.INTERNAL.factories[e](this,this.extendApp.bind(this),r);this.services_[e][t]=n}return this.services_[e][t]},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=u),this.services_[e]&&this.services_[e][t]&&delete this.services_[e][t]},e.prototype.extendApp=function(e){var t=this;i.deepExtend(this,e),e.INTERNAL&&e.INTERNAL.addAuthTokenListener&&(f.forEach((function(e){t.INTERNAL.addAuthTokenListener(e)})),f=[])},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw c.create("app-deleted",{appName:this.name_})},e}();h.prototype.name&&h.prototype.options||h.prototype.delete||console.log("dc");var l="6.6.2",p=new a.Logger("@firebase/app");
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if(i.isBrowser()&&void 0!==self.firebase){p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var d=self.firebase.SDK_VERSION;d&&d.indexOf("LITE")>=0&&p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var b=
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){var t=
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){var t={},r={},n={},o={__esModule:!0,initializeApp:function(r,n){void 0===n&&(n={});if("object"!=typeof n||null===n){n={name:n}}var a=n;void 0===a.name&&(a.name=u);var s=a.name;if("string"!=typeof s||!s)throw c.create("bad-app-name",{appName:String(s)});if(i.contains(t,s))throw c.create("duplicate-app",{appName:s});var h=new e(r,a,o);return t[s]=h,f(h,"create"),h},app:a,apps:null,SDK_VERSION:l,INTERNAL:{registerService:function(t,u,f,h,l){void 0===l&&(l=!1);if(r[t])return p.debug("There were multiple attempts to register service "+t+"."),o[t];r[t]=u,h&&(n[t]=h,s().forEach((function(e){h("create",e)})));function d(e){if(void 0===e&&(e=a()),"function"!=typeof e[t])throw c.create("invalid-app-argument",{appName:t});return e[t]()}void 0!==f&&i.deepExtend(d,f);return o[t]=d,e.prototype[t]=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=this._getService.bind(this,t);return n.apply(this,l?e:[])},d},removeApp:function(e){f(t[e],"delete"),delete t[e]},factories:r,useAsService:h}};function a(e){if(e=e||u,!i.contains(t,e))throw c.create("no-app",{appName:e});return t[e]}function s(){return Object.keys(t).map((function(e){return t[e]}))}function f(e,t){for(var o=0,i=Object.keys(r);o<i.length;o++){var a=h(e,i[o]);if(null===a)return;n[a]&&n[a](t,e)}}function h(e,t){return"serverAuth"===t?null:t}return(o.default=o,Object.defineProperty(o,"apps",{get:s}),a.App=e,o)}(h);return t.INTERNAL=o.__assign({},t.INTERNAL,{createFirebaseNamespace:e,extendNamespace:function(e){i.deepExtend(t,e)},createSubscribe:i.createSubscribe,ErrorFactory:i.ErrorFactory,deepExtend:i.deepExtend}),t}(),v=b.initializeApp;b.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i.isNode()&&p.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),v.apply(void 0,e)};var y=b;t.default=y,t.firebase=y},49:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},96:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw a(t)},a=function(e){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):55296==(64512&o)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++n)),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],o=0;o<e.length;o+=3){var i=e[o],a=o+1<e.length,s=a?e[o+1]:0,c=o+2<e.length,u=c?e[o+2]:0,f=i>>2,h=(3&i)<<4|s>>4,l=(15&s)<<2|u>>6,p=63&u;c||(p=64,a||(l=64)),n.push(r[f],r[h],r[l],r[p])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){var i=e[r++];t[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){var a=((7&o)<<18|(63&(i=e[r++]))<<12|(63&(s=e[r++]))<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{i=e[r++];var s=e[r++];t[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],o=0;o<e.length;){var i=r[e.charAt(o++)],a=o<e.length?r[e.charAt(o)]:0,s=++o<e.length?r[e.charAt(o)]:64,c=++o<e.length?r[e.charAt(o)]:64;if(++o,null==i||null==a||null==s||null==c)throw Error();var u=i<<2|a>>4;if(n.push(u),64!==s){var f=a<<4&240|s>>2;if(n.push(f),64!==c){var h=s<<6&192|c;n.push(h)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){try{return c.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&(e[r]=f(e[r],t[r]));return e}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var h=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,r){e.resolve=t,e.reject=r}))}return e.prototype.wrapCallback=function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var p="FirebaseError",d=function(e){function t(r,n){var o=e.call(this,n)||this;return o.code=r,o.name=p,Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,b.prototype.create),o}return n.__extends(t,e),t}(Error),b=function(){function e(e,t,r){this.service=e,this.serviceName=t,this.errors=r}return e.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=t[0]||{},o=this.service+"/"+e,i=this.errors[e],a=i?v(i,n):"Error",s=this.serviceName+": "+a+" ("+o+").",c=new d(o,s),u=0,f=Object.keys(n);u<f.length;u++){var h=f[u];"_"!==h.slice(-1)&&(h in c&&console.warn('Overwriting FirebaseError base field "'+h+'" can cause unexpected behavior.'),c[h]=n[h])}return c},e}();function v(e,t){return e.replace(y,(function(e,r){var n=t[r];return null!=n?n.toString():"<"+r+"?>"}))}var y=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e){return JSON.parse(e)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _=function(e){var t={},r={},n={},o="";try{var i=e.split(".");t=g(u(i[0])||""),r=g(u(i[1])||""),o=i[2],n=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:n,signature:o}};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var w=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var r=this.W_;if("string"==typeof e)for(var n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(n=16;n<80;n++){var o=r[n-3]^r[n-8]^r[n-14]^r[n-16];r[n]=4294967295&(o<<1|o>>>31)}var i,a,s=this.chain_[0],c=this.chain_[1],u=this.chain_[2],f=this.chain_[3],h=this.chain_[4];for(n=0;n<80;n++){n<40?n<20?(i=f^c&(u^f),a=1518500249):(i=c^u^f,a=1859775393):n<60?(i=c&u|f&(c|u),a=2400959708):(i=c^u^f,a=3395469782);o=(s<<5|s>>>27)+i+h+a+r[n]&4294967295;h=f,f=u,u=4294967295&(c<<30|c>>>2),c=s,s=o}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=0,o=this.buf_,i=this.inbuf_;n<t;){if(0===i)for(;n<=r;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(o[i]=e.charCodeAt(n),++n,++i===this.blockSize){this.compress_(o),i=0;break}}else for(;n<t;)if(o[i]=e[n],++n,++i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);var n=0;for(r=0;r<5;r++)for(var o=24;o>=0;o-=8)e[n]=this.chain_[r]>>o&255,++n;return e},e}();var m=function(){function e(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(r)})).catch((function(e){r.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,r){var n,o=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;for(var r=0,n=t;r<n.length;r++){var o=n[r];if(o in e&&"function"==typeof e[o])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=S),void 0===n.error&&(n.error=S),void 0===n.complete&&(n.complete=S);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(e){}})),this.observers.push(n),i},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function S(){}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t,r){var n="";switch(t){case 1:n=r?"first":"First";break;case 2:n=r?"second":"Second";break;case 3:n=r?"third":"Third";break;case 4:n=r?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var o=e+" failed: ";return o+=n+" argument "}t.CONSTANTS=o,t.Deferred=h,t.ErrorFactory=b,t.FirebaseError=d,t.Sha1=w,t.assert=i,t.assertionError=a,t.async=function(e,t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];Promise.resolve(!0).then((function(){e.apply(void 0,r)})).catch((function(e){t&&t(e)}))}},t.base64=c,t.base64Decode=u,t.base64Encode=function(e){var t=s(e);return c.encodeByteArray(t,!0)},t.contains=
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.createSubscribe=function(e,t){var r=new m(e,t);return r.subscribe.bind(r)},t.decode=_,t.deepCopy=
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return f(void 0,e)},t.deepExtend=f,t.errorPrefix=k,t.getUA=l,t.isAdmin=function(e){var t=_(e).claims;return"object"==typeof t&&!0===t.admin},t.isBrowser=function(){return"object"==typeof self&&self.self===self},t.isEmpty=function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},t.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())},t.isNode=function(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}},t.isNodeSdk=function(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN},t.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},t.isValidFormat=function(e){var t=_(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},t.isValidTimestamp=function(e){var t=_(e).claims,r=Math.floor((new Date).getTime()/1e3),n=0,o=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?n=t.nbf:t.hasOwnProperty("iat")&&(n=t.iat),o=t.hasOwnProperty("exp")?t.exp:n+86400),!!r&&!!n&&!!o&&r>=n&&r<=o},t.issuedAtTime=function(e){var t=_(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},t.jsonEval=g,t.map=function(e,t,r){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=t.call(r,e[o],o,e));return n}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,t.querystring=function(e){for(var t=[],r=function(e,r){Array.isArray(r)?r.forEach((function(r){t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))},n=0,o=Object.entries(e);n<o.length;n++){var i=o[n];r(i[0],i[1])}return t.length?"&"+t.join("&"):""},t.querystringDecode=function(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=e.split("=");t[r[0]]=r[1]}})),t},t.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},t.stringLength=function(e){for(var t=0,r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,r++):t+=3}return t},t.stringToByteArray=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);if(o>=55296&&o<=56319){var a=o-55296;n++,i(n<e.length,"Surrogate pair missing trail surrogate."),o=65536+(a<<10)+(e.charCodeAt(n)-56320)}o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):o<65536?(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},t.stringify=function(e){return JSON.stringify(e)},t.validateArgCount=function(e,t,r,n){var o;if(n<t?o="at least "+t:n>r&&(o=0===r?"none":"no more than "+r),o)throw new Error(e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+o+".")},t.validateCallback=function(e,t,r,n){if((!n||r)&&"function"!=typeof r)throw new Error(k(e,t,n)+"must be a valid function.")},t.validateContextObject=function(e,t,r,n){if((!n||r)&&("object"!=typeof r||null===r))throw new Error(k(e,t,n)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,t.validateNamespace=function(e,t,r,n){if((!n||r)&&"string"!=typeof r)throw new Error(k(e,t,n)+"must be a valid firebase namespace.")}}).call(this,r(49))},97:function(e,t,r){"use strict";r.r(t),r.d(t,"LogLevel",(function(){return n})),r.d(t,"Logger",(function(){return s})),r.d(t,"setLogLevel",(function(){return c}));
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var n,o=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(n||(n={}));var i=n.INFO,a=function(e,t){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];if(!(t<e.logLevel)){var i=(new Date).toISOString();switch(t){case n.DEBUG:case n.VERBOSE:console.log.apply(console,["["+i+"]  "+e.name+":"].concat(r));break;case n.INFO:console.info.apply(console,["["+i+"]  "+e.name+":"].concat(r));break;case n.WARN:console.warn.apply(console,["["+i+"]  "+e.name+":"].concat(r));break;case n.ERROR:console.error.apply(console,["["+i+"]  "+e.name+":"].concat(r));break;default:throw new Error("Attempted to log a message with an invalid logType (value: "+t+")")}}},s=function(){function e(e){this.name=e,this._logLevel=i,this._logHandler=a,o.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in n))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!0,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,n.DEBUG].concat(e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,n.VERBOSE].concat(e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,n.INFO].concat(e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,n.WARN].concat(e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,n.ERROR].concat(e))},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(e){o.forEach((function(t){t.logLevel=e}))}},98:function(e,t,r){"use strict";var n,o,i,a=r(42),s=r.n(a),c=r(0),u=r(28),f=((n={})["only-available-in-window"]="This method is available in a Window context.",n["only-available-in-sw"]="This method is available in a service worker context.",n["should-be-overriden"]="This method should be overriden by extended classes.",n["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",n["permission-default"]="The required permissions were not granted and dismissed instead.",n["permission-blocked"]="The required permissions were not granted and blocked instead.",n["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",n["notifications-blocked"]="Notifications have been blocked.",n["failed-serviceworker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",n["sw-registration-expected"]="A service worker registration was the expected input.",n["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",n["invalid-saved-token"]="Unable to access details of the saved token.",n["sw-reg-redundant"]="The service worker being used for push was made redundant.",n["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",n["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",n["token-subscribe-no-push-set"]="FCM returned an invalid response when getting an FCM token.",n["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",n["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",n["token-update-no-token"]="FCM returned no token when updating the user to push.",n["use-sw-before-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",n["invalid-delete-token"]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",n["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",n["delete-scope-not-found"]="The deletion attempt for service worker scope could not be performed as the scope was not found.",n["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",n["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",n["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$errorInfo}",n["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",n["failed-to-delete-token"]="Unable to delete the currently saved token.",n["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",n["bad-scope"]="The service worker scope must be a string with at least one character.",n["bad-vapid-key"]="The public VAPID key is not a Uint8Array with 65 bytes.",n["bad-subscription"]="The subscription must be a valid PushSubscription.",n["bad-token"]="The FCM Token used for storage / lookup was not a valid token string.",n["bad-push-set"]="The FCM push set used for storage / lookup was not not a valid push set string.",n["failed-delete-vapid-key"]="The VAPID key could not be deleted.",n["invalid-public-vapid-key"]="The public VAPID key must be a string.",n["use-public-key-before-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",n["public-vapid-key-decryption-failed"]="The public VAPID key did not equal 65 bytes when decrypted.",n),h=new u.ErrorFactory("messaging","Messaging",f),l=new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110]),p="https://fcm.googleapis.com";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e,t){if(null==e||null==t)return!1;if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(var r=new DataView(e),n=new DataView(t),o=0;o<e.byteLength;o++)if(r.getUint8(o)!==n.getUint8(o))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e){return function(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,Object(c.__spread)(t)))}(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){e.TYPE_OF_MSG="firebase-messaging-msg-type",e.DATA="firebase-messaging-msg-data"}(o||(o={})),function(e){e.PUSH_MSG_RECEIVED="push-msg-received",e.NOTIFICATION_CLICKED="notification-clicked"}(i||(i={}));var v=function(){function e(){}return e.prototype.getToken=function(e,t,r){return Object(c.__awaiter)(this,void 0,void 0,(function(){var n,o,i,a,s,u,f,v,y;return Object(c.__generator)(this,(function(c){switch(c.label){case 0:n=b(t.getKey("p256dh")),o=b(t.getKey("auth")),i="authorized_entity="+e+"&endpoint="+t.endpoint+"&encryption_key="+n+"&encryption_auth="+o,d(r.buffer,l.buffer)||(a=b(r),i+="&application_pub_key="+a),(s=new Headers).append("Content-Type","application/x-www-form-urlencoded"),u={method:"POST",headers:s,body:i},c.label=1;case 1:return c.trys.push([1,4,,5]),[4,fetch(p+"/fcm/connect/subscribe",u)];case 2:return[4,c.sent().json()];case 3:return f=c.sent(),[3,5];case 4:throw v=c.sent(),h.create("token-subscribe-failed",{errorInfo:v});case 5:if(f.error)throw y=f.error.message,h.create("token-subscribe-failed",{errorInfo:y});if(!f.token)throw h.create("token-subscribe-no-token");if(!f.pushSet)throw h.create("token-subscribe-no-push-set");return[2,{token:f.token,pushSet:f.pushSet}]}}))}))},e.prototype.updateToken=function(e,t,r,n,o){return Object(c.__awaiter)(this,void 0,void 0,(function(){var i,a,s,u,f,v,y,g,_;return Object(c.__generator)(this,(function(c){switch(c.label){case 0:i=b(n.getKey("p256dh")),a=b(n.getKey("auth")),s="push_set="+r+"&token="+t+"&authorized_entity="+e+"&endpoint="+n.endpoint+"&encryption_key="+i+"&encryption_auth="+a,d(o.buffer,l.buffer)||(u=b(o),s+="&application_pub_key="+u),(f=new Headers).append("Content-Type","application/x-www-form-urlencoded"),v={method:"POST",headers:f,body:s},c.label=1;case 1:return c.trys.push([1,4,,5]),[4,fetch(p+"/fcm/connect/subscribe",v)];case 2:return[4,c.sent().json()];case 3:return y=c.sent(),[3,5];case 4:throw g=c.sent(),h.create("token-update-failed",{errorInfo:g});case 5:if(y.error)throw _=y.error.message,h.create("token-update-failed",{errorInfo:_});if(!y.token)throw h.create("token-update-no-token");return[2,y.token]}}))}))},e.prototype.deleteToken=function(e,t,r){return Object(c.__awaiter)(this,void 0,void 0,(function(){var n,o,i,a,s,u;return Object(c.__generator)(this,(function(c){switch(c.label){case 0:n="authorized_entity="+e+"&token="+t+"&pushSet="+r,(o=new Headers).append("Content-Type","application/x-www-form-urlencoded"),i={method:"POST",headers:o,body:n},c.label=1;case 1:return c.trys.push([1,4,,5]),[4,fetch(p+"/fcm/connect/unsubscribe",i)];case 2:return[4,c.sent().json()];case 3:if((a=c.sent()).error)throw s=a.error.message,h.create("token-unsubscribe-failed",{errorInfo:s});return[3,5];case 4:throw u=c.sent(),h.create("token-unsubscribe-failed",{errorInfo:u});case 5:return[2]}}))}))},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),n=new Uint8Array(r.length),o=0;o<r.length;++o)n[o]=r.charCodeAt(o);return n}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var g="undefined",_="fcm_token_object_Store";function w(){var e=indexedDB.open(g);e.onerror=function(e){},e.onsuccess=function(t){!function(e){if(e.objectStoreNames.contains(_)){var t=e.transaction(_).objectStore(_),r=new v,n=t.openCursor();n.onerror=function(e){console.warn("Unable to cleanup old IDB.",e)},n.onsuccess=function(){var t=n.result;if(t){var o=t.value;r.deleteToken(o.fcmSenderId,o.fcmToken,o.fcmPushSet),t.continue()}else e.close(),indexedDB.deleteDatabase(g)}}}(e.result)}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m=function(){function e(){this.dbPromise=null}return e.prototype.get=function(e){return this.createTransaction((function(t){return t.get(e)}))},e.prototype.getIndex=function(e,t){return this.createTransaction((function(r){return r.index(e).get(t)}))},e.prototype.put=function(e){return this.createTransaction((function(t){return t.put(e)}),"readwrite")},e.prototype.delete=function(e){return this.createTransaction((function(t){return t.delete(e)}),"readwrite")},e.prototype.closeDatabase=function(){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(e){switch(e.label){case 0:return this.dbPromise?[4,this.dbPromise]:[3,2];case 1:e.sent().close(),this.dbPromise=null,e.label=2;case 2:return[2]}}))}))},e.prototype.createTransaction=function(e,t){return void 0===t&&(t="readonly"),Object(c.__awaiter)(this,void 0,void 0,(function(){var r,n,o,i;return Object(c.__generator)(this,(function(a){switch(a.label){case 0:return[4,this.getDb()];case 1:return r=a.sent(),n=r.transaction(this.objectStoreName,t),o=n.objectStore(this.objectStoreName),[4,S(e(o))];case 2:return i=a.sent(),[2,new Promise((function(e,t){n.oncomplete=function(){e(i)},n.onerror=function(){t(n.error)}}))]}}))}))},e.prototype.getDb=function(){var e=this;return this.dbPromise||(this.dbPromise=new Promise((function(t,r){var n=indexedDB.open(e.dbName,e.dbVersion);n.onsuccess=function(){t(n.result)},n.onerror=function(){e.dbPromise=null,r(n.error)},n.onupgradeneeded=function(t){return e.onDbUpgrade(n,t)}}))),this.dbPromise},e}();function S(e){return new Promise((function(t,r){e.onsuccess=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dbName="fcm_token_details_db",t.dbVersion=3,t.objectStoreName="fcm_token_object_Store",t}return Object(c.__extends)(t,e),t.prototype.onDbUpgrade=function(e,t){var r=e.result;switch(t.oldVersion){case 0:(n=r.createObjectStore(this.objectStoreName,{keyPath:"swScope"})).createIndex("fcmSenderId","fcmSenderId",{unique:!1}),n.createIndex("fcmToken","fcmToken",{unique:!0});case 1:w();case 2:var n,o=(n=e.transaction.objectStore(this.objectStoreName)).openCursor();o.onsuccess=function(){var e=o.result;if(e){var t=e.value,r=Object(c.__assign)({},t);t.createTime||(r.createTime=Date.now()),"string"==typeof t.vapidKey&&(r.vapidKey=y(t.vapidKey)),"string"==typeof t.auth&&(r.auth=y(t.auth).buffer),"string"==typeof t.auth&&(r.p256dh=y(t.p256dh).buffer),e.update(r),e.continue()}}}},t.prototype.getTokenDetailsFromToken=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(t){if(!e)throw h.create("bad-token");return O({fcmToken:e}),[2,this.getIndex("fcmToken",e)]}))}))},t.prototype.getTokenDetailsFromSWScope=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(t){if(!e)throw h.create("bad-scope");return O({swScope:e}),[2,this.get(e)]}))}))},t.prototype.saveTokenDetails=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(t){if(!e.swScope)throw h.create("bad-scope");if(!e.vapidKey)throw h.create("bad-vapid-key");if(!e.endpoint||!e.auth||!e.p256dh)throw h.create("bad-subscription");if(!e.fcmSenderId)throw h.create("bad-sender-id");if(!e.fcmToken)throw h.create("bad-token");if(!e.fcmPushSet)throw h.create("bad-push-set");return O(e),[2,this.put(e)]}))}))},t.prototype.deleteToken=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t;return Object(c.__generator)(this,(function(r){switch(r.label){case 0:return"string"!=typeof e||0===e.length?[2,Promise.reject(h.create("invalid-delete-token"))]:[4,this.getTokenDetailsFromToken(e)];case 1:if(!(t=r.sent()))throw h.create("delete-token-not-found");return[4,this.delete(t.swScope)];case 2:return r.sent(),[2,t]}}))}))},t}(m);function O(e){if(e.fcmToken&&("string"!=typeof e.fcmToken||0===e.fcmToken.length))throw h.create("bad-token");if(e.swScope&&("string"!=typeof e.swScope||0===e.swScope.length))throw h.create("bad-scope");if(e.vapidKey&&(!(e.vapidKey instanceof Uint8Array)||65!==e.vapidKey.length))throw h.create("bad-vapid-key");if(e.endpoint&&("string"!=typeof e.endpoint||0===e.endpoint.length))throw h.create("bad-subscription");if(e.auth&&!(e.auth instanceof ArrayBuffer))throw h.create("bad-subscription");if(e.p256dh&&!(e.p256dh instanceof ArrayBuffer))throw h.create("bad-subscription");if(e.fcmSenderId&&("string"!=typeof e.fcmSenderId||0===e.fcmSenderId.length))throw h.create("bad-sender-id");if(e.fcmPushSet&&("string"!=typeof e.fcmPushSet||0===e.fcmPushSet.length))throw h.create("bad-push-set")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dbName="fcm_vapid_details_db",t.dbVersion=1,t.objectStoreName="fcm_vapid_object_Store",t}return Object(c.__extends)(t,e),t.prototype.onDbUpgrade=function(e){e.result.createObjectStore(this.objectStoreName,{keyPath:"swScope"})},t.prototype.getVapidFromSWScope=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t;return Object(c.__generator)(this,(function(r){switch(r.label){case 0:if("string"!=typeof e||0===e.length)throw h.create("bad-scope");return[4,this.get(e)];case 1:return[2,(t=r.sent())?t.vapidKey:void 0]}}))}))},t.prototype.saveVapidDetails=function(e,t){return Object(c.__awaiter)(this,void 0,void 0,(function(){var r;return Object(c.__generator)(this,(function(n){if("string"!=typeof e||0===e.length)throw h.create("bad-scope");if(null===t||65!==t.length)throw h.create("bad-vapid-key");return r={swScope:e,vapidKey:t},[2,this.put(r)]}))}))},t.prototype.deleteVapidDetails=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t;return Object(c.__generator)(this,(function(r){switch(r.label){case 0:return[4,this.getVapidFromSWScope(e)];case 1:if(!(t=r.sent()))throw h.create("delete-scope-not-found");return[4,this.delete(e)];case 2:return r.sent(),[2,t]}}))}))},t}(m),E="messagingSenderId",A=function(){function e(e){var t=this;if(!e.options[E]||"string"!=typeof e.options[E])throw h.create("bad-sender-id");this.messagingSenderId=e.options[E],this.tokenDetailsModel=new k,this.vapidDetailsModel=new T,this.iidModel=new v,this.app=e,this.INTERNAL={delete:function(){return t.delete()}}}return e.prototype.getToken=function(){return Object(c.__awaiter)(this,void 0,void 0,(function(){var e,t,r,n,o;return Object(c.__generator)(this,(function(i){switch(i.label){case 0:if("denied"===(e=this.getNotificationPermission_()))throw h.create("notifications-blocked");return"granted"!==e?[2,null]:[4,this.getSWRegistration_()];case 1:return t=i.sent(),[4,this.getPublicVapidKey_()];case 2:return r=i.sent(),[4,this.getPushSubscription(t,r)];case 3:return n=i.sent(),[4,this.tokenDetailsModel.getTokenDetailsFromSWScope(t.scope)];case 4:return(o=i.sent())?[2,this.manageExistingToken(t,n,r,o)]:[2,this.getNewToken(t,n,r)]}}))}))},e.prototype.manageExistingToken=function(e,t,r,n){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(o){switch(o.label){case 0:return function(e,t,r){if(!r.vapidKey||!d(t.buffer,r.vapidKey.buffer))return!1;var n=e.endpoint===r.endpoint,o=d(e.getKey("auth"),r.auth),i=d(e.getKey("p256dh"),r.p256dh);return n&&o&&i}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,r,n)?Date.now()<n.createTime+6048e5?[2,n.fcmToken]:[2,this.updateToken(e,t,r,n)]:[4,this.deleteTokenFromDB(n.fcmToken)];case 1:return o.sent(),[2,this.getNewToken(e,t,r)]}}))}))},e.prototype.updateToken=function(e,t,r,n){return Object(c.__awaiter)(this,void 0,void 0,(function(){var o,i,a;return Object(c.__generator)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,4,,6]),[4,this.iidModel.updateToken(this.messagingSenderId,n.fcmToken,n.fcmPushSet,t,r)];case 1:return o=s.sent(),i={swScope:e.scope,vapidKey:r,fcmSenderId:this.messagingSenderId,fcmToken:o,fcmPushSet:n.fcmPushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(i)];case 2:return s.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,r)];case 3:return s.sent(),[2,o];case 4:return a=s.sent(),[4,this.deleteToken(n.fcmToken)];case 5:throw s.sent(),a;case 6:return[2]}}))}))},e.prototype.getNewToken=function(e,t,r){return Object(c.__awaiter)(this,void 0,void 0,(function(){var n,o;return Object(c.__generator)(this,(function(i){switch(i.label){case 0:return[4,this.iidModel.getToken(this.messagingSenderId,t,r)];case 1:return n=i.sent(),o={swScope:e.scope,vapidKey:r,fcmSenderId:this.messagingSenderId,fcmToken:n.token,fcmPushSet:n.pushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(o)];case 2:return i.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,r)];case 3:return i.sent(),[2,n.token]}}))}))},e.prototype.deleteToken=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t,r;return Object(c.__generator)(this,(function(n){switch(n.label){case 0:return[4,this.deleteTokenFromDB(e)];case 1:return n.sent(),[4,this.getSWRegistration_()];case 2:return(t=n.sent())?[4,t.pushManager.getSubscription()]:[3,4];case 3:if(r=n.sent())return[2,r.unsubscribe()];n.label=4;case 4:return[2,!0]}}))}))},e.prototype.deleteTokenFromDB=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t;return Object(c.__generator)(this,(function(r){switch(r.label){case 0:return[4,this.tokenDetailsModel.deleteToken(e)];case 1:return t=r.sent(),[4,this.iidModel.deleteToken(t.fcmSenderId,t.fcmToken,t.fcmPushSet)];case 2:return r.sent(),[2]}}))}))},e.prototype.getPushSubscription=function(e,t){return e.pushManager.getSubscription().then((function(r){return r||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t})}))},e.prototype.requestPermission=function(){throw h.create("only-available-in-window")},e.prototype.useServiceWorker=function(e){throw h.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){throw h.create("only-available-in-window")},e.prototype.onMessage=function(e,t,r){throw h.create("only-available-in-window")},e.prototype.onTokenRefresh=function(e,t,r){throw h.create("only-available-in-window")},e.prototype.setBackgroundMessageHandler=function(e){throw h.create("only-available-in-sw")},e.prototype.delete=function(){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(e){switch(e.label){case 0:return[4,Promise.all([this.tokenDetailsModel.closeDatabase(),this.vapidDetailsModel.closeDatabase()])];case 1:return e.sent(),[2]}}))}))},e.prototype.getNotificationPermission_=function(){return Notification.permission},e.prototype.getTokenDetailsModel=function(){return this.tokenDetailsModel},e.prototype.getVapidDetailsModel=function(){return this.vapidDetailsModel},e.prototype.getIidModel=function(){return this.iidModel},e}();var j=function(e){function t(t){var r=e.call(this,t)||this;return r.bgMessageHandler=null,self.addEventListener("push",(function(e){r.onPush(e)})),self.addEventListener("pushsubscriptionchange",(function(e){r.onSubChange(e)})),self.addEventListener("notificationclick",(function(e){r.onNotificationClick(e)})),r}return Object(c.__extends)(t,e),t.prototype.onPush=function(e){e.waitUntil(this.onPush_(e))},t.prototype.onSubChange=function(e){e.waitUntil(this.onSubChange_(e))},t.prototype.onNotificationClick=function(e){e.waitUntil(this.onNotificationClick_(e))},t.prototype.onPush_=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t,r,n,o,i,a;return Object(c.__generator)(this,(function(s){switch(s.label){case 0:if(!e.data)return[2];try{t=e.data.json()}catch(e){return[2]}return[4,this.hasVisibleClients_()];case 1:return s.sent()?[2,this.sendMessageToWindowClients_(t)]:(r=this.getNotificationData_(t))?(n=r.title||"",[4,this.getSWRegistration_()]):[3,3];case 2:return o=s.sent(),i=r.actions,a=Notification.maxActions,i&&a&&i.length>a&&console.warn("This browser only supports "+a+" actions.The remaining actions will not be displayed."),[2,o.showNotification(n,r)];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:return s.sent(),[2];case 5:return[2]}}))}))},t.prototype.onSubChange_=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var e,t,r,n;return Object(c.__generator)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,this.getSWRegistration_()];case 1:return e=o.sent(),[3,3];case 2:throw t=o.sent(),h.create("unable-to-resubscribe",{errorInfo:t});case 3:return o.trys.push([3,5,,8]),[4,e.pushManager.getSubscription()];case 4:return o.sent(),[3,8];case 5:return r=o.sent(),[4,this.getTokenDetailsModel().getTokenDetailsFromSWScope(e.scope)];case 6:if(!(n=o.sent()))throw r;return[4,this.deleteToken(n.fcmToken)];case 7:throw o.sent(),r;case 8:return[2]}}))}))},t.prototype.onNotificationClick_=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t,r,n,o;return Object(c.__generator)(this,(function(a){switch(a.label){case 0:return e.notification&&e.notification.data&&e.notification.data.FCM_MSG?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(t=e.notification.data.FCM_MSG).notification&&(r=t.fcmOptions&&t.fcmOptions.link||t.notification.click_action)?[4,this.getWindowClient_(r)]:[2]):[2];case 1:return(n=a.sent())?[3,3]:[4,self.clients.openWindow(r)];case 2:return n=a.sent(),[3,5];case 3:return[4,n.focus()];case 4:n=a.sent(),a.label=5;case 5:return n?(delete t.notification,delete t.fcmOptions,o=C(i.NOTIFICATION_CLICKED,t),[2,this.attemptToMessageClient_(n,o)]):[2]}}))}))},t.prototype.getNotificationData_=function(e){var t;if(e&&"object"==typeof e.notification){var r=Object(c.__assign)({},e.notification);return r.data=Object(c.__assign)({},e.notification.data,((t={}).FCM_MSG=e,t)),r}},t.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw h.create("bg-handler-function-expected");this.bgMessageHandler=e},t.prototype.getWindowClient_=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t,r,n,o;return Object(c.__generator)(this,(function(i){switch(i.label){case 0:return t=new URL(e,self.location.href).href,[4,N()];case 1:for(r=i.sent(),n=null,o=0;o<r.length;o++)if(new URL(r[o].url,self.location.href).href===t){n=r[o];break}return[2,n]}}))}))},t.prototype.attemptToMessageClient_=function(e,t){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(r){if(!e)throw h.create("no-window-client-to-msg");return e.postMessage(t),[2]}))}))},t.prototype.hasVisibleClients_=function(){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(e){switch(e.label){case 0:return[4,N()];case 1:return[2,e.sent().some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))]}}))}))},t.prototype.sendMessageToWindowClients_=function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t,r,n=this;return Object(c.__generator)(this,(function(o){switch(o.label){case 0:return[4,N()];case 1:return t=o.sent(),r=C(i.PUSH_MSG_RECEIVED,e),[4,Promise.all(t.map((function(e){return n.attemptToMessageClient_(e,r)})))];case 2:return o.sent(),[2]}}))}))},t.prototype.getSWRegistration_=function(){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(e){return[2,self.registration]}))}))},t.prototype.getPublicVapidKey_=function(){return Object(c.__awaiter)(this,void 0,void 0,(function(){var e,t;return Object(c.__generator)(this,(function(r){switch(r.label){case 0:return[4,this.getSWRegistration_()];case 1:if(!(e=r.sent()))throw h.create("sw-registration-expected");return[4,this.getVapidDetailsModel().getVapidFromSWScope(e.scope)];case 2:return null==(t=r.sent())?[2,l]:[2,t]}}))}))},t}(A);function N(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function C(e,t){var r;return(r={})[o.TYPE_OF_MSG]=e,r[o.DATA]=t,r
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var D,P,M=function(e){function t(t){var r=e.call(this,t)||this;return r.registrationToUse=null,r.publicVapidKeyToUse=null,r.messageObserver=null,r.tokenRefreshObserver=null,r.onMessageInternal=Object(u.createSubscribe)((function(e){r.messageObserver=e})),r.onTokenRefreshInternal=Object(u.createSubscribe)((function(e){r.tokenRefreshObserver=e})),r.setupSWMessageListener_(),r}return Object(c.__extends)(t,e),t.prototype.requestPermission=function(){return Object(c.__awaiter)(this,void 0,void 0,(function(){var e;return Object(c.__generator)(this,(function(t){switch(t.label){case 0:return"granted"===this.getNotificationPermission_()?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw"denied"===e?h.create("permission-blocked"):h.create("permission-default")}}))}))},t.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw h.create("sw-registration-expected");if(null!=this.registrationToUse)throw h.create("use-sw-before-get-token");this.registrationToUse=e},t.prototype.usePublicVapidKey=function(e){if("string"!=typeof e)throw h.create("invalid-public-vapid-key");if(null!=this.publicVapidKeyToUse)throw h.create("use-public-key-before-get-token");var t=y(e);if(65!==t.length)throw h.create("public-vapid-key-decryption-failed");this.publicVapidKeyToUse=t},t.prototype.onMessage=function(e,t,r){return"function"==typeof e?this.onMessageInternal(e,t,r):this.onMessageInternal(e)},t.prototype.onTokenRefresh=function(e,t,r){return"function"==typeof e?this.onTokenRefreshInternal(e,t,r):this.onTokenRefreshInternal(e)},t.prototype.waitForRegistrationToActivate_=function(e){var t=e.installing||e.waiting||e.active;return new Promise((function(r,n){if(t)if("activated"!==t.state)if("redundant"!==t.state){var o=function(){if("activated"===t.state)r(e);else{if("redundant"!==t.state)return;n(h.create("sw-reg-redundant"))}t.removeEventListener("statechange",o)};t.addEventListener("statechange",o)}else n(h.create("sw-reg-redundant"));else r(e);else n(h.create("no-sw-in-reg"))}))},t.prototype.getSWRegistration_=function(){var e=this;return this.registrationToUse?this.waitForRegistrationToActivate_(this.registrationToUse):(this.registrationToUse=null,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}).catch((function(e){throw h.create("failed-serviceworker-registration",{browserErrorMessage:e.message})})).then((function(t){return e.waitForRegistrationToActivate_(t).then((function(){return e.registrationToUse=t,t.update(),t}))})))},t.prototype.getPublicVapidKey_=function(){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(e){return this.publicVapidKeyToUse?[2,this.publicVapidKeyToUse]:[2,l]}))}))},t.prototype.setupSWMessageListener_=function(){var e=this;navigator.serviceWorker.addEventListener("message",(function(t){if(t.data&&t.data[o.TYPE_OF_MSG]){var r=t.data;switch(r[o.TYPE_OF_MSG]){case i.PUSH_MSG_RECEIVED:case i.NOTIFICATION_CLICKED:var n=r[o.DATA];e.messageObserver&&e.messageObserver.next(n)}}}),!1)},t}(A);function I(){return self&&"ServiceWorkerGlobalScope"in self?"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}D=s.a,P={isSupported:I},D.INTERNAL.registerService("messaging",(function(e){if(!I())throw h.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new j(e):new M(e)}),P)}});