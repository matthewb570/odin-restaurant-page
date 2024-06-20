/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/cutting_board.jpg */ "./src/images/cutting_board.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.bunny.net/css?family=roboto:400,400i,700);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --cutting-board-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});

    --standard-box-shadow: rgb(156, 156, 156) 1px 1px 5px;
    --accent-background-color: rgb(225, 225, 225);

    font-family: 'Roboto', sans-serif;
}

body {
    padding: 0;
    margin: 0;
    height: 100vh;

    display: flex;
    flex-direction: column;
}

header {
    display: flex;
    align-items: center;
    
    padding: 20px;
}

header .title {
    flex: 1;

    font-size: 2rem;
}

header nav button {
    border: none;
    background-color: inherit;
    font-size: 1rem;
    font-family: inherit;
}

#content {
    flex: 1;

    display: flex;
    flex-direction: column;
}

.home-container {
    flex: 1;

    display: flex;
    flex-direction: column;
    
    background-image: var(--cutting-board-image);
    background-repeat: no-repeat;
    background-size: cover;
}

.home-container .text-content {
    flex: 1;

    display: flex;
    flex-direction: column;
    backdrop-filter: blur(10px);
}

.home-container .text-content .name {
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    font-size: 5rem;
}

.home-container .description {
    flex: 1;

    text-align: center;
    font-size: 2rem;
}

.page-header {
    display: flex;
    justify-content: center;

    font-size: 3rem;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 75px;
}

#about-container .page-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#about-container .page-section,
#menu-container .page-section {
    margin-bottom: 50px;
}

#menu-container .page-section {
    padding: 20px;
}

#about-container .section-header,
#menu-container .section-header {
    font-size: 2rem;
    margin-bottom: 10px;
    font-weight: 700;
}

#about-container .section-content {
    font-size: 1.2rem;
}

#menu-container {
    padding: 0px 20px 20px 20px;
}

#menu-container .page-section:nth-of-type(2n) {
    background-color: var(--accent-background-color);
    border-radius: 10px;
}

.card-list {
    display: flex;
    gap: 20px;
}

.card {
    display: flex;
    flex-direction: column;

    box-shadow: var(--standard-box-shadow);
    width: 400px;
    border-radius: 10px;
    padding-bottom: 20px;
    background-color: white;
}

.card-image {
    width: 100%;
    height: 270px;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
}

.card-title {
    font-size: 1.6rem;
    font-weight: 700;
    padding: 20px 20px 0px 20px;
}

.card-description {
    flex: 1;

    padding: 0px 20px 10px 20px;
    font-size: 1.2rem;
}

.card-price {
    display: flex;
    justify-content: flex-end;

    padding: 0px 20px;
    font-size: 1.2rem;
}`, "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAEA;IACI,8DAAuD;;IAEvD,qDAAqD;IACrD,6CAA6C;;IAE7C,iCAAiC;AACrC;;AAEA;IACI,UAAU;IACV,SAAS;IACT,aAAa;;IAEb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;;IAEnB,aAAa;AACjB;;AAEA;IACI,OAAO;;IAEP,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,OAAO;;IAEP,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,OAAO;;IAEP,aAAa;IACb,sBAAsB;;IAEtB,4CAA4C;IAC5C,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,OAAO;;IAEP,aAAa;IACb,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,OAAO;;IAEP,aAAa;IACb,uBAAuB;IACvB,qBAAqB;;IAErB,eAAe;AACnB;;AAEA;IACI,OAAO;;IAEP,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;;IAEvB,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,eAAe;IACf,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,gDAAgD;IAChD,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,sCAAsC;IACtC,YAAY;IACZ,mBAAmB;IACnB,oBAAoB;IACpB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,gCAAgC;AACpC;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,2BAA2B;AAC/B;;AAEA;IACI,OAAO;;IAEP,2BAA2B;IAC3B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,yBAAyB;;IAEzB,iBAAiB;IACjB,iBAAiB;AACrB","sourcesContent":["@import url(https://fonts.bunny.net/css?family=roboto:400,400i,700);\n\n:root {\n    --cutting-board-image: url(../images/cutting_board.jpg);\n\n    --standard-box-shadow: rgb(156, 156, 156) 1px 1px 5px;\n    --accent-background-color: rgb(225, 225, 225);\n\n    font-family: 'Roboto', sans-serif;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    \n    padding: 20px;\n}\n\nheader .title {\n    flex: 1;\n\n    font-size: 2rem;\n}\n\nheader nav button {\n    border: none;\n    background-color: inherit;\n    font-size: 1rem;\n    font-family: inherit;\n}\n\n#content {\n    flex: 1;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.home-container {\n    flex: 1;\n\n    display: flex;\n    flex-direction: column;\n    \n    background-image: var(--cutting-board-image);\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.home-container .text-content {\n    flex: 1;\n\n    display: flex;\n    flex-direction: column;\n    backdrop-filter: blur(10px);\n}\n\n.home-container .text-content .name {\n    flex: 1;\n\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n\n    font-size: 5rem;\n}\n\n.home-container .description {\n    flex: 1;\n\n    text-align: center;\n    font-size: 2rem;\n}\n\n.page-header {\n    display: flex;\n    justify-content: center;\n\n    font-size: 3rem;\n    font-weight: 700;\n    margin-top: 20px;\n    margin-bottom: 75px;\n}\n\n#about-container .page-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#about-container .page-section,\n#menu-container .page-section {\n    margin-bottom: 50px;\n}\n\n#menu-container .page-section {\n    padding: 20px;\n}\n\n#about-container .section-header,\n#menu-container .section-header {\n    font-size: 2rem;\n    margin-bottom: 10px;\n    font-weight: 700;\n}\n\n#about-container .section-content {\n    font-size: 1.2rem;\n}\n\n#menu-container {\n    padding: 0px 20px 20px 20px;\n}\n\n#menu-container .page-section:nth-of-type(2n) {\n    background-color: var(--accent-background-color);\n    border-radius: 10px;\n}\n\n.card-list {\n    display: flex;\n    gap: 20px;\n}\n\n.card {\n    display: flex;\n    flex-direction: column;\n\n    box-shadow: var(--standard-box-shadow);\n    width: 400px;\n    border-radius: 10px;\n    padding-bottom: 20px;\n    background-color: white;\n}\n\n.card-image {\n    width: 100%;\n    height: 270px;\n    object-fit: cover;\n    border-radius: 10px 10px 0px 0px;\n}\n\n.card-title {\n    font-size: 1.6rem;\n    font-weight: 700;\n    padding: 20px 20px 0px 20px;\n}\n\n.card-description {\n    flex: 1;\n\n    padding: 0px 20px 10px 20px;\n    font-size: 1.2rem;\n}\n\n.card-price {\n    display: flex;\n    justify-content: flex-end;\n\n    padding: 0px 20px;\n    font-size: 1.2rem;\n}"],"sourceRoot":""}]);
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

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const aboutPage = new function() {

    const create = (parentContainer) => {
        parentContainer.appendChild(createAboutContainer());
    }

    const createAboutContainer = () => {
        const divAboutContainer = document.createElement('div');
        divAboutContainer.id = 'about-container';
        divAboutContainer.appendChild(createPageHeader());
        divAboutContainer.appendChild(createHours());
        divAboutContainer.appendChild(createContactUs());

        return divAboutContainer
    }

    const createPageHeader = () => {
        const divHeader = document.createElement('div');
        divHeader.classList.add('page-header');
        divHeader.textContent = 'About';

        return divHeader;
    }

    const createHours = () => {
        const divHours = document.createElement('div');
        divHours.id = 'hours';
        divHours.classList.add('page-section');
        divHours.appendChild(createSectionHeader('Hours'));
        divHours.appendChild(createSectionContent('Monday - Sunday: 10:00 am - 10:00 pm'));
        
        return divHours;
    }

    const createContactUs = () => {
        const divContactUs = document.createElement('div');
        divContactUs.id = 'contact-us';
        divContactUs.classList.add('page-section');
        divContactUs.appendChild(createSectionHeader('Contact Us'));
        divContactUs.appendChild(createSectionContent('123 Restaurant Way'));
        divContactUs.appendChild(createSectionContent('Restaurant Village, WI 12345'));
        divContactUs.appendChild(createSectionContent('555.555.5555'))
        divContactUs.appendChild(createSectionContent('definitely.a.real.email.address@notfake.com'))

        return divContactUs;
    }
    
    const createSectionHeader = (sectionTitle) => {
        const divSectionHeader = document.createElement('div');
        divSectionHeader.classList.add('section-header');
        divSectionHeader.textContent = sectionTitle;

        return divSectionHeader;
    }

    const createSectionContent = (sectionText) => {
        const divSectionContent = document.createElement('div');
        divSectionContent.classList.add('section-content');
        divSectionContent.textContent = sectionText;

        return divSectionContent;
    }

    return { create };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const homePage = new function() {

    const create = (parentContainer) => {
        parentContainer.appendChild(createHomeContainer());
    }

    const createHomeContainer = () => {
        const divHomeContainer = document.createElement('div');
        divHomeContainer.classList.add('home-container');
        divHomeContainer.appendChild(createTextContent());

        return divHomeContainer;
    }

    const createTextContent = () => {
        const divTextContent = document.createElement('div');
        divTextContent.classList.add('text-content');
        divTextContent.appendChild(createName());
        divTextContent.appendChild(createDescription());

        return divTextContent;
    }

    const createName = () => {
        const divName = document.createElement('div');
        divName.classList.add('name');
        divName.textContent = 'Family Restaurant';

        return divName;
    }

    const createDescription = () => {
        const divDescription = document.createElement('div');
        divDescription.classList.add('description');
        divDescription.textContent = 'A totally real, not made up restaurant that serves home-cooked meals made with only the finest ingredients.';

        return divDescription;
    }

    return { create };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_onion_rings_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/onion_rings.jpg */ "./src/images/onion_rings.jpg");
/* harmony import */ var _images_cheeseburger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/cheeseburger.jpg */ "./src/images/cheeseburger.jpg");
/* harmony import */ var _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/pizza.jpg */ "./src/images/pizza.jpg");
/* harmony import */ var _images_cookies_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/cookies.jpg */ "./src/images/cookies.jpg");
/* harmony import */ var _images_ice_cream_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/ice_cream.jpg */ "./src/images/ice_cream.jpg");
/* harmony import */ var _images_water_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/water.jpg */ "./src/images/water.jpg");
/* harmony import */ var _images_lemonade_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/lemonade.jpg */ "./src/images/lemonade.jpg");








const menuPage = new function() {

    const create = (parentContainer) => {
        parentContainer.appendChild(createMenuContainer());
    }

    const createMenuContainer = () => {
        const divMenuContainer = document.createElement('div');
        divMenuContainer.id = 'menu-container';
        divMenuContainer.appendChild(createPageHeader());
        divMenuContainer.appendChild(createAppetizerSection());
        divMenuContainer.appendChild(createEntreeSection());
        divMenuContainer.appendChild(createDessertSection());
        divMenuContainer.appendChild(createBeverageSection());

        return divMenuContainer;
    }

    const createPageHeader = () => {
        const divHeader = document.createElement('div');
        divHeader.classList.add('page-header');
        divHeader.textContent = 'Menu';

        return divHeader;
    }
    
    const createAppetizerSection = () => {
        const divAppetizerSection = document.createElement('div');
        divAppetizerSection.classList.add('page-section');
        divAppetizerSection.appendChild(createSectionHeader('Appetizers'));
        divAppetizerSection.appendChild(createAppetizerCardList());
        
        return divAppetizerSection;
    }

    const createEntreeSection = () => {
        const divEntreeSection = document.createElement('div');
        divEntreeSection.classList.add('page-section');
        divEntreeSection.appendChild(createSectionHeader('Entrees'));
        divEntreeSection.appendChild(createEntreeCardList());

        return divEntreeSection;
    }

    const createDessertSection = () => {
        const divDessertSection = document.createElement('div');
        divDessertSection.classList.add('page-section');
        divDessertSection.appendChild(createSectionHeader('Desserts'));
        divDessertSection.appendChild(createDessertCardList());
        
        return divDessertSection;
    }

    const createBeverageSection = () => {
        const divBeverageSection = document.createElement('div');
        divBeverageSection.classList.add('page-section');
        divBeverageSection.appendChild(createSectionHeader('Beverages'));
        divBeverageSection.appendChild(createBeverageCardList());

        return divBeverageSection;
    }

    const createAppetizerCardList = () => {
        const divAppetizerCardList = document.createElement('div');
        divAppetizerCardList.classList.add('card-list');
        divAppetizerCardList.appendChild(createCard('Onion Rings', 'The classic, deep-fried favorite.', _images_onion_rings_jpg__WEBPACK_IMPORTED_MODULE_0__, '$5.99'));

        return divAppetizerCardList;
    }

    const createSectionHeader = (sectionTitle) => {
        const divSectionHeader = document.createElement('div');
        divSectionHeader.classList.add('section-header');
        divSectionHeader.textContent = sectionTitle;

        return divSectionHeader;
    }

    const createEntreeCardList = () => {
        const divEntreeCardList = document.createElement('div');
        divEntreeCardList.classList.add('card-list');
        divEntreeCardList.appendChild(createCard('Cheeseburger', 'A classic burger with all the fixings.', _images_cheeseburger_jpg__WEBPACK_IMPORTED_MODULE_1__, '$9.99'));
        divEntreeCardList.appendChild(createCard('Pizza', 'A cheese pizza baked in a wood fired oven.', _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__, '$11.99'))
        
        return divEntreeCardList;
    }

    const createDessertCardList = () => {
        const divDessertCardList = document.createElement('div');
        divDessertCardList.classList.add('card-list');
        divDessertCardList.appendChild(createCard('Cookies', 'A stack of six delicious double chocolate chip cookies.', _images_cookies_jpg__WEBPACK_IMPORTED_MODULE_3__, '$7.99'));
        divDessertCardList.appendChild(createCard('Ice Cream Sundae', 'An ice cream sundae that\'ll be sure to cater to any sweet tooth. Features ice cream, cookies, chocolate sauce, and whipped cream.', _images_ice_cream_jpg__WEBPACK_IMPORTED_MODULE_4__, '$9.99'));

        return divDessertCardList;
    }

    const createBeverageCardList = () => {
        const divBeverageCardList = document.createElement('div');
        divBeverageCardList.classList.add('card-list');
        divBeverageCardList.appendChild(createCard('Water', 'It\'s wet.', _images_water_jpg__WEBPACK_IMPORTED_MODULE_5__, 'Free'));
        divBeverageCardList.appendChild(createCard('Lemonade', 'The classic summer drink.', _images_lemonade_jpg__WEBPACK_IMPORTED_MODULE_6__, '$1.99'));

        return divBeverageCardList;
    }

    const createCard = (title, description, image, price) => {
        const divTitle = document.createElement('div');
        divTitle.classList.add('card-title');
        divTitle.textContent = title;
        
        const divDescription = document.createElement('div');
        divDescription.classList.add('card-description');
        divDescription.textContent = description;

        const divImage = document.createElement('img');
        divImage.classList.add('card-image');
        divImage.src = image;

        const divPrice = document.createElement('div');
        divPrice.classList.add('card-price');
        divPrice.textContent = price;
        
        const card = document.createElement('div');
        card.classList.add('card');
        card.appendChild(divImage);
        card.appendChild(divTitle);
        card.appendChild(divDescription);
        card.appendChild(divPrice);

        return card;
    }

    return { create }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);

/***/ }),

/***/ "./src/images/cheeseburger.jpg":
/*!*************************************!*\
  !*** ./src/images/cheeseburger.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0dcb6a132ec70daa6468.jpg";

/***/ }),

/***/ "./src/images/cookies.jpg":
/*!********************************!*\
  !*** ./src/images/cookies.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "910e40dbcb699adaacb8.jpg";

/***/ }),

/***/ "./src/images/cutting_board.jpg":
/*!**************************************!*\
  !*** ./src/images/cutting_board.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d03dcd430e1e27af5419.jpg";

/***/ }),

/***/ "./src/images/ice_cream.jpg":
/*!**********************************!*\
  !*** ./src/images/ice_cream.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4b334528f303984e2ca.jpg";

/***/ }),

/***/ "./src/images/lemonade.jpg":
/*!*********************************!*\
  !*** ./src/images/lemonade.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eccb737fe9026d24906d.jpg";

/***/ }),

/***/ "./src/images/onion_rings.jpg":
/*!************************************!*\
  !*** ./src/images/onion_rings.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97593746c821619c2de3.jpg";

/***/ }),

/***/ "./src/images/pizza.jpg":
/*!******************************!*\
  !*** ./src/images/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b12f3472e24f0ce02d1.jpg";

/***/ }),

/***/ "./src/images/water.jpg":
/*!******************************!*\
  !*** ./src/images/water.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f33560d2b4932c969983.jpg";

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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 			"app": 0
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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/js/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/js/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/js/about.js");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");





const divContent = document.querySelector('#content');
const btnHome = document.querySelector('#btn-home');
const btnMenu = document.querySelector('#btn-menu');
const btnAbout = document.querySelector('#btn-about');

const navigationEvents = new function() {
    
    const loadHomePage = () => {
        clearPage();
        _home_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(divContent);
    }

    const loadMenuPage = () => {
        clearPage();
        _menu_js__WEBPACK_IMPORTED_MODULE_1__["default"].create(divContent);
    }

    const loadAboutPage = () => {
        clearPage();
        _about_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(divContent);
    }

    const clearPage = () => {
        while(divContent.lastChild) {
            divContent.removeChild(divContent.lastChild);
        }
    }

    return { loadHomePage, loadMenuPage, loadAboutPage };
}

btnHome.addEventListener('click', navigationEvents.loadHomePage);
btnMenu.addEventListener('click', navigationEvents.loadMenuPage);
btnAbout.addEventListener('click', navigationEvents.loadAboutPage);

navigationEvents.loadHomePage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQWlDO0FBQ0E7QUFDRTtBQUNSOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0RBQVE7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLFFBQVEsZ0RBQVE7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLFFBQVEsaURBQVM7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZXMuY3NzPzk5YTMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2N1dHRpbmdfYm9hcmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5idW5ueS5uZXQvY3NzP2ZhbWlseT1yb2JvdG86NDAwLDQwMGksNzAwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tY3V0dGluZy1ib2FyZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuXG4gICAgLS1zdGFuZGFyZC1ib3gtc2hhZG93OiByZ2IoMTU2LCAxNTYsIDE1NikgMXB4IDFweCA1cHg7XG4gICAgLS1hY2NlbnQtYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjI1LCAyMjUpO1xuXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG5oZWFkZXIgLnRpdGxlIHtcbiAgICBmbGV4OiAxO1xuXG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG5oZWFkZXIgbmF2IGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xufVxuXG4jY29udGVudCB7XG4gICAgZmxleDogMTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhvbWUtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWN1dHRpbmctYm9hcmQtaW1hZ2UpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmhvbWUtY29udGFpbmVyIC50ZXh0LWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xufVxuXG4uaG9tZS1jb250YWluZXIgLnRleHQtY29udGVudCAubmFtZSB7XG4gICAgZmxleDogMTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgZm9udC1zaXplOiA1cmVtO1xufVxuXG4uaG9tZS1jb250YWluZXIgLmRlc2NyaXB0aW9uIHtcbiAgICBmbGV4OiAxO1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnBhZ2UtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xufVxuXG4jYWJvdXQtY29udGFpbmVyIC5wYWdlLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYWJvdXQtY29udGFpbmVyIC5wYWdlLXNlY3Rpb24sXG4jbWVudS1jb250YWluZXIgLnBhZ2Utc2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuI21lbnUtY29udGFpbmVyIC5wYWdlLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNhYm91dC1jb250YWluZXIgLnNlY3Rpb24taGVhZGVyLFxuI21lbnUtY29udGFpbmVyIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI2Fib3V0LWNvbnRhaW5lciAuc2VjdGlvbi1jb250ZW50IHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuI21lbnUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbiNtZW51LWNvbnRhaW5lciAucGFnZS1zZWN0aW9uOm50aC1vZi10eXBlKDJuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWJhY2tncm91bmQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYXJkLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc3RhbmRhcmQtYm94LXNoYWRvdyk7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI3MHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMHB4IDIwcHg7XG59XG5cbi5jYXJkLWRlc2NyaXB0aW9uIHtcbiAgICBmbGV4OiAxO1xuXG4gICAgcGFkZGluZzogMHB4IDIwcHggMTBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uY2FyZC1wcmljZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSw4REFBdUQ7O0lBRXZELHFEQUFxRDtJQUNyRCw2Q0FBNkM7O0lBRTdDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLE9BQU87O0lBRVAsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLE9BQU87O0lBRVAsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLE9BQU87O0lBRVAsYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsNENBQTRDO0lBQzVDLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxPQUFPOztJQUVQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksT0FBTzs7SUFFUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjs7SUFFckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLE9BQU87O0lBRVAsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCOztJQUV2QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZ0RBQWdEO0lBQ2hELG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0QixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxPQUFPOztJQUVQLDJCQUEyQjtJQUMzQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCOztJQUV6QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuYnVubnkubmV0L2Nzcz9mYW1pbHk9cm9ib3RvOjQwMCw0MDBpLDcwMCk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLWN1dHRpbmctYm9hcmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvY3V0dGluZ19ib2FyZC5qcGcpO1xcblxcbiAgICAtLXN0YW5kYXJkLWJveC1zaGFkb3c6IHJnYigxNTYsIDE1NiwgMTU2KSAxcHggMXB4IDVweDtcXG4gICAgLS1hY2NlbnQtYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjI1LCAyMjUpO1xcblxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5oZWFkZXIgLnRpdGxlIHtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5oZWFkZXIgbmF2IGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBmbGV4OiAxO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaG9tZS1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tY3V0dGluZy1ib2FyZC1pbWFnZSk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5ob21lLWNvbnRhaW5lciAudGV4dC1jb250ZW50IHtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbn1cXG5cXG4uaG9tZS1jb250YWluZXIgLnRleHQtY29udGVudCAubmFtZSB7XFxuICAgIGZsZXg6IDE7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuXFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuLmhvbWUtY29udGFpbmVyIC5kZXNjcmlwdGlvbiB7XFxuICAgIGZsZXg6IDE7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ucGFnZS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xcbn1cXG5cXG4jYWJvdXQtY29udGFpbmVyIC5wYWdlLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWJvdXQtY29udGFpbmVyIC5wYWdlLXNlY3Rpb24sXFxuI21lbnUtY29udGFpbmVyIC5wYWdlLXNlY3Rpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4jbWVudS1jb250YWluZXIgLnBhZ2Utc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNhYm91dC1jb250YWluZXIgLnNlY3Rpb24taGVhZGVyLFxcbiNtZW51LWNvbnRhaW5lciAuc2VjdGlvbi1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNhYm91dC1jb250YWluZXIgLnNlY3Rpb24tY29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4jbWVudS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwcHggMjBweCAyMHB4IDIwcHg7XFxufVxcblxcbiNtZW51LWNvbnRhaW5lciAucGFnZS1zZWN0aW9uOm50aC1vZi10eXBlKDJuKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNhcmQtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1ib3gtc2hhZG93KTtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5jYXJkLWltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjcwcHg7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDBweCAyMHB4O1xcbn1cXG5cXG4uY2FyZC1kZXNjcmlwdGlvbiB7XFxuICAgIGZsZXg6IDE7XFxuXFxuICAgIHBhZGRpbmc6IDBweCAyMHB4IDEwcHggMjBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5jYXJkLXByaWNlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFib3V0UGFnZSA9IG5ldyBmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IGNyZWF0ZSA9IChwYXJlbnRDb250YWluZXIpID0+IHtcbiAgICAgICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0Q29udGFpbmVyKCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUFib3V0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXZBYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZBYm91dENvbnRhaW5lci5pZCA9ICdhYm91dC1jb250YWluZXInO1xuICAgICAgICBkaXZBYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQYWdlSGVhZGVyKCkpO1xuICAgICAgICBkaXZBYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIb3VycygpKTtcbiAgICAgICAgZGl2QWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdFVzKCkpO1xuXG4gICAgICAgIHJldHVybiBkaXZBYm91dENvbnRhaW5lclxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVBhZ2VIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1oZWFkZXInKTtcbiAgICAgICAgZGl2SGVhZGVyLnRleHRDb250ZW50ID0gJ0Fib3V0JztcblxuICAgICAgICByZXR1cm4gZGl2SGVhZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUhvdXJzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXZIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZIb3Vycy5pZCA9ICdob3Vycyc7XG4gICAgICAgIGRpdkhvdXJzLmNsYXNzTGlzdC5hZGQoJ3BhZ2Utc2VjdGlvbicpO1xuICAgICAgICBkaXZIb3Vycy5hcHBlbmRDaGlsZChjcmVhdGVTZWN0aW9uSGVhZGVyKCdIb3VycycpKTtcbiAgICAgICAgZGl2SG91cnMuYXBwZW5kQ2hpbGQoY3JlYXRlU2VjdGlvbkNvbnRlbnQoJ01vbmRheSAtIFN1bmRheTogMTA6MDAgYW0gLSAxMDowMCBwbScpKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBkaXZIb3VycztcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVDb250YWN0VXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdkNvbnRhY3RVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZDb250YWN0VXMuaWQgPSAnY29udGFjdC11cyc7XG4gICAgICAgIGRpdkNvbnRhY3RVcy5jbGFzc0xpc3QuYWRkKCdwYWdlLXNlY3Rpb24nKTtcbiAgICAgICAgZGl2Q29udGFjdFVzLmFwcGVuZENoaWxkKGNyZWF0ZVNlY3Rpb25IZWFkZXIoJ0NvbnRhY3QgVXMnKSk7XG4gICAgICAgIGRpdkNvbnRhY3RVcy5hcHBlbmRDaGlsZChjcmVhdGVTZWN0aW9uQ29udGVudCgnMTIzIFJlc3RhdXJhbnQgV2F5JykpO1xuICAgICAgICBkaXZDb250YWN0VXMuYXBwZW5kQ2hpbGQoY3JlYXRlU2VjdGlvbkNvbnRlbnQoJ1Jlc3RhdXJhbnQgVmlsbGFnZSwgV0kgMTIzNDUnKSk7XG4gICAgICAgIGRpdkNvbnRhY3RVcy5hcHBlbmRDaGlsZChjcmVhdGVTZWN0aW9uQ29udGVudCgnNTU1LjU1NS41NTU1JykpXG4gICAgICAgIGRpdkNvbnRhY3RVcy5hcHBlbmRDaGlsZChjcmVhdGVTZWN0aW9uQ29udGVudCgnZGVmaW5pdGVseS5hLnJlYWwuZW1haWwuYWRkcmVzc0Bub3RmYWtlLmNvbScpKVxuXG4gICAgICAgIHJldHVybiBkaXZDb250YWN0VXM7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGNyZWF0ZVNlY3Rpb25IZWFkZXIgPSAoc2VjdGlvblRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdlNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2U2VjdGlvbkhlYWRlci5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWhlYWRlcicpO1xuICAgICAgICBkaXZTZWN0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gc2VjdGlvblRpdGxlO1xuXG4gICAgICAgIHJldHVybiBkaXZTZWN0aW9uSGVhZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVNlY3Rpb25Db250ZW50ID0gKHNlY3Rpb25UZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdlNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdlNlY3Rpb25Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tY29udGVudCcpO1xuICAgICAgICBkaXZTZWN0aW9uQ29udGVudC50ZXh0Q29udGVudCA9IHNlY3Rpb25UZXh0O1xuXG4gICAgICAgIHJldHVybiBkaXZTZWN0aW9uQ29udGVudDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGUgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXRQYWdlOyIsImNvbnN0IGhvbWVQYWdlID0gbmV3IGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgY3JlYXRlID0gKHBhcmVudENvbnRhaW5lcikgPT4ge1xuICAgICAgICBwYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZUNvbnRhaW5lcigpKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVIb21lQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXZIb21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdkhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1jb250YWluZXInKTtcbiAgICAgICAgZGl2SG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUZXh0Q29udGVudCgpKTtcblxuICAgICAgICByZXR1cm4gZGl2SG9tZUNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUZXh0Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2VGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2VGV4dENvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGV4dC1jb250ZW50Jyk7XG4gICAgICAgIGRpdlRleHRDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hbWUoKSk7XG4gICAgICAgIGRpdlRleHRDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZURlc2NyaXB0aW9uKCkpO1xuXG4gICAgICAgIHJldHVybiBkaXZUZXh0Q29udGVudDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVOYW1lID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXZOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdk5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICAgICAgICBkaXZOYW1lLnRleHRDb250ZW50ID0gJ0ZhbWlseSBSZXN0YXVyYW50JztcblxuICAgICAgICByZXR1cm4gZGl2TmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVEZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgZGl2RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnQSB0b3RhbGx5IHJlYWwsIG5vdCBtYWRlIHVwIHJlc3RhdXJhbnQgdGhhdCBzZXJ2ZXMgaG9tZS1jb29rZWQgbWVhbHMgbWFkZSB3aXRoIG9ubHkgdGhlIGZpbmVzdCBpbmdyZWRpZW50cy4nO1xuXG4gICAgICAgIHJldHVybiBkaXZEZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGUgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZVBhZ2U7IiwiaW1wb3J0IG9uaW9uUmluZ3MgZnJvbSAnLi4vaW1hZ2VzL29uaW9uX3JpbmdzLmpwZyc7XG5pbXBvcnQgY2hlZXNlYnVyZ2VyIGZyb20gJy4uL2ltYWdlcy9jaGVlc2VidXJnZXIuanBnJztcbmltcG9ydCBwaXp6YSBmcm9tICcuLi9pbWFnZXMvcGl6emEuanBnJztcbmltcG9ydCBjb29raWVzIGZyb20gJy4uL2ltYWdlcy9jb29raWVzLmpwZyc7XG5pbXBvcnQgaWNlQ3JlYW0gZnJvbSAnLi4vaW1hZ2VzL2ljZV9jcmVhbS5qcGcnO1xuaW1wb3J0IHdhdGVyIGZyb20gJy4uL2ltYWdlcy93YXRlci5qcGcnO1xuaW1wb3J0IGxlbW9uYWRlIGZyb20gJy4uL2ltYWdlcy9sZW1vbmFkZS5qcGcnO1xuXG5jb25zdCBtZW51UGFnZSA9IG5ldyBmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IGNyZWF0ZSA9IChwYXJlbnRDb250YWluZXIpID0+IHtcbiAgICAgICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVDb250YWluZXIoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTWVudUNvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2TWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZNZW51Q29udGFpbmVyLmlkID0gJ21lbnUtY29udGFpbmVyJztcbiAgICAgICAgZGl2TWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQYWdlSGVhZGVyKCkpO1xuICAgICAgICBkaXZNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFwcGV0aXplclNlY3Rpb24oKSk7XG4gICAgICAgIGRpdk1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRW50cmVlU2VjdGlvbigpKTtcbiAgICAgICAgZGl2TWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEZXNzZXJ0U2VjdGlvbigpKTtcbiAgICAgICAgZGl2TWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVCZXZlcmFnZVNlY3Rpb24oKSk7XG5cbiAgICAgICAgcmV0dXJuIGRpdk1lbnVDb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlUGFnZUhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdkhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYWdlLWhlYWRlcicpO1xuICAgICAgICBkaXZIZWFkZXIudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICAgICAgcmV0dXJuIGRpdkhlYWRlcjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY3JlYXRlQXBwZXRpemVyU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2QXBwZXRpemVyU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZBcHBldGl6ZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3BhZ2Utc2VjdGlvbicpO1xuICAgICAgICBkaXZBcHBldGl6ZXJTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVNlY3Rpb25IZWFkZXIoJ0FwcGV0aXplcnMnKSk7XG4gICAgICAgIGRpdkFwcGV0aXplclNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlQXBwZXRpemVyQ2FyZExpc3QoKSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGl2QXBwZXRpemVyU2VjdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVFbnRyZWVTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXZFbnRyZWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdkVudHJlZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgncGFnZS1zZWN0aW9uJyk7XG4gICAgICAgIGRpdkVudHJlZVNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlU2VjdGlvbkhlYWRlcignRW50cmVlcycpKTtcbiAgICAgICAgZGl2RW50cmVlU2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVFbnRyZWVDYXJkTGlzdCgpKTtcblxuICAgICAgICByZXR1cm4gZGl2RW50cmVlU2VjdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVEZXNzZXJ0U2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2RGVzc2VydFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2RGVzc2VydFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgncGFnZS1zZWN0aW9uJyk7XG4gICAgICAgIGRpdkRlc3NlcnRTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVNlY3Rpb25IZWFkZXIoJ0Rlc3NlcnRzJykpO1xuICAgICAgICBkaXZEZXNzZXJ0U2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVEZXNzZXJ0Q2FyZExpc3QoKSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGl2RGVzc2VydFNlY3Rpb247XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQmV2ZXJhZ2VTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXZCZXZlcmFnZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2QmV2ZXJhZ2VTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3BhZ2Utc2VjdGlvbicpO1xuICAgICAgICBkaXZCZXZlcmFnZVNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlU2VjdGlvbkhlYWRlcignQmV2ZXJhZ2VzJykpO1xuICAgICAgICBkaXZCZXZlcmFnZVNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlQmV2ZXJhZ2VDYXJkTGlzdCgpKTtcblxuICAgICAgICByZXR1cm4gZGl2QmV2ZXJhZ2VTZWN0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUFwcGV0aXplckNhcmRMaXN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXZBcHBldGl6ZXJDYXJkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZBcHBldGl6ZXJDYXJkTGlzdC5jbGFzc0xpc3QuYWRkKCdjYXJkLWxpc3QnKTtcbiAgICAgICAgZGl2QXBwZXRpemVyQ2FyZExpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZCgnT25pb24gUmluZ3MnLCAnVGhlIGNsYXNzaWMsIGRlZXAtZnJpZWQgZmF2b3JpdGUuJywgb25pb25SaW5ncywgJyQ1Ljk5JykpO1xuXG4gICAgICAgIHJldHVybiBkaXZBcHBldGl6ZXJDYXJkTGlzdDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVTZWN0aW9uSGVhZGVyID0gKHNlY3Rpb25UaXRsZSkgPT4ge1xuICAgICAgICBjb25zdCBkaXZTZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdlNlY3Rpb25IZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1oZWFkZXInKTtcbiAgICAgICAgZGl2U2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IHNlY3Rpb25UaXRsZTtcblxuICAgICAgICByZXR1cm4gZGl2U2VjdGlvbkhlYWRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVFbnRyZWVDYXJkTGlzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2RW50cmVlQ2FyZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2RW50cmVlQ2FyZExpc3QuY2xhc3NMaXN0LmFkZCgnY2FyZC1saXN0Jyk7XG4gICAgICAgIGRpdkVudHJlZUNhcmRMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUNhcmQoJ0NoZWVzZWJ1cmdlcicsICdBIGNsYXNzaWMgYnVyZ2VyIHdpdGggYWxsIHRoZSBmaXhpbmdzLicsIGNoZWVzZWJ1cmdlciwgJyQ5Ljk5JykpO1xuICAgICAgICBkaXZFbnRyZWVDYXJkTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKCdQaXp6YScsICdBIGNoZWVzZSBwaXp6YSBiYWtlZCBpbiBhIHdvb2QgZmlyZWQgb3Zlbi4nLCBwaXp6YSwgJyQxMS45OScpKVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRpdkVudHJlZUNhcmRMaXN0O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZURlc3NlcnRDYXJkTGlzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2RGVzc2VydENhcmRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdkRlc3NlcnRDYXJkTGlzdC5jbGFzc0xpc3QuYWRkKCdjYXJkLWxpc3QnKTtcbiAgICAgICAgZGl2RGVzc2VydENhcmRMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUNhcmQoJ0Nvb2tpZXMnLCAnQSBzdGFjayBvZiBzaXggZGVsaWNpb3VzIGRvdWJsZSBjaG9jb2xhdGUgY2hpcCBjb29raWVzLicsIGNvb2tpZXMsICckNy45OScpKTtcbiAgICAgICAgZGl2RGVzc2VydENhcmRMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUNhcmQoJ0ljZSBDcmVhbSBTdW5kYWUnLCAnQW4gaWNlIGNyZWFtIHN1bmRhZSB0aGF0XFwnbGwgYmUgc3VyZSB0byBjYXRlciB0byBhbnkgc3dlZXQgdG9vdGguIEZlYXR1cmVzIGljZSBjcmVhbSwgY29va2llcywgY2hvY29sYXRlIHNhdWNlLCBhbmQgd2hpcHBlZCBjcmVhbS4nLCBpY2VDcmVhbSwgJyQ5Ljk5JykpO1xuXG4gICAgICAgIHJldHVybiBkaXZEZXNzZXJ0Q2FyZExpc3Q7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQmV2ZXJhZ2VDYXJkTGlzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2QmV2ZXJhZ2VDYXJkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZCZXZlcmFnZUNhcmRMaXN0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtbGlzdCcpO1xuICAgICAgICBkaXZCZXZlcmFnZUNhcmRMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUNhcmQoJ1dhdGVyJywgJ0l0XFwncyB3ZXQuJywgd2F0ZXIsICdGcmVlJykpO1xuICAgICAgICBkaXZCZXZlcmFnZUNhcmRMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUNhcmQoJ0xlbW9uYWRlJywgJ1RoZSBjbGFzc2ljIHN1bW1lciBkcmluay4nLCBsZW1vbmFkZSwgJyQxLjk5JykpO1xuXG4gICAgICAgIHJldHVybiBkaXZCZXZlcmFnZUNhcmRMaXN0O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUNhcmQgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZSwgcHJpY2UpID0+IHtcbiAgICAgICAgY29uc3QgZGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2VGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZScpO1xuICAgICAgICBkaXZUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGl2RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnY2FyZC1kZXNjcmlwdGlvbicpO1xuICAgICAgICBkaXZEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IGRpdkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGRpdkltYWdlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1hZ2UnKTtcbiAgICAgICAgZGl2SW1hZ2Uuc3JjID0gaW1hZ2U7XG5cbiAgICAgICAgY29uc3QgZGl2UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2UHJpY2UuY2xhc3NMaXN0LmFkZCgnY2FyZC1wcmljZScpO1xuICAgICAgICBkaXZQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkaXZJbWFnZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRpdkRlc2NyaXB0aW9uKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkaXZQcmljZSk7XG5cbiAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhcHBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBhYm91dFBhZ2UgZnJvbSAnLi9hYm91dC5qcyc7XG5pbXBvcnQgJy4uL2Nzcy9zdHlsZXMuY3NzJztcblxuY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCBidG5Ib21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1ob21lJyk7XG5jb25zdCBidG5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1tZW51Jyk7XG5jb25zdCBidG5BYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tYWJvdXQnKTtcblxuY29uc3QgbmF2aWdhdGlvbkV2ZW50cyA9IG5ldyBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBjb25zdCBsb2FkSG9tZVBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyUGFnZSgpO1xuICAgICAgICBob21lUGFnZS5jcmVhdGUoZGl2Q29udGVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZE1lbnVQYWdlID0gKCkgPT4ge1xuICAgICAgICBjbGVhclBhZ2UoKTtcbiAgICAgICAgbWVudVBhZ2UuY3JlYXRlKGRpdkNvbnRlbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvYWRBYm91dFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyUGFnZSgpO1xuICAgICAgICBhYm91dFBhZ2UuY3JlYXRlKGRpdkNvbnRlbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyUGFnZSA9ICgpID0+IHtcbiAgICAgICAgd2hpbGUoZGl2Q29udGVudC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGRpdkNvbnRlbnQucmVtb3ZlQ2hpbGQoZGl2Q29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbG9hZEhvbWVQYWdlLCBsb2FkTWVudVBhZ2UsIGxvYWRBYm91dFBhZ2UgfTtcbn1cblxuYnRuSG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5hdmlnYXRpb25FdmVudHMubG9hZEhvbWVQYWdlKTtcbmJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuYXZpZ2F0aW9uRXZlbnRzLmxvYWRNZW51UGFnZSk7XG5idG5BYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5hdmlnYXRpb25FdmVudHMubG9hZEFib3V0UGFnZSk7XG5cbm5hdmlnYXRpb25FdmVudHMubG9hZEhvbWVQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9