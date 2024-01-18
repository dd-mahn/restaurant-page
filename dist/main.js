/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/v1_6.png */ "./src/images/v1_6.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/about.png */ "./src/images/about.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --background-color: #3C462D;
    --text-color: #D2CABC;
    --text-color-heading: #D8A353;
    --layer-color-1: #475137;
    --layer-color-2: #54623F;
    --btn-color: #6E8051;
    --border-radius: 5px;

}

body{
    height: 100vh;
    font-family: Crimson Text;
    font-size: 20px;
    margin: 0;
    padding: 0;
    background: var(--background-color);
    color: var(--text-color);
}
/* BASE CLASS */
.primary__btn{
    background: var(--btn-color);
    color: var(--text-color);
}

.secondary__btn{
    background: var(--text-color);
    color: var(--btn-color);
}

.d-off{
    display: none !important;
}
/* HEADER SECTION START */

body .header{
    height: 3.5rem;
    background: var(--text-color);
    color: var(--background-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    position: sticky;
    z-index:3;
    top:0;
}

.header__nav{
    display: flex;
}

.header__nav-item{
    padding: 0 1.5rem;
    font-size: 1.6rem;
    font-family: Italianno;
}

.header__nav-item:hover{
    border-bottom: 3px solid var(--btn-color);
    cursor: pointer;
}

@keyframes slide-right-to-left {
    from{
        transform: translateX(50%);
        opacity: 0;
    }
    to{
        transform: translateX(0%);
        opacity: 1;
    }
}

@keyframes slide-left-to-right {
    from{
        transform: translateX(-50%);
        opacity: 0;
    }
    to{
        transform: translateX(0%);
        opacity: 1;
    }
}
/* HEADER SECTION END*/

/* HERO SECTION START */
.hero{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.hero__img{
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 40%;
    height: 100%;
    animation: slide-right-to-left linear 1s;
}

.hero__content{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    width: 60%;
    animation: slide-left-to-right linear 1s;
}

.hero__content-block{
    width: 40%;
    height: 25rem;
    background: var(--layer-color-1);
    position: relative;
}

.hero__content-block span{
    font-family: Italianno;
    font-size: 4rem;
    color: var(--text-color-heading);
    position: absolute;
    top: -3.4rem;
    left: -0.5rem;
}

.hero__content-block p{
    position: absolute;
    width: 25rem;
    top: 2rem;
    left: -5rem;
    font-size: 1.2rem;
}

.hero__content-block div{
    position: absolute;
    top: 15rem;
    left: -5.5rem;
}

.hero__content-block > div > button{
    font-family: Crimson Text;
    font-weight: 600;
    width: 150px;
    padding: 1rem;
    margin:0 .5rem;
    border:none;
    border-radius: var(--border-radius);
    font-size: 1.1rem;
}

.hero__content-block > div > button:hover{
    opacity:0.8;
    transition:.3s;
    cursor: pointer;
}

.ptn1{
    position: absolute;
    top: 10.5rem;
    left:0;
}

.ptn1 img{
    width: 13rem;
    opacity: 0.6;
}

.ptn2{
    position: absolute;
    right: 13rem;
    top: 29rem;
}

.ptn2 img{
    opacity:0.8;
}

.ptn3{
    position: absolute;
    bottom: 5rem;
    left: 5rem
}
/* HERO SECTION END */

/* MENU SECTION START */
.menu{
    position: relative;
    height: 100vh;
}

.menu > img{
    position: absolute;
    z-index: 2;
    top:1.5rem;
    width: 15%;
    animation: slide-left-to-right linear 1s;
}

.menu__back-block{
    width: 80%;
    height: 90vh;
    background-color: var(--layer-color-1);
    position: absolute;
    top: 2rem;
    z-index: 1;
}

.menu__text-block{
    display: flex;
    flex-direction: column;
    align-items: end;
    text-align: right;
    width: 18rem;
    position: absolute;
    right: 5rem;
    z-index: 2;
    top: 2rem;
    animation: slide-right-to-left linear 1s;
}

.menu__text-block span{
    font-size: 3rem;
    color: var(--text-color-heading);
    font-family: Italianno;
}

.menu__text-block p{
    font-size:1.4rem;
    margin: 0;
}

.menu__best-block{
    background: var(--layer-color-2);
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top:6rem;
    padding:1rem 0 2rem;
    z-index: 2;
    animation: slide-left-to-right linear 1s;

}

.menu__best-block > span{
    font-size: 3rem;
    font-family: Italianno;
    color: var(--text-color-heading);
    margin-bottom: 2rem;
}

.grid__block{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
    gap: 3rem;
}

.best__card{
    width: 350px;
    height: 300px;
    position: relative;
    background: var(--text-color);
    color: var(--layer-color-2);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
}

.best__card .dish__img{
    width: 100%;
    height: 250px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    
}

.best__card span{
    text-align: center;
    margin-top: .5rem;
}

.best__card .star{
    position: absolute;
    top: .5rem;
    left: .5rem;
}

.menu__list-block{
    background: var(--layer-color-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    right: 0;
    position: absolute;
    top: 14rem;
    z-index: 2;
    animation: slide-right-to-left linear 1s;

}

.menu__list-block span{
    color:var(--text-color-heading);
    font-size: 1.2rem;
    text-align: center;
    padding: 1rem 0;
}

.menu__list-block ul{
    padding: 0;
    margin: 0;
}

.menu__list-block li{
    list-style: none;
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: 1.2rem;
}

.menu__list-block > img{
    width: 100%;
}

/* MENU SECTION END */

/* ABOUT SECTION START */
.about{
    position: relative;
    height: 100vh;
    font-size: 1.2rem;
}

.about__img{
    position: absolute;
    width: 50%;
    height: 100%;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
    z-index: 0;
    top:0;
    left:0;
    animation: slide-left-to-right linear 1s;
}

.about__content{
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 40%;
    right: 10rem;
    top: 5rem;
    padding: 2rem;
    background: var(--layer-color-2);
    animation: slide-right-to-left linear 1s;
}

.about__content > span{
    font-size: 3rem;
    font-family:Italianno;
    color: var(--text-color-heading);
}

.about__content > img{
    margin: 3rem 0;
}

.about__content ul{
    padding: 0;
    margin: 0;
    list-style: none;
}

.about__content > ul > li{
    text-align: center;

}

.about > img {
    position: absolute ;
    right: 0;
    bottom: 5rem;
    animation: slide-right-to-left linear 1s;
}



/* ABOUT SECTION END */

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --background-color: #3C462D;\n    --text-color: #D2CABC;\n    --text-color-heading: #D8A353;\n    --layer-color-1: #475137;\n    --layer-color-2: #54623F;\n    --btn-color: #6E8051;\n    --border-radius: 5px;\n\n}\n\nbody{\n    height: 100vh;\n    font-family: Crimson Text;\n    font-size: 20px;\n    margin: 0;\n    padding: 0;\n    background: var(--background-color);\n    color: var(--text-color);\n}\n/* BASE CLASS */\n.primary__btn{\n    background: var(--btn-color);\n    color: var(--text-color);\n}\n\n.secondary__btn{\n    background: var(--text-color);\n    color: var(--btn-color);\n}\n\n.d-off{\n    display: none !important;\n}\n/* HEADER SECTION START */\n\nbody .header{\n    height: 3.5rem;\n    background: var(--text-color);\n    color: var(--background-color);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 2rem;\n    position: sticky;\n    z-index:3;\n    top:0;\n}\n\n.header__nav{\n    display: flex;\n}\n\n.header__nav-item{\n    padding: 0 1.5rem;\n    font-size: 1.6rem;\n    font-family: Italianno;\n}\n\n.header__nav-item:hover{\n    border-bottom: 3px solid var(--btn-color);\n    cursor: pointer;\n}\n\n@keyframes slide-right-to-left {\n    from{\n        transform: translateX(50%);\n        opacity: 0;\n    }\n    to{\n        transform: translateX(0%);\n        opacity: 1;\n    }\n}\n\n@keyframes slide-left-to-right {\n    from{\n        transform: translateX(-50%);\n        opacity: 0;\n    }\n    to{\n        transform: translateX(0%);\n        opacity: 1;\n    }\n}\n/* HEADER SECTION END*/\n\n/* HERO SECTION START */\n.hero{\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n}\n\n.hero__img{\n    background: url(\"./images/v1_6.png\");\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;\n    width: 40%;\n    height: 100%;\n    animation: slide-right-to-left linear 1s;\n}\n\n.hero__content{\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 2rem 0;\n    width: 60%;\n    animation: slide-left-to-right linear 1s;\n}\n\n.hero__content-block{\n    width: 40%;\n    height: 25rem;\n    background: var(--layer-color-1);\n    position: relative;\n}\n\n.hero__content-block span{\n    font-family: Italianno;\n    font-size: 4rem;\n    color: var(--text-color-heading);\n    position: absolute;\n    top: -3.4rem;\n    left: -0.5rem;\n}\n\n.hero__content-block p{\n    position: absolute;\n    width: 25rem;\n    top: 2rem;\n    left: -5rem;\n    font-size: 1.2rem;\n}\n\n.hero__content-block div{\n    position: absolute;\n    top: 15rem;\n    left: -5.5rem;\n}\n\n.hero__content-block > div > button{\n    font-family: Crimson Text;\n    font-weight: 600;\n    width: 150px;\n    padding: 1rem;\n    margin:0 .5rem;\n    border:none;\n    border-radius: var(--border-radius);\n    font-size: 1.1rem;\n}\n\n.hero__content-block > div > button:hover{\n    opacity:0.8;\n    transition:.3s;\n    cursor: pointer;\n}\n\n.ptn1{\n    position: absolute;\n    top: 10.5rem;\n    left:0;\n}\n\n.ptn1 img{\n    width: 13rem;\n    opacity: 0.6;\n}\n\n.ptn2{\n    position: absolute;\n    right: 13rem;\n    top: 29rem;\n}\n\n.ptn2 img{\n    opacity:0.8;\n}\n\n.ptn3{\n    position: absolute;\n    bottom: 5rem;\n    left: 5rem\n}\n/* HERO SECTION END */\n\n/* MENU SECTION START */\n.menu{\n    position: relative;\n    height: 100vh;\n}\n\n.menu > img{\n    position: absolute;\n    z-index: 2;\n    top:1.5rem;\n    width: 15%;\n    animation: slide-left-to-right linear 1s;\n}\n\n.menu__back-block{\n    width: 80%;\n    height: 90vh;\n    background-color: var(--layer-color-1);\n    position: absolute;\n    top: 2rem;\n    z-index: 1;\n}\n\n.menu__text-block{\n    display: flex;\n    flex-direction: column;\n    align-items: end;\n    text-align: right;\n    width: 18rem;\n    position: absolute;\n    right: 5rem;\n    z-index: 2;\n    top: 2rem;\n    animation: slide-right-to-left linear 1s;\n}\n\n.menu__text-block span{\n    font-size: 3rem;\n    color: var(--text-color-heading);\n    font-family: Italianno;\n}\n\n.menu__text-block p{\n    font-size:1.4rem;\n    margin: 0;\n}\n\n.menu__best-block{\n    background: var(--layer-color-2);\n    width: 60%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: absolute;\n    top:6rem;\n    padding:1rem 0 2rem;\n    z-index: 2;\n    animation: slide-left-to-right linear 1s;\n\n}\n\n.menu__best-block > span{\n    font-size: 3rem;\n    font-family: Italianno;\n    color: var(--text-color-heading);\n    margin-bottom: 2rem;\n}\n\n.grid__block{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(2,1fr);\n    gap: 3rem;\n}\n\n.best__card{\n    width: 350px;\n    height: 300px;\n    position: relative;\n    background: var(--text-color);\n    color: var(--layer-color-2);\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 1.2rem;\n}\n\n.best__card .dish__img{\n    width: 100%;\n    height: 250px;\n    border-top-right-radius: 15px;\n    border-top-left-radius: 15px;\n    \n}\n\n.best__card span{\n    text-align: center;\n    margin-top: .5rem;\n}\n\n.best__card .star{\n    position: absolute;\n    top: .5rem;\n    left: .5rem;\n}\n\n.menu__list-block{\n    background: var(--layer-color-2);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 25%;\n    right: 0;\n    position: absolute;\n    top: 14rem;\n    z-index: 2;\n    animation: slide-right-to-left linear 1s;\n\n}\n\n.menu__list-block span{\n    color:var(--text-color-heading);\n    font-size: 1.2rem;\n    text-align: center;\n    padding: 1rem 0;\n}\n\n.menu__list-block ul{\n    padding: 0;\n    margin: 0;\n}\n\n.menu__list-block li{\n    list-style: none;\n    margin-bottom: 1.5rem;\n    text-align: center;\n    font-size: 1.2rem;\n}\n\n.menu__list-block > img{\n    width: 100%;\n}\n\n/* MENU SECTION END */\n\n/* ABOUT SECTION START */\n.about{\n    position: relative;\n    height: 100vh;\n    font-size: 1.2rem;\n}\n\n.about__img{\n    position: absolute;\n    width: 50%;\n    height: 100%;\n    background: url(\"./images/about.png\");\n    background-size: cover;\n    z-index: 0;\n    top:0;\n    left:0;\n    animation: slide-left-to-right linear 1s;\n}\n\n.about__content{\n    position: absolute;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    width: 40%;\n    right: 10rem;\n    top: 5rem;\n    padding: 2rem;\n    background: var(--layer-color-2);\n    animation: slide-right-to-left linear 1s;\n}\n\n.about__content > span{\n    font-size: 3rem;\n    font-family:Italianno;\n    color: var(--text-color-heading);\n}\n\n.about__content > img{\n    margin: 3rem 0;\n}\n\n.about__content ul{\n    padding: 0;\n    margin: 0;\n    list-style: none;\n}\n\n.about__content > ul > li{\n    text-align: center;\n\n}\n\n.about > img {\n    position: absolute ;\n    right: 0;\n    bottom: 5rem;\n    animation: slide-right-to-left linear 1s;\n}\n\n\n\n/* ABOUT SECTION END */\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _images_about_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/about.svg */ "./src/images/about.svg");
/* harmony import */ var _images_line_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/line.svg */ "./src/images/line.svg");



function about() {
    const aboutSection = document.createElement('div');
    aboutSection.classList.add('about');

    const aboutImage = document.createElement('div');
    aboutImage.classList.add('about__img');

    const aboutContent = document.createElement('div');
    aboutContent.classList.add('about__content');

    const aboutTitle = document.createElement('span');
    aboutTitle.textContent = 'About us';

    const aboutText = document.createElement('p');
    aboutText.textContent = `Nestled in the heart of vibrant Hanoi, GreenBites is more than just a restaurant; it's a haven for plant-based enthusiasts and culinary explorers alike. Our address, located at [Address], serves as a cozy retreat where sustainability meets exceptional taste. Come join us in embracing the joy of cruelty-free dining and the thriving energy of Hanoi at GreenBites.`;

    const aboutImg = document.createElement('img');
    aboutImg.setAttribute('src', _images_about_svg__WEBPACK_IMPORTED_MODULE_0__);
    aboutImg.setAttribute('alt', '');

    const contactList = document.createElement('ul');
    
    const contactItems = [
        'Contact',
        'Phone: +84 123456778',
        'Email: bevegan@gmail.com',
        'github.com/dd-mahn'
    ];

    contactItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        contactList.appendChild(listItem);
    });

    const lineImage = document.createElement('img');
    lineImage.setAttribute('src', _images_line_svg__WEBPACK_IMPORTED_MODULE_1__);
    lineImage.setAttribute('alt', '');

    aboutContent.appendChild(aboutTitle);
    aboutContent.appendChild(aboutText);
    aboutContent.appendChild(aboutImg);
    aboutContent.appendChild(contactList);

    aboutSection.appendChild(aboutImage);
    aboutSection.appendChild(aboutContent);
    aboutSection.appendChild(lineImage);

    return aboutSection;
}


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.svg */ "./src/images/logo.svg");


function header() {
    const headerBar = document.createElement('div');
    headerBar.classList.add('header');

    const headerLogo = document.createElement('div');
    headerLogo.classList.add('header__logo');
    headerLogo.innerHTML = `<img src="${_images_logo_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="Logo">`;

    const headerNav = document.createElement('div');
    headerNav.classList.add('header__nav');

    const navItems = [
        { class: 'nav1', text: 'Home' },
        { class: 'nav2', text: 'Menu' },
        { class: 'nav3', text: 'About' }
    ];

    navItems.forEach(item => {
        const navItem = document.createElement('div');
        navItem.classList.add('header__nav-item', item.class);
        navItem.innerHTML = `<span>${item.text}</span>`;
        headerNav.appendChild(navItem);
    });

    headerBar.appendChild(headerLogo);
    headerBar.appendChild(headerNav);

    return headerBar;
}


/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hero)
/* harmony export */ });
/* harmony import */ var _images_line_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/line.svg */ "./src/images/line.svg");


function hero() {
    const heroSection = document.createElement('div');
    heroSection.classList.add('hero');

    const heroContent = document.createElement('div');
    heroContent.classList.add('hero__content');

    const heroTextBlock = document.createElement('div');
    heroTextBlock.classList.add('hero__content-block');
    heroTextBlock.innerHTML = `
        <span>We do vegan</span>
        <p>Welcome to GreenBites, Hanoi's plant-based paradise since 2020. Discover a culinary haven in the heart of the city, where vibrant salads and hearty mains celebrate the artistry of plant-based cuisine. Join us for a taste of cruelty-free dining at GreenBites.</p>
        <div>
            <button class="primary__btn menu__btn">Our Menu</button>
            <button class="secondary__btn about__btn">About us</button>
        </div>
    `;

    const ptn1 = document.createElement('div');
    ptn1.classList.add('ptn1');
    ptn1.innerHTML = `<img src="${_images_line_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="Pattern 1">`;

    const ptn2 = document.createElement('div');
    ptn2.classList.add('ptn2');
    ptn2.innerHTML = `<img src="${_images_line_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="Pattern 2">`;

    const ptn3 = document.createElement('div');
    ptn3.classList.add('ptn3');
    ptn3.innerHTML = `<img src="${_images_line_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="Pattern 3">`;

    heroContent.appendChild(heroTextBlock);
    heroContent.appendChild(ptn1);
    heroContent.appendChild(ptn2);
    heroContent.appendChild(ptn3);

    const heroImage = document.createElement('div');
    heroImage.classList.add('hero__img');

    heroSection.appendChild(heroContent);
    heroSection.appendChild(heroImage);

    return heroSection;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _images_line_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/line.svg */ "./src/images/line.svg");
/* harmony import */ var _images_leaf_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/leaf.svg */ "./src/images/leaf.svg");
/* harmony import */ var _images_star_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/star.svg */ "./src/images/star.svg");
/* harmony import */ var _images_tofu_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/tofu.png */ "./src/images/tofu.png");
/* harmony import */ var _images_cauli_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/cauli.png */ "./src/images/cauli.png");
/* harmony import */ var _images_biryani_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/biryani.png */ "./src/images/biryani.png");
/* harmony import */ var _images_frankies_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/frankies.png */ "./src/images/frankies.png");








function menu() {
    const menuSection = document.createElement('div');
    menuSection.classList.add('menu');

    const lineImageTop = document.createElement('img');
    lineImageTop.setAttribute('src', _images_line_svg__WEBPACK_IMPORTED_MODULE_0__);
    lineImageTop.setAttribute('alt', '');

    const textBlock = document.createElement('div');
    textBlock.classList.add('menu__text-block');
    textBlock.innerHTML = `
        <span>Our Menu</span>
        <p>Embark on a flavorful journey at GreenBites! Our plant-based menu weaves tales of diverse, innovative delights.</p>
    `;

    const bestBlock = document.createElement('div');
    bestBlock.classList.add('menu__best-block');

    const bestSellerSpan = document.createElement('span');
    bestSellerSpan.textContent = 'Best Seller';

    const gridBlock = document.createElement('div');
    gridBlock.classList.add('grid__block');

    const bestCards = [
        { imgStar: _images_star_svg__WEBPACK_IMPORTED_MODULE_2__, imgDish: _images_tofu_png__WEBPACK_IMPORTED_MODULE_3__, dishName: 'Crispy BBQ Tofu Sandwich' },
        { imgStar: _images_star_svg__WEBPACK_IMPORTED_MODULE_2__, imgDish: _images_cauli_png__WEBPACK_IMPORTED_MODULE_4__, dishName: 'Whole Roasted Cauliflower' },
        { imgStar: _images_star_svg__WEBPACK_IMPORTED_MODULE_2__, imgDish: _images_biryani_png__WEBPACK_IMPORTED_MODULE_5__, dishName: 'Vegetable Biryani' },
        { imgStar: _images_star_svg__WEBPACK_IMPORTED_MODULE_2__, imgDish: _images_frankies_png__WEBPACK_IMPORTED_MODULE_6__, dishName: 'Frankies!(Bombay Burritos)' }
    ];

    bestCards.forEach(card => {
        const bestCard = document.createElement('div');
        bestCard.classList.add('best__card');

        const imgStar = document.createElement('img');
        imgStar.setAttribute('src', card.imgStar);
        imgStar.classList.add('star');
        
        const imgDish = document.createElement('img');
        imgDish.setAttribute('src', card.imgDish);
        imgDish.classList.add('dish__img');
        
        const spanDishName = document.createElement('span');
        spanDishName.textContent = card.dishName;

        bestCard.appendChild(imgStar);
        bestCard.appendChild(imgDish);
        bestCard.appendChild(spanDishName);

        gridBlock.appendChild(bestCard);
    });

    bestBlock.appendChild(bestSellerSpan);
    bestBlock.appendChild(gridBlock);

    const listBlock = document.createElement('div');
    listBlock.classList.add('menu__list-block');

    const listHeadFood = document.createElement('span');
    listHeadFood.classList.add('list__head');
    listHeadFood.innerHTML = `Food <img src="${_images_leaf_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="">`;

    const listItemsFood = document.createElement('ul');
    listItemsFood.classList.add('list__items');

    const foodItems = [
        'Quinoa-Stuffed Bell Peppers',
        'Lentil and Vegetable Curry',
        'Zucchini Noodle Primavera',
        'Chickpea and Spinach Wrap',
        'Coconut Lime Tofu Skewers'
    ];

    foodItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItemsFood.appendChild(listItem);
    });

    const listHeadDrinks = document.createElement('span');
    listHeadDrinks.classList.add('list__head');
    listHeadDrinks.innerHTML = `Drinks <img src="${_images_leaf_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="">`;

    const listItemsDrinks = document.createElement('ul');
    listItemsDrinks.classList.add('list__items');

    const drinkItems = [
        'Berry Bliss Smoothie',
        'Cucumber Mint Refresher',
        'Golden Turmeric Latte'
    ];

    drinkItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItemsDrinks.appendChild(listItem);
    });

    const lineImageBottom = document.createElement('img');
    lineImageBottom.setAttribute('src', _images_line_svg__WEBPACK_IMPORTED_MODULE_0__);
    lineImageBottom.setAttribute('alt', '');

    listBlock.appendChild(listHeadFood);
    listBlock.appendChild(listItemsFood);
    listBlock.appendChild(listHeadDrinks);
    listBlock.appendChild(listItemsDrinks);
    listBlock.appendChild(lineImageBottom);

    const backBlock = document.createElement('div');
    backBlock.classList.add('menu__back-block');

    menuSection.appendChild(lineImageTop);
    menuSection.appendChild(textBlock);
    menuSection.appendChild(bestBlock);
    menuSection.appendChild(listBlock);
    menuSection.appendChild(backBlock);

    return menuSection;
}


/***/ }),

/***/ "./src/images/about.png":
/*!******************************!*\
  !*** ./src/images/about.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3675d53b353687cf7959.png";

/***/ }),

/***/ "./src/images/about.svg":
/*!******************************!*\
  !*** ./src/images/about.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8373e93dbd95b55ea01.svg";

/***/ }),

/***/ "./src/images/biryani.png":
/*!********************************!*\
  !*** ./src/images/biryani.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef62edd3240d06d3fb07.png";

/***/ }),

/***/ "./src/images/cauli.png":
/*!******************************!*\
  !*** ./src/images/cauli.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16f02f5b0b8e02ca16b3.png";

/***/ }),

/***/ "./src/images/frankies.png":
/*!*********************************!*\
  !*** ./src/images/frankies.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70268861d13a30a32ad4.png";

/***/ }),

/***/ "./src/images/leaf.svg":
/*!*****************************!*\
  !*** ./src/images/leaf.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ab934cc4aa842d340a0.svg";

/***/ }),

/***/ "./src/images/line.svg":
/*!*****************************!*\
  !*** ./src/images/line.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b84ffd5bf650f7055a1.svg";

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d37fcc34b3549c26c998.svg";

/***/ }),

/***/ "./src/images/star.svg":
/*!*****************************!*\
  !*** ./src/images/star.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "deb472a6ba89944a84b7.svg";

/***/ }),

/***/ "./src/images/tofu.png":
/*!*****************************!*\
  !*** ./src/images/tofu.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16e04f0a3f402e06afef.png";

/***/ }),

/***/ "./src/images/v1_6.png":
/*!*****************************!*\
  !*** ./src/images/v1_6.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6c66ebfbb21ab7908bf.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _hero_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero.js */ "./src/hero.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ "./src/about.js");






const content = document.getElementById('content')
const headerBar = (0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
const heroSection = (0,_hero_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
const menuSection = (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
const aboutSection = (0,_about_js__WEBPACK_IMPORTED_MODULE_4__["default"])()

content.appendChild(headerBar)
content.appendChild(heroSection)
content.appendChild(menuSection)
content.appendChild(aboutSection)

const menuBtn = heroSection.querySelector('.menu__btn')
const aboutBtn = heroSection.querySelector('.about__btn')
const homeNav = headerBar.querySelector('.nav1')
const menuNav = headerBar.querySelector('.nav2')
const aboutNav = headerBar.querySelector('.nav3')


function heroOn(){
    heroSection.classList.remove('d-off')
    menuSection.classList.add('d-off')
    aboutSection.classList.add('d-off')
}

function menuOn(){
    heroSection.classList.add('d-off')
    aboutSection.classList.add('d-off')
    menuSection.classList.remove('d-off')
}

function aboutOn(){
    heroSection.classList.add('d-off')
    aboutSection.classList.remove('d-off')
    menuSection.classList.add('d-off')
}

heroOn()

menuBtn.addEventListener('click', menuOn)
aboutBtn.addEventListener('click', aboutOn)
homeNav.addEventListener('click', heroOn)
menuNav.addEventListener('click', menuOn)
aboutNav.addEventListener('click', aboutOn)


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtHQUFvQztBQUNoRiw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUEsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLGFBQWEsYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLGFBQWEsYUFBYSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFB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IjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVyby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvdjFfNi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9hYm91dC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICMzQzQ2MkQ7XG4gICAgLS10ZXh0LWNvbG9yOiAjRDJDQUJDO1xuICAgIC0tdGV4dC1jb2xvci1oZWFkaW5nOiAjRDhBMzUzO1xuICAgIC0tbGF5ZXItY29sb3ItMTogIzQ3NTEzNztcbiAgICAtLWxheWVyLWNvbG9yLTI6ICM1NDYyM0Y7XG4gICAgLS1idG4tY29sb3I6ICM2RTgwNTE7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG5cbn1cblxuYm9keXtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGZvbnQtZmFtaWx5OiBDcmltc29uIFRleHQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cbi8qIEJBU0UgQ0xBU1MgKi9cbi5wcmltYXJ5X19idG57XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnRuLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG5cbi5zZWNvbmRhcnlfX2J0bntcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYnRuLWNvbG9yKTtcbn1cblxuLmQtb2Zme1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi8qIEhFQURFUiBTRUNUSU9OIFNUQVJUICovXG5cbmJvZHkgLmhlYWRlcntcbiAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB6LWluZGV4OjM7XG4gICAgdG9wOjA7XG59XG5cbi5oZWFkZXJfX25hdntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaGVhZGVyX19uYXYtaXRlbXtcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LWZhbWlseTogSXRhbGlhbm5vO1xufVxuXG4uaGVhZGVyX19uYXYtaXRlbTpob3ZlcntcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tYnRuLWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtcmlnaHQtdG8tbGVmdCB7XG4gICAgZnJvbXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRve1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZS1sZWZ0LXRvLXJpZ2h0IHtcbiAgICBmcm9te1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRve1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cbi8qIEhFQURFUiBTRUNUSU9OIEVORCovXG5cbi8qIEhFUk8gU0VDVElPTiBTVEFSVCAqL1xuLmhlcm97XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhlcm9fX2ltZ3tcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodC10by1sZWZ0IGxpbmVhciAxcztcbn1cblxuLmhlcm9fX2NvbnRlbnR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJyZW0gMDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtbGVmdC10by1yaWdodCBsaW5lYXIgMXM7XG59XG5cbi5oZXJvX19jb250ZW50LWJsb2Nre1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiAyNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1sYXllci1jb2xvci0xKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZXJvX19jb250ZW50LWJsb2NrIHNwYW57XG4gICAgZm9udC1mYW1pbHk6IEl0YWxpYW5ubztcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItaGVhZGluZyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTMuNHJlbTtcbiAgICBsZWZ0OiAtMC41cmVtO1xufVxuXG4uaGVyb19fY29udGVudC1ibG9jayBwe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjVyZW07XG4gICAgdG9wOiAycmVtO1xuICAgIGxlZnQ6IC01cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uaGVyb19fY29udGVudC1ibG9jayBkaXZ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVyZW07XG4gICAgbGVmdDogLTUuNXJlbTtcbn1cblxuLmhlcm9fX2NvbnRlbnQtYmxvY2sgPiBkaXYgPiBidXR0b257XG4gICAgZm9udC1mYW1pbHk6IENyaW1zb24gVGV4dDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1hcmdpbjowIC41cmVtO1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uaGVyb19fY29udGVudC1ibG9jayA+IGRpdiA+IGJ1dHRvbjpob3ZlcntcbiAgICBvcGFjaXR5OjAuODtcbiAgICB0cmFuc2l0aW9uOi4zcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wdG4xe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwLjVyZW07XG4gICAgbGVmdDowO1xufVxuXG4ucHRuMSBpbWd7XG4gICAgd2lkdGg6IDEzcmVtO1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cblxuLnB0bjJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxM3JlbTtcbiAgICB0b3A6IDI5cmVtO1xufVxuXG4ucHRuMiBpbWd7XG4gICAgb3BhY2l0eTowLjg7XG59XG5cbi5wdG4ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDVyZW07XG4gICAgbGVmdDogNXJlbVxufVxuLyogSEVSTyBTRUNUSU9OIEVORCAqL1xuXG4vKiBNRU5VIFNFQ1RJT04gU1RBUlQgKi9cbi5tZW51e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubWVudSA+IGltZ3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMjtcbiAgICB0b3A6MS41cmVtO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1sZWZ0LXRvLXJpZ2h0IGxpbmVhciAxcztcbn1cblxuLm1lbnVfX2JhY2stYmxvY2t7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDkwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF5ZXItY29sb3ItMSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMnJlbTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ubWVudV9fdGV4dC1ibG9ja3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB3aWR0aDogMThyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cmVtO1xuICAgIHotaW5kZXg6IDI7XG4gICAgdG9wOiAycmVtO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtcmlnaHQtdG8tbGVmdCBsaW5lYXIgMXM7XG59XG5cbi5tZW51X190ZXh0LWJsb2NrIHNwYW57XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWhlYWRpbmcpO1xuICAgIGZvbnQtZmFtaWx5OiBJdGFsaWFubm87XG59XG5cbi5tZW51X190ZXh0LWJsb2NrIHB7XG4gICAgZm9udC1zaXplOjEuNHJlbTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5tZW51X19iZXN0LWJsb2Nre1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxheWVyLWNvbG9yLTIpO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo2cmVtO1xuICAgIHBhZGRpbmc6MXJlbSAwIDJyZW07XG4gICAgei1pbmRleDogMjtcbiAgICBhbmltYXRpb246IHNsaWRlLWxlZnQtdG8tcmlnaHQgbGluZWFyIDFzO1xuXG59XG5cbi5tZW51X19iZXN0LWJsb2NrID4gc3BhbntcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZm9udC1mYW1pbHk6IEl0YWxpYW5ubztcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1oZWFkaW5nKTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uZ3JpZF9fYmxvY2t7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwxZnIpO1xuICAgIGdhcDogM3JlbTtcbn1cblxuLmJlc3RfX2NhcmR7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1sYXllci1jb2xvci0yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uYmVzdF9fY2FyZCAuZGlzaF9faW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBcbn1cblxuLmJlc3RfX2NhcmQgc3BhbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLjVyZW07XG59XG5cbi5iZXN0X19jYXJkIC5zdGFye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC41cmVtO1xuICAgIGxlZnQ6IC41cmVtO1xufVxuXG4ubWVudV9fbGlzdC1ibG9ja3tcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1sYXllci1jb2xvci0yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMjUlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE0cmVtO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodC10by1sZWZ0IGxpbmVhciAxcztcblxufVxuXG4ubWVudV9fbGlzdC1ibG9jayBzcGFue1xuICAgIGNvbG9yOnZhcigtLXRleHQtY29sb3ItaGVhZGluZyk7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbn1cblxuLm1lbnVfX2xpc3QtYmxvY2sgdWx7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5tZW51X19saXN0LWJsb2NrIGxpe1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLm1lbnVfX2xpc3QtYmxvY2sgPiBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIE1FTlUgU0VDVElPTiBFTkQgKi9cblxuLyogQUJPVVQgU0VDVElPTiBTVEFSVCAqL1xuLmFib3V0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uYWJvdXRfX2ltZ3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgei1pbmRleDogMDtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjA7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1sZWZ0LXRvLXJpZ2h0IGxpbmVhciAxcztcbn1cblxuLmFib3V0X19jb250ZW50e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNDAlO1xuICAgIHJpZ2h0OiAxMHJlbTtcbiAgICB0b3A6IDVyZW07XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1sYXllci1jb2xvci0yKTtcbiAgICBhbmltYXRpb246IHNsaWRlLXJpZ2h0LXRvLWxlZnQgbGluZWFyIDFzO1xufVxuXG4uYWJvdXRfX2NvbnRlbnQgPiBzcGFue1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LWZhbWlseTpJdGFsaWFubm87XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItaGVhZGluZyk7XG59XG5cbi5hYm91dF9fY29udGVudCA+IGltZ3tcbiAgICBtYXJnaW46IDNyZW0gMDtcbn1cblxuLmFib3V0X19jb250ZW50IHVse1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5hYm91dF9fY29udGVudCA+IHVsID4gbGl7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbi5hYm91dCA+IGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlIDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDVyZW07XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodC10by1sZWZ0IGxpbmVhciAxcztcbn1cblxuXG5cbi8qIEFCT1VUIFNFQ1RJT04gRU5EICovXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIs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SUFDckIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSxxQkFBcUI7O0FBRXJCLHdCQUF3QjtBQUN4QjtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osbURBQXFDO0lBQ3JDLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsS0FBSztJQUNMLE1BQU07SUFDTix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTO0lBQ1QsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFlBQVk7SUFDWix3Q0FBd0M7QUFDNUM7Ozs7QUFJQSxzQkFBc0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzNDNDYyRDtcXG4gICAgLS10ZXh0LWNvbG9yOiAjRDJDQUJDO1xcbiAgICAtLXRleHQtY29sb3ItaGVhZGluZzogI0Q4QTM1MztcXG4gICAgLS1sYXllci1jb2xvci0xOiAjNDc1MTM3O1xcbiAgICAtLWxheWVyLWNvbG9yLTI6ICM1NDYyM0Y7XFxuICAgIC0tYnRuLWNvbG9yOiAjNkU4MDUxO1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6IENyaW1zb24gVGV4dDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcbi8qIEJBU0UgQ0xBU1MgKi9cXG4ucHJpbWFyeV9fYnRue1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idG4tY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5zZWNvbmRhcnlfX2J0bntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1idG4tY29sb3IpO1xcbn1cXG5cXG4uZC1vZmZ7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLyogSEVBREVSIFNFQ1RJT04gU1RBUlQgKi9cXG5cXG5ib2R5IC5oZWFkZXJ7XFxuICAgIGhlaWdodDogMy41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgei1pbmRleDozO1xcbiAgICB0b3A6MDtcXG59XFxuXFxuLmhlYWRlcl9fbmF2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGVhZGVyX19uYXYtaXRlbXtcXG4gICAgcGFkZGluZzogMCAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBmb250LWZhbWlseTogSXRhbGlhbm5vO1xcbn1cXG5cXG4uaGVhZGVyX19uYXYtaXRlbTpob3ZlcntcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWJ0bi1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1yaWdodC10by1sZWZ0IHtcXG4gICAgZnJvbXtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0b3tcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtbGVmdC10by1yaWdodCB7XFxuICAgIGZyb217XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRve1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuLyogSEVBREVSIFNFQ1RJT04gRU5EKi9cXG5cXG4vKiBIRVJPIFNFQ1RJT04gU1RBUlQgKi9cXG4uaGVyb3tcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhlcm9fX2ltZ3tcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2ltYWdlcy92MV82LnBuZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFuaW1hdGlvbjogc2xpZGUtcmlnaHQtdG8tbGVmdCBsaW5lYXIgMXM7XFxufVxcblxcbi5oZXJvX19jb250ZW50e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycmVtIDA7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGFuaW1hdGlvbjogc2xpZGUtbGVmdC10by1yaWdodCBsaW5lYXIgMXM7XFxufVxcblxcbi5oZXJvX19jb250ZW50LWJsb2Nre1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBoZWlnaHQ6IDI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1sYXllci1jb2xvci0xKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGVyb19fY29udGVudC1ibG9jayBzcGFue1xcbiAgICBmb250LWZhbWlseTogSXRhbGlhbm5vO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWhlYWRpbmcpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTMuNHJlbTtcXG4gICAgbGVmdDogLTAuNXJlbTtcXG59XFxuXFxuLmhlcm9fX2NvbnRlbnQtYmxvY2sgcHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjVyZW07XFxuICAgIHRvcDogMnJlbTtcXG4gICAgbGVmdDogLTVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaGVyb19fY29udGVudC1ibG9jayBkaXZ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNXJlbTtcXG4gICAgbGVmdDogLTUuNXJlbTtcXG59XFxuXFxuLmhlcm9fX2NvbnRlbnQtYmxvY2sgPiBkaXYgPiBidXR0b257XFxuICAgIGZvbnQtZmFtaWx5OiBDcmltc29uIFRleHQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luOjAgLjVyZW07XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5oZXJvX19jb250ZW50LWJsb2NrID4gZGl2ID4gYnV0dG9uOmhvdmVye1xcbiAgICBvcGFjaXR5OjAuODtcXG4gICAgdHJhbnNpdGlvbjouM3M7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnB0bjF7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMC41cmVtO1xcbiAgICBsZWZ0OjA7XFxufVxcblxcbi5wdG4xIGltZ3tcXG4gICAgd2lkdGg6IDEzcmVtO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5wdG4ye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxM3JlbTtcXG4gICAgdG9wOiAyOXJlbTtcXG59XFxuXFxuLnB0bjIgaW1ne1xcbiAgICBvcGFjaXR5OjAuODtcXG59XFxuXFxuLnB0bjN7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA1cmVtO1xcbiAgICBsZWZ0OiA1cmVtXFxufVxcbi8qIEhFUk8gU0VDVElPTiBFTkQgKi9cXG5cXG4vKiBNRU5VIFNFQ1RJT04gU1RBUlQgKi9cXG4ubWVudXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWVudSA+IGltZ3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB0b3A6MS41cmVtO1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBhbmltYXRpb246IHNsaWRlLWxlZnQtdG8tcmlnaHQgbGluZWFyIDFzO1xcbn1cXG5cXG4ubWVudV9fYmFjay1ibG9ja3tcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXllci1jb2xvci0xKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDJyZW07XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5tZW51X190ZXh0LWJsb2Nre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgd2lkdGg6IDE4cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1cmVtO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB0b3A6IDJyZW07XFxuICAgIGFuaW1hdGlvbjogc2xpZGUtcmlnaHQtdG8tbGVmdCBsaW5lYXIgMXM7XFxufVxcblxcbi5tZW51X190ZXh0LWJsb2NrIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItaGVhZGluZyk7XFxuICAgIGZvbnQtZmFtaWx5OiBJdGFsaWFubm87XFxufVxcblxcbi5tZW51X190ZXh0LWJsb2NrIHB7XFxuICAgIGZvbnQtc2l6ZToxLjRyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm1lbnVfX2Jlc3QtYmxvY2t7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxheWVyLWNvbG9yLTIpO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDo2cmVtO1xcbiAgICBwYWRkaW5nOjFyZW0gMCAycmVtO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBhbmltYXRpb246IHNsaWRlLWxlZnQtdG8tcmlnaHQgbGluZWFyIDFzO1xcblxcbn1cXG5cXG4ubWVudV9fYmVzdC1ibG9jayA+IHNwYW57XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6IEl0YWxpYW5ubztcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItaGVhZGluZyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5ncmlkX19ibG9ja3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XFxuICAgIGdhcDogM3JlbTtcXG59XFxuXFxuLmJlc3RfX2NhcmR7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWxheWVyLWNvbG9yLTIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmJlc3RfX2NhcmQgLmRpc2hfX2ltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgICBcXG59XFxuXFxuLmJlc3RfX2NhcmQgc3BhbntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG59XFxuXFxuLmJlc3RfX2NhcmQgLnN0YXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAuNXJlbTtcXG4gICAgbGVmdDogLjVyZW07XFxufVxcblxcbi5tZW51X19saXN0LWJsb2Nre1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1sYXllci1jb2xvci0yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNHJlbTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodC10by1sZWZ0IGxpbmVhciAxcztcXG5cXG59XFxuXFxuLm1lbnVfX2xpc3QtYmxvY2sgc3BhbntcXG4gICAgY29sb3I6dmFyKC0tdGV4dC1jb2xvci1oZWFkaW5nKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4ubWVudV9fbGlzdC1ibG9jayB1bHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWVudV9fbGlzdC1ibG9jayBsaXtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubWVudV9fbGlzdC1ibG9jayA+IGltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIE1FTlUgU0VDVElPTiBFTkQgKi9cXG5cXG4vKiBBQk9VVCBTRUNUSU9OIFNUQVJUICovXFxuLmFib3V0e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uYWJvdXRfX2ltZ3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9pbWFnZXMvYWJvdXQucG5nXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIHRvcDowO1xcbiAgICBsZWZ0OjA7XFxuICAgIGFuaW1hdGlvbjogc2xpZGUtbGVmdC10by1yaWdodCBsaW5lYXIgMXM7XFxufVxcblxcbi5hYm91dF9fY29udGVudHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICByaWdodDogMTByZW07XFxuICAgIHRvcDogNXJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGF5ZXItY29sb3ItMik7XFxuICAgIGFuaW1hdGlvbjogc2xpZGUtcmlnaHQtdG8tbGVmdCBsaW5lYXIgMXM7XFxufVxcblxcbi5hYm91dF9fY29udGVudCA+IHNwYW57XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6SXRhbGlhbm5vO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1oZWFkaW5nKTtcXG59XFxuXFxuLmFib3V0X19jb250ZW50ID4gaW1ne1xcbiAgICBtYXJnaW46IDNyZW0gMDtcXG59XFxuXFxuLmFib3V0X19jb250ZW50IHVse1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5hYm91dF9fY29udGVudCA+IHVsID4gbGl7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuLmFib3V0ID4gaW1nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlIDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogNXJlbTtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodC10by1sZWZ0IGxpbmVhciAxcztcXG59XFxuXFxuXFxuXFxuLyogQUJPVVQgU0VDVElPTiBFTkQgKi9cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBhYm91dFN2ZyBmcm9tICcuL2ltYWdlcy9hYm91dC5zdmcnO1xuaW1wb3J0IGxpbmVTdmcgZnJvbSAnLi9pbWFnZXMvbGluZS5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dCgpIHtcbiAgICBjb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcblxuICAgIGNvbnN0IGFib3V0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dEltYWdlLmNsYXNzTGlzdC5hZGQoJ2Fib3V0X19pbWcnKTtcblxuICAgIGNvbnN0IGFib3V0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdhYm91dF9fY29udGVudCcpO1xuXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhYm91dFRpdGxlLnRleHRDb250ZW50ID0gJ0Fib3V0IHVzJztcblxuICAgIGNvbnN0IGFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dFRleHQudGV4dENvbnRlbnQgPSBgTmVzdGxlZCBpbiB0aGUgaGVhcnQgb2YgdmlicmFudCBIYW5vaSwgR3JlZW5CaXRlcyBpcyBtb3JlIHRoYW4ganVzdCBhIHJlc3RhdXJhbnQ7IGl0J3MgYSBoYXZlbiBmb3IgcGxhbnQtYmFzZWQgZW50aHVzaWFzdHMgYW5kIGN1bGluYXJ5IGV4cGxvcmVycyBhbGlrZS4gT3VyIGFkZHJlc3MsIGxvY2F0ZWQgYXQgW0FkZHJlc3NdLCBzZXJ2ZXMgYXMgYSBjb3p5IHJldHJlYXQgd2hlcmUgc3VzdGFpbmFiaWxpdHkgbWVldHMgZXhjZXB0aW9uYWwgdGFzdGUuIENvbWUgam9pbiB1cyBpbiBlbWJyYWNpbmcgdGhlIGpveSBvZiBjcnVlbHR5LWZyZWUgZGluaW5nIGFuZCB0aGUgdGhyaXZpbmcgZW5lcmd5IG9mIEhhbm9pIGF0IEdyZWVuQml0ZXMuYDtcblxuICAgIGNvbnN0IGFib3V0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYWJvdXRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBhYm91dFN2Zyk7XG4gICAgYWJvdXRJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnJyk7XG5cbiAgICBjb25zdCBjb250YWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgXG4gICAgY29uc3QgY29udGFjdEl0ZW1zID0gW1xuICAgICAgICAnQ29udGFjdCcsXG4gICAgICAgICdQaG9uZTogKzg0IDEyMzQ1Njc3OCcsXG4gICAgICAgICdFbWFpbDogYmV2ZWdhbkBnbWFpbC5jb20nLFxuICAgICAgICAnZ2l0aHViLmNvbS9kZC1tYWhuJ1xuICAgIF07XG5cbiAgICBjb250YWN0SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgIGNvbnRhY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxpbmVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxpbmVJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGxpbmVTdmcpO1xuICAgIGxpbmVJbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICcnKTtcblxuICAgIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dFRpdGxlKTtcbiAgICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KTtcbiAgICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRJbWcpO1xuICAgIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0TGlzdCk7XG5cbiAgICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRJbWFnZSk7XG4gICAgYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKGFib3V0Q29udGVudCk7XG4gICAgYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKGxpbmVJbWFnZSk7XG5cbiAgICByZXR1cm4gYWJvdXRTZWN0aW9uO1xufVxuIiwiaW1wb3J0IGxvZ28gZnJvbSAnLi9pbWFnZXMvbG9nby5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyQmFyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19sb2dvJyk7XG4gICAgaGVhZGVyTG9nby5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2xvZ299XCIgYWx0PVwiTG9nb1wiPmA7XG5cbiAgICBjb25zdCBoZWFkZXJOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJOYXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19uYXYnKTtcblxuICAgIGNvbnN0IG5hdkl0ZW1zID0gW1xuICAgICAgICB7IGNsYXNzOiAnbmF2MScsIHRleHQ6ICdIb21lJyB9LFxuICAgICAgICB7IGNsYXNzOiAnbmF2MicsIHRleHQ6ICdNZW51JyB9LFxuICAgICAgICB7IGNsYXNzOiAnbmF2MycsIHRleHQ6ICdBYm91dCcgfVxuICAgIF07XG5cbiAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hdkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19uYXYtaXRlbScsIGl0ZW0uY2xhc3MpO1xuICAgICAgICBuYXZJdGVtLmlubmVySFRNTCA9IGA8c3Bhbj4ke2l0ZW0udGV4dH08L3NwYW4+YDtcbiAgICAgICAgaGVhZGVyTmF2LmFwcGVuZENoaWxkKG5hdkl0ZW0pO1xuICAgIH0pO1xuXG4gICAgaGVhZGVyQmFyLmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xuICAgIGhlYWRlckJhci5hcHBlbmRDaGlsZChoZWFkZXJOYXYpO1xuXG4gICAgcmV0dXJuIGhlYWRlckJhcjtcbn1cbiIsImltcG9ydCBsaW5lU3ZnIGZyb20gJy4vaW1hZ2VzL2xpbmUuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVybygpIHtcbiAgICBjb25zdCBoZXJvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcblxuICAgIGNvbnN0IGhlcm9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVyb0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaGVyb19fY29udGVudCcpO1xuXG4gICAgY29uc3QgaGVyb1RleHRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm9UZXh0QmxvY2suY2xhc3NMaXN0LmFkZCgnaGVyb19fY29udGVudC1ibG9jaycpO1xuICAgIGhlcm9UZXh0QmxvY2suaW5uZXJIVE1MID0gYFxuICAgICAgICA8c3Bhbj5XZSBkbyB2ZWdhbjwvc3Bhbj5cbiAgICAgICAgPHA+V2VsY29tZSB0byBHcmVlbkJpdGVzLCBIYW5vaSdzIHBsYW50LWJhc2VkIHBhcmFkaXNlIHNpbmNlIDIwMjAuIERpc2NvdmVyIGEgY3VsaW5hcnkgaGF2ZW4gaW4gdGhlIGhlYXJ0IG9mIHRoZSBjaXR5LCB3aGVyZSB2aWJyYW50IHNhbGFkcyBhbmQgaGVhcnR5IG1haW5zIGNlbGVicmF0ZSB0aGUgYXJ0aXN0cnkgb2YgcGxhbnQtYmFzZWQgY3Vpc2luZS4gSm9pbiB1cyBmb3IgYSB0YXN0ZSBvZiBjcnVlbHR5LWZyZWUgZGluaW5nIGF0IEdyZWVuQml0ZXMuPC9wPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaW1hcnlfX2J0biBtZW51X19idG5cIj5PdXIgTWVudTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlY29uZGFyeV9fYnRuIGFib3V0X19idG5cIj5BYm91dCB1czwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgY29uc3QgcHRuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHB0bjEuY2xhc3NMaXN0LmFkZCgncHRuMScpO1xuICAgIHB0bjEuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtsaW5lU3ZnfVwiIGFsdD1cIlBhdHRlcm4gMVwiPmA7XG5cbiAgICBjb25zdCBwdG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHRuMi5jbGFzc0xpc3QuYWRkKCdwdG4yJyk7XG4gICAgcHRuMi5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2xpbmVTdmd9XCIgYWx0PVwiUGF0dGVybiAyXCI+YDtcblxuICAgIGNvbnN0IHB0bjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwdG4zLmNsYXNzTGlzdC5hZGQoJ3B0bjMnKTtcbiAgICBwdG4zLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7bGluZVN2Z31cIiBhbHQ9XCJQYXR0ZXJuIDNcIj5gO1xuXG4gICAgaGVyb0NvbnRlbnQuYXBwZW5kQ2hpbGQoaGVyb1RleHRCbG9jayk7XG4gICAgaGVyb0NvbnRlbnQuYXBwZW5kQ2hpbGQocHRuMSk7XG4gICAgaGVyb0NvbnRlbnQuYXBwZW5kQ2hpbGQocHRuMik7XG4gICAgaGVyb0NvbnRlbnQuYXBwZW5kQ2hpbGQocHRuMyk7XG5cbiAgICBjb25zdCBoZXJvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvSW1hZ2UuY2xhc3NMaXN0LmFkZCgnaGVyb19faW1nJyk7XG5cbiAgICBoZXJvU2VjdGlvbi5hcHBlbmRDaGlsZChoZXJvQ29udGVudCk7XG4gICAgaGVyb1NlY3Rpb24uYXBwZW5kQ2hpbGQoaGVyb0ltYWdlKTtcblxuICAgIHJldHVybiBoZXJvU2VjdGlvbjtcbn1cbiIsImltcG9ydCBsaW5lU3ZnIGZyb20gJy4vaW1hZ2VzL2xpbmUuc3ZnJztcbmltcG9ydCBsZWFmU3ZnIGZyb20gJy4vaW1hZ2VzL2xlYWYuc3ZnJztcbmltcG9ydCBzdGFyU3ZnIGZyb20gJy4vaW1hZ2VzL3N0YXIuc3ZnJztcbmltcG9ydCB0b2Z1SW1nIGZyb20gJy4vaW1hZ2VzL3RvZnUucG5nJztcbmltcG9ydCBjYXVsaUltZyBmcm9tICcuL2ltYWdlcy9jYXVsaS5wbmcnO1xuaW1wb3J0IGJpcnlhbmlJbWcgZnJvbSAnLi9pbWFnZXMvYmlyeWFuaS5wbmcnO1xuaW1wb3J0IGZyYW5raWVzSW1nIGZyb20gJy4vaW1hZ2VzL2ZyYW5raWVzLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gICAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBsaW5lSW1hZ2VUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsaW5lSW1hZ2VUb3Auc2V0QXR0cmlidXRlKCdzcmMnLCBsaW5lU3ZnKTtcbiAgICBsaW5lSW1hZ2VUb3Auc2V0QXR0cmlidXRlKCdhbHQnLCAnJyk7XG5cbiAgICBjb25zdCB0ZXh0QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0QmxvY2suY2xhc3NMaXN0LmFkZCgnbWVudV9fdGV4dC1ibG9jaycpO1xuICAgIHRleHRCbG9jay5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzcGFuPk91ciBNZW51PC9zcGFuPlxuICAgICAgICA8cD5FbWJhcmsgb24gYSBmbGF2b3JmdWwgam91cm5leSBhdCBHcmVlbkJpdGVzISBPdXIgcGxhbnQtYmFzZWQgbWVudSB3ZWF2ZXMgdGFsZXMgb2YgZGl2ZXJzZSwgaW5ub3ZhdGl2ZSBkZWxpZ2h0cy48L3A+XG4gICAgYDtcblxuICAgIGNvbnN0IGJlc3RCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJlc3RCbG9jay5jbGFzc0xpc3QuYWRkKCdtZW51X19iZXN0LWJsb2NrJyk7XG5cbiAgICBjb25zdCBiZXN0U2VsbGVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBiZXN0U2VsbGVyU3Bhbi50ZXh0Q29udGVudCA9ICdCZXN0IFNlbGxlcic7XG5cbiAgICBjb25zdCBncmlkQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkQmxvY2suY2xhc3NMaXN0LmFkZCgnZ3JpZF9fYmxvY2snKTtcblxuICAgIGNvbnN0IGJlc3RDYXJkcyA9IFtcbiAgICAgICAgeyBpbWdTdGFyOiBzdGFyU3ZnLCBpbWdEaXNoOiB0b2Z1SW1nLCBkaXNoTmFtZTogJ0NyaXNweSBCQlEgVG9mdSBTYW5kd2ljaCcgfSxcbiAgICAgICAgeyBpbWdTdGFyOiBzdGFyU3ZnLCBpbWdEaXNoOiBjYXVsaUltZywgZGlzaE5hbWU6ICdXaG9sZSBSb2FzdGVkIENhdWxpZmxvd2VyJyB9LFxuICAgICAgICB7IGltZ1N0YXI6IHN0YXJTdmcsIGltZ0Rpc2g6IGJpcnlhbmlJbWcsIGRpc2hOYW1lOiAnVmVnZXRhYmxlIEJpcnlhbmknIH0sXG4gICAgICAgIHsgaW1nU3Rhcjogc3RhclN2ZywgaW1nRGlzaDogZnJhbmtpZXNJbWcsIGRpc2hOYW1lOiAnRnJhbmtpZXMhKEJvbWJheSBCdXJyaXRvcyknIH1cbiAgICBdO1xuXG4gICAgYmVzdENhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNvbnN0IGJlc3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJlc3RDYXJkLmNsYXNzTGlzdC5hZGQoJ2Jlc3RfX2NhcmQnKTtcblxuICAgICAgICBjb25zdCBpbWdTdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZ1N0YXIuc2V0QXR0cmlidXRlKCdzcmMnLCBjYXJkLmltZ1N0YXIpO1xuICAgICAgICBpbWdTdGFyLmNsYXNzTGlzdC5hZGQoJ3N0YXInKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGltZ0Rpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nRGlzaC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNhcmQuaW1nRGlzaCk7XG4gICAgICAgIGltZ0Rpc2guY2xhc3NMaXN0LmFkZCgnZGlzaF9faW1nJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzcGFuRGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNwYW5EaXNoTmFtZS50ZXh0Q29udGVudCA9IGNhcmQuZGlzaE5hbWU7XG5cbiAgICAgICAgYmVzdENhcmQuYXBwZW5kQ2hpbGQoaW1nU3Rhcik7XG4gICAgICAgIGJlc3RDYXJkLmFwcGVuZENoaWxkKGltZ0Rpc2gpO1xuICAgICAgICBiZXN0Q2FyZC5hcHBlbmRDaGlsZChzcGFuRGlzaE5hbWUpO1xuXG4gICAgICAgIGdyaWRCbG9jay5hcHBlbmRDaGlsZChiZXN0Q2FyZCk7XG4gICAgfSk7XG5cbiAgICBiZXN0QmxvY2suYXBwZW5kQ2hpbGQoYmVzdFNlbGxlclNwYW4pO1xuICAgIGJlc3RCbG9jay5hcHBlbmRDaGlsZChncmlkQmxvY2spO1xuXG4gICAgY29uc3QgbGlzdEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzdEJsb2NrLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2xpc3QtYmxvY2snKTtcblxuICAgIGNvbnN0IGxpc3RIZWFkRm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBsaXN0SGVhZEZvb2QuY2xhc3NMaXN0LmFkZCgnbGlzdF9faGVhZCcpO1xuICAgIGxpc3RIZWFkRm9vZC5pbm5lckhUTUwgPSBgRm9vZCA8aW1nIHNyYz1cIiR7bGVhZlN2Z31cIiBhbHQ9XCJcIj5gO1xuXG4gICAgY29uc3QgbGlzdEl0ZW1zRm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGlzdEl0ZW1zRm9vZC5jbGFzc0xpc3QuYWRkKCdsaXN0X19pdGVtcycpO1xuXG4gICAgY29uc3QgZm9vZEl0ZW1zID0gW1xuICAgICAgICAnUXVpbm9hLVN0dWZmZWQgQmVsbCBQZXBwZXJzJyxcbiAgICAgICAgJ0xlbnRpbCBhbmQgVmVnZXRhYmxlIEN1cnJ5JyxcbiAgICAgICAgJ1p1Y2NoaW5pIE5vb2RsZSBQcmltYXZlcmEnLFxuICAgICAgICAnQ2hpY2twZWEgYW5kIFNwaW5hY2ggV3JhcCcsXG4gICAgICAgICdDb2NvbnV0IExpbWUgVG9mdSBTa2V3ZXJzJ1xuICAgIF07XG5cbiAgICBmb29kSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgIGxpc3RJdGVtc0Zvb2QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGlzdEhlYWREcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGlzdEhlYWREcmlua3MuY2xhc3NMaXN0LmFkZCgnbGlzdF9faGVhZCcpO1xuICAgIGxpc3RIZWFkRHJpbmtzLmlubmVySFRNTCA9IGBEcmlua3MgPGltZyBzcmM9XCIke2xlYWZTdmd9XCIgYWx0PVwiXCI+YDtcblxuICAgIGNvbnN0IGxpc3RJdGVtc0RyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGlzdEl0ZW1zRHJpbmtzLmNsYXNzTGlzdC5hZGQoJ2xpc3RfX2l0ZW1zJyk7XG5cbiAgICBjb25zdCBkcmlua0l0ZW1zID0gW1xuICAgICAgICAnQmVycnkgQmxpc3MgU21vb3RoaWUnLFxuICAgICAgICAnQ3VjdW1iZXIgTWludCBSZWZyZXNoZXInLFxuICAgICAgICAnR29sZGVuIFR1cm1lcmljIExhdHRlJ1xuICAgIF07XG5cbiAgICBkcmlua0l0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICBsaXN0SXRlbXNEcmlua3MuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGluZUltYWdlQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbGluZUltYWdlQm90dG9tLnNldEF0dHJpYnV0ZSgnc3JjJywgbGluZVN2Zyk7XG4gICAgbGluZUltYWdlQm90dG9tLnNldEF0dHJpYnV0ZSgnYWx0JywgJycpO1xuXG4gICAgbGlzdEJsb2NrLmFwcGVuZENoaWxkKGxpc3RIZWFkRm9vZCk7XG4gICAgbGlzdEJsb2NrLmFwcGVuZENoaWxkKGxpc3RJdGVtc0Zvb2QpO1xuICAgIGxpc3RCbG9jay5hcHBlbmRDaGlsZChsaXN0SGVhZERyaW5rcyk7XG4gICAgbGlzdEJsb2NrLmFwcGVuZENoaWxkKGxpc3RJdGVtc0RyaW5rcyk7XG4gICAgbGlzdEJsb2NrLmFwcGVuZENoaWxkKGxpbmVJbWFnZUJvdHRvbSk7XG5cbiAgICBjb25zdCBiYWNrQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYWNrQmxvY2suY2xhc3NMaXN0LmFkZCgnbWVudV9fYmFjay1ibG9jaycpO1xuXG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobGluZUltYWdlVG9wKTtcbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZCh0ZXh0QmxvY2spO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGJlc3RCbG9jayk7XG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobGlzdEJsb2NrKTtcbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChiYWNrQmxvY2spO1xuXG4gICAgcmV0dXJuIG1lbnVTZWN0aW9uO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlci5qcydcbmltcG9ydCBoZXJvIGZyb20gJy4vaGVyby5qcydcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudS5qcydcbmltcG9ydCBhYm91dCBmcm9tICcuL2Fib3V0LmpzJ1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuY29uc3QgaGVhZGVyQmFyID0gaGVhZGVyKClcbmNvbnN0IGhlcm9TZWN0aW9uID0gaGVybygpXG5jb25zdCBtZW51U2VjdGlvbiA9IG1lbnUoKVxuY29uc3QgYWJvdXRTZWN0aW9uID0gYWJvdXQoKVxuXG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckJhcilcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVyb1NlY3Rpb24pXG5jb250ZW50LmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKVxuY29udGVudC5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb24pXG5cbmNvbnN0IG1lbnVCdG4gPSBoZXJvU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcubWVudV9fYnRuJylcbmNvbnN0IGFib3V0QnRuID0gaGVyb1NlY3Rpb24ucXVlcnlTZWxlY3RvcignLmFib3V0X19idG4nKVxuY29uc3QgaG9tZU5hdiA9IGhlYWRlckJhci5xdWVyeVNlbGVjdG9yKCcubmF2MScpXG5jb25zdCBtZW51TmF2ID0gaGVhZGVyQmFyLnF1ZXJ5U2VsZWN0b3IoJy5uYXYyJylcbmNvbnN0IGFib3V0TmF2ID0gaGVhZGVyQmFyLnF1ZXJ5U2VsZWN0b3IoJy5uYXYzJylcblxuXG5mdW5jdGlvbiBoZXJvT24oKXtcbiAgICBoZXJvU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdkLW9mZicpXG4gICAgbWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZC1vZmYnKVxuICAgIGFib3V0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdkLW9mZicpXG59XG5cbmZ1bmN0aW9uIG1lbnVPbigpe1xuICAgIGhlcm9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Qtb2ZmJylcbiAgICBhYm91dFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZC1vZmYnKVxuICAgIG1lbnVTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtb2ZmJylcbn1cblxuZnVuY3Rpb24gYWJvdXRPbigpe1xuICAgIGhlcm9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Qtb2ZmJylcbiAgICBhYm91dFNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnZC1vZmYnKVxuICAgIG1lbnVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Qtb2ZmJylcbn1cblxuaGVyb09uKClcblxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnVPbilcbmFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWJvdXRPbilcbmhvbWVOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoZXJvT24pXG5tZW51TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudU9uKVxuYWJvdXROYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhYm91dE9uKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=