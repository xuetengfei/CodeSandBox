parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yMRJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=y;var e=r(require("react"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function n(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=c(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){i=!0,o=e},f:function(){try{u||null==r.return||r.return()}finally{if(i)throw o}}}}function a(e,t,r,n,a,o,u){try{var i=e[o](u),c=i.value}catch(l){return void r(l)}i.done?t(c):Promise.resolve(c).then(n,a)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var u=e.apply(t,r);function i(e){a(u,n,o,i,c,"next",e)}function c(e){a(u,n,o,i,c,"throw",e)}i(void 0)})}}function u(e,t){return s(e)||f(e,t)||c(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}function s(e){if(Array.isArray(e))return e}var d="https://httpbin.org/get?id=",m=Array.from(Array(9)).map(function(e,t){return"".concat(d).concat(t+1)});function p(e){return fetch(e).then(function(e){return e.json()}).catch(function(e){return console.error(e)})}function y(){var t=u((0,e.useState)(null),2),r=t[0],a=t[1],i=u((0,e.useState)(0),2),c=i[0],l=i[1];function f(){return(f=o(regeneratorRuntime.mark(function e(t,r,a){var o,u,i,c,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=[],u=[],i=n(r),e.prev=3,f=regeneratorRuntime.mark(function e(){var r,n,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=c.value,n=a(r),o.push(n),i=n.then(function(e){l(function(e){return e+1}),u.splice(u.indexOf(i),1)}),u.push(i),!(u.length>=t)){e.next=8;break}return e.next=8,Promise.race(u);case 8:case"end":return e.stop()}},e)}),i.s();case 6:if((c=i.n()).done){e.next=10;break}return e.delegateYield(f(),"t0",8);case 8:e.next=6;break;case 10:e.next=15;break;case 12:e.prev=12,e.t1=e.catch(3),i.e(e.t1);case 15:return e.prev=15,i.f(),e.finish(15);case 18:return e.abrupt("return",Promise.all(o));case 19:case"end":return e.stop()}},e,null,[[3,12,15,18]])}))).apply(this,arguments)}return e.default.createElement("div",null,e.default.createElement("h2",null,"concurrency limit"),e.default.createElement("div",{className:"toast toast-success"},"Clicking the button below will initiate the request. There were nine requests and the maximum concurrency control was 3. During the request process, the request will always be processed at the maximum number of concurrent times, reducing the request time to the maximum possible extent. Open the console and view Network Waterfall"),e.default.createElement("div",{className:"divider"}),e.default.createElement("div",null,e.default.createElement("button",{className:"btn badge",onClick:function(){l(0),a(null),function(e,t,r){return f.apply(this,arguments)}(3,m,p).then(function(e){console.log("ret: ",e),a(e.map(function(e){return{args:e.args}}))})},"data-badge":c},"fetch Data")),e.default.createElement("div",null,e.default.createElement("ul",null,r&&r.map(function(t,r){return e.default.createElement("li",{key:r},JSON.stringify(t,null,2))}))))}
},{"react":"HdMw"}]},{},[], null)
//# sourceMappingURL=/ConcurrentRestrictor.5e10f881.js.map