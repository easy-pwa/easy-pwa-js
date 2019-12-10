!function(r){var n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=333)}({0:function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",function(){return o}),r.d(t,"__assign",function(){return i}),r.d(t,"__rest",function(){return a}),r.d(t,"__decorate",function(){return s}),r.d(t,"__param",function(){return c}),r.d(t,"__metadata",function(){return u}),r.d(t,"__awaiter",function(){return f}),r.d(t,"__generator",function(){return h}),r.d(t,"__exportStar",function(){return l}),r.d(t,"__values",function(){return p}),r.d(t,"__read",function(){return d}),r.d(t,"__spread",function(){return b}),r.d(t,"__spreadArrays",function(){return v}),r.d(t,"__await",function(){return y}),r.d(t,"__asyncGenerator",function(){return g}),r.d(t,"__asyncDelegator",function(){return _}),r.d(t,"__asyncValues",function(){return w}),r.d(t,"__makeTemplateObject",function(){return m}),r.d(t,"__importStar",function(){return S}),r.d(t,"__importDefault",function(){return k});
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
var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function s(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;0<=s;s--)(o=e[s])&&(a=(i<3?o(a):3<i?o(t,r,a):o(t,r))||a);return 3<i&&a&&Object.defineProperty(t,r,a),a}function c(r,n){return function(e,t){n(e,t,r)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(i,a,s,c){return new(s=s||Promise)(function(e,t){function r(e){try{o(c.next(e))}catch(e){t(e)}}function n(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(r,n)}o((c=c.apply(i,a||[])).next())})}function h(r,n){var o,i,a,e,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,i=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=n.call(r,s)}catch(e){t=[6,e],i=0}finally{o=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function l(e,t){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}function p(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}function d(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||0<t--)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]));return e}function v(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function g(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,i=r.apply(e,t||[]),a=[];return o={},n("next"),n("throw"),n("return"),o[Symbol.asyncIterator]=function(){return this},o;function n(n){i[n]&&(o[n]=function(r){return new Promise(function(e,t){1<a.push([n,r,e,t])||s(n,r)})})}function s(e,t){try{(r=i[e](t)).value instanceof y?Promise.resolve(r.value.v).then(c,u):f(a[0][2],r)}catch(e){f(a[0][3],e)}var r}function c(e){s("next",e)}function u(e){s("throw",e)}function f(e,t){e(t),a.shift(),a.length&&s(a[0][0],a[0][1])}}function _(n){var e,o;return e={},t("next"),t("throw",function(e){throw e}),t("return"),e[Symbol.iterator]=function(){return this},e;function t(t,r){e[t]=n[t]?function(e){return(o=!o)?{value:y(n[t](e)),done:"return"===t}:r?r(e):e}:r}}function w(c){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,t=c[Symbol.asyncIterator];return t?t.call(c):(c=p(c),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(s){e[s]=c[s]&&function(a){return new Promise(function(e,t){var r,n,o,i;a=c[s](a),r=e,n=t,o=a.done,i=a.value,Promise.resolve(i).then(function(e){r({value:e,done:o})},n)})}}}function m(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function k(e){return e&&e.__esModule?e:{default:e}}},28:function(e,E,A){"use strict";(function(e){Object.defineProperty(E,"__esModule",{value:!0});function a(e,t){if(!e)throw o(t)}function r(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?t[r++]=o:(o<2048?t[r++]=o>>6|192:(55296==(64512&o)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++n)),t[r++]=o>>18|240,t[r++]=o>>12&63|128):t[r++]=o>>12|224,t[r++]=o>>6&63|128),t[r++]=63&o|128)}return t}function s(e){try{return i.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}var t=A(0),n={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},o=function(e){return new Error("Firebase Database ("+n.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],o=0;o<e.length;o+=3){var i=e[o],a=o+1<e.length,s=a?e[o+1]:0,c=o+2<e.length,u=c?e[o+2]:0,f=i>>2,h=(3&i)<<4|s>>4,l=(15&s)<<2|u>>6,p=63&u;c||(p=64,a||(l=64)),n.push(r[f],r[h],r[l],r[p])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(191<o&&o<224){var i=e[r++];t[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(239<o&&o<365){var a=((7&o)<<18|(63&(i=e[r++]))<<12|(63&(s=e[r++]))<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{i=e[r++];var s=e[r++];t[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],o=0;o<e.length;){var i=r[e.charAt(o++)],a=o<e.length?r[e.charAt(o)]:0,s=++o<e.length?r[e.charAt(o)]:64,c=++o<e.length?r[e.charAt(o)]:64;if(++o,null==i||null==a||null==s||null==c)throw Error();var u=i<<2|a>>4;if(n.push(u),64!==s){var f=a<<4&240|s>>2;if(n.push(f),64!==c){var h=s<<6&192|c;n.push(h)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),(this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e)>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */function c(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&(e[r]=c(e[r],t[r]));return e}
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
 */var u=(f.prototype.wrapCallback=function(r){var n=this;return function(e,t){e?n.reject(e):n.resolve(t),"function"==typeof r&&(n.promise.catch(function(){}),1===r.length?r(e):r(e,t))}},f);
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
 */function f(){var r=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(e,t){r.resolve=e,r.reject=t})}function h(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
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
var l,p=(l=Error,t.__extends(d,l),d);function d(e,t){var r=l.call(this,t)||this;return r.code=e,r.name="FirebaseError",Object.setPrototypeOf(r,d.prototype),Error.captureStackTrace&&Error.captureStackTrace(r,b.prototype.create),r}var b=(v.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n,o=t[0]||{},i=this.service+"/"+e,a=this.errors[e],s=a?(n=o,a.replace(y,function(e,t){var r=n[t];return null!=r?r.toString():"<"+t+"?>"})):"Error",c=this.serviceName+": "+s+" ("+i+").",u=new p(i,c),f=0,h=Object.keys(o);f<h.length;f++){var l=h[f];"_"!==l.slice(-1)&&(l in u&&console.warn('Overwriting FirebaseError base field "'+l+'" can cause unexpected behavior.'),u[l]=o[l])}return u},v);function v(e,t,r){this.service=e,this.serviceName=t,this.errors=r}var y=/\{\$([^}]+)}/g;
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
 */function g(e){return JSON.parse(e)}function _(e){var t={},r={},n={},o="";try{var i=e.split(".");t=g(s(i[0])||""),r=g(s(i[1])||""),o=i[2],n=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:n,signature:o}}
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
var w=(m.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},m.prototype.compress_=function(e,t){t=t||0;var r=this.W_;if("string"==typeof e)for(var n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(n=16;n<80;n++){var o=r[n-3]^r[n-8]^r[n-14]^r[n-16];r[n]=4294967295&(o<<1|o>>>31)}var i,a,s=this.chain_[0],c=this.chain_[1],u=this.chain_[2],f=this.chain_[3],h=this.chain_[4];for(n=0;n<80;n++)a=n<40?n<20?(i=f^c&(u^f),1518500249):(i=c^u^f,1859775393):n<60?(i=c&u|f&(c|u),2400959708):(i=c^u^f,3395469782),o=(s<<5|s>>>27)+i+h+a+r[n]&4294967295,h=f,f=u,u=4294967295&(c<<30|c>>>2),c=s,s=o;this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},m.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=0,o=this.buf_,i=this.inbuf_;n<t;){if(0===i)for(;n<=r;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(o[i]=e.charCodeAt(n),++n,++i===this.blockSize){this.compress_(o),i=0;break}}else for(;n<t;)if(o[i]=e[n],++n,++i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=t}},m.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;56<=r;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);var n=0;for(r=0;r<5;r++)for(var o=24;0<=o;o-=8)e[n]=this.chain_[r]>>o&255,++n;return e},m);function m(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}var S=(k.prototype.next=function(t){this.forEachObserver(function(e){e.next(t)})},k.prototype.error=function(t){this.forEachObserver(function(e){e.error(t)}),this.close(t)},k.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},k.prototype.subscribe=function(e,t,r){var n,o=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return 0;for(var r=0,n=t;r<n.length;r++){var o=n[r];if(o in e&&"function"==typeof e[o])return 1}return 0}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=O),void 0===n.error&&(n.error=O),void 0===n.complete&&(n.complete=O);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(e){}}),this.observers.push(n),i},k.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],--this.observerCount,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},k.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},k.prototype.sendOne=function(e,t){var r=this;this.task.then(function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})},k.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))},k);function k(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(function(){e(r)}).catch(function(e){r.error(e)})}function O(){}
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
 */function T(e,t,r){var n="";switch(t){case 1:n=r?"first":"First";break;case 2:n=r?"second":"Second";break;case 3:n=r?"third":"Third";break;case 4:n=r?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var o=e+" failed: ";return o+=n+" argument "}E.CONSTANTS=n,E.Deferred=u,E.ErrorFactory=b,E.FirebaseError=p,E.Sha1=w,E.assert=a,E.assertionError=o,E.async=function(r,n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];Promise.resolve(!0).then(function(){r.apply(void 0,e)}).catch(function(e){n&&n(e)})}},E.base64=i,E.base64Decode=s,E.base64Encode=function(e){var t=r(e);return i.encodeByteArray(t,!0)},E.contains=
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
function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},E.createSubscribe=function(e,t){var r=new S(e,t);return r.subscribe.bind(r)},E.decode=_,E.deepCopy=
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
function(e){return c(void 0,e)},E.deepExtend=c,E.errorPrefix=T,E.getUA=h,E.isAdmin=function(e){var t=_(e).claims;return"object"==typeof t&&!0===t.admin},E.isBrowser=function(){return"object"==typeof self&&self.self===self},E.isEmpty=function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},E.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())},E.isNode=function(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}},E.isNodeSdk=function(){return!0===n.NODE_CLIENT||!0===n.NODE_ADMIN},E.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},E.isValidFormat=function(e){var t=_(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},E.isValidTimestamp=function(e){var t=_(e).claims,r=Math.floor((new Date).getTime()/1e3),n=0,o=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?n=t.nbf:t.hasOwnProperty("iat")&&(n=t.iat),o=t.hasOwnProperty("exp")?t.exp:n+86400),!!r&&!!n&&!!o&&n<=r&&r<=o},E.issuedAtTime=function(e){var t=_(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},E.jsonEval=g,E.map=function(e,t,r){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=t.call(r,e[o],o,e));return n}
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
 */,E.querystring=function(e){for(var r=[],t=function(t,e){Array.isArray(e)?e.forEach(function(e){r.push(encodeURIComponent(t)+"="+encodeURIComponent(e))}):r.push(encodeURIComponent(t)+"="+encodeURIComponent(e))},n=0,o=Object.entries(e);n<o.length;n++){var i=o[n];t(i[0],i[1])}return r.length?"&"+r.join("&"):""},E.querystringDecode=function(e){var r={};return e.replace(/^\?/,"").split("&").forEach(function(e){if(e){var t=e.split("=");r[t[0]]=t[1]}}),r},E.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},E.stringLength=function(e){for(var t=0,r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:55296<=n&&n<=56319?(t+=4,r++):t+=3}return t},E.stringToByteArray=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);if(55296<=o&&o<=56319){var i=o-55296;a(++n<e.length,"Surrogate pair missing trail surrogate."),o=65536+(i<<10)+(e.charCodeAt(n)-56320)}o<128?t[r++]=o:(o<2048?t[r++]=o>>6|192:(o<65536?t[r++]=o>>12|224:(t[r++]=o>>18|240,t[r++]=o>>12&63|128),t[r++]=o>>6&63|128),t[r++]=63&o|128)}return t},E.stringify=function(e){return JSON.stringify(e)}
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
 */,E.validateArgCount=function(e,t,r,n){var o;if(n<t?o="at least "+t:r<n&&(o=0===r?"none":"no more than "+r),o)throw new Error(e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+o+".")},E.validateCallback=function(e,t,r,n){if((!n||r)&&"function"!=typeof r)throw new Error(T(e,t,n)+"must be a valid function.")},E.validateContextObject=function(e,t,r,n){if((!n||r)&&("object"!=typeof r||null===r))throw new Error(T(e,t,n)+"must be a valid context object.")}
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
 */,E.validateNamespace=function(e,t,r,n){if((!n||r)&&"string"!=typeof r)throw new Error(T(e,t,n)+"must be a valid firebase namespace.")}}).call(this,A(49))},31:function(e,t,r){"use strict";var n,o=(n=r(42))&&"object"==typeof n&&"default"in n?n.default:n;
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
 */e.exports=o},333:function(e,t,r){"use strict";r.r(t);var n=r(31),o=(r(98),location.href.match(/messagingSenderId=([\w]+)/));null!==o&&(n.initializeApp({messagingSenderId:o[1]}),n.messaging()),self.addEventListener("message",function(e){"skipWaiting"===e.data&&skipWaiting()})},42:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(0),d=r(96),i=r(97),a=((n={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",n["bad-app-name"]="Illegal App name: '{$appName}",n["duplicate-app"]="Firebase App named '{$appName}' already exists",n["app-deleted"]="Firebase App named '{$appName}' already deleted",n["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",n),b=new d.ErrorFactory("app","Firebase",a),v="[DEFAULT]",s=[],c=(Object.defineProperty(u.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!0,configurable:!0}),u.prototype.delete=function(){var s=this;return new Promise(function(e){s.checkDestroyed_(),e()}).then(function(){s.firebase_.INTERNAL.removeApp(s.name_);for(var e=[],t=0,r=Object.keys(s.services_);t<r.length;t++)for(var n=r[t],o=0,i=Object.keys(s.services_[n]);o<i.length;o++){var a=i[o];e.push(s.services_[n][a])}return Promise.all(e.filter(function(e){return"INTERNAL"in e}).map(function(e){return e.INTERNAL.delete()}))}).then(function(){s.isDeleted_=!0,s.services_={}})},u.prototype._getService=function(e,t){if(void 0===t&&(t=v),this.checkDestroyed_(),this.services_[e]||(this.services_[e]={}),!this.services_[e][t]){var r=t!==v?t:void 0,n=this.firebase_.INTERNAL.factories[e](this,this.extendApp.bind(this),r);this.services_[e][t]=n}return this.services_[e][t]},u.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=v),this.services_[e]&&this.services_[e][t]&&delete this.services_[e][t]},u.prototype.extendApp=function(e){var t=this;d.deepExtend(this,e),e.INTERNAL&&e.INTERNAL.addAuthTokenListener&&(s.forEach(function(e){t.INTERNAL.addAuthTokenListener(e)}),s=[])},u.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw b.create("app-deleted",{appName:this.name_})},u);function u(e,t,r){this.firebase_=r,this.isDeleted_=!1,this.services_={},this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=d.deepCopy(e),this.INTERNAL={getUid:function(){return null},getToken:function(){return Promise.resolve(null)},addAuthTokenListener:function(e){s.push(e),setTimeout(function(){return e(null)},0)},removeAuthTokenListener:function(t){s=s.filter(function(e){return e!==t})}}}c.prototype.name&&c.prototype.options||c.prototype.delete||console.log("dc");var y="6.6.2",g=new i.Logger("@firebase/app");
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
function f(a){var i={},s={},c={},u={__esModule:!0,initializeApp:function(e,t){void 0===t&&(t={});if("object"!=typeof t||null===t){t={name:t}}var r=t;void 0===r.name&&(r.name=v);var n=r.name;if("string"!=typeof n||!n)throw b.create("bad-app-name",{appName:String(n)});if(d.contains(i,n))throw b.create("duplicate-app",{appName:n});var o=new a(e,r,u);return l(i[n]=o,"create"),o},app:f,apps:null,SDK_VERSION:y,INTERNAL:{registerService:function(r,e,t,n,o){void 0===o&&(o=!1);if(s[r])return g.debug("There were multiple attempts to register service "+r+"."),u[r];s[r]=e,n&&(c[r]=n,h().forEach(function(e){n("create",e)}));function i(e){if(void 0===e&&(e=f()),"function"!=typeof e[r])throw b.create("invalid-app-argument",{appName:r});return e[r]()}void 0!==t&&d.deepExtend(i,t);return u[r]=i,a.prototype[r]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._getService.bind(this,r).apply(this,o?e:[])},i},removeApp:function(e){l(i[e],"delete"),delete i[e]},factories:s,useAsService:p}};function f(e){if(e=e||v,!d.contains(i,e))throw b.create("no-app",{appName:e});return i[e]}function h(){return Object.keys(i).map(function(e){return i[e]})}function l(e,t){for(var r=0,n=Object.keys(s);r<n.length;r++){var o=p(e,n[r]);if(null===o)return;c[o]&&c[o](t,e)}}function p(e,t){return"serverAuth"===t?null:t}return u.default=u,Object.defineProperty(u,"apps",{get:h}),f.App=a,u}
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
if(d.isBrowser()&&void 0!==self.firebase){g.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var h=self.firebase.SDK_VERSION;h&&0<=h.indexOf("LITE")&&g.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var l=function e(){var t=f(c);return t.INTERNAL=o.__assign({},t.INTERNAL,{createFirebaseNamespace:e,extendNamespace:function(e){d.deepExtend(t,e)},createSubscribe:d.createSubscribe,ErrorFactory:d.ErrorFactory,deepExtend:d.deepExtend}),t}(),p=l.initializeApp;l.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return d.isNode()&&g.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),p.apply(void 0,e)};var _=l;t.default=_,t.firebase=_},49:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},96:function(e,E,A){"use strict";(function(e){Object.defineProperty(E,"__esModule",{value:!0});function a(e,t){if(!e)throw o(t)}function r(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?t[r++]=o:(o<2048?t[r++]=o>>6|192:(55296==(64512&o)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++n)),t[r++]=o>>18|240,t[r++]=o>>12&63|128):t[r++]=o>>12|224,t[r++]=o>>6&63|128),t[r++]=63&o|128)}return t}function s(e){try{return i.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}var t=A(0),n={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},o=function(e){return new Error("Firebase Database ("+n.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],o=0;o<e.length;o+=3){var i=e[o],a=o+1<e.length,s=a?e[o+1]:0,c=o+2<e.length,u=c?e[o+2]:0,f=i>>2,h=(3&i)<<4|s>>4,l=(15&s)<<2|u>>6,p=63&u;c||(p=64,a||(l=64)),n.push(r[f],r[h],r[l],r[p])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(191<o&&o<224){var i=e[r++];t[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(239<o&&o<365){var a=((7&o)<<18|(63&(i=e[r++]))<<12|(63&(s=e[r++]))<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{i=e[r++];var s=e[r++];t[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],o=0;o<e.length;){var i=r[e.charAt(o++)],a=o<e.length?r[e.charAt(o)]:0,s=++o<e.length?r[e.charAt(o)]:64,c=++o<e.length?r[e.charAt(o)]:64;if(++o,null==i||null==a||null==s||null==c)throw Error();var u=i<<2|a>>4;if(n.push(u),64!==s){var f=a<<4&240|s>>2;if(n.push(f),64!==c){var h=s<<6&192|c;n.push(h)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),(this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e)>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */function c(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&(e[r]=c(e[r],t[r]));return e}
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
 */var u=(f.prototype.wrapCallback=function(r){var n=this;return function(e,t){e?n.reject(e):n.resolve(t),"function"==typeof r&&(n.promise.catch(function(){}),1===r.length?r(e):r(e,t))}},f);
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
 */function f(){var r=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(e,t){r.resolve=e,r.reject=t})}function h(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
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
var l,p=(l=Error,t.__extends(d,l),d);function d(e,t){var r=l.call(this,t)||this;return r.code=e,r.name="FirebaseError",Object.setPrototypeOf(r,d.prototype),Error.captureStackTrace&&Error.captureStackTrace(r,b.prototype.create),r}var b=(v.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n,o=t[0]||{},i=this.service+"/"+e,a=this.errors[e],s=a?(n=o,a.replace(y,function(e,t){var r=n[t];return null!=r?r.toString():"<"+t+"?>"})):"Error",c=this.serviceName+": "+s+" ("+i+").",u=new p(i,c),f=0,h=Object.keys(o);f<h.length;f++){var l=h[f];"_"!==l.slice(-1)&&(l in u&&console.warn('Overwriting FirebaseError base field "'+l+'" can cause unexpected behavior.'),u[l]=o[l])}return u},v);function v(e,t,r){this.service=e,this.serviceName=t,this.errors=r}var y=/\{\$([^}]+)}/g;
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
 */function g(e){return JSON.parse(e)}function _(e){var t={},r={},n={},o="";try{var i=e.split(".");t=g(s(i[0])||""),r=g(s(i[1])||""),o=i[2],n=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:n,signature:o}}
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
var w=(m.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},m.prototype.compress_=function(e,t){t=t||0;var r=this.W_;if("string"==typeof e)for(var n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(n=16;n<80;n++){var o=r[n-3]^r[n-8]^r[n-14]^r[n-16];r[n]=4294967295&(o<<1|o>>>31)}var i,a,s=this.chain_[0],c=this.chain_[1],u=this.chain_[2],f=this.chain_[3],h=this.chain_[4];for(n=0;n<80;n++)a=n<40?n<20?(i=f^c&(u^f),1518500249):(i=c^u^f,1859775393):n<60?(i=c&u|f&(c|u),2400959708):(i=c^u^f,3395469782),o=(s<<5|s>>>27)+i+h+a+r[n]&4294967295,h=f,f=u,u=4294967295&(c<<30|c>>>2),c=s,s=o;this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},m.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=0,o=this.buf_,i=this.inbuf_;n<t;){if(0===i)for(;n<=r;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(o[i]=e.charCodeAt(n),++n,++i===this.blockSize){this.compress_(o),i=0;break}}else for(;n<t;)if(o[i]=e[n],++n,++i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=t}},m.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;56<=r;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);var n=0;for(r=0;r<5;r++)for(var o=24;0<=o;o-=8)e[n]=this.chain_[r]>>o&255,++n;return e},m);function m(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}var S=(k.prototype.next=function(t){this.forEachObserver(function(e){e.next(t)})},k.prototype.error=function(t){this.forEachObserver(function(e){e.error(t)}),this.close(t)},k.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},k.prototype.subscribe=function(e,t,r){var n,o=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return 0;for(var r=0,n=t;r<n.length;r++){var o=n[r];if(o in e&&"function"==typeof e[o])return 1}return 0}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=O),void 0===n.error&&(n.error=O),void 0===n.complete&&(n.complete=O);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(e){}}),this.observers.push(n),i},k.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],--this.observerCount,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},k.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},k.prototype.sendOne=function(e,t){var r=this;this.task.then(function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})},k.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))},k);function k(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(function(){e(r)}).catch(function(e){r.error(e)})}function O(){}
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
 */function T(e,t,r){var n="";switch(t){case 1:n=r?"first":"First";break;case 2:n=r?"second":"Second";break;case 3:n=r?"third":"Third";break;case 4:n=r?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var o=e+" failed: ";return o+=n+" argument "}E.CONSTANTS=n,E.Deferred=u,E.ErrorFactory=b,E.FirebaseError=p,E.Sha1=w,E.assert=a,E.assertionError=o,E.async=function(r,n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];Promise.resolve(!0).then(function(){r.apply(void 0,e)}).catch(function(e){n&&n(e)})}},E.base64=i,E.base64Decode=s,E.base64Encode=function(e){var t=r(e);return i.encodeByteArray(t,!0)},E.contains=
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
function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},E.createSubscribe=function(e,t){var r=new S(e,t);return r.subscribe.bind(r)},E.decode=_,E.deepCopy=
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
function(e){return c(void 0,e)},E.deepExtend=c,E.errorPrefix=T,E.getUA=h,E.isAdmin=function(e){var t=_(e).claims;return"object"==typeof t&&!0===t.admin},E.isBrowser=function(){return"object"==typeof self&&self.self===self},E.isEmpty=function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},E.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())},E.isNode=function(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}},E.isNodeSdk=function(){return!0===n.NODE_CLIENT||!0===n.NODE_ADMIN},E.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},E.isValidFormat=function(e){var t=_(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},E.isValidTimestamp=function(e){var t=_(e).claims,r=Math.floor((new Date).getTime()/1e3),n=0,o=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?n=t.nbf:t.hasOwnProperty("iat")&&(n=t.iat),o=t.hasOwnProperty("exp")?t.exp:n+86400),!!r&&!!n&&!!o&&n<=r&&r<=o},E.issuedAtTime=function(e){var t=_(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},E.jsonEval=g,E.map=function(e,t,r){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=t.call(r,e[o],o,e));return n}
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
 */,E.querystring=function(e){for(var r=[],t=function(t,e){Array.isArray(e)?e.forEach(function(e){r.push(encodeURIComponent(t)+"="+encodeURIComponent(e))}):r.push(encodeURIComponent(t)+"="+encodeURIComponent(e))},n=0,o=Object.entries(e);n<o.length;n++){var i=o[n];t(i[0],i[1])}return r.length?"&"+r.join("&"):""},E.querystringDecode=function(e){var r={};return e.replace(/^\?/,"").split("&").forEach(function(e){if(e){var t=e.split("=");r[t[0]]=t[1]}}),r},E.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},E.stringLength=function(e){for(var t=0,r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:55296<=n&&n<=56319?(t+=4,r++):t+=3}return t},E.stringToByteArray=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);if(55296<=o&&o<=56319){var i=o-55296;a(++n<e.length,"Surrogate pair missing trail surrogate."),o=65536+(i<<10)+(e.charCodeAt(n)-56320)}o<128?t[r++]=o:(o<2048?t[r++]=o>>6|192:(o<65536?t[r++]=o>>12|224:(t[r++]=o>>18|240,t[r++]=o>>12&63|128),t[r++]=o>>6&63|128),t[r++]=63&o|128)}return t},E.stringify=function(e){return JSON.stringify(e)}
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
 */,E.validateArgCount=function(e,t,r,n){var o;if(n<t?o="at least "+t:r<n&&(o=0===r?"none":"no more than "+r),o)throw new Error(e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+o+".")},E.validateCallback=function(e,t,r,n){if((!n||r)&&"function"!=typeof r)throw new Error(T(e,t,n)+"must be a valid function.")},E.validateContextObject=function(e,t,r,n){if((!n||r)&&("object"!=typeof r||null===r))throw new Error(T(e,t,n)+"must be a valid context object.")}
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
 */,E.validateNamespace=function(e,t,r,n){if((!n||r)&&"string"!=typeof r)throw new Error(T(e,t,n)+"must be a valid firebase namespace.")}}).call(this,A(49))},97:function(e,t,r){"use strict";r.r(t),r.d(t,"LogLevel",function(){return i}),r.d(t,"Logger",function(){return c}),r.d(t,"setLogLevel",function(){return f});
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
var i,n,o=[];(n=i=i||{})[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT";function a(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];if(!(t<e.logLevel)){var o=(new Date).toISOString();switch(t){case i.DEBUG:case i.VERBOSE:console.log.apply(console,["["+o+"]  "+e.name+":"].concat(r));break;case i.INFO:console.info.apply(console,["["+o+"]  "+e.name+":"].concat(r));break;case i.WARN:console.warn.apply(console,["["+o+"]  "+e.name+":"].concat(r));break;case i.ERROR:console.error.apply(console,["["+o+"]  "+e.name+":"].concat(r));break;default:throw new Error("Attempted to log a message with an invalid logType (value: "+t+")")}}}var s=i.INFO,c=(Object.defineProperty(u.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!0,configurable:!0}),u.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,i.DEBUG].concat(e))},u.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,i.VERBOSE].concat(e))},u.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,i.INFO].concat(e))},u.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,i.WARN].concat(e))},u.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,i.ERROR].concat(e))},u);function u(e){this.name=e,this._logLevel=s,this._logHandler=a,o.push(this)}
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
function f(t){o.forEach(function(e){e.logLevel=t})}},98:function(e,t,r){"use strict";var n,o,i,a,s,c=r(42),u=r.n(c),b=r(0),f=r(28),h=((n={})["only-available-in-window"]="This method is available in a Window context.",n["only-available-in-sw"]="This method is available in a service worker context.",n["should-be-overriden"]="This method should be overriden by extended classes.",n["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",n["permission-default"]="The required permissions were not granted and dismissed instead.",n["permission-blocked"]="The required permissions were not granted and blocked instead.",n["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",n["notifications-blocked"]="Notifications have been blocked.",n["failed-serviceworker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",n["sw-registration-expected"]="A service worker registration was the expected input.",n["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",n["invalid-saved-token"]="Unable to access details of the saved token.",n["sw-reg-redundant"]="The service worker being used for push was made redundant.",n["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",n["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",n["token-subscribe-no-push-set"]="FCM returned an invalid response when getting an FCM token.",n["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",n["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",n["token-update-no-token"]="FCM returned no token when updating the user to push.",n["use-sw-before-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",n["invalid-delete-token"]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",n["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",n["delete-scope-not-found"]="The deletion attempt for service worker scope could not be performed as the scope was not found.",n["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",n["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",n["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$errorInfo}",n["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",n["failed-to-delete-token"]="Unable to delete the currently saved token.",n["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",n["bad-scope"]="The service worker scope must be a string with at least one character.",n["bad-vapid-key"]="The public VAPID key is not a Uint8Array with 65 bytes.",n["bad-subscription"]="The subscription must be a valid PushSubscription.",n["bad-token"]="The FCM Token used for storage / lookup was not a valid token string.",n["bad-push-set"]="The FCM push set used for storage / lookup was not not a valid push set string.",n["failed-delete-vapid-key"]="The VAPID key could not be deleted.",n["invalid-public-vapid-key"]="The public VAPID key must be a string.",n["use-public-key-before-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",n["public-vapid-key-decryption-failed"]="The public VAPID key did not equal 65 bytes when decrypted.",n),v=new f.ErrorFactory("messaging","Messaging",h),y=new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110]),g="https://fcm.googleapis.com";
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
function _(e,t){if(null==e||null==t)return!1;if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(var r=new DataView(e),n=new DataView(t),o=0;o<e.byteLength;o++)if(r.getUint8(o)!==n.getUint8(o))return!1;return!0}
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
 */function w(e){var t;return(t=new Uint8Array(e),btoa(String.fromCharCode.apply(String,Object(b.__spread)(t)))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}
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
 */(i=o=o||{}).TYPE_OF_MSG="firebase-messaging-msg-type",i.DATA="firebase-messaging-msg-data",(s=a=a||{}).PUSH_MSG_RECEIVED="push-msg-received",s.NOTIFICATION_CLICKED="notification-clicked";var l=(p.prototype.getToken=function(f,h,l){return Object(b.__awaiter)(this,void 0,void 0,function(){var t,r,n,o,i,a,s,c,u;return Object(b.__generator)(this,function(e){switch(e.label){case 0:t=w(h.getKey("p256dh")),r=w(h.getKey("auth")),n="authorized_entity="+f+"&endpoint="+h.endpoint+"&encryption_key="+t+"&encryption_auth="+r,_(l.buffer,y.buffer)||(o=w(l),n+="&application_pub_key="+o),(i=new Headers).append("Content-Type","application/x-www-form-urlencoded"),a={method:"POST",headers:i,body:n},e.label=1;case 1:return e.trys.push([1,4,,5]),[4,fetch(g+"/fcm/connect/subscribe",a)];case 2:return[4,e.sent().json()];case 3:return s=e.sent(),[3,5];case 4:throw c=e.sent(),v.create("token-subscribe-failed",{errorInfo:c});case 5:if(s.error)throw u=s.error.message,v.create("token-subscribe-failed",{errorInfo:u});if(!s.token)throw v.create("token-subscribe-no-token");if(!s.pushSet)throw v.create("token-subscribe-no-push-set");return[2,{token:s.token,pushSet:s.pushSet}]}})})},p.prototype.updateToken=function(f,h,l,p,d){return Object(b.__awaiter)(this,void 0,void 0,function(){var t,r,n,o,i,a,s,c,u;return Object(b.__generator)(this,function(e){switch(e.label){case 0:t=w(p.getKey("p256dh")),r=w(p.getKey("auth")),n="push_set="+l+"&token="+h+"&authorized_entity="+f+"&endpoint="+p.endpoint+"&encryption_key="+t+"&encryption_auth="+r,_(d.buffer,y.buffer)||(o=w(d),n+="&application_pub_key="+o),(i=new Headers).append("Content-Type","application/x-www-form-urlencoded"),a={method:"POST",headers:i,body:n},e.label=1;case 1:return e.trys.push([1,4,,5]),[4,fetch(g+"/fcm/connect/subscribe",a)];case 2:return[4,e.sent().json()];case 3:return s=e.sent(),[3,5];case 4:throw c=e.sent(),v.create("token-update-failed",{errorInfo:c});case 5:if(s.error)throw u=s.error.message,v.create("token-update-failed",{errorInfo:u});if(!s.token)throw v.create("token-update-no-token");return[2,s.token]}})})},p.prototype.deleteToken=function(s,c,u){return Object(b.__awaiter)(this,void 0,void 0,function(){var t,r,n,o,i,a;return Object(b.__generator)(this,function(e){switch(e.label){case 0:t="authorized_entity="+s+"&token="+c+"&pushSet="+u,(r=new Headers).append("Content-Type","application/x-www-form-urlencoded"),n={method:"POST",headers:r,body:t},e.label=1;case 1:return e.trys.push([1,4,,5]),[4,fetch(g+"/fcm/connect/unsubscribe",n)];case 2:return[4,e.sent().json()];case 3:if((o=e.sent()).error)throw i=o.error.message,v.create("token-unsubscribe-failed",{errorInfo:i});return[3,5];case 4:throw a=e.sent(),v.create("token-unsubscribe-failed",{errorInfo:a});case 5:return[2]}})})},p);
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
 */function p(){}function d(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),n=new Uint8Array(r.length),o=0;o<r.length;++o)n[o]=r.charCodeAt(o);return n}
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
 */var m="undefined",S="fcm_token_object_Store";function k(){var t=indexedDB.open(m);t.onerror=function(e){},t.onsuccess=function(e){!function(r){if(r.objectStoreNames.contains(S)){var e=r.transaction(S).objectStore(S),n=new l,o=e.openCursor();o.onerror=function(e){console.warn("Unable to cleanup old IDB.",e)},o.onsuccess=function(){var e=o.result;if(e){var t=e.value;n.deleteToken(t.fcmSenderId,t.fcmToken,t.fcmPushSet),e.continue()}else r.close(),indexedDB.deleteDatabase(m)}}}(t.result)}}
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
 */var O=(T.prototype.get=function(t){return this.createTransaction(function(e){return e.get(t)})},T.prototype.getIndex=function(t,r){return this.createTransaction(function(e){return e.index(t).get(r)})},T.prototype.put=function(t){return this.createTransaction(function(e){return e.put(t)},"readwrite")},T.prototype.delete=function(t){return this.createTransaction(function(e){return e.delete(t)},"readwrite")},T.prototype.closeDatabase=function(){return Object(b.__awaiter)(this,void 0,void 0,function(){return Object(b.__generator)(this,function(e){switch(e.label){case 0:return this.dbPromise?[4,this.dbPromise]:[3,2];case 1:e.sent().close(),this.dbPromise=null,e.label=2;case 2:return[2]}})})},T.prototype.createTransaction=function(a,s){return void 0===s&&(s="readonly"),Object(b.__awaiter)(this,void 0,void 0,function(){var t,n,o,i;return Object(b.__generator)(this,function(e){switch(e.label){case 0:return[4,this.getDb()];case 1:return t=e.sent(),n=t.transaction(this.objectStoreName,s),o=n.objectStore(this.objectStoreName),[4,(r=a(o),new Promise(function(e,t){r.onsuccess=function(){e(r.result)},r.onerror=function(){t(r.error)}}))];case 2:return i=e.sent(),[2,new Promise(function(e,t){n.oncomplete=function(){e(i)},n.onerror=function(){t(n.error)}})]}var r;
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
 */})})},T.prototype.getDb=function(){var n=this;return this.dbPromise||(this.dbPromise=new Promise(function(e,t){var r=indexedDB.open(n.dbName,n.dbVersion);r.onsuccess=function(){e(r.result)},r.onerror=function(){n.dbPromise=null,t(r.error)},r.onupgradeneeded=function(e){return n.onDbUpgrade(r,e)}})),this.dbPromise},T);function T(){this.dbPromise=null}var E,A=(E=O,Object(b.__extends)(j,E),j.prototype.onDbUpgrade=function(e,t){var r=e.result;switch(t.oldVersion){case 0:(n=r.createObjectStore(this.objectStoreName,{keyPath:"swScope"})).createIndex("fcmSenderId","fcmSenderId",{unique:!1}),n.createIndex("fcmToken","fcmToken",{unique:!0});case 1:k();case 2:var n,o=(n=e.transaction.objectStore(this.objectStoreName)).openCursor();o.onsuccess=function(){var e=o.result;if(e){var t=e.value,r=Object(b.__assign)({},t);t.createTime||(r.createTime=Date.now()),"string"==typeof t.vapidKey&&(r.vapidKey=d(t.vapidKey)),"string"==typeof t.auth&&(r.auth=d(t.auth).buffer),"string"==typeof t.auth&&(r.p256dh=d(t.p256dh).buffer),e.update(r),e.continue()}}}},j.prototype.getTokenDetailsFromToken=function(t){return Object(b.__awaiter)(this,void 0,void 0,function(){return Object(b.__generator)(this,function(e){if(!t)throw v.create("bad-token");return N({fcmToken:t}),[2,this.getIndex("fcmToken",t)]})})},j.prototype.getTokenDetailsFromSWScope=function(t){return Object(b.__awaiter)(this,void 0,void 0,function(){return Object(b.__generator)(this,function(e){if(!t)throw v.create("bad-scope");return N({swScope:t}),[2,this.get(t)]})})},j.prototype.saveTokenDetails=function(t){return Object(b.__awaiter)(this,void 0,void 0,function(){return Object(b.__generator)(this,function(e){if(!t.swScope)throw v.create("bad-scope");if(!t.vapidKey)throw v.create("bad-vapid-key");if(!t.endpoint||!t.auth||!t.p256dh)throw v.create("bad-subscription");if(!t.fcmSenderId)throw v.create("bad-sender-id");if(!t.fcmToken)throw v.create("bad-token");if(!t.fcmPushSet)throw v.create("bad-push-set");return N(t),[2,this.put(t)]})})},j.prototype.deleteToken=function(r){return Object(b.__awaiter)(this,void 0,void 0,function(){var t;return Object(b.__generator)(this,function(e){switch(e.label){case 0:return"string"!=typeof r||0===r.length?[2,Promise.reject(v.create("invalid-delete-token"))]:[4,this.getTokenDetailsFromToken(r)];case 1:if(!(t=e.sent()))throw v.create("delete-token-not-found");return[4,this.delete(t.swScope)];case 2:return e.sent(),[2,t]}})})},j);function j(){var e=null!==E&&E.apply(this,arguments)||this;return e.dbName="fcm_token_details_db",e.dbVersion=3,e.objectStoreName="fcm_token_object_Store",e}function N(e){if(e.fcmToken&&("string"!=typeof e.fcmToken||0===e.fcmToken.length))throw v.create("bad-token");if(e.swScope&&("string"!=typeof e.swScope||0===e.swScope.length))throw v.create("bad-scope");if(e.vapidKey&&(!(e.vapidKey instanceof Uint8Array)||65!==e.vapidKey.length))throw v.create("bad-vapid-key");if(e.endpoint&&("string"!=typeof e.endpoint||0===e.endpoint.length))throw v.create("bad-subscription");if(e.auth&&!(e.auth instanceof ArrayBuffer))throw v.create("bad-subscription");if(e.p256dh&&!(e.p256dh instanceof ArrayBuffer))throw v.create("bad-subscription");if(e.fcmSenderId&&("string"!=typeof e.fcmSenderId||0===e.fcmSenderId.length))throw v.create("bad-sender-id");if(e.fcmPushSet&&("string"!=typeof e.fcmPushSet||0===e.fcmPushSet.length))throw v.create("bad-push-set")}
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
 */var C,D=(C=O,Object(b.__extends)(P,C),P.prototype.onDbUpgrade=function(e){e.result.createObjectStore(this.objectStoreName,{keyPath:"swScope"})},P.prototype.getVapidFromSWScope=function(r){return Object(b.__awaiter)(this,void 0,void 0,function(){var t;return Object(b.__generator)(this,function(e){switch(e.label){case 0:if("string"!=typeof r||0===r.length)throw v.create("bad-scope");return[4,this.get(r)];case 1:return[2,(t=e.sent())?t.vapidKey:void 0]}})})},P.prototype.saveVapidDetails=function(r,n){return Object(b.__awaiter)(this,void 0,void 0,function(){var t;return Object(b.__generator)(this,function(e){if("string"!=typeof r||0===r.length)throw v.create("bad-scope");if(null===n||65!==n.length)throw v.create("bad-vapid-key");return t={swScope:r,vapidKey:n},[2,this.put(t)]})})},P.prototype.deleteVapidDetails=function(r){return Object(b.__awaiter)(this,void 0,void 0,function(){var t;return Object(b.__generator)(this,function(e){switch(e.label){case 0:return[4,this.getVapidFromSWScope(r)];case 1:if(!(t=e.sent()))throw v.create("delete-scope-not-found");return[4,this.delete(r)];case 2:return e.sent(),[2,t]}})})},P);function P(){var e=null!==C&&C.apply(this,arguments)||this;return e.dbName="fcm_vapid_details_db",e.dbVersion=1,e.objectStoreName="fcm_vapid_object_Store",e}
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
var I="messagingSenderId",M=(x.prototype.getToken=function(){return Object(b.__awaiter)(this,void 0,void 0,function(){var t,r,n,o,i;return Object(b.__generator)(this,function(e){switch(e.label){case 0:if("denied"===(t=this.getNotificationPermission_()))throw v.create("notifications-blocked");return"granted"!==t?[2,null]:[4,this.getSWRegistration_()];case 1:return r=e.sent(),[4,this.getPublicVapidKey_()];case 2:return n=e.sent(),[4,this.getPushSubscription(r,n)];case 3:return o=e.sent(),[4,this.tokenDetailsModel.getTokenDetailsFromSWScope(r.scope)];case 4:return(i=e.sent())?[2,this.manageExistingToken(r,o,n,i)]:[2,this.getNewToken(r,o,n)]}})})},x.prototype.manageExistingToken=function(t,r,n,o){return Object(b.__awaiter)(this,void 0,void 0,function(){return Object(b.__generator)(this,function(e){switch(e.label){case 0:return function(e,t,r){if(!r.vapidKey||!_(t.buffer,r.vapidKey.buffer))return 0;var n=e.endpoint===r.endpoint,o=_(e.getKey("auth"),r.auth),i=_(e.getKey("p256dh"),r.p256dh);return n&&o&&i}
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
 */(r,n,o)?Date.now()<o.createTime+6048e5?[2,o.fcmToken]:[2,this.updateToken(t,r,n,o)]:[4,this.deleteTokenFromDB(o.fcmToken)];case 1:return e.sent(),[2,this.getNewToken(t,r,n)]}})})},x.prototype.updateToken=function(o,i,a,s){return Object(b.__awaiter)(this,void 0,void 0,function(){var t,r,n;return Object(b.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,4,,6]),[4,this.iidModel.updateToken(this.messagingSenderId,s.fcmToken,s.fcmPushSet,i,a)];case 1:return t=e.sent(),r={swScope:o.scope,vapidKey:a,fcmSenderId:this.messagingSenderId,fcmToken:t,fcmPushSet:s.fcmPushSet,createTime:Date.now(),endpoint:i.endpoint,auth:i.getKey("auth"),p256dh:i.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(r)];case 2:return e.sent(),[4,this.vapidDetailsModel.saveVapidDetails(o.scope,a)];case 3:return e.sent(),[2,t];case 4:return n=e.sent(),[4,this.deleteToken(s.fcmToken)];case 5:throw e.sent(),n;case 6:return[2]}})})},x.prototype.getNewToken=function(n,o,i){return Object(b.__awaiter)(this,void 0,void 0,function(){var t,r;return Object(b.__generator)(this,function(e){switch(e.label){case 0:return[4,this.iidModel.getToken(this.messagingSenderId,o,i)];case 1:return t=e.sent(),r={swScope:n.scope,vapidKey:i,fcmSenderId:this.messagingSenderId,fcmToken:t.token,fcmPushSet:t.pushSet,createTime:Date.now(),endpoint:o.endpoint,auth:o.getKey("auth"),p256dh:o.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(r)];case 2:return e.sent(),[4,this.vapidDetailsModel.saveVapidDetails(n.scope,i)];case 3:return e.sent(),[2,t.token]}})})},x.prototype.deleteToken=function(n){return Object(b.__awaiter)(this,void 0,void 0,function(){var t,r;return Object(b.__generator)(this,function(e){switch(e.label){case 0:return[4,this.deleteTokenFromDB(n)];case 1:return e.sent(),[4,this.getSWRegistration_()];case 2:return(t=e.sent())?[4,t.pushManager.getSubscription()]:[3,4];case 3:if(r=e.sent())return[2,r.unsubscribe()];e.label=4;case 4:return[2,!0]}})})},x.prototype.deleteTokenFromDB=function(r){return Object(b.__awaiter)(this,void 0,void 0,function(){var t;return Object(b.__generator)(this,function(e){switch(e.label){case 0:return[4,this.tokenDetailsModel.deleteToken(r)];case 1:return t=e.sent(),[4,this.iidModel.deleteToken(t.fcmSenderId,t.fcmToken,t.fcmPushSet)];case 2:return e.sent(),[2]}})})},x.prototype.getPushSubscription=function(t,r){return t.pushManager.getSubscription().then(function(e){return e||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:r})})},x.prototype.requestPermission=function(){throw v.create("only-available-in-window")},x.prototype.useServiceWorker=function(e){throw v.create("only-available-in-window")},x.prototype.usePublicVapidKey=function(e){throw v.create("only-available-in-window")},x.prototype.onMessage=function(e,t,r){throw v.create("only-available-in-window")},x.prototype.onTokenRefresh=function(e,t,r){throw v.create("only-available-in-window")},x.prototype.setBackgroundMessageHandler=function(e){throw v.create("only-available-in-sw")},x.prototype.delete=function(){return Object(b.__awaiter)(this,void 0,void 0,function(){return Object(b.__generator)(this,function(e){switch(e.label){case 0:return[4,Promise.all([this.tokenDetailsModel.closeDatabase(),this.vapidDetailsModel.closeDatabase()])];case 1:return e.sent(),[2]}})})},x.prototype.getNotificationPermission_=function(){return Notification.permission},x.prototype.getTokenDetailsModel=function(){return this.tokenDetailsModel},x.prototype.getVapidDetailsModel=function(){return this.vapidDetailsModel},x.prototype.getIidModel=function(){return this.iidModel},x);function x(e){var t=this;if(!e.options[I]||"string"!=typeof e.options[I])throw v.create("bad-sender-id");this.messagingSenderId=e.options[I],this.tokenDetailsModel=new A,this.vapidDetailsModel=new D,this.iidModel=new l,this.app=e,this.INTERNAL={delete:function(){return t.delete()}}}var R,F="FCM_MSG",L=(R=M,Object(b.__extends)(V,R),V.prototype.onPush=function(e){e.waitUntil(this.onPush_(e))},V.prototype.onSubChange=function(e){e.waitUntil(this.onSubChange_(e))},V.prototype.onNotificationClick=function(e){e.waitUntil(this.onNotificationClick_(e))},V.prototype.onPush_=function(s){return Object(b.__awaiter)(this,void 0,void 0,function(){var t,r,n,o,i,a;return Object(b.__generator)(this,function(e){switch(e.label){case 0:if(!s.data)return[2];try{t=s.data.json()}catch(e){return[2]}return[4,this.hasVisibleClients_()];case 1:return e.sent()?[2,this.sendMessageToWindowClients_(t)]:(r=this.getNotificationData_(t))?(n=r.title||"",[4,this.getSWRegistration_()]):[3,3];case 2:return o=e.sent(),i=r.actions,a=Notification.maxActions,i&&a&&i.length>a&&console.warn("This browser only supports "+a+" actions.The remaining actions will not be displayed."),[2,o.showNotification(n,r)];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:return e.sent(),[2];case 5:return[2]}})})},V.prototype.onSubChange_=function(e){return Object(b.__awaiter)(this,void 0,void 0,function(){var t,r,n,o;return Object(b.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.getSWRegistration_()];case 1:return t=e.sent(),[3,3];case 2:throw r=e.sent(),v.create("unable-to-resubscribe",{errorInfo:r});case 3:return e.trys.push([3,5,,8]),[4,t.pushManager.getSubscription()];case 4:return e.sent(),[3,8];case 5:return n=e.sent(),[4,this.getTokenDetailsModel().getTokenDetailsFromSWScope(t.scope)];case 6:if(!(o=e.sent()))throw n;return[4,this.deleteToken(o.fcmToken)];case 7:throw e.sent(),n;case 8:return[2]}})})},V.prototype.onNotificationClick_=function(i){return Object(b.__awaiter)(this,void 0,void 0,function(){var t,r,n,o;return Object(b.__generator)(this,function(e){switch(e.label){case 0:return i.notification&&i.notification.data&&i.notification.data[F]?i.action?[2]:(i.stopImmediatePropagation(),i.notification.close(),(t=i.notification.data[F]).notification&&(r=t.fcmOptions&&t.fcmOptions.link||t.notification.click_action)?[4,this.getWindowClient_(r)]:[2]):[2];case 1:return(n=e.sent())?[3,3]:[4,self.clients.openWindow(r)];case 2:return n=e.sent(),[3,5];case 3:return[4,n.focus()];case 4:n=e.sent(),e.label=5;case 5:return n?(delete t.notification,delete t.fcmOptions,o=B(a.NOTIFICATION_CLICKED,t),[2,this.attemptToMessageClient_(n,o)]):[2]}})})},V.prototype.getNotificationData_=function(e){var t;if(e&&"object"==typeof e.notification){var r=Object(b.__assign)({},e.notification);return r.data=Object(b.__assign)({},e.notification.data,((t={})[F]=e,t)),r}},V.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw v.create("bg-handler-function-expected");this.bgMessageHandler=e},V.prototype.getWindowClient_=function(i){return Object(b.__awaiter)(this,void 0,void 0,function(){var t,r,n,o;return Object(b.__generator)(this,function(e){switch(e.label){case 0:return t=new URL(i,self.location.href).href,[4,W()];case 1:for(r=e.sent(),n=null,o=0;o<r.length;o++)if(new URL(r[o].url,self.location.href).href===t){n=r[o];break}return[2,n]}})})},V.prototype.attemptToMessageClient_=function(t,r){return Object(b.__awaiter)(this,void 0,void 0,function(){return Object(b.__generator)(this,function(e){if(!t)throw v.create("no-window-client-to-msg");return t.postMessage(r),[2]})})},V.prototype.hasVisibleClients_=function(){return Object(b.__awaiter)(this,void 0,void 0,function(){return Object(b.__generator)(this,function(e){switch(e.label){case 0:return[4,W()];case 1:return[2,e.sent().some(function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")})]}})})},V.prototype.sendMessageToWindowClients_=function(o){return Object(b.__awaiter)(this,void 0,void 0,function(){var t,r,n=this;return Object(b.__generator)(this,function(e){switch(e.label){case 0:return[4,W()];case 1:return t=e.sent(),r=B(a.PUSH_MSG_RECEIVED,o),[4,Promise.all(t.map(function(e){return n.attemptToMessageClient_(e,r)}))];case 2:return e.sent(),[2]}})})},V.prototype.getSWRegistration_=function(){return Object(b.__awaiter)(this,void 0,void 0,function(){return Object(b.__generator)(this,function(e){return[2,self.registration]})})},V.prototype.getPublicVapidKey_=function(){return Object(b.__awaiter)(this,void 0,void 0,function(){var t,r;return Object(b.__generator)(this,function(e){switch(e.label){case 0:return[4,this.getSWRegistration_()];case 1:if(!(t=e.sent()))throw v.create("sw-registration-expected");return[4,this.getVapidDetailsModel().getVapidFromSWScope(t.scope)];case 2:return null==(r=e.sent())?[2,y]:[2,r]}})})},V);function V(e){var t=R.call(this,e)||this;return t.bgMessageHandler=null,self.addEventListener("push",function(e){t.onPush(e)}),self.addEventListener("pushsubscriptionchange",function(e){t.onSubChange(e)}),self.addEventListener("notificationclick",function(e){t.onNotificationClick(e)}),t}function W(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function B(e,t){var r;return(r={})[o.TYPE_OF_MSG]=e,r[o.DATA]=t,r
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
 */}var U,K,z,H=(U=M,Object(b.__extends)(G,U),G.prototype.requestPermission=function(){return Object(b.__awaiter)(this,void 0,void 0,function(){var t;return Object(b.__generator)(this,function(e){switch(e.label){case 0:return"granted"===this.getNotificationPermission_()?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(t=e.sent()))return[2];throw"denied"===t?v.create("permission-blocked"):v.create("permission-default")}})})},G.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw v.create("sw-registration-expected");if(null!=this.registrationToUse)throw v.create("use-sw-before-get-token");this.registrationToUse=e},G.prototype.usePublicVapidKey=function(e){if("string"!=typeof e)throw v.create("invalid-public-vapid-key");if(null!=this.publicVapidKeyToUse)throw v.create("use-public-key-before-get-token");var t=d(e);if(65!==t.length)throw v.create("public-vapid-key-decryption-failed");this.publicVapidKeyToUse=t},G.prototype.onMessage=function(e,t,r){return"function"==typeof e?this.onMessageInternal(e,t,r):this.onMessageInternal(e)},G.prototype.onTokenRefresh=function(e,t,r){return"function"==typeof e?this.onTokenRefreshInternal(e,t,r):this.onTokenRefreshInternal(e)},G.prototype.waitForRegistrationToActivate_=function(n){var o=n.installing||n.waiting||n.active;return new Promise(function(e,t){if(o)if("activated"!==o.state)if("redundant"!==o.state){var r=function(){if("activated"===o.state)e(n);else{if("redundant"!==o.state)return;t(v.create("sw-reg-redundant"))}o.removeEventListener("statechange",r)};o.addEventListener("statechange",r)}else t(v.create("sw-reg-redundant"));else e(n);else t(v.create("no-sw-in-reg"))})},G.prototype.getSWRegistration_=function(){var t=this;return this.registrationToUse?this.waitForRegistrationToActivate_(this.registrationToUse):(this.registrationToUse=null,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}).catch(function(e){throw v.create("failed-serviceworker-registration",{browserErrorMessage:e.message})}).then(function(e){return t.waitForRegistrationToActivate_(e).then(function(){return(t.registrationToUse=e).update(),e})}))},G.prototype.getPublicVapidKey_=function(){return Object(b.__awaiter)(this,void 0,void 0,function(){return Object(b.__generator)(this,function(e){return this.publicVapidKeyToUse?[2,this.publicVapidKeyToUse]:[2,y]})})},G.prototype.setupSWMessageListener_=function(){var n=this;navigator.serviceWorker.addEventListener("message",function(e){if(e.data&&e.data[o.TYPE_OF_MSG]){var t=e.data;switch(t[o.TYPE_OF_MSG]){case a.PUSH_MSG_RECEIVED:case a.NOTIFICATION_CLICKED:var r=t[o.DATA];n.messageObserver&&n.messageObserver.next(r)}}},!1)},G);function G(e){var t=U.call(this,e)||this;return t.registrationToUse=null,t.publicVapidKeyToUse=null,t.messageObserver=null,t.tokenRefreshObserver=null,t.onMessageInternal=Object(f.createSubscribe)(function(e){t.messageObserver=e}),t.onTokenRefreshInternal=Object(f.createSubscribe)(function(e){t.tokenRefreshObserver=e}),t.setupSWMessageListener_(),t}function q(){return self&&"ServiceWorkerGlobalScope"in self?"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}K=u.a,z={isSupported:q},K.INTERNAL.registerService("messaging",function(e){if(!q())throw v.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new L(e):new H(e)},z)}});