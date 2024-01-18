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
    color: var(--text-color-heading);
    transition: color .3s;
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
    right: 5rem;
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
    font-size:1.2rem;
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
    cursor: pointer;
}

.best__card span:hover{
    color: var(--text-color-heading);
    transition:.3s;
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
    cursor: pointer;
}

.menu__list-block li:hover{
    color: var(--text-color-heading);
    transition: .3s;
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

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --background-color: #3C462D;\n    --text-color: #D2CABC;\n    --text-color-heading: #D8A353;\n    --layer-color-1: #475137;\n    --layer-color-2: #54623F;\n    --btn-color: #6E8051;\n    --border-radius: 5px;\n\n}\n\nbody{\n    height: 100vh;\n    font-family: Crimson Text;\n    font-size: 20px;\n    margin: 0;\n    padding: 0;\n    background: var(--background-color);\n    color: var(--text-color);\n}\n/* BASE CLASS */\n.primary__btn{\n    background: var(--btn-color);\n    color: var(--text-color);\n}\n\n.secondary__btn{\n    background: var(--text-color);\n    color: var(--btn-color);\n}\n\n.d-off{\n    display: none !important;\n}\n/* HEADER SECTION START */\n\nbody .header{\n    height: 3.5rem;\n    background: var(--text-color);\n    color: var(--background-color);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 2rem;\n    position: sticky;\n    z-index:3;\n    top:0;\n}\n\n.header__nav{\n    display: flex;\n}\n\n.header__nav-item{\n    padding: 0 1.5rem;\n    font-size: 1.6rem;\n    font-family: Italianno;\n}\n\n.header__nav-item:hover{\n    border-bottom: 3px solid var(--btn-color);\n    color: var(--text-color-heading);\n    transition: color .3s;\n    cursor: pointer;\n}\n\n@keyframes slide-right-to-left {\n    from{\n        transform: translateX(50%);\n        opacity: 0;\n    }\n    to{\n        transform: translateX(0%);\n        opacity: 1;\n    }\n}\n\n@keyframes slide-left-to-right {\n    from{\n        transform: translateX(-50%);\n        opacity: 0;\n    }\n    to{\n        transform: translateX(0%);\n        opacity: 1;\n    }\n}\n/* HEADER SECTION END*/\n\n/* HERO SECTION START */\n.hero{\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n}\n\n.hero__img{\n    background: url(\"./images/v1_6.png\");\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;\n    width: 40%;\n    height: 100%;\n    animation: slide-right-to-left linear 1s;\n}\n\n.hero__content{\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 2rem 0;\n    width: 60%;\n    animation: slide-left-to-right linear 1s;\n}\n\n.hero__content-block{\n    width: 40%;\n    height: 25rem;\n    background: var(--layer-color-1);\n    position: relative;\n}\n\n.hero__content-block span{\n    font-family: Italianno;\n    font-size: 4rem;\n    color: var(--text-color-heading);\n    position: absolute;\n    top: -3.4rem;\n    left: -0.5rem;\n}\n\n.hero__content-block p{\n    position: absolute;\n    width: 25rem;\n    top: 2rem;\n    left: -5rem;\n    font-size: 1.2rem;\n}\n\n.hero__content-block div{\n    position: absolute;\n    top: 15rem;\n    left: -5.5rem;\n}\n\n.hero__content-block > div > button{\n    font-family: Crimson Text;\n    font-weight: 600;\n    width: 150px;\n    padding: 1rem;\n    margin:0 .5rem;\n    border:none;\n    border-radius: var(--border-radius);\n    font-size: 1.1rem;\n}\n\n.hero__content-block > div > button:hover{\n    opacity:0.8;\n    transition:.3s;\n    cursor: pointer;\n}\n\n.ptn1{\n    position: absolute;\n    top: 10.5rem;\n    left:0;\n}\n\n.ptn1 img{\n    width: 13rem;\n    opacity: 0.6;\n}\n\n.ptn2{\n    position: absolute;\n    right: 5rem;\n    top: 29rem;\n}\n\n.ptn2 img{\n    opacity:0.8;\n}\n\n.ptn3{\n    position: absolute;\n    bottom: 5rem;\n    left: 5rem\n}\n/* HERO SECTION END */\n\n/* MENU SECTION START */\n.menu{\n    position: relative;\n    height: 100vh;\n}\n\n.menu > img{\n    position: absolute;\n    z-index: 2;\n    top:1.5rem;\n    width: 15%;\n    animation: slide-left-to-right linear 1s;\n}\n\n.menu__back-block{\n    width: 80%;\n    height: 90vh;\n    background-color: var(--layer-color-1);\n    position: absolute;\n    top: 2rem;\n    z-index: 1;\n}\n\n.menu__text-block{\n    display: flex;\n    flex-direction: column;\n    align-items: end;\n    text-align: right;\n    width: 18rem;\n    position: absolute;\n    right: 5rem;\n    z-index: 2;\n    top: 2rem;\n    animation: slide-right-to-left linear 1s;\n}\n\n.menu__text-block span{\n    font-size: 3rem;\n    color: var(--text-color-heading);\n    font-family: Italianno;\n}\n\n.menu__text-block p{\n    font-size:1.2rem;\n    margin: 0;\n}\n\n.menu__best-block{\n    background: var(--layer-color-2);\n    width: 60%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: absolute;\n    top:6rem;\n    padding:1rem 0 2rem;\n    z-index: 2;\n    animation: slide-left-to-right linear 1s;\n\n}\n\n.menu__best-block > span{\n    font-size: 3rem;\n    font-family: Italianno;\n    color: var(--text-color-heading);\n    margin-bottom: 2rem;\n}\n\n.grid__block{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(2,1fr);\n    gap: 3rem;\n}\n\n.best__card{\n    width: 350px;\n    height: 300px;\n    position: relative;\n    background: var(--text-color);\n    color: var(--layer-color-2);\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 1.2rem;\n\n}\n\n.best__card .dish__img{\n    width: 100%;\n    height: 250px;\n    border-top-right-radius: 15px;\n    border-top-left-radius: 15px;\n    \n}\n\n.best__card span{\n    text-align: center;\n    margin-top: .5rem;\n    cursor: pointer;\n}\n\n.best__card span:hover{\n    color: var(--text-color-heading);\n    transition:.3s;\n}\n\n.best__card .star{\n    position: absolute;\n    top: .5rem;\n    left: .5rem;\n}\n\n.menu__list-block{\n    background: var(--layer-color-2);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 25%;\n    right: 0;\n    position: absolute;\n    top: 14rem;\n    z-index: 2;\n    animation: slide-right-to-left linear 1s;\n\n}\n\n.menu__list-block span{\n    color:var(--text-color-heading);\n    font-size: 1.2rem;\n    text-align: center;\n    padding: 1rem 0;\n}\n\n.menu__list-block ul{\n    padding: 0;\n    margin: 0;\n}\n\n.menu__list-block li{\n    list-style: none;\n    margin-bottom: 1.5rem;\n    text-align: center;\n    font-size: 1.2rem;\n    cursor: pointer;\n}\n\n.menu__list-block li:hover{\n    color: var(--text-color-heading);\n    transition: .3s;\n}\n\n.menu__list-block > img{\n    width: 100%;\n}\n\n/* MENU SECTION END */\n\n/* ABOUT SECTION START */\n.about{\n    position: relative;\n    height: 100vh;\n    font-size: 1.2rem;\n}\n\n.about__img{\n    position: absolute;\n    width: 50%;\n    height: 100%;\n    background: url(\"./images/about.png\");\n    background-size: cover;\n    z-index: 0;\n    top:0;\n    left:0;\n    animation: slide-left-to-right linear 1s;\n}\n\n.about__content{\n    position: absolute;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    width: 40%;\n    right: 10rem;\n    top: 5rem;\n    padding: 2rem;\n    background: var(--layer-color-2);\n    animation: slide-right-to-left linear 1s;\n}\n\n.about__content > span{\n    font-size: 3rem;\n    font-family:Italianno;\n    color: var(--text-color-heading);\n}\n\n.about__content > img{\n    margin: 3rem 0;\n}\n\n.about__content ul{\n    padding: 0;\n    margin: 0;\n    list-style: none;\n}\n\n.about__content > ul > li{\n    text-align: center;\n\n}\n\n.about > img {\n    position: absolute ;\n    right: 0;\n    bottom: 5rem;\n    animation: slide-right-to-left linear 1s;\n}\n\n\n\n/* ABOUT SECTION END */\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtHQUFvQztBQUNoRiw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUEsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxhQUFhLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxhQUFhLGFBQWEsTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxhQUFhLE1BQU0s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eEIsb0JBQW9CLG9EQUFJO0FBQ3hCLHFCQUFxQixxREFBSzs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZXJvLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy92MV82LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2Fib3V0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzNDNDYyRDtcbiAgICAtLXRleHQtY29sb3I6ICNEMkNBQkM7XG4gICAgLS10ZXh0LWNvbG9yLWhlYWRpbmc6ICNEOEEzNTM7XG4gICAgLS1sYXllci1jb2xvci0xOiAjNDc1MTM3O1xuICAgIC0tbGF5ZXItY29sb3ItMjogIzU0NjIzRjtcbiAgICAtLWJ0bi1jb2xvcjogIzZFODA1MTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcblxufVxuXG5ib2R5e1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZm9udC1mYW1pbHk6IENyaW1zb24gVGV4dDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLyogQkFTRSBDTEFTUyAqL1xuLnByaW1hcnlfX2J0bntcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idG4tY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cblxuLnNlY29uZGFyeV9fYnRue1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1idG4tY29sb3IpO1xufVxuXG4uZC1vZmZ7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLyogSEVBREVSIFNFQ1RJT04gU1RBUlQgKi9cblxuYm9keSAuaGVhZGVye1xuICAgIGhlaWdodDogMy41cmVtO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHotaW5kZXg6MztcbiAgICB0b3A6MDtcbn1cblxuLmhlYWRlcl9fbmF2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5oZWFkZXJfX25hdi1pdGVte1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBJdGFsaWFubm87XG59XG5cbi5oZWFkZXJfX25hdi1pdGVtOmhvdmVye1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1idG4tY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWhlYWRpbmcpO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtcmlnaHQtdG8tbGVmdCB7XG4gICAgZnJvbXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRve1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZS1sZWZ0LXRvLXJpZ2h0IHtcbiAgICBmcm9te1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRve1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cbi8qIEhFQURFUiBTRUNUSU9OIEVORCovXG5cbi8qIEhFUk8gU0VDVElPTiBTVEFSVCAqL1xuLmhlcm97XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhlcm9fX2ltZ3tcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodC10by1sZWZ0IGxpbmVhciAxcztcbn1cblxuLmhlcm9fX2NvbnRlbnR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJyZW0gMDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtbGVmdC10by1yaWdodCBsaW5lYXIgMXM7XG59XG5cbi5oZXJvX19jb250ZW50LWJsb2Nre1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiAyNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1sYXllci1jb2xvci0xKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZXJvX19jb250ZW50LWJsb2NrIHNwYW57XG4gICAgZm9udC1mYW1pbHk6IEl0YWxpYW5ubztcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItaGVhZGluZyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTMuNHJlbTtcbiAgICBsZWZ0OiAtMC41cmVtO1xufVxuXG4uaGVyb19fY29udGVudC1ibG9jayBwe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjVyZW07XG4gICAgdG9wOiAycmVtO1xuICAgIGxlZnQ6IC01cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uaGVyb19fY29udGVudC1ibG9jayBkaXZ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVyZW07XG4gICAgbGVmdDogLTUuNXJlbTtcbn1cblxuLmhlcm9fX2NvbnRlbnQtYmxvY2sgPiBkaXYgPiBidXR0b257XG4gICAgZm9udC1mYW1pbHk6IENyaW1zb24gVGV4dDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1hcmdpbjowIC41cmVtO1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uaGVyb19fY29udGVudC1ibG9jayA+IGRpdiA+IGJ1dHRvbjpob3ZlcntcbiAgICBvcGFjaXR5OjAuODtcbiAgICB0cmFuc2l0aW9uOi4zcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wdG4xe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwLjVyZW07XG4gICAgbGVmdDowO1xufVxuXG4ucHRuMSBpbWd7XG4gICAgd2lkdGg6IDEzcmVtO1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cblxuLnB0bjJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cmVtO1xuICAgIHRvcDogMjlyZW07XG59XG5cbi5wdG4yIGltZ3tcbiAgICBvcGFjaXR5OjAuODtcbn1cblxuLnB0bjN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNXJlbTtcbiAgICBsZWZ0OiA1cmVtXG59XG4vKiBIRVJPIFNFQ1RJT04gRU5EICovXG5cbi8qIE1FTlUgU0VDVElPTiBTVEFSVCAqL1xuLm1lbnV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5tZW51ID4gaW1ne1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHRvcDoxLjVyZW07XG4gICAgd2lkdGg6IDE1JTtcbiAgICBhbmltYXRpb246IHNsaWRlLWxlZnQtdG8tcmlnaHQgbGluZWFyIDFzO1xufVxuXG4ubWVudV9fYmFjay1ibG9ja3tcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXllci1jb2xvci0xKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAycmVtO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5tZW51X190ZXh0LWJsb2Nre1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHdpZHRoOiAxOHJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVyZW07XG4gICAgei1pbmRleDogMjtcbiAgICB0b3A6IDJyZW07XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodC10by1sZWZ0IGxpbmVhciAxcztcbn1cblxuLm1lbnVfX3RleHQtYmxvY2sgc3BhbntcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItaGVhZGluZyk7XG4gICAgZm9udC1mYW1pbHk6IEl0YWxpYW5ubztcbn1cblxuLm1lbnVfX3RleHQtYmxvY2sgcHtcbiAgICBmb250LXNpemU6MS4ycmVtO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLm1lbnVfX2Jlc3QtYmxvY2t7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGF5ZXItY29sb3ItMik7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjZyZW07XG4gICAgcGFkZGluZzoxcmVtIDAgMnJlbTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtbGVmdC10by1yaWdodCBsaW5lYXIgMXM7XG5cbn1cblxuLm1lbnVfX2Jlc3QtYmxvY2sgPiBzcGFue1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LWZhbWlseTogSXRhbGlhbm5vO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWhlYWRpbmcpO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5ncmlkX19ibG9ja3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XG4gICAgZ2FwOiAzcmVtO1xufVxuXG4uYmVzdF9fY2FyZHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWxheWVyLWNvbG9yLTIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG5cbn1cblxuLmJlc3RfX2NhcmQgLmRpc2hfX2ltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgXG59XG5cbi5iZXN0X19jYXJkIHNwYW57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJlc3RfX2NhcmQgc3Bhbjpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1oZWFkaW5nKTtcbiAgICB0cmFuc2l0aW9uOi4zcztcbn1cblxuLmJlc3RfX2NhcmQgLnN0YXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLjVyZW07XG4gICAgbGVmdDogLjVyZW07XG59XG5cbi5tZW51X19saXN0LWJsb2Nre1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxheWVyLWNvbG9yLTIpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgcmlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTRyZW07XG4gICAgei1pbmRleDogMjtcbiAgICBhbmltYXRpb246IHNsaWRlLXJpZ2h0LXRvLWxlZnQgbGluZWFyIDFzO1xuXG59XG5cbi5tZW51X19saXN0LWJsb2NrIHNwYW57XG4gICAgY29sb3I6dmFyKC0tdGV4dC1jb2xvci1oZWFkaW5nKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbSAwO1xufVxuXG4ubWVudV9fbGlzdC1ibG9jayB1bHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLm1lbnVfX2xpc3QtYmxvY2sgbGl7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnVfX2xpc3QtYmxvY2sgbGk6aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItaGVhZGluZyk7XG4gICAgdHJhbnNpdGlvbjogLjNzO1xufVxuXG4ubWVudV9fbGlzdC1ibG9jayA+IGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLyogTUVOVSBTRUNUSU9OIEVORCAqL1xuXG4vKiBBQk9VVCBTRUNUSU9OIFNUQVJUICovXG4uYWJvdXR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5hYm91dF9faW1ne1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB6LWluZGV4OiAwO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6MDtcbiAgICBhbmltYXRpb246IHNsaWRlLWxlZnQtdG8tcmlnaHQgbGluZWFyIDFzO1xufVxuXG4uYWJvdXRfX2NvbnRlbnR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgcmlnaHQ6IDEwcmVtO1xuICAgIHRvcDogNXJlbTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxheWVyLWNvbG9yLTIpO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtcmlnaHQtdG8tbGVmdCBsaW5lYXIgMXM7XG59XG5cbi5hYm91dF9fY29udGVudCA+IHNwYW57XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtZmFtaWx5Okl0YWxpYW5ubztcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1oZWFkaW5nKTtcbn1cblxuLmFib3V0X19jb250ZW50ID4gaW1ne1xuICAgIG1hcmdpbjogM3JlbSAwO1xufVxuXG4uYWJvdXRfX2NvbnRlbnQgdWx7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmFib3V0X19jb250ZW50ID4gdWwgPiBsaXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuLmFib3V0ID4gaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogNXJlbTtcbiAgICBhbmltYXRpb246IHNsaWRlLXJpZ2h0LXRvLWxlZnQgbGluZWFyIDFzO1xufVxuXG5cblxuLyogQUJPVVQgU0VDVElPTiBFTkQgKi9cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsb0JBQW9COztBQUV4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUNBQW1DO0lBQ25DLHdCQUF3QjtBQUM1QjtBQUNBLGVBQWU7QUFDZjtJQUNJLDRCQUE0QjtJQUM1Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0EseUJBQXlCOztBQUV6QjtJQUNJLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULEtBQUs7QUFD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SUFDbkIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixZQUFZO0lBQ1osU0FBUztJQUNULGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixZQUFZO0lBQ1osd0NBQXdDO0FBQzVDOzs7O0FBSUEsc0JBQXNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICMzQzQ2MkQ7XFxuICAgIC0tdGV4dC1jb2xvcjogI0QyQ0FCQztcXG4gICAgLS10ZXh0LWNvbG9yLWhlYWRpbmc6ICNEOEEzNTM7XFxuICAgIC0tbGF5ZXItY29sb3ItMTogIzQ3NTEzNztcXG4gICAgLS1sYXllci1jb2xvci0yOiAjNTQ2MjNGO1xcbiAgICAtLWJ0bi1jb2xvcjogIzZFODA1MTtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxufVxcblxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiBDcmltc29uIFRleHQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG4vKiBCQVNFIENMQVNTICovXFxuLnByaW1hcnlfX2J0bntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnRuLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uc2Vjb25kYXJ5X19idG57XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYnRuLWNvbG9yKTtcXG59XFxuXFxuLmQtb2Zme1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi8qIEhFQURFUiBTRUNUSU9OIFNUQVJUICovXFxuXFxuYm9keSAuaGVhZGVye1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHotaW5kZXg6MztcXG4gICAgdG9wOjA7XFxufVxcblxcbi5oZWFkZXJfX25hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhlYWRlcl9fbmF2LWl0ZW17XFxuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZm9udC1mYW1pbHk6IEl0YWxpYW5ubztcXG59XFxuXFxuLmhlYWRlcl9fbmF2LWl0ZW06aG92ZXJ7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1idG4tY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1oZWFkaW5nKTtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtcmlnaHQtdG8tbGVmdCB7XFxuICAgIGZyb217XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG97XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWxlZnQtdG8tcmlnaHQge1xcbiAgICBmcm9te1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0b3tcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcbi8qIEhFQURFUiBTRUNUSU9OIEVORCovXFxuXFxuLyogSEVSTyBTRUNUSU9OIFNUQVJUICovXFxuLmhlcm97XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5oZXJvX19pbWd7XFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9pbWFnZXMvdjFfNi5wbmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbmltYXRpb246IHNsaWRlLXJpZ2h0LXRvLWxlZnQgbGluZWFyIDFzO1xcbn1cXG5cXG4uaGVyb19fY29udGVudHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnJlbSAwO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBhbmltYXRpb246IHNsaWRlLWxlZnQtdG8tcmlnaHQgbGluZWFyIDFzO1xcbn1cXG5cXG4uaGVyb19fY29udGVudC1ibG9ja3tcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiAyNXJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGF5ZXItY29sb3ItMSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhlcm9fX2NvbnRlbnQtYmxvY2sgc3BhbntcXG4gICAgZm9udC1mYW1pbHk6IEl0YWxpYW5ubztcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1oZWFkaW5nKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0zLjRyZW07XFxuICAgIGxlZnQ6IC0wLjVyZW07XFxufVxcblxcbi5oZXJvX19jb250ZW50LWJsb2NrIHB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI1cmVtO1xcbiAgICB0b3A6IDJyZW07XFxuICAgIGxlZnQ6IC01cmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmhlcm9fX2NvbnRlbnQtYmxvY2sgZGl2e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTVyZW07XFxuICAgIGxlZnQ6IC01LjVyZW07XFxufVxcblxcbi5oZXJvX19jb250ZW50LWJsb2NrID4gZGl2ID4gYnV0dG9ue1xcbiAgICBmb250LWZhbWlseTogQ3JpbXNvbiBUZXh0O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbjowIC41cmVtO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uaGVyb19fY29udGVudC1ibG9jayA+IGRpdiA+IGJ1dHRvbjpob3ZlcntcXG4gICAgb3BhY2l0eTowLjg7XFxuICAgIHRyYW5zaXRpb246LjNzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wdG4xe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAuNXJlbTtcXG4gICAgbGVmdDowO1xcbn1cXG5cXG4ucHRuMSBpbWd7XFxuICAgIHdpZHRoOiAxM3JlbTtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4ucHRuMntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNXJlbTtcXG4gICAgdG9wOiAyOXJlbTtcXG59XFxuXFxuLnB0bjIgaW1ne1xcbiAgICBvcGFjaXR5OjAuODtcXG59XFxuXFxuLnB0bjN7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA1cmVtO1xcbiAgICBsZWZ0OiA1cmVtXFxufVxcbi8qIEhFUk8gU0VDVElPTiBFTkQgKi9cXG5cXG4vKiBNRU5VIFNFQ1RJT04gU1RBUlQgKi9cXG4ubWVudXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWVudSA+IGltZ3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB0b3A6MS41cmVtO1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBhbmltYXRpb246IHNsaWRlLWxlZnQtdG8tcmlnaHQgbGluZWFyIDFzO1xcbn1cXG5cXG4ubWVudV9fYmFjay1ibG9ja3tcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXllci1jb2xvci0xKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDJyZW07XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5tZW51X190ZXh0LWJsb2Nre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgd2lkdGg6IDE4cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1cmVtO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB0b3A6IDJyZW07XFxuICAgIGFuaW1hdGlvbjogc2xpZGUtcmlnaHQtdG8tbGVmdCBsaW5lYXIgMXM7XFxufVxcblxcbi5tZW51X190ZXh0LWJsb2NrIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItaGVhZGluZyk7XFxuICAgIGZvbnQtZmFtaWx5OiBJdGFsaWFubm87XFxufVxcblxcbi5tZW51X190ZXh0LWJsb2NrIHB7XFxuICAgIGZvbnQtc2l6ZToxLjJyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm1lbnVfX2Jlc3QtYmxvY2t7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxheWVyLWNvbG9yLTIpO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDo2cmVtO1xcbiAgICBwYWRkaW5nOjFyZW0gMCAycmVtO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBhbmltYXRpb246IHNsaWRlLWxlZnQtdG8tcmlnaHQgbGluZWFyIDFzO1xcblxcbn1cXG5cXG4ubWVudV9fYmVzdC1ibG9jayA+IHNwYW57XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6IEl0YWxpYW5ubztcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItaGVhZGluZyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5ncmlkX19ibG9ja3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XFxuICAgIGdhcDogM3JlbTtcXG59XFxuXFxuLmJlc3RfX2NhcmR7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWxheWVyLWNvbG9yLTIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG59XFxuXFxuLmJlc3RfX2NhcmQgLmRpc2hfX2ltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgICBcXG59XFxuXFxuLmJlc3RfX2NhcmQgc3BhbntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYmVzdF9fY2FyZCBzcGFuOmhvdmVye1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1oZWFkaW5nKTtcXG4gICAgdHJhbnNpdGlvbjouM3M7XFxufVxcblxcbi5iZXN0X19jYXJkIC5zdGFye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLjVyZW07XFxuICAgIGxlZnQ6IC41cmVtO1xcbn1cXG5cXG4ubWVudV9fbGlzdC1ibG9ja3tcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGF5ZXItY29sb3ItMik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTRyZW07XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGFuaW1hdGlvbjogc2xpZGUtcmlnaHQtdG8tbGVmdCBsaW5lYXIgMXM7XFxuXFxufVxcblxcbi5tZW51X19saXN0LWJsb2NrIHNwYW57XFxuICAgIGNvbG9yOnZhcigtLXRleHQtY29sb3ItaGVhZGluZyk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLm1lbnVfX2xpc3QtYmxvY2sgdWx7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm1lbnVfX2xpc3QtYmxvY2sgbGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudV9fbGlzdC1ibG9jayBsaTpob3ZlcntcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItaGVhZGluZyk7XFxuICAgIHRyYW5zaXRpb246IC4zcztcXG59XFxuXFxuLm1lbnVfX2xpc3QtYmxvY2sgPiBpbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBNRU5VIFNFQ1RJT04gRU5EICovXFxuXFxuLyogQUJPVVQgU0VDVElPTiBTVEFSVCAqL1xcbi5hYm91dHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmFib3V0X19pbWd7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaW1hZ2VzL2Fib3V0LnBuZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICB0b3A6MDtcXG4gICAgbGVmdDowO1xcbiAgICBhbmltYXRpb246IHNsaWRlLWxlZnQtdG8tcmlnaHQgbGluZWFyIDFzO1xcbn1cXG5cXG4uYWJvdXRfX2NvbnRlbnR7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgcmlnaHQ6IDEwcmVtO1xcbiAgICB0b3A6IDVyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxheWVyLWNvbG9yLTIpO1xcbiAgICBhbmltYXRpb246IHNsaWRlLXJpZ2h0LXRvLWxlZnQgbGluZWFyIDFzO1xcbn1cXG5cXG4uYWJvdXRfX2NvbnRlbnQgPiBzcGFue1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtZmFtaWx5Okl0YWxpYW5ubztcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItaGVhZGluZyk7XFxufVxcblxcbi5hYm91dF9fY29udGVudCA+IGltZ3tcXG4gICAgbWFyZ2luOiAzcmVtIDA7XFxufVxcblxcbi5hYm91dF9fY29udGVudCB1bHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uYWJvdXRfX2NvbnRlbnQgPiB1bCA+IGxpe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5hYm91dCA+IGltZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDVyZW07XFxuICAgIGFuaW1hdGlvbjogc2xpZGUtcmlnaHQtdG8tbGVmdCBsaW5lYXIgMXM7XFxufVxcblxcblxcblxcbi8qIEFCT1VUIFNFQ1RJT04gRU5EICovXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYWJvdXRTdmcgZnJvbSAnLi9pbWFnZXMvYWJvdXQuc3ZnJztcbmltcG9ydCBsaW5lU3ZnIGZyb20gJy4vaW1hZ2VzL2xpbmUuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXQoKSB7XG4gICAgY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG5cbiAgICBjb25zdCBhYm91dEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRJbWFnZS5jbGFzc0xpc3QuYWRkKCdhYm91dF9faW1nJyk7XG5cbiAgICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWJvdXRfX2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWJvdXRUaXRsZS50ZXh0Q29udGVudCA9ICdBYm91dCB1cyc7XG5cbiAgICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXRUZXh0LnRleHRDb250ZW50ID0gYE5lc3RsZWQgaW4gdGhlIGhlYXJ0IG9mIHZpYnJhbnQgSGFub2ksIEdyZWVuQml0ZXMgaXMgbW9yZSB0aGFuIGp1c3QgYSByZXN0YXVyYW50OyBpdCdzIGEgaGF2ZW4gZm9yIHBsYW50LWJhc2VkIGVudGh1c2lhc3RzIGFuZCBjdWxpbmFyeSBleHBsb3JlcnMgYWxpa2UuIE91ciBhZGRyZXNzLCBsb2NhdGVkIGF0IFtBZGRyZXNzXSwgc2VydmVzIGFzIGEgY296eSByZXRyZWF0IHdoZXJlIHN1c3RhaW5hYmlsaXR5IG1lZXRzIGV4Y2VwdGlvbmFsIHRhc3RlLiBDb21lIGpvaW4gdXMgaW4gZW1icmFjaW5nIHRoZSBqb3kgb2YgY3J1ZWx0eS1mcmVlIGRpbmluZyBhbmQgdGhlIHRocml2aW5nIGVuZXJneSBvZiBIYW5vaSBhdCBHcmVlbkJpdGVzLmA7XG5cbiAgICBjb25zdCBhYm91dEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFib3V0SW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYWJvdXRTdmcpO1xuICAgIGFib3V0SW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJycpO1xuXG4gICAgY29uc3QgY29udGFjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhY3RJdGVtcyA9IFtcbiAgICAgICAgJ0NvbnRhY3QnLFxuICAgICAgICAnUGhvbmU6ICs4NCAxMjM0NTY3NzgnLFxuICAgICAgICAnRW1haWw6IGJldmVnYW5AZ21haWwuY29tJyxcbiAgICAgICAgJ2dpdGh1Yi5jb20vZGQtbWFobidcbiAgICBdO1xuXG4gICAgY29udGFjdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICBjb250YWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsaW5lSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsaW5lSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBsaW5lU3ZnKTtcbiAgICBsaW5lSW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCAnJyk7XG5cbiAgICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSk7XG4gICAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0VGV4dCk7XG4gICAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0SW1nKTtcbiAgICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdExpc3QpO1xuXG4gICAgYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKGFib3V0SW1hZ2UpO1xuICAgIGFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChhYm91dENvbnRlbnQpO1xuICAgIGFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChsaW5lSW1hZ2UpO1xuXG4gICAgcmV0dXJuIGFib3V0U2VjdGlvbjtcbn1cbiIsImltcG9ydCBsb2dvIGZyb20gJy4vaW1hZ2VzL2xvZ28uc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlckJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckJhci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIGNvbnN0IGhlYWRlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJMb2dvLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbG9nbycpO1xuICAgIGhlYWRlckxvZ28uaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtsb2dvfVwiIGFsdD1cIkxvZ29cIj5gO1xuXG4gICAgY29uc3QgaGVhZGVyTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyTmF2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbmF2Jyk7XG5cbiAgICBjb25zdCBuYXZJdGVtcyA9IFtcbiAgICAgICAgeyBjbGFzczogJ25hdjEnLCB0ZXh0OiAnSG9tZScgfSxcbiAgICAgICAgeyBjbGFzczogJ25hdjInLCB0ZXh0OiAnTWVudScgfSxcbiAgICAgICAgeyBjbGFzczogJ25hdjMnLCB0ZXh0OiAnQWJvdXQnIH1cbiAgICBdO1xuXG4gICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYXZJdGVtLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbmF2LWl0ZW0nLCBpdGVtLmNsYXNzKTtcbiAgICAgICAgbmF2SXRlbS5pbm5lckhUTUwgPSBgPHNwYW4+JHtpdGVtLnRleHR9PC9zcGFuPmA7XG4gICAgICAgIGhlYWRlck5hdi5hcHBlbmRDaGlsZChuYXZJdGVtKTtcbiAgICB9KTtcblxuICAgIGhlYWRlckJhci5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcbiAgICBoZWFkZXJCYXIuYXBwZW5kQ2hpbGQoaGVhZGVyTmF2KTtcblxuICAgIHJldHVybiBoZWFkZXJCYXI7XG59XG4iLCJpbXBvcnQgbGluZVN2ZyBmcm9tICcuL2ltYWdlcy9saW5lLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlcm8oKSB7XG4gICAgY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG5cbiAgICBjb25zdCBoZXJvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm9Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2hlcm9fX2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlcm9UZXh0QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvVGV4dEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2hlcm9fX2NvbnRlbnQtYmxvY2snKTtcbiAgICBoZXJvVGV4dEJsb2NrLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHNwYW4+V2UgZG8gdmVnYW48L3NwYW4+XG4gICAgICAgIDxwPldlbGNvbWUgdG8gR3JlZW5CaXRlcywgSGFub2kncyBwbGFudC1iYXNlZCBwYXJhZGlzZSBzaW5jZSAyMDIwLiBEaXNjb3ZlciBhIGN1bGluYXJ5IGhhdmVuIGluIHRoZSBoZWFydCBvZiB0aGUgY2l0eSwgd2hlcmUgdmlicmFudCBzYWxhZHMgYW5kIGhlYXJ0eSBtYWlucyBjZWxlYnJhdGUgdGhlIGFydGlzdHJ5IG9mIHBsYW50LWJhc2VkIGN1aXNpbmUuIEpvaW4gdXMgZm9yIGEgdGFzdGUgb2YgY3J1ZWx0eS1mcmVlIGRpbmluZyBhdCBHcmVlbkJpdGVzLjwvcD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmltYXJ5X19idG4gbWVudV9fYnRuXCI+T3VyIE1lbnU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzZWNvbmRhcnlfX2J0biBhYm91dF9fYnRuXCI+QWJvdXQgdXM8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNvbnN0IHB0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwdG4xLmNsYXNzTGlzdC5hZGQoJ3B0bjEnKTtcbiAgICBwdG4xLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7bGluZVN2Z31cIiBhbHQ9XCJQYXR0ZXJuIDFcIj5gO1xuXG4gICAgY29uc3QgcHRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHB0bjIuY2xhc3NMaXN0LmFkZCgncHRuMicpO1xuICAgIHB0bjIuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtsaW5lU3ZnfVwiIGFsdD1cIlBhdHRlcm4gMlwiPmA7XG5cbiAgICBjb25zdCBwdG4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHRuMy5jbGFzc0xpc3QuYWRkKCdwdG4zJyk7XG4gICAgcHRuMy5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2xpbmVTdmd9XCIgYWx0PVwiUGF0dGVybiAzXCI+YDtcblxuICAgIGhlcm9Db250ZW50LmFwcGVuZENoaWxkKGhlcm9UZXh0QmxvY2spO1xuICAgIGhlcm9Db250ZW50LmFwcGVuZENoaWxkKHB0bjEpO1xuICAgIGhlcm9Db250ZW50LmFwcGVuZENoaWxkKHB0bjIpO1xuICAgIGhlcm9Db250ZW50LmFwcGVuZENoaWxkKHB0bjMpO1xuXG4gICAgY29uc3QgaGVyb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVyb0ltYWdlLmNsYXNzTGlzdC5hZGQoJ2hlcm9fX2ltZycpO1xuXG4gICAgaGVyb1NlY3Rpb24uYXBwZW5kQ2hpbGQoaGVyb0NvbnRlbnQpO1xuICAgIGhlcm9TZWN0aW9uLmFwcGVuZENoaWxkKGhlcm9JbWFnZSk7XG5cbiAgICByZXR1cm4gaGVyb1NlY3Rpb247XG59XG4iLCJpbXBvcnQgbGluZVN2ZyBmcm9tICcuL2ltYWdlcy9saW5lLnN2Zyc7XG5pbXBvcnQgbGVhZlN2ZyBmcm9tICcuL2ltYWdlcy9sZWFmLnN2Zyc7XG5pbXBvcnQgc3RhclN2ZyBmcm9tICcuL2ltYWdlcy9zdGFyLnN2Zyc7XG5pbXBvcnQgdG9mdUltZyBmcm9tICcuL2ltYWdlcy90b2Z1LnBuZyc7XG5pbXBvcnQgY2F1bGlJbWcgZnJvbSAnLi9pbWFnZXMvY2F1bGkucG5nJztcbmltcG9ydCBiaXJ5YW5pSW1nIGZyb20gJy4vaW1hZ2VzL2JpcnlhbmkucG5nJztcbmltcG9ydCBmcmFua2llc0ltZyBmcm9tICcuL2ltYWdlcy9mcmFua2llcy5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICAgIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgY29uc3QgbGluZUltYWdlVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbGluZUltYWdlVG9wLnNldEF0dHJpYnV0ZSgnc3JjJywgbGluZVN2Zyk7XG4gICAgbGluZUltYWdlVG9wLnNldEF0dHJpYnV0ZSgnYWx0JywgJycpO1xuXG4gICAgY29uc3QgdGV4dEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dEJsb2NrLmNsYXNzTGlzdC5hZGQoJ21lbnVfX3RleHQtYmxvY2snKTtcbiAgICB0ZXh0QmxvY2suaW5uZXJIVE1MID0gYFxuICAgICAgICA8c3Bhbj5PdXIgTWVudTwvc3Bhbj5cbiAgICAgICAgPHA+RW1iYXJrIG9uIGEgZmxhdm9yZnVsIGpvdXJuZXkgYXQgR3JlZW5CaXRlcyEgT3VyIHBsYW50LWJhc2VkIG1lbnUgd2VhdmVzIHRhbGVzIG9mIGRpdmVyc2UsIGlubm92YXRpdmUgZGVsaWdodHMuPC9wPlxuICAgIGA7XG5cbiAgICBjb25zdCBiZXN0QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiZXN0QmxvY2suY2xhc3NMaXN0LmFkZCgnbWVudV9fYmVzdC1ibG9jaycpO1xuXG4gICAgY29uc3QgYmVzdFNlbGxlclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYmVzdFNlbGxlclNwYW4udGV4dENvbnRlbnQgPSAnQmVzdCBTZWxsZXInO1xuXG4gICAgY29uc3QgZ3JpZEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX2Jsb2NrJyk7XG5cbiAgICBjb25zdCBiZXN0Q2FyZHMgPSBbXG4gICAgICAgIHsgaW1nU3Rhcjogc3RhclN2ZywgaW1nRGlzaDogdG9mdUltZywgZGlzaE5hbWU6ICdDcmlzcHkgQkJRIFRvZnUgU2FuZHdpY2gnIH0sXG4gICAgICAgIHsgaW1nU3Rhcjogc3RhclN2ZywgaW1nRGlzaDogY2F1bGlJbWcsIGRpc2hOYW1lOiAnV2hvbGUgUm9hc3RlZCBDYXVsaWZsb3dlcicgfSxcbiAgICAgICAgeyBpbWdTdGFyOiBzdGFyU3ZnLCBpbWdEaXNoOiBiaXJ5YW5pSW1nLCBkaXNoTmFtZTogJ1ZlZ2V0YWJsZSBCaXJ5YW5pJyB9LFxuICAgICAgICB7IGltZ1N0YXI6IHN0YXJTdmcsIGltZ0Rpc2g6IGZyYW5raWVzSW1nLCBkaXNoTmFtZTogJ0ZyYW5raWVzIShCb21iYXkgQnVycml0b3MpJyB9XG4gICAgXTtcblxuICAgIGJlc3RDYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICBjb25zdCBiZXN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBiZXN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdiZXN0X19jYXJkJyk7XG5cbiAgICAgICAgY29uc3QgaW1nU3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWdTdGFyLnNldEF0dHJpYnV0ZSgnc3JjJywgY2FyZC5pbWdTdGFyKTtcbiAgICAgICAgaW1nU3Rhci5jbGFzc0xpc3QuYWRkKCdzdGFyJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpbWdEaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZ0Rpc2guc2V0QXR0cmlidXRlKCdzcmMnLCBjYXJkLmltZ0Rpc2gpO1xuICAgICAgICBpbWdEaXNoLmNsYXNzTGlzdC5hZGQoJ2Rpc2hfX2ltZycpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc3BhbkRpc2hOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuRGlzaE5hbWUudGV4dENvbnRlbnQgPSBjYXJkLmRpc2hOYW1lO1xuXG4gICAgICAgIGJlc3RDYXJkLmFwcGVuZENoaWxkKGltZ1N0YXIpO1xuICAgICAgICBiZXN0Q2FyZC5hcHBlbmRDaGlsZChpbWdEaXNoKTtcbiAgICAgICAgYmVzdENhcmQuYXBwZW5kQ2hpbGQoc3BhbkRpc2hOYW1lKTtcblxuICAgICAgICBncmlkQmxvY2suYXBwZW5kQ2hpbGQoYmVzdENhcmQpO1xuICAgIH0pO1xuXG4gICAgYmVzdEJsb2NrLmFwcGVuZENoaWxkKGJlc3RTZWxsZXJTcGFuKTtcbiAgICBiZXN0QmxvY2suYXBwZW5kQ2hpbGQoZ3JpZEJsb2NrKTtcblxuICAgIGNvbnN0IGxpc3RCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RCbG9jay5jbGFzc0xpc3QuYWRkKCdtZW51X19saXN0LWJsb2NrJyk7XG5cbiAgICBjb25zdCBsaXN0SGVhZEZvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGlzdEhlYWRGb29kLmNsYXNzTGlzdC5hZGQoJ2xpc3RfX2hlYWQnKTtcbiAgICBsaXN0SGVhZEZvb2QuaW5uZXJIVE1MID0gYEZvb2QgPGltZyBzcmM9XCIke2xlYWZTdmd9XCIgYWx0PVwiXCI+YDtcblxuICAgIGNvbnN0IGxpc3RJdGVtc0Zvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxpc3RJdGVtc0Zvb2QuY2xhc3NMaXN0LmFkZCgnbGlzdF9faXRlbXMnKTtcblxuICAgIGNvbnN0IGZvb2RJdGVtcyA9IFtcbiAgICAgICAgJ1F1aW5vYS1TdHVmZmVkIEJlbGwgUGVwcGVycycsXG4gICAgICAgICdMZW50aWwgYW5kIFZlZ2V0YWJsZSBDdXJyeScsXG4gICAgICAgICdadWNjaGluaSBOb29kbGUgUHJpbWF2ZXJhJyxcbiAgICAgICAgJ0NoaWNrcGVhIGFuZCBTcGluYWNoIFdyYXAnLFxuICAgICAgICAnQ29jb251dCBMaW1lIFRvZnUgU2tld2VycydcbiAgICBdO1xuXG4gICAgZm9vZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICBsaXN0SXRlbXNGb29kLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxpc3RIZWFkRHJpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGxpc3RIZWFkRHJpbmtzLmNsYXNzTGlzdC5hZGQoJ2xpc3RfX2hlYWQnKTtcbiAgICBsaXN0SGVhZERyaW5rcy5pbm5lckhUTUwgPSBgRHJpbmtzIDxpbWcgc3JjPVwiJHtsZWFmU3ZnfVwiIGFsdD1cIlwiPmA7XG5cbiAgICBjb25zdCBsaXN0SXRlbXNEcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxpc3RJdGVtc0RyaW5rcy5jbGFzc0xpc3QuYWRkKCdsaXN0X19pdGVtcycpO1xuXG4gICAgY29uc3QgZHJpbmtJdGVtcyA9IFtcbiAgICAgICAgJ0JlcnJ5IEJsaXNzIFNtb290aGllJyxcbiAgICAgICAgJ0N1Y3VtYmVyIE1pbnQgUmVmcmVzaGVyJyxcbiAgICAgICAgJ0dvbGRlbiBUdXJtZXJpYyBMYXR0ZSdcbiAgICBdO1xuXG4gICAgZHJpbmtJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgbGlzdEl0ZW1zRHJpbmtzLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxpbmVJbWFnZUJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxpbmVJbWFnZUJvdHRvbS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGxpbmVTdmcpO1xuICAgIGxpbmVJbWFnZUJvdHRvbS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICcnKTtcblxuICAgIGxpc3RCbG9jay5hcHBlbmRDaGlsZChsaXN0SGVhZEZvb2QpO1xuICAgIGxpc3RCbG9jay5hcHBlbmRDaGlsZChsaXN0SXRlbXNGb29kKTtcbiAgICBsaXN0QmxvY2suYXBwZW5kQ2hpbGQobGlzdEhlYWREcmlua3MpO1xuICAgIGxpc3RCbG9jay5hcHBlbmRDaGlsZChsaXN0SXRlbXNEcmlua3MpO1xuICAgIGxpc3RCbG9jay5hcHBlbmRDaGlsZChsaW5lSW1hZ2VCb3R0b20pO1xuXG4gICAgY29uc3QgYmFja0Jsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFja0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2JhY2stYmxvY2snKTtcblxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGxpbmVJbWFnZVRvcCk7XG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQodGV4dEJsb2NrKTtcbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChiZXN0QmxvY2spO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGxpc3RCbG9jayk7XG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoYmFja0Jsb2NrKTtcblxuICAgIHJldHVybiBtZW51U2VjdGlvbjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnXG5pbXBvcnQgaGVybyBmcm9tICcuL2hlcm8uanMnXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanMnXG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dC5qcydcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbmNvbnN0IGhlYWRlckJhciA9IGhlYWRlcigpXG5jb25zdCBoZXJvU2VjdGlvbiA9IGhlcm8oKVxuY29uc3QgbWVudVNlY3Rpb24gPSBtZW51KClcbmNvbnN0IGFib3V0U2VjdGlvbiA9IGFib3V0KClcblxuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJCYXIpXG5jb250ZW50LmFwcGVuZENoaWxkKGhlcm9TZWN0aW9uKVxuY29udGVudC5hcHBlbmRDaGlsZChtZW51U2VjdGlvbilcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKVxuXG5jb25zdCBtZW51QnRuID0gaGVyb1NlY3Rpb24ucXVlcnlTZWxlY3RvcignLm1lbnVfX2J0bicpXG5jb25zdCBhYm91dEJ0biA9IGhlcm9TZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fYnRuJylcbmNvbnN0IGhvbWVOYXYgPSBoZWFkZXJCYXIucXVlcnlTZWxlY3RvcignLm5hdjEnKVxuY29uc3QgbWVudU5hdiA9IGhlYWRlckJhci5xdWVyeVNlbGVjdG9yKCcubmF2MicpXG5jb25zdCBhYm91dE5hdiA9IGhlYWRlckJhci5xdWVyeVNlbGVjdG9yKCcubmF2MycpXG5cblxuZnVuY3Rpb24gaGVyb09uKCl7XG4gICAgaGVyb1NlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnZC1vZmYnKVxuICAgIG1lbnVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Qtb2ZmJylcbiAgICBhYm91dFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZC1vZmYnKVxufVxuXG5mdW5jdGlvbiBtZW51T24oKXtcbiAgICBoZXJvU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdkLW9mZicpXG4gICAgYWJvdXRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Qtb2ZmJylcbiAgICBtZW51U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdkLW9mZicpXG59XG5cbmZ1bmN0aW9uIGFib3V0T24oKXtcbiAgICBoZXJvU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdkLW9mZicpXG4gICAgYWJvdXRTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtb2ZmJylcbiAgICBtZW51U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdkLW9mZicpXG59XG5cbmhlcm9PbigpXG5cbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51T24pXG5hYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFib3V0T24pXG5ob21lTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGVyb09uKVxubWVudU5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnVPbilcbmFib3V0TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWJvdXRPbilcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9