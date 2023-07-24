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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Light.ttf */ "./src/Roboto-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --White: #fafafa;
    --off-White: #e5e5e5;
    --lightgray: #d4d4d4;
    --gray: #737373;
    --red: #fca5a5;
    --green: #86efac;

}

@font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html,body,#main{
    height: 100%;
}
body {
    font-family: 'Roboto', sans-serif;

}
input{
    font-family: inherit;
    font-size: inherit;
    outline: none;
}
ul {
    list-style-type: none;
}


#header{
    display: flex;
    font-size: 50px;
    font-weight: bold;
    color: white;
    align-items: center;
    width: 100%;
    height: 10%;
    padding: 20px;
    background-color: var(--gray)
}
#main{
    display: flex;
}
#sidebar{
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: var(--off-White);
    width: 300px;
}
#sidebar h1{
    padding: 10px 10px;
}
#sidebar li,
#addProject{
    font-family: inherit;
    font-size: inherit;
    padding: 10px 20px;
    border-radius: 5px;
}
#sidebar li:hover,
#addProject:hover,
#addTask:hover{
    background-color: var(--lightgray);
}
.selected{
    background-color: var(--lightgray);
    font-weight: bold;
}

.input{
    font-family: 'Roboto', sans-serif;
    font-size: inherit;
    width: 100%;
    border: 1px solid;
    border-color: gray;
    border-radius: 5px;
    padding: 10px;
}
#project-input{
    margin-bottom: 10px;
}
#addProject{
    margin-top: 10px;
}
#project-popup{
    padding: 10px;
}
#project-popup-buttons{
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
#view{
    background-color: var(--White);
    width: 100%;
    padding: 40px;
}

#addTask-input-container{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
#addTask-input-container > input{
    margin: 0;
    padding: 0;
    border: none;
}
.hidden{
    display: none;
}

#popup-buttons{
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
#project-add-button,
#button-add-popup{
    background-color: var(--green);

}
#project-cancel-button,
#button-cancel-popup{
    background-color: var(--red);
}
#button-add-popup,
#button-cancel-popup,
#project-add-button,
#project-cancel-button{
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-weight: bold;
}
#addTask{
    padding: 10px;
    border-radius: 5px;
    margin-top: 5px;
}
.task{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
}
.task-right-panel{
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,oBAAoB;IACpB,eAAe;IACf,cAAc;IACd,gBAAgB;;AAEpB;;AAEA;IACI,qBAAqB;IACrB,4CAA8B;AAClC;;AAEA;;;EAGE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;AACA;IACI,YAAY;AAChB;AACA;IACI,iCAAiC;;AAErC;AACA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,qBAAqB;AACzB;;;AAGA;IACI,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,WAAW;IACX,WAAW;IACX,aAAa;IACb;AACJ;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,kCAAkC;IAClC,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA;;IAEI,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;;;IAGI,kCAAkC;AACtC;AACA;IACI,kCAAkC;IAClC,iBAAiB;AACrB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;AACA;IACI,8BAA8B;IAC9B,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,SAAS;IACT,UAAU;IACV,YAAY;AAChB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;AACA;;IAEI,8BAA8B;;AAElC;AACA;;IAEI,4BAA4B;AAChC;AACA;;;;IAII,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX,aAAa;AACjB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb","sourcesContent":[":root {\n    --White: #fafafa;\n    --off-White: #e5e5e5;\n    --lightgray: #d4d4d4;\n    --gray: #737373;\n    --red: #fca5a5;\n    --green: #86efac;\n\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('./Roboto-Light.ttf');\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nhtml,body,#main{\n    height: 100%;\n}\nbody {\n    font-family: 'Roboto', sans-serif;\n\n}\ninput{\n    font-family: inherit;\n    font-size: inherit;\n    outline: none;\n}\nul {\n    list-style-type: none;\n}\n\n\n#header{\n    display: flex;\n    font-size: 50px;\n    font-weight: bold;\n    color: white;\n    align-items: center;\n    width: 100%;\n    height: 10%;\n    padding: 20px;\n    background-color: var(--gray)\n}\n#main{\n    display: flex;\n}\n#sidebar{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    background-color: var(--off-White);\n    width: 300px;\n}\n#sidebar h1{\n    padding: 10px 10px;\n}\n#sidebar li,\n#addProject{\n    font-family: inherit;\n    font-size: inherit;\n    padding: 10px 20px;\n    border-radius: 5px;\n}\n#sidebar li:hover,\n#addProject:hover,\n#addTask:hover{\n    background-color: var(--lightgray);\n}\n.selected{\n    background-color: var(--lightgray);\n    font-weight: bold;\n}\n\n.input{\n    font-family: 'Roboto', sans-serif;\n    font-size: inherit;\n    width: 100%;\n    border: 1px solid;\n    border-color: gray;\n    border-radius: 5px;\n    padding: 10px;\n}\n#project-input{\n    margin-bottom: 10px;\n}\n#addProject{\n    margin-top: 10px;\n}\n#project-popup{\n    padding: 10px;\n}\n#project-popup-buttons{\n    display: flex;\n    justify-content: space-between;\n    gap: 20px;\n}\n#view{\n    background-color: var(--White);\n    width: 100%;\n    padding: 40px;\n}\n\n#addTask-input-container{\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n}\n#addTask-input-container > input{\n    margin: 0;\n    padding: 0;\n    border: none;\n}\n.hidden{\n    display: none;\n}\n\n#popup-buttons{\n    display: flex;\n    justify-content: space-between;\n    gap: 20px;\n}\n#project-add-button,\n#button-add-popup{\n    background-color: var(--green);\n\n}\n#project-cancel-button,\n#button-cancel-popup{\n    background-color: var(--red);\n}\n#button-add-popup,\n#button-cancel-popup,\n#project-add-button,\n#project-cancel-button{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    font-weight: bold;\n}\n#addTask{\n    padding: 10px;\n    border-radius: 5px;\n    margin-top: 5px;\n}\n.task{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    padding: 10px;\n}\n.task-right-panel{\n    display: flex;\n    justify-content: space-between;\n    gap: 10px;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/utils/UI.js":
/*!*************************!*\
  !*** ./src/utils/UI.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/utils/storage.js");


class UI{

    static loadHomepage(){
        const title = document.getElementById("title")
        const inbox = document.getElementById("inbox")
        const today = document.getElementById("today")
        const week = document.getElementById("week")

        inbox.addEventListener("click",(e) => {
            UI.loadInboxPage
            UI.highlightSelected(e.target)})
        today.addEventListener("click", (e) => {
            UI.loadTodayPage
            UI.highlightSelected(e.target)})
        week.addEventListener("click", (e) => {
            UI.loadWeekPage
            UI.highlightSelected(e.target)})
        UI.initProjectButtons()
        UI.loadInboxPage()
    }

    static initProjectButtons(){
        const addProject = document.getElementById("addProject")
        const projectInput = document.getElementById("project-input")
        const projectAddButton = document.getElementById("project-add-button")
        const projectCancelButton = document.getElementById("project-cancel-button")
        const projectPopup = document.getElementById("project-popup")

        addProject.addEventListener("click",() =>{
            addProject.classList.add("hidden")
            projectPopup.classList.remove("hidden")
        })

        projectCancelButton.addEventListener("click",()=>{
            addProject.classList.remove("hidden")
            projectPopup.classList.add("hidden")
            projectInput.value = ""

        })

        projectAddButton.addEventListener("click",() =>{

            if (projectInput.value === ""){
                alert("Project needs Name")
            }
            else{
                
                _storage__WEBPACK_IMPORTED_MODULE_0__["default"].createNewProject()
                UI.refreshProjectList()
                projectInput.value = ""
                projectPopup.classList.add("hidden")
                addProject.classList.remove("hidden")
            }

        })
    }

    static refreshProjectList(){
        const projectList = document.getElementById("projects-list")
        projectList.innerHTML = ""
        _storage__WEBPACK_IMPORTED_MODULE_0__["default"].projectStorage.map(project => {
            const listItem = document.createElement("li")
            listItem.innerHTML = project
            listItem.addEventListener("click", (e)=>{
                UI.loadProjectPage(project)
                UI.highlightSelected(e.target)
            })
            projectList.appendChild(listItem)
            
        })
    }
    static loadProjectPage(project){
        title.innerHTML = project
        UI.refreshTaskList()
    }
    
    
    static loadInboxPage(){
        title.innerHTML = "Inbox"
        UI.refreshTaskList()
    }

    static loadTodayPage(){
        title.innerHTML = "Today"
        UI.refreshTaskList()

    }

    static loadWeekPage(){
        title.innerHTML = "This Week"
        UI.refreshTaskList()
    }

    static highlightSelected(element){
        const lastSelected = document.querySelector(".selected")
        lastSelected.classList.remove("selected")
        console.log(lastSelected)
        console.log(element)
        element.classList.add("selected")
    }


    static createTaskFunction(project){
        const taskList = document.getElementById("taskList")
        const taskFunction = document.createElement("div")
        taskFunction.setAttribute("id","addTaskFunction")
        taskFunction.innerHTML += `
        <div id="addTask">Add Task</div>
        <div id="addTaskPopup" class="hidden">
            <div id="addTask-input-container" class="input">
                <input id="text-input-popup" placeholder="Title:Laundry" type="text">
                <input id="date-input-popup" type="date">
            </div>
            <div id="popup-buttons">
                <button id="button-add-popup" class="input">Add</button>
                <button id="button-cancel-popup" class="input">Cancel</button>
            </div>
        </div>`
        taskList.appendChild(taskFunction)
        UI.initTaskButtons(project)
    }
    static initTaskButtons(project){
        const addTask = document.getElementById("addTask")
        const addTaskPopup = document.getElementById("addTaskPopup")
        const textInput = document.getElementById("text-input-popup")
        const dateInput = document.getElementById("date-input-popup")
        const buttonAdd = document.getElementById("button-add-popup")
        const buttonCancel = document.getElementById("button-cancel-popup")

        addTask.addEventListener("click", () =>{
            addTaskPopup.classList.remove("hidden")
            addTask.classList.add("hidden")
        })
        buttonCancel.addEventListener("click", () =>{
            addTaskPopup.classList.add("hidden")
            addTask.classList.remove("hidden")
            textInput.value = ""
            dateInput.value = ""
        })

        buttonAdd.addEventListener("click", () =>{
            if(textInput.value === ""){
                alert("Task needs a Name")
            }
            else if(dateInput.value === ""){
                alert("Task needs a Date")
            }
            else{
                _storage__WEBPACK_IMPORTED_MODULE_0__["default"].createNewTask(project)
                UI.refreshTaskList()
            }
            
        })
    }

    static createTaskDiv(task){
        const taskList = document.getElementById("taskList")
        const taskDiv = document.createElement("div")
        const taskName = task.name
        const taskDate = task.getFormatedDate()
        taskDiv.classList.add("task")
        taskDiv.innerHTML += `
        <div class="class-name">${taskName}</div>
        <div class="task-right-panel">
            <div class="class-date">${taskDate}</div>
        </div
        `
        const removeButton = document.createElement("div")
        removeButton.classList.add("removebutton")
        removeButton.innerHTML = "X"
        removeButton.addEventListener("click", () => {
            _storage__WEBPACK_IMPORTED_MODULE_0__["default"].removeFromStorage(taskName)
            UI.refreshTaskList()
        })
        const rightPanel = taskDiv.querySelector(".task-right-panel")
        
        rightPanel.appendChild(removeButton)
        taskList.appendChild(taskDiv)
    }

    static refreshTaskList(){
        taskList.innerHTML = ""
        if(title.innerHTML === "Inbox"){
            _storage__WEBPACK_IMPORTED_MODULE_0__["default"].taskStorage.map(task => UI.createTaskDiv(task))
            UI.createTaskFunction("none") 
        }
        else if(title.innerHTML === "Today"){
            _storage__WEBPACK_IMPORTED_MODULE_0__["default"].getDayTasks().map(task => UI.createTaskDiv(task))
        }
        else if(title.innerHTML === "This Week"){
            _storage__WEBPACK_IMPORTED_MODULE_0__["default"].getWeekTasks().map(task => UI.createTaskDiv(task))
        }
        else{
            _storage__WEBPACK_IMPORTED_MODULE_0__["default"].getTasksForProject(title.innerHTML).map(task => UI.createTaskDiv(task))
            UI.createTaskFunction(title.innerHTML)
        }
    }

}



/***/ }),

/***/ "./src/utils/dateFunctions.js":
/*!************************************!*\
  !*** ./src/utils/dateFunctions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dateFunctions)
/* harmony export */ });
function dateFunctions(){

    class dateclass{
        constructor(date){
            this.date = date
            this.day = this.setVariables().day
            this.month = this.setVariables().month
            this.year = this.setVariables().year
        }

        getFormatedDate(){
            return `${this.day}-${this.month}-${this.year}`
        }
        setVariables(){
            let thisDate = new Date(this.date)
            let day = thisDate.getDate()
            let month = thisDate.getMonth() +1
            let year = thisDate.getFullYear()

            return {day,month,year}
        }
        addDay(){

            this.date.setDate(this.date.getDate()+1)
            this.day = this.setVariables().day
            this.month = this.setVariables().month
            this.year = this.setVariables().year
        }
    }


    function formatDate(date){
        const thisDate = new dateclass(date)
        return thisDate.getFormatedDate()
    }

    function isNextWeek(date){
        const currentDate = new dateclass(new Date())
        const thisDate = new dateclass(new Date(date))
        let isThisWeek = false
        for(let i = 0 ; i < 7 ; i++){
            
            if (thisDate.getFormatedDate() === currentDate.getFormatedDate()){
  
                isThisWeek = true
                return isThisWeek
            }
            currentDate.addDay()

            
        }
        return isThisWeek
    }
return {formatDate,isNextWeek}
    
}

/***/ }),

/***/ "./src/utils/storage.js":
/*!******************************!*\
  !*** ./src/utils/storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/utils/task.js");
/* harmony import */ var _dateFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateFunctions.js */ "./src/utils/dateFunctions.js");



class storage{

    static taskStorage = []
    static projectStorage = []


    static createNewProject(){
        const project = document.getElementById("project-input").value
        storage.projectStorage.push(project)
        console.log(storage.projectStorage)
    }

    static createNewTask(project){
        const name = document.getElementById("text-input-popup").value
        const date = new Date((document.getElementById("date-input-popup").value))
        let Task = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](name,date,project)
        this.addToStorage(Task)
    }

    static addToStorage(task){
        storage.taskStorage.push(task)
    }
    static removeFromStorage(taskName){
        for(let i = 0 ; i < storage.taskStorage.length ; i++){
            console.log(storage.taskStorage[i])
            if (storage.taskStorage[i].name === taskName){
                storage.taskStorage.splice(i,1)
            }
        }
    }
    static getTasksForProject(project){
        const thisProjectStorage = []
        for(let i = 0 ; i < storage.taskStorage.length ; i++){
            if(storage.taskStorage[i].project === project){
                thisProjectStorage.push(storage.taskStorage[i])
            }
        }
        return thisProjectStorage
    }

    static getDayTasks(){
        const currentDate = (0,_dateFunctions_js__WEBPACK_IMPORTED_MODULE_1__["default"])().formatDate(new Date())
        const thisDayStorage = storage.taskStorage.filter(task => 
            task.getFormatedDate() === currentDate           
        )
        return thisDayStorage       
    }
    
    static getWeekTasks(){
        
        const thisWeekStorage = storage.taskStorage.filter(task =>
            task.isThisWeek()
        )
        return thisWeekStorage
    }

}


/***/ }),

/***/ "./src/utils/task.js":
/*!***************************!*\
  !*** ./src/utils/task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task)
/* harmony export */ });
/* harmony import */ var _dateFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateFunctions */ "./src/utils/dateFunctions.js");


class task{
    constructor(name,date,project){
        this.name = name
        this.date = date
        this.project = project
    }
        getFormatedDate(){
            return (0,_dateFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])().formatDate(this.date)
        }
        isThisWeek(){
            return (0,_dateFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])().isNextWeek(this.date)
        }
}





/***/ }),

/***/ "./src/Roboto-Light.ttf":
/*!******************************!*\
  !*** ./src/Roboto-Light.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8be2d1487420548b3b8d.ttf";

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
/* harmony import */ var _utils_UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/UI.js */ "./src/utils/UI.js");






_utils_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadHomepage()




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNTOzs7OztBQUs5QixvREFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy91dGlscy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy91dGlscy9kYXRlRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3V0aWxzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdXRpbHMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLVdoaXRlOiAjZmFmYWZhO1xuICAgIC0tb2ZmLVdoaXRlOiAjZTVlNWU1O1xuICAgIC0tbGlnaHRncmF5OiAjZDRkNGQ0O1xuICAgIC0tZ3JheTogIzczNzM3MztcbiAgICAtLXJlZDogI2ZjYTVhNTtcbiAgICAtLWdyZWVuOiAjODZlZmFjO1xuXG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuaHRtbCxib2R5LCNtYWlue1xuICAgIGhlaWdodDogMTAwJTtcbn1cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblxufVxuaW5wdXR7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5cbiNoZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KVxufVxuI21haW57XG4gICAgZGlzcGxheTogZmxleDtcbn1cbiNzaWRlYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi1XaGl0ZSk7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuI3NpZGViYXIgaDF7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xufVxuI3NpZGViYXIgbGksXG4jYWRkUHJvamVjdHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiNzaWRlYmFyIGxpOmhvdmVyLFxuI2FkZFByb2plY3Q6aG92ZXIsXG4jYWRkVGFzazpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyYXkpO1xufVxuLnNlbGVjdGVke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JheSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnB1dHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbiNwcm9qZWN0LWlucHV0e1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4jYWRkUHJvamVjdHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuI3Byb2plY3QtcG9wdXB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbiNwcm9qZWN0LXBvcHVwLWJ1dHRvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAyMHB4O1xufVxuI3ZpZXd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDQwcHg7XG59XG5cbiNhZGRUYXNrLWlucHV0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuI2FkZFRhc2staW5wdXQtY29udGFpbmVyID4gaW5wdXR7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLmhpZGRlbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jcG9wdXAtYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDIwcHg7XG59XG4jcHJvamVjdC1hZGQtYnV0dG9uLFxuI2J1dHRvbi1hZGQtcG9wdXB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xuXG59XG4jcHJvamVjdC1jYW5jZWwtYnV0dG9uLFxuI2J1dHRvbi1jYW5jZWwtcG9wdXB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcbn1cbiNidXR0b24tYWRkLXBvcHVwLFxuI2J1dHRvbi1jYW5jZWwtcG9wdXAsXG4jcHJvamVjdC1hZGQtYnV0dG9uLFxuI3Byb2plY3QtY2FuY2VsLWJ1dHRvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2FkZFRhc2t7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnRhc2t7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi50YXNrLXJpZ2h0LXBhbmVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTBweDtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUE4QjtBQUNsQzs7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlDQUFpQzs7QUFFckM7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2I7QUFDSjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBOzs7SUFHSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjtBQUNBOztJQUVJLDhCQUE4Qjs7QUFFbEM7QUFDQTs7SUFFSSw0QkFBNEI7QUFDaEM7QUFDQTs7OztJQUlJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLVdoaXRlOiAjZmFmYWZhO1xcbiAgICAtLW9mZi1XaGl0ZTogI2U1ZTVlNTtcXG4gICAgLS1saWdodGdyYXk6ICNkNGQ0ZDQ7XFxuICAgIC0tZ3JheTogIzczNzM3MztcXG4gICAgLS1yZWQ6ICNmY2E1YTU7XFxuICAgIC0tZ3JlZW46ICM4NmVmYWM7XFxuXFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHNyYzogdXJsKCcuL1JvYm90by1MaWdodC50dGYnKTtcXG59XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcbmh0bWwsYm9keSwjbWFpbntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcbn1cXG5pbnB1dHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcblxcbiNoZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KVxcbn1cXG4jbWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuI3NpZGViYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi1XaGl0ZSk7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuI3NpZGViYXIgaDF7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG59XFxuI3NpZGViYXIgbGksXFxuI2FkZFByb2plY3R7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jc2lkZWJhciBsaTpob3ZlcixcXG4jYWRkUHJvamVjdDpob3ZlcixcXG4jYWRkVGFzazpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmF5KTtcXG59XFxuLnNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyYXkpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmlucHV0e1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuI3Byb2plY3QtaW5wdXR7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbiNhZGRQcm9qZWN0e1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4jcHJvamVjdC1wb3B1cHtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuI3Byb2plY3QtcG9wdXAtYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbiN2aWV3e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbn1cXG5cXG4jYWRkVGFzay1pbnB1dC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuI2FkZFRhc2staW5wdXQtY29udGFpbmVyID4gaW5wdXR7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcG9wdXAtYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbiNwcm9qZWN0LWFkZC1idXR0b24sXFxuI2J1dHRvbi1hZGQtcG9wdXB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG5cXG59XFxuI3Byb2plY3QtY2FuY2VsLWJ1dHRvbixcXG4jYnV0dG9uLWNhbmNlbC1wb3B1cHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuI2J1dHRvbi1hZGQtcG9wdXAsXFxuI2J1dHRvbi1jYW5jZWwtcG9wdXAsXFxuI3Byb2plY3QtYWRkLWJ1dHRvbixcXG4jcHJvamVjdC1jYW5jZWwtYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI2FkZFRhc2t7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4udGFza3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLnRhc2stcmlnaHQtcGFuZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSXtcblxuICAgIHN0YXRpYyBsb2FkSG9tZXBhZ2UoKXtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpXG4gICAgICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveFwiKVxuICAgICAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlcIilcbiAgICAgICAgY29uc3Qgd2VlayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vla1wiKVxuXG4gICAgICAgIGluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKSA9PiB7XG4gICAgICAgICAgICBVSS5sb2FkSW5ib3hQYWdlXG4gICAgICAgICAgICBVSS5oaWdobGlnaHRTZWxlY3RlZChlLnRhcmdldCl9KVxuICAgICAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIFVJLmxvYWRUb2RheVBhZ2VcbiAgICAgICAgICAgIFVJLmhpZ2hsaWdodFNlbGVjdGVkKGUudGFyZ2V0KX0pXG4gICAgICAgIHdlZWsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBVSS5sb2FkV2Vla1BhZ2VcbiAgICAgICAgICAgIFVJLmhpZ2hsaWdodFNlbGVjdGVkKGUudGFyZ2V0KX0pXG4gICAgICAgIFVJLmluaXRQcm9qZWN0QnV0dG9ucygpXG4gICAgICAgIFVJLmxvYWRJbmJveFBhZ2UoKVxuICAgIH1cblxuICAgIHN0YXRpYyBpbml0UHJvamVjdEJ1dHRvbnMoKXtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFwiKVxuICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaW5wdXRcIilcbiAgICAgICAgY29uc3QgcHJvamVjdEFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1hZGQtYnV0dG9uXCIpXG4gICAgICAgIGNvbnN0IHByb2plY3RDYW5jZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtY2FuY2VsLWJ1dHRvblwiKVxuICAgICAgICBjb25zdCBwcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtcG9wdXBcIilcblxuICAgICAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+e1xuICAgICAgICAgICAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG4gICAgICAgICAgICBwcm9qZWN0UG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKVxuICAgICAgICB9KVxuXG4gICAgICAgIHByb2plY3RDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgICAgIGFkZFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKVxuICAgICAgICAgICAgcHJvamVjdFBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcbiAgICAgICAgICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCJcblxuICAgICAgICB9KVxuXG4gICAgICAgIHByb2plY3RBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT57XG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0SW5wdXQudmFsdWUgPT09IFwiXCIpe1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUHJvamVjdCBuZWVkcyBOYW1lXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuY3JlYXRlTmV3UHJvamVjdCgpXG4gICAgICAgICAgICAgICAgVUkucmVmcmVzaFByb2plY3RMaXN0KClcbiAgICAgICAgICAgICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiXG4gICAgICAgICAgICAgICAgcHJvamVjdFBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyByZWZyZXNoUHJvamVjdExpc3QoKXtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWxpc3RcIilcbiAgICAgICAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBzdG9yYWdlLnByb2plY3RTdG9yYWdlLm1hcChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgICAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSBwcm9qZWN0XG4gICAgICAgICAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gICAgICAgICAgICAgICAgVUkubG9hZFByb2plY3RQYWdlKHByb2plY3QpXG4gICAgICAgICAgICAgICAgVUkuaGlnaGxpZ2h0U2VsZWN0ZWQoZS50YXJnZXQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgc3RhdGljIGxvYWRQcm9qZWN0UGFnZShwcm9qZWN0KXtcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdFxuICAgICAgICBVSS5yZWZyZXNoVGFza0xpc3QoKVxuICAgIH1cbiAgICBcbiAgICBcbiAgICBzdGF0aWMgbG9hZEluYm94UGFnZSgpe1xuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBcIkluYm94XCJcbiAgICAgICAgVUkucmVmcmVzaFRhc2tMaXN0KClcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFRvZGF5UGFnZSgpe1xuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlRvZGF5XCJcbiAgICAgICAgVUkucmVmcmVzaFRhc2tMaXN0KClcblxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkV2Vla1BhZ2UoKXtcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJUaGlzIFdlZWtcIlxuICAgICAgICBVSS5yZWZyZXNoVGFza0xpc3QoKVxuICAgIH1cblxuICAgIHN0YXRpYyBoaWdobGlnaHRTZWxlY3RlZChlbGVtZW50KXtcbiAgICAgICAgY29uc3QgbGFzdFNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKVxuICAgICAgICBsYXN0U2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGxhc3RTZWxlY3RlZClcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudClcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIilcbiAgICB9XG5cblxuICAgIHN0YXRpYyBjcmVhdGVUYXNrRnVuY3Rpb24ocHJvamVjdCl7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTGlzdFwiKVxuICAgICAgICBjb25zdCB0YXNrRnVuY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHRhc2tGdW5jdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiYWRkVGFza0Z1bmN0aW9uXCIpXG4gICAgICAgIHRhc2tGdW5jdGlvbi5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGlkPVwiYWRkVGFza1wiPkFkZCBUYXNrPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJhZGRUYXNrUG9wdXBcIiBjbGFzcz1cImhpZGRlblwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImFkZFRhc2staW5wdXQtY29udGFpbmVyXCIgY2xhc3M9XCJpbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRleHQtaW5wdXQtcG9wdXBcIiBwbGFjZWhvbGRlcj1cIlRpdGxlOkxhdW5kcnlcIiB0eXBlPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRhdGUtaW5wdXQtcG9wdXBcIiB0eXBlPVwiZGF0ZVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicG9wdXAtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJidXR0b24tYWRkLXBvcHVwXCIgY2xhc3M9XCJpbnB1dFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJidXR0b24tY2FuY2VsLXBvcHVwXCIgY2xhc3M9XCJpbnB1dFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0Z1bmN0aW9uKVxuICAgICAgICBVSS5pbml0VGFza0J1dHRvbnMocHJvamVjdClcbiAgICB9XG4gICAgc3RhdGljIGluaXRUYXNrQnV0dG9ucyhwcm9qZWN0KXtcbiAgICAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza1wiKVxuICAgICAgICBjb25zdCBhZGRUYXNrUG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tQb3B1cFwiKVxuICAgICAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQtaW5wdXQtcG9wdXBcIilcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLWlucHV0LXBvcHVwXCIpXG4gICAgICAgIGNvbnN0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWFkZC1wb3B1cFwiKVxuICAgICAgICBjb25zdCBidXR0b25DYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jYW5jZWwtcG9wdXBcIilcblxuICAgICAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgIGFkZFRhc2tQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXG4gICAgICAgICAgICBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcbiAgICAgICAgfSlcbiAgICAgICAgYnV0dG9uQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgIGFkZFRhc2tQb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG4gICAgICAgICAgICBhZGRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcbiAgICAgICAgICAgIHRleHRJbnB1dC52YWx1ZSA9IFwiXCJcbiAgICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IFwiXCJcbiAgICAgICAgfSlcblxuICAgICAgICBidXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgaWYodGV4dElucHV0LnZhbHVlID09PSBcIlwiKXtcbiAgICAgICAgICAgICAgICBhbGVydChcIlRhc2sgbmVlZHMgYSBOYW1lXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGRhdGVJbnB1dC52YWx1ZSA9PT0gXCJcIil7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJUYXNrIG5lZWRzIGEgRGF0ZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmNyZWF0ZU5ld1Rhc2socHJvamVjdClcbiAgICAgICAgICAgICAgICBVSS5yZWZyZXNoVGFza0xpc3QoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVRhc2tEaXYodGFzayl7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTGlzdFwiKVxuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2submFtZVxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IHRhc2suZ2V0Rm9ybWF0ZWREYXRlKClcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKVxuICAgICAgICB0YXNrRGl2LmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbGFzcy1uYW1lXCI+JHt0YXNrTmFtZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stcmlnaHQtcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGFzcy1kYXRlXCI+JHt0YXNrRGF0ZX08L2Rpdj5cbiAgICAgICAgPC9kaXZcbiAgICAgICAgYFxuICAgICAgICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlYnV0dG9uXCIpXG4gICAgICAgIHJlbW92ZUJ1dHRvbi5pbm5lckhUTUwgPSBcIlhcIlxuICAgICAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHN0b3JhZ2UucmVtb3ZlRnJvbVN0b3JhZ2UodGFza05hbWUpXG4gICAgICAgICAgICBVSS5yZWZyZXNoVGFza0xpc3QoKVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCByaWdodFBhbmVsID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiLnRhc2stcmlnaHQtcGFuZWxcIilcbiAgICAgICAgXG4gICAgICAgIHJpZ2h0UGFuZWwuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKVxuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRGl2KVxuICAgIH1cblxuICAgIHN0YXRpYyByZWZyZXNoVGFza0xpc3QoKXtcbiAgICAgICAgdGFza0xpc3QuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBpZih0aXRsZS5pbm5lckhUTUwgPT09IFwiSW5ib3hcIil7XG4gICAgICAgICAgICBzdG9yYWdlLnRhc2tTdG9yYWdlLm1hcCh0YXNrID0+IFVJLmNyZWF0ZVRhc2tEaXYodGFzaykpXG4gICAgICAgICAgICBVSS5jcmVhdGVUYXNrRnVuY3Rpb24oXCJub25lXCIpIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGl0bGUuaW5uZXJIVE1MID09PSBcIlRvZGF5XCIpe1xuICAgICAgICAgICAgc3RvcmFnZS5nZXREYXlUYXNrcygpLm1hcCh0YXNrID0+IFVJLmNyZWF0ZVRhc2tEaXYodGFzaykpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aXRsZS5pbm5lckhUTUwgPT09IFwiVGhpcyBXZWVrXCIpe1xuICAgICAgICAgICAgc3RvcmFnZS5nZXRXZWVrVGFza3MoKS5tYXAodGFzayA9PiBVSS5jcmVhdGVUYXNrRGl2KHRhc2spKVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBzdG9yYWdlLmdldFRhc2tzRm9yUHJvamVjdCh0aXRsZS5pbm5lckhUTUwpLm1hcCh0YXNrID0+IFVJLmNyZWF0ZVRhc2tEaXYodGFzaykpXG4gICAgICAgICAgICBVSS5jcmVhdGVUYXNrRnVuY3Rpb24odGl0bGUuaW5uZXJIVE1MKVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVGdW5jdGlvbnMoKXtcblxuICAgIGNsYXNzIGRhdGVjbGFzc3tcbiAgICAgICAgY29uc3RydWN0b3IoZGF0ZSl7XG4gICAgICAgICAgICB0aGlzLmRhdGUgPSBkYXRlXG4gICAgICAgICAgICB0aGlzLmRheSA9IHRoaXMuc2V0VmFyaWFibGVzKCkuZGF5XG4gICAgICAgICAgICB0aGlzLm1vbnRoID0gdGhpcy5zZXRWYXJpYWJsZXMoKS5tb250aFxuICAgICAgICAgICAgdGhpcy55ZWFyID0gdGhpcy5zZXRWYXJpYWJsZXMoKS55ZWFyXG4gICAgICAgIH1cblxuICAgICAgICBnZXRGb3JtYXRlZERhdGUoKXtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmRheX0tJHt0aGlzLm1vbnRofS0ke3RoaXMueWVhcn1gXG4gICAgICAgIH1cbiAgICAgICAgc2V0VmFyaWFibGVzKCl7XG4gICAgICAgICAgICBsZXQgdGhpc0RhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGUpXG4gICAgICAgICAgICBsZXQgZGF5ID0gdGhpc0RhdGUuZ2V0RGF0ZSgpXG4gICAgICAgICAgICBsZXQgbW9udGggPSB0aGlzRGF0ZS5nZXRNb250aCgpICsxXG4gICAgICAgICAgICBsZXQgeWVhciA9IHRoaXNEYXRlLmdldEZ1bGxZZWFyKClcblxuICAgICAgICAgICAgcmV0dXJuIHtkYXksbW9udGgseWVhcn1cbiAgICAgICAgfVxuICAgICAgICBhZGREYXkoKXtcblxuICAgICAgICAgICAgdGhpcy5kYXRlLnNldERhdGUodGhpcy5kYXRlLmdldERhdGUoKSsxKVxuICAgICAgICAgICAgdGhpcy5kYXkgPSB0aGlzLnNldFZhcmlhYmxlcygpLmRheVxuICAgICAgICAgICAgdGhpcy5tb250aCA9IHRoaXMuc2V0VmFyaWFibGVzKCkubW9udGhcbiAgICAgICAgICAgIHRoaXMueWVhciA9IHRoaXMuc2V0VmFyaWFibGVzKCkueWVhclxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpe1xuICAgICAgICBjb25zdCB0aGlzRGF0ZSA9IG5ldyBkYXRlY2xhc3MoZGF0ZSlcbiAgICAgICAgcmV0dXJuIHRoaXNEYXRlLmdldEZvcm1hdGVkRGF0ZSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNOZXh0V2VlayhkYXRlKXtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgZGF0ZWNsYXNzKG5ldyBEYXRlKCkpXG4gICAgICAgIGNvbnN0IHRoaXNEYXRlID0gbmV3IGRhdGVjbGFzcyhuZXcgRGF0ZShkYXRlKSlcbiAgICAgICAgbGV0IGlzVGhpc1dlZWsgPSBmYWxzZVxuICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IDcgOyBpKyspe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpc0RhdGUuZ2V0Rm9ybWF0ZWREYXRlKCkgPT09IGN1cnJlbnREYXRlLmdldEZvcm1hdGVkRGF0ZSgpKXtcbiAgXG4gICAgICAgICAgICAgICAgaXNUaGlzV2VlayA9IHRydWVcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNUaGlzV2Vla1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudERhdGUuYWRkRGF5KClcblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVGhpc1dlZWtcbiAgICB9XG5yZXR1cm4ge2Zvcm1hdERhdGUsaXNOZXh0V2Vla31cbiAgICBcbn0iLCJpbXBvcnQgdGFzayBmcm9tIFwiLi90YXNrLmpzXCJcbmltcG9ydCBkYXRlRnVuY3Rpb25zIGZyb20gXCIuL2RhdGVGdW5jdGlvbnMuanNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdG9yYWdle1xuXG4gICAgc3RhdGljIHRhc2tTdG9yYWdlID0gW11cbiAgICBzdGF0aWMgcHJvamVjdFN0b3JhZ2UgPSBbXVxuXG5cbiAgICBzdGF0aWMgY3JlYXRlTmV3UHJvamVjdCgpe1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWlucHV0XCIpLnZhbHVlXG4gICAgICAgIHN0b3JhZ2UucHJvamVjdFN0b3JhZ2UucHVzaChwcm9qZWN0KVxuICAgICAgICBjb25zb2xlLmxvZyhzdG9yYWdlLnByb2plY3RTdG9yYWdlKVxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVOZXdUYXNrKHByb2plY3Qpe1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0LWlucHV0LXBvcHVwXCIpLnZhbHVlXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLWlucHV0LXBvcHVwXCIpLnZhbHVlKSlcbiAgICAgICAgbGV0IFRhc2sgPSBuZXcgdGFzayhuYW1lLGRhdGUscHJvamVjdClcbiAgICAgICAgdGhpcy5hZGRUb1N0b3JhZ2UoVGFzaylcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkVG9TdG9yYWdlKHRhc2spe1xuICAgICAgICBzdG9yYWdlLnRhc2tTdG9yYWdlLnB1c2godGFzaylcbiAgICB9XG4gICAgc3RhdGljIHJlbW92ZUZyb21TdG9yYWdlKHRhc2tOYW1lKXtcbiAgICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCBzdG9yYWdlLnRhc2tTdG9yYWdlLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdG9yYWdlLnRhc2tTdG9yYWdlW2ldKVxuICAgICAgICAgICAgaWYgKHN0b3JhZ2UudGFza1N0b3JhZ2VbaV0ubmFtZSA9PT0gdGFza05hbWUpe1xuICAgICAgICAgICAgICAgIHN0b3JhZ2UudGFza1N0b3JhZ2Uuc3BsaWNlKGksMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgZ2V0VGFza3NGb3JQcm9qZWN0KHByb2plY3Qpe1xuICAgICAgICBjb25zdCB0aGlzUHJvamVjdFN0b3JhZ2UgPSBbXVxuICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IHN0b3JhZ2UudGFza1N0b3JhZ2UubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHN0b3JhZ2UudGFza1N0b3JhZ2VbaV0ucHJvamVjdCA9PT0gcHJvamVjdCl7XG4gICAgICAgICAgICAgICAgdGhpc1Byb2plY3RTdG9yYWdlLnB1c2goc3RvcmFnZS50YXNrU3RvcmFnZVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1Byb2plY3RTdG9yYWdlXG4gICAgfVxuXG4gICAgc3RhdGljIGdldERheVRhc2tzKCl7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZGF0ZUZ1bmN0aW9ucygpLmZvcm1hdERhdGUobmV3IERhdGUoKSlcbiAgICAgICAgY29uc3QgdGhpc0RheVN0b3JhZ2UgPSBzdG9yYWdlLnRhc2tTdG9yYWdlLmZpbHRlcih0YXNrID0+IFxuICAgICAgICAgICAgdGFzay5nZXRGb3JtYXRlZERhdGUoKSA9PT0gY3VycmVudERhdGUgICAgICAgICAgIFxuICAgICAgICApXG4gICAgICAgIHJldHVybiB0aGlzRGF5U3RvcmFnZSAgICAgICBcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGdldFdlZWtUYXNrcygpe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGhpc1dlZWtTdG9yYWdlID0gc3RvcmFnZS50YXNrU3RvcmFnZS5maWx0ZXIodGFzayA9PlxuICAgICAgICAgICAgdGFzay5pc1RoaXNXZWVrKClcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gdGhpc1dlZWtTdG9yYWdlXG4gICAgfVxuXG59XG4iLCJpbXBvcnQgZGF0ZUZ1bmN0aW9ucyBmcm9tIFwiLi9kYXRlRnVuY3Rpb25zXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGFza3tcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGRhdGUscHJvamVjdCl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZVxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG4gICAgfVxuICAgICAgICBnZXRGb3JtYXRlZERhdGUoKXtcbiAgICAgICAgICAgIHJldHVybiBkYXRlRnVuY3Rpb25zKCkuZm9ybWF0RGF0ZSh0aGlzLmRhdGUpXG4gICAgICAgIH1cbiAgICAgICAgaXNUaGlzV2Vlaygpe1xuICAgICAgICAgICAgcmV0dXJuIGRhdGVGdW5jdGlvbnMoKS5pc05leHRXZWVrKHRoaXMuZGF0ZSlcbiAgICAgICAgfVxufVxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBVSSBmcm9tIFwiLi91dGlscy9VSS5qc1wiXG5cblxuXG5cblVJLmxvYWRIb21lcGFnZSgpXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=