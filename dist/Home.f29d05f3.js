parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ppid":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;var e=a(require("react")),t=require("react-router-dom");function a(e){return e&&e.__esModule?e:{default:e}}var r=[{title:"Lazyload Components",path:"lazyload"},{title:"keepalive",path:"keepalive"},{title:"LazyLoadImage",path:"LazyLoadImage"},{title:"concurrentrestrictor",path:"concurrentrestrictor"},{title:"xxx",path:"xxx"}];function l(){return e.default.createElement(e.default.Fragment,null,e.default.createElement("ul",{className:"nav"},r.map(function(a,r){var l=a.title,c=a.path;return e.default.createElement("li",{className:"nav-item",key:r},e.default.createElement("div",{className:"card"},e.default.createElement("div",{className:"card-header"},e.default.createElement("div",{className:"card-title h5"},e.default.createElement(t.Link,{to:"/".concat(c)},l)))))})))}
},{"react":"HdMw","react-router-dom":"rx6s"}]},{},[], null)
//# sourceMappingURL=/Home.f29d05f3.js.map