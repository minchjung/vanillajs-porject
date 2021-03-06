/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./csr.js":
/*!****************!*\
  !*** ./csr.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store),
/* harmony export */   "router": () => (/* binding */ router)
/* harmony export */ });
/* harmony import */ var _src_action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/action.js */ "./src/action.js");
/* harmony import */ var _src_lib_Store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/lib/Store.js */ "./src/lib/Store.js");
/* harmony import */ var _src_components_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/App.js */ "./src/components/App.js");
/* harmony import */ var _src_lib_Router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/lib/Router.js */ "./src/lib/Router.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./styles.css");







const state = globalThis.state 
const store = new _src_lib_Store_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
store.subscribe(_src_components_App_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

let temp ;
Object.entries(_src_action_js__WEBPACK_IMPORTED_MODULE_0__.actionHandler.cacheHandler)
  .forEach(([ handler, func ]) => {
    temp = func
    store.cacheHandler[handler] = temp.bind(store);
})

store.initState(state);
store.cacheHandler.setCache();


const router = new _src_lib_Router_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
router.subscribe(_src_components_App_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
router.setRoutes( 
  [
    { path : '/',
      comPosition : 0 
    },
    { path : '/post-single',
      comPosition : 1
    },
    { path : '/post-edit',
      comPosition : 2
    },
    { 
      path : '/nout-found',
      comPosition : 3
    }
  ] 
)

router.setPathCur(location.pathname, true);
router.setIndex(location.search.split('=')[1])
router.setRoot(document.querySelector('#root') );



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n  list-style: none;\n  box-sizing: border-box;\n\n}\n\nlabel{\n  display: block;\n  width: 150px;\n  text-align: left;\n}\nselect{\n  display: block;\n  width: 50px;\n}\nbutton{\n  width: 65px;\n  border-radius: 5px;\n  border: 1px solid gainsboro;\n  cursor: pointer;\n}\n\n#postlistpage{\n}\n#postlistheader{\n  display: flex;\n  justify-content: space-around;\n}\n\n\n#search{\n}\n\n#paging{\n  border : 1px solid seagreen;\n  width: 150px;\n  display: flex;\n}\n\n#sorting{\n  width: 150px;\n  display: flex;\n  border: 1px solid darkcyan;\n}\n#sortbutton{\n  border: 1px solid cadetblue;\n}\n\n#postlist{\n  margin: 0 auto;\n  width: 600px;\n}\n\n#postlist ul{\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid tan;\n}\n#postlist #head-title{\n  border-bottom: 2px solid tan;\n\n}\n\n#pagebutton{\n  margin: 0 auto;\n  width: 600px;\n}\n\n#pagination{\n  float:right;\n  margin-right: 150px;\n}\n\n#postbutton{\n  margin-left: 150px;\n}", "",{"version":3,"sources":["webpack://./styles.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,sBAAsB;;AAExB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,WAAW;AACb;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;AACA;AACA;EACE,aAAa;EACb,6BAA6B;AAC/B;;;AAGA;AACA;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,0BAA0B;AAC5B;AACA;EACE,2BAA2B;AAC7B;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,4BAA4B;AAC9B;AACA;EACE,4BAA4B;;AAE9B;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["*{\n  list-style: none;\n  box-sizing: border-box;\n\n}\n\nlabel{\n  display: block;\n  width: 150px;\n  text-align: left;\n}\nselect{\n  display: block;\n  width: 50px;\n}\nbutton{\n  width: 65px;\n  border-radius: 5px;\n  border: 1px solid gainsboro;\n  cursor: pointer;\n}\n\n#postlistpage{\n}\n#postlistheader{\n  display: flex;\n  justify-content: space-around;\n}\n\n\n#search{\n}\n\n#paging{\n  border : 1px solid seagreen;\n  width: 150px;\n  display: flex;\n}\n\n#sorting{\n  width: 150px;\n  display: flex;\n  border: 1px solid darkcyan;\n}\n#sortbutton{\n  border: 1px solid cadetblue;\n}\n\n#postlist{\n  margin: 0 auto;\n  width: 600px;\n}\n\n#postlist ul{\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid tan;\n}\n#postlist #head-title{\n  border-bottom: 2px solid tan;\n\n}\n\n#pagebutton{\n  margin: 0 auto;\n  width: 600px;\n}\n\n#pagination{\n  float:right;\n  margin-right: 150px;\n}\n\n#postbutton{\n  margin-left: 150px;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./styles.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/action.js":
/*!***********************!*\
  !*** ./src/action.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionHandler": () => (/* binding */ actionHandler)
/* harmony export */ });
const actionHandler = {
  state : "", 
  cacheHandler : {

    setCache (){
      // First hasCacheChecker 
      const { data, total } = this.state;
      // console.log(data, total)
      const { isValid, cachingData } = this.cacheHandler.hasCacheChecker();
      let cached = JSON.parse(localStorage.getItem('cached'));
    
      // no cache => set cache by newState
      if(!cached){
        return localStorage.setItem('cached', JSON.stringify([
          { id : this.cacheHandler.getCacheId(), data, total }
        ]))
      }
      // cache exists but needs to have more with newState
      if(!isValid){
        // if cache over 100 => get rid of the first 20  
        if( isValid && cached.length >= 100){ 
          cached = cached.filter((ele,idx) => idx >= 20)
          localStorage.removeItem('cached')
        }
        // over 100 or not update cache with newone
        cached.push({ id : this.cacheHandler.getCacheId(), data, total })
        return localStorage.setItem('cached', JSON.stringify(cached)) 
      }
    
    },
    
    getCacheId(state = this.state){
      const { filter, name, order, page, size, total } = state;
      const id = `filter=${filter}&name=${name}&order=${order}&page=${page}&size=${size}`
      return id
    },
    
    hasCacheChecker(state = this.state){
      // check cashdata with current state(updated)
      const id = this.cacheHandler.getCacheId(state)
      const cached = JSON.parse(localStorage.getItem('cached')) || [];
      // filter with id and range
      let filtered = cached.filter(ele => ele.id === id)

      const bool = filtered.length > 0 
      // console.log(filtered, bool)
      return { 
        isValid : bool, 
        cachingData : bool ? filtered : [],
      }
      
    },
    
    async searchCache(state= this.state, updateView=false){
    
      // cache invalid => requestApi or get data from it
      const { isValid, cachingData } = this.cacheHandler.hasCacheChecker(state);
      if( !isValid ){
        // after api, maunally render as it returns  async result
        const result = await this.cacheHandler.updateCacheByApi()
        if(result ){
          this.state = {...state, ...{ data : result.data},  ...{ total : result.total }}
          this.renderAll()
        }
        else{
          // need to change this for better UI text
          alert("Error on cacheing update ")
        } 
      } 
      else{ // cache is valid to use
        // console.log("no need to req api ")
        // state update by cache & server side store, too
        this.state = {...state, ...{ data : cachingData[0].data , total : cachingData[0].total }}
        this.cacheHandler.updateStateByApi() 
      }
  
      if(updateView){
        // console.log('updateView==', state)
        this.renderAll()
      }
      return 
      
    },

    clearCache(initState){
      localStorage.removeItem('cached');
      if(initState) this.initState(initState);

      this.cacheHandler.setCache();
    },
        
    async updateCacheByApi(){
      console.log("request cache update")
      // cache invalid => request new state and cache 

      return await fetch(
        `/api/cache?${this.cacheHandler.getCacheId()}`, 
        { method: 'get'}
      )
      .then(result => result.json())
      .then(result => {
        let cached = JSON.parse(localStorage.getItem('cached'))
        if(!cached || cached.length === 0) cached = []   
        
        cached.push(result)
        localStorage.setItem('cached', JSON.stringify(cached))
        // window.location.href('http://localhost:8080/page?'+this.getCacheId())
        
        return result
      })
      .catch(err => {
        console.log(err)
        alert("???????????? ?????? ?????????, ?????? ????????? ?????????")
      })
    },
    
    async updateStateByApi(){
      // console.log('????????? state before updateStateByApi', this.state)
      const result = await fetch(
        '/api/state', { 
          method : 'put',
          headers: { "content-type" : "application/json" },
          body: JSON.stringify(this.state),
      }).then(resp => {
        // console.log('resp from update state==', resp);
        return resp
      });
      
      return result.status === 400 
        ? alert("????????? ????????? ?????? ????????? ????????? ?????? ????????????! ?????? ?????? ????????? ?????????") :
        result.status === 404 
        ? alert("????????? ???????????? ?????? ??? ????????????.") :
        result.status === 500 
        ? alert("????????? ????????? ??????????????????. ?????? ????????? ?????? ????????? ?????????") :
        result.status === 303 
        ? console.log(result)
        // window.location.href('http://localhost:8080/page?'+this.getCacheId())
        : null
    }
  
  }
}


/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Component.js */ "./src/lib/Component.js");
/* harmony import */ var _PostListPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostListPage.js */ "./src/components/PostListPage.js");
/* harmony import */ var _PostSingle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostSingle.js */ "./src/components/PostSingle.js");
/* harmony import */ var _PostEditPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostEditPage.js */ "./src/components/PostEditPage.js");
/* harmony import */ var _NotFoundPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotFoundPage.js */ "./src/components/NotFoundPage.js");
/* harmony import */ var _csr_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../csr.js */ "./csr.js");







class App extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{

  constructor({ name, state }){
    super({ name, state })
    this.historyBounder = this.historyHandler.bind(this);
    this.components.push(new _PostListPage_js__WEBPACK_IMPORTED_MODULE_1__.PostListPage({ name : 'postlistpage' , state}));
    this.components.push(new _PostSingle_js__WEBPACK_IMPORTED_MODULE_2__.PostSinglePage({ name :'postsingle', state }));
    this.components.push(new _PostEditPage_js__WEBPACK_IMPORTED_MODULE_3__.PostEditPage({ name :'posteditpage', state }));
    this.components.push(new _NotFoundPage_js__WEBPACK_IMPORTED_MODULE_4__.NoutFoundPage({ name :'notfoundpage', state }));
  }

  onLoad(){
    window.removeEventListener('popstate', this.historyHandler)
    window.addEventListener('popstate', this.historyHandler)
  }

  historyHandler(event){
    if( !event.state) return location.assign(location.href);

    const pathname = location.pathname 
    _csr_js__WEBPACK_IMPORTED_MODULE_5__.router.setPathCur(pathname);
    // store.setState(event.state.state)
    _csr_js__WEBPACK_IMPORTED_MODULE_5__.store.cacheHandler.searchCache(event.state.state, true)
    // console.log(history)
    // router.templateRender();
  }

  template(){
    const renderHTML = this.components[this.curPos].template();
    return `<div id=${this.name}>
        ${renderHTML}
    </div>`;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new App({ name : 'app'}));

/***/ }),

/***/ "./src/components/NotFoundPage.js":
/*!****************************************!*\
  !*** ./src/components/NotFoundPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoutFoundPage": () => (/* binding */ NoutFoundPage)
/* harmony export */ });
/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Component */ "./src/lib/Component.js");


class NoutFoundPage extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__["default"]{
  
  constructor({ name, state }){
    super({ name, state })
  }

  template(){
    return `
    <div id="notfoundpage">NOT FOUND PAGE </div>
    <div>
      <p>
        ???????????? ???????????? ?????? ??? ????????????. 
      </p>
      <button>????????????</button>
    </div>
    `;
  }

  setEvent(){
    this.el.removeEventListener("click", this.firstBonder)
    this.el.addEventListener("click", this.firstBonder)
  }

  eventHandler(){
    return location.replace('/')
  }

}


/***/ }),

/***/ "./src/components/PostEditPage.js":
/*!****************************************!*\
  !*** ./src/components/PostEditPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostEditPage": () => (/* binding */ PostEditPage),
/* harmony export */   "Contents": () => (/* binding */ Contents)
/* harmony export */ });
/* harmony import */ var _csr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../csr.js */ "./csr.js");
/* harmony import */ var _lib_Component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Component.js */ "./src/lib/Component.js");



class PostEditPage extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_1__["default"]{
  
  child; 

  constructor({ name, state }){
    super({ name, state })
    // this.root = root;
    this.child = [];
    this.child.push( new Contents({ name : 'contents', state }))

  }

}



class Contents extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_1__["default"]{

  setEvent(){
    this.el.querySelector('#form').removeEventListener("submit", this.firstBonder)
    this.el.querySelector('#form').addEventListener("submit", this.firstBonder)
  }
  
  async eventHandler(e){
    e.preventDefault();

    let payload = {};
    e.target.querySelectorAll('input').forEach(ele => {
      payload[ele.name] = ele.value
    });

    payload.content = e.target.querySelector('textarea').value;

    // console.log(payload)
    const result = await fetch( '/post/edit', {
      method : 'post',
      headers : { 'content-type' : 'application/json' },
      body : JSON.stringify(payload)
    })
    .then(res => res.json())
    
    if(!result) return alert("????????? ?????? ??????")
    

    _csr_js__WEBPACK_IMPORTED_MODULE_0__.store.cacheHandler.clearCache(result);
    
    let routerId = _csr_js__WEBPACK_IMPORTED_MODULE_0__.router.index 
    if(location.search === '?new') routerId= result.data[0].id 

    _csr_js__WEBPACK_IMPORTED_MODULE_0__.router.setIndex(routerId)
    _csr_js__WEBPACK_IMPORTED_MODULE_0__.router.setPathCur('/post-single');

    history.replaceState(
      { state : result }, 
      '', 
      window.origin + '/post-single?index=' + _csr_js__WEBPACK_IMPORTED_MODULE_0__.router.index 
      )

  
  }
  template(){
    let index, data;
    if(location.search !== '?new'){
      index = _csr_js__WEBPACK_IMPORTED_MODULE_0__.router.index
      data = _csr_js__WEBPACK_IMPORTED_MODULE_0__.store.state.data.filter(ele => ele.id  === Number(index))[0]

    }
    else data = null; 

    return `
      <div id="contents">
        <form action='/api/post' method='post' id='form'>
          <fieldset>
            <p name=${data ? data.id: ""}> ??? ???
              <input 
              data-action='title'
              type='text',
              name = 'title'
              value=${ data ? data.title : ""}
              >
            </p>
            <p> ?????????
              <input
              data-action='writer'
              type='text'
              name='writer'
              value=${ data? data.writer : ""}
              >
            </p> 
            <textarea data-action = 'contents' cols="50" rows="20" name ='content'>${ data ? data.content : ""}</textarea>
            <input style="display:none;" name=id value = ${ data ? data.id : ""} >
            <button data-action='submit'>??????</button>
          </fieldset>
        </form>
      </div>
    `;  
  }
  
}
{/* 
<p> ??? ???
<input 
data-action='title'
type='text'
value=${ index ? data[Number(index)].title  : ""}
>
</p>
<p> ?????????
<input
data-action='writer'
type='text'
value=${ index ? data[Number(index)].writer : ""}
>
</p> 
*/}


/***/ }),

/***/ "./src/components/PostListPage.js":
/*!****************************************!*\
  !*** ./src/components/PostListPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostListPage": () => (/* binding */ PostListPage),
/* harmony export */   "PostListHeader": () => (/* binding */ PostListHeader),
/* harmony export */   "Search": () => (/* binding */ Search),
/* harmony export */   "Paging": () => (/* binding */ Paging),
/* harmony export */   "Sorting": () => (/* binding */ Sorting),
/* harmony export */   "SortButton": () => (/* binding */ SortButton),
/* harmony export */   "Postlist": () => (/* binding */ Postlist),
/* harmony export */   "PostButton": () => (/* binding */ PostButton),
/* harmony export */   "Pagination": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Component.js */ "./src/lib/Component.js");
/* harmony import */ var _csr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../csr.js */ "./csr.js");



class PostListPage extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
  
  constructor({ name, state }){
    super({ name, state })
    this.child = [] 
    this.child.push(new PostListHeader({ name : 'postlistheader', state }))
    this.child.push(new Postlist({ name : 'postlist' , state }))
    this.child.push(new Pagination({ name : 'pagination', state }))
    this.child.push(new PostButton({ name : 'postbutton' , state }))
  }
  
}

class PostListHeader extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
  
  child; 

  constructor({ name, state }){
    super({ name, state })
    this.child = []
    this.child.push( new Search({ name : 'search' , state }) )
    this.child.push( new Paging( { name :'paging', state  }) )
    this.child.push( new Sorting( { name : 'sorting', state }) )
    this.child.push( new SortButton( { name : 'sortbutton', state }) )

  }

}

class Search extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{


  setEvent(){
    this.el.querySelector('button').removeEventListener("click", this.firstBonder);
    this.el.querySelector('button').addEventListener("click", this.firstBonder);
    
    this.el.removeEventListener("keyup", this.secondBonder);
    this.el.addEventListener("keyup", this.secondBonder);
  }
  
  eventHandler({ target }){
    const { action } = target.dataset ;
    if( action === 'searchInput' ) return 
    if( action === 'searchBtn'){
      const value = this.el.querySelector('input').value
      _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.setState({ filter : value, page : 1, name : '' });
      // this.state = { ...this.state, ...{ filter: value, page : 1, name : "" }}
    }

    // store.setState(store.state)
  }

  secondHandler(e){
    this.filter = e.target.value

    if(e.code === 'Enter' && this.filter !== _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.state.filter){
      _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.setState({ filter : (e.target.value), page : 1 })
      // this.state = { ...this.state, ...{ filter : (e.target.value), page : 1 } }

      // console.log("search button after state==", store.state)

    }
  }

  template(){
    const keyword = _csr_js__WEBPACK_IMPORTED_MODULE_1__.store ? _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.state.filter : this.state.filter
    return `
    <div data-component="search" id="search">
      <input 
        data-action='searchInput' 
        placeholder="search" 
        type="text" 
        value=${keyword? keyword : ""}>
      <button data-action='searchBtn'>??????</button>
    </div>
  `;
  } 

}

class Paging extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {


  setEvent(){
    
    this.el.removeEventListener("change", this.firstBonder)
    this.el.addEventListener("change", this.firstBonder)
  }
  
  eventHandler({ target }){
    // console.log(target)
    _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.setState({ size : Number(target.value), page : 1 })
    // console.log(store)
    // this.state = { ...this.state, ...{ size : Number(target.value), page : 1 } }
  }

  template(){
    
    const select =  _csr_js__WEBPACK_IMPORTED_MODULE_1__.store ? Number(_csr_js__WEBPACK_IMPORTED_MODULE_1__.store.state.size) :  Number(this.state.size)
    return `
      <div data-component=paging id="paging">
        <label for="pagination" value=${select}>?????????</label>
          <select data-action ="page">
          <option value=5 ${select === 5? "selected" : ""}>5</option>
          <option value=10 ${select === 10? "selected" : ""}>10</option>
          <option value=20 ${select === 20? "selected" : ""}>20</option>
        </select>
      </div>
    `;
  }

}

class Sorting extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{

  setEvent(){
    

    this.el.removeEventListener("change", this.firstBonder)
    this.el.addEventListener("change", this.firstBonder)
  }
  
  eventHandler({ target }){
    _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.setState( { order : target.value, page : 1 } )
  }

  template(){
    const selected = _csr_js__WEBPACK_IMPORTED_MODULE_1__.store ? _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.state.order : this.state.order
    return `
    <div data-component='sorting' id="sorting">
      <label for="sorting">????????????</label>
      <select data-action="order">
        <option 
            name='order' value="dsc" 
            ${selected === 'dsc'? "selected" : ""}>??????</option>
        <option 
            name='order' value="asc"
            ${selected === 'asc'? "selected" : ""}>??????</option>
      </select>
    </div>`
    ;
  }

}


class SortButton extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{

  setEvent(){
    

    this.el.removeEventListener("click", this.firstBonder)
    this.el.addEventListener("click", this.firstBonder)
  }
  
  eventHandler({ target }){
    const { action } = target.dataset;
    if( action === 'all' ){
      _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.setState({ filter : "", order : 'dsc', name : "",  page : 1, size : 5 })
    }
    if( action === 'page' ){
      location.reload();
    }
  }

  template(){
    return `
      <div id="sortbutton">
        <button data-action = 'all' id="refreshall">?????????</button>
        <button data-action = 'page' id="refreshpage">????????????</button>
      </div>
    `;
  }

}



class Postlist extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{

  setEvent(){
    this.el.removeEventListener("click", this.firstBonder)
    this.el.addEventListener('click', this.firstBonder)
  }

  eventHandler({ target }){
    const { action } = target.dataset
    
    if( action === 'writer' ){
      _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.setState({ name : target.innerText , filter : "", page : 1});
      // this.state = { ...this.state, ...{ name : target.innerText , filter : "", page : 1} }
    } 
    if( action === 'title' ){
      const { index } = target.parentElement.dataset
      const url = window.origin + "/post-single?index=" + index
      _csr_js__WEBPACK_IMPORTED_MODULE_1__.router.setIndex(index)
      _csr_js__WEBPACK_IMPORTED_MODULE_1__.router.setPathCur('/post-single');
      history.replaceState({ state : _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.state}, '', url)
      
    }
  }

  template(){
    
    const items = _csr_js__WEBPACK_IMPORTED_MODULE_1__.store? _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.state.data : this.state.data
    return `
    <div id='postlist'>
      <ul>
        <li>?????????</li>
        <li>??????</li>
        <li>?????????</li>
        <li>?????????</li>
      </ul>
        ${ items.length === 0 ? "" : 
          items.map( (item, idx) => `
          <ul data-index=${item.id}>  
            <li id= ${item.id}>${item.id}</li>
            <li data-action='title'>${item.title}</li>
            <li data-action='writer'>${item.writer}</li>
            <li>${item.date.split('T')[0]}</li>
          </ul>`)
          .join("")
        }
      </div>`
  }

  render(){
    // console.log('what about yo')
    this.el.innerHTML = this.template();
    requestAnimationFrame(()=> this.setEvent())
  }
}

class PostButton extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{

  setEvent(){

    this.el.removeEventListener("click", this.eventHandler)
    this.el.addEventListener("click", this.eventHandler)
  }
  
  eventHandler({target}){
    const url = window.origin + "/post-edit" + `?new`
    history.replaceState(_csr_js__WEBPACK_IMPORTED_MODULE_1__.store.state, "?????????", url)
    _csr_js__WEBPACK_IMPORTED_MODULE_1__.router.setPathCur('/post-edit');
  }

  template(){
    return `
      <div id=postbutton>
        <button>??????</button>
      </div>
    `
  }
  
}


class Pagination extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{

  page; group

  setEvent(){

    this.el.removeEventListener("click", this.firstBonder)
    this.el.addEventListener("click", this.firstBonder)
  }
  
  eventHandler({target}){
    const { action } = target.dataset ;
    const { page } = _csr_js__WEBPACK_IMPORTED_MODULE_1__.store ? _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.state : this.state;
    
    if(action === 'more'){
      _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.setState({ page : Number(page) + 1 })
    }
    if(action === 'less'){
      _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.setState({ page : Number(page) -1 })
    }
  }

  template(){
    const { page, size, total, data } = _csr_js__WEBPACK_IMPORTED_MODULE_1__.store? _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.state : this.state;
    const less = Number(page) > 1;
    const more = Number(size)*Number(page) < Number(total) ;
    // console.log('postListPage============', this.state)

    return `
      <div id=pagination>
      ${ Number(total) === 0 ? `<span class="none-display">"???????????? ?????? ?????? ????????????."</span>` : ""}
      ${ less ? `<button data-action="less">??????</button>` : "" }
      ${ more ? `<button data-action="more">?????????</button>` : "" }
      ${ Number(total) && !more ? `<span class="none-display">"????????? ????????? ?????????"</span>` : "" }
      </div>
    `
  }

}


// export class RefreshAll extends Component{

//   setEvent(){
    

//     this.el.removeEventListener("click", this.firstBonder)
//     this.el.addEventListener("click", this.firstBonder)
//   }
  
//   eventHandler({ target }){
//     window.location.reload()
//   }
  
//   template(){
//     return `
//       <button id="refreshall">????????????</button>
//     `;
//   }

// }

/***/ }),

/***/ "./src/components/PostSingle.js":
/*!**************************************!*\
  !*** ./src/components/PostSingle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostSinglePage": () => (/* binding */ PostSinglePage),
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "Contents": () => (/* binding */ Contents),
/* harmony export */   "BottomButton": () => (/* binding */ BottomButton)
/* harmony export */ });
/* harmony import */ var _csr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../csr.js */ "./csr.js");
/* harmony import */ var _lib_Component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Component.js */ "./src/lib/Component.js");



class PostSinglePage extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_1__["default"]{
  
  child; 

  constructor({ name, state }){
    super({ name, state })
    // this.root = root;
    this.child = [];
    this.child.push( new Header({ name : 'header', state }))
    this.child.push( new Contents({ name : 'contents', state }))
    this.child.push( new BottomButton({ name : 'bottombutton', state }))

  }

}


class Header extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_1__["default"]{
  

  template(){
    const index  = _csr_js__WEBPACK_IMPORTED_MODULE_0__.router.index
    const data = _csr_js__WEBPACK_IMPORTED_MODULE_0__.store.state.data.filter(ele => ele.id  === Number(index))[0]
    if(data.length === 0 ){
      _csr_js__WEBPACK_IMPORTED_MODULE_0__.router.setPathCur('/not-found');
    }
    return `
      <header id="header">
        <div>
          <span>?????????</span>
          <span>??????</span>
          <span>?????????</span>
          <span>??????</span>
        </div>
        <div>
          <span>${ data.id }</span>
          <span>${ data.title }</span>
          <span>${ data.writer }</span>
          <span>${ data.date.split('T')[0] }</span>
        </div>

      </header>
    `
  }

}

class Contents extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_1__["default"]{


  template(){
    const  index  = _csr_js__WEBPACK_IMPORTED_MODULE_0__.router.index
    const data = _csr_js__WEBPACK_IMPORTED_MODULE_0__.store.state.data.filter(ele => ele.id  === Number(index))[0]

    return `
      <div id="contents">
        <p>${data.content}</p>
      </div>
    `;  
  }
  
}

class BottomButton extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_1__["default"]{
  

  setEvent(){
    this.el.removeEventListener("click", this.firstBonder)
    this.el.addEventListener("click", this.firstBonder)
  }
  
  async eventHandler({ target }){
    const { action } = target.dataset; 

    if(action === "edit"){
      // routing to edit-page
      const url = window.origin + "/post-edit"
      _csr_js__WEBPACK_IMPORTED_MODULE_0__.router.setPathCur('/post-edit');
      history.replaceState({ state : _csr_js__WEBPACK_IMPORTED_MODULE_0__.store.state}, '', url)
    }
    if(action === "list"){
      const id = _csr_js__WEBPACK_IMPORTED_MODULE_0__.store.cacheHandler.getCacheId();
      _csr_js__WEBPACK_IMPORTED_MODULE_0__.router.setPathCur('/');
      history.replaceState({ state : _csr_js__WEBPACK_IMPORTED_MODULE_0__.store.state }, '', window.origin + '/page?' + id )
    }   
    if(action === "delete"){
      // delete request 
      const index  = _csr_js__WEBPACK_IMPORTED_MODULE_0__.router.index
      const id = _csr_js__WEBPACK_IMPORTED_MODULE_0__.store.state.data.filter(ele => ele.id  === Number(index))[0].id

      const result = await fetch(
        `/post/delete?id=${id}`, 
        { method : 'delete',}
      ).then(result => result.json());
      
      if(result){ 
        _csr_js__WEBPACK_IMPORTED_MODULE_0__.store.cacheHandler.clearCache(result);
        _csr_js__WEBPACK_IMPORTED_MODULE_0__.router.setPathCur('/');
        history.replaceState({}, '', window.origin);
      }


    }
  }


  template(){
    return `
      <div id="bottombutton">
        <button data-action="edit">??????</button>
        <button data-action="list">??????</button>
        <button data-action="delete">??????</button>
      </div>
    `;
  }

}


/***/ }),

/***/ "./src/lib/Component.js":
/*!******************************!*\
  !*** ./src/lib/Component.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Component{
  
  el; components; child; firstBonder; secondBonder; name; curPos; oldPos; root; state

  constructor({ name, state }){
    this.components=[];
    this.child =[];
    this.name = name;
    this.state = state;
    this.curPos = 0;
    this.oldPos = 0;    
    
    this.firstBonder = this.eventHandler.bind(this);
    this.secondBonder = this.secondEventHandler.bind(this);
  }
  
  setState(state){
    this.state = state; // for serverside rendering
    // console.log('=========================this.state, this.curPos',this.state, this.curPos)
    if(this.components.length > 0){
      this.components[this.curPos].setState(state)
    }
    if(this.child.length > 0){
      this.child.map(node => node.setState(state))
    }
  }
  setRoot(root){
    if(!this.root)  this.root = root;
    this.el =  this.root.querySelector(`#${this.name}`);
    // console.log("setRooooot=", this.root, this.el, this.name)
    
    if(this.components.length > 0){
      this.components[this.curPos].setRoot(root);
    }

    if(this.child.length > 0){
      this.child.map(node => node.setRoot(root));
    }
    // console.log(root, 'setRoot', this.el)
    this.setEvent();
  }
  
  setEvent(){
  }

  eventHandler(){

  }

  secondEventHandler(){
    
  }

  template(){
    let renderHtml='';
    if(this.components.length > 0){
      renderHtml = this.components[this.curPos].template();
      // console.log('this app name=', this.name, this.state, renderHtml)

    } 

    if(this.child.length > 0){
      renderHtml = this.child.map(node => node.template()).join('')
      // console.log('this app name=', this.name, this.state, renderHtml)

    }
    // console.log('this app name=', this.name, this.state, renderHtml)
    return `
      <div id=${this.name}>
        ${renderHtml}
      </div>
    `;

  }
  
  render(){
    // console.log(this.root)
    // if(!this.el) this.el = this.root.querySelector('#'+ this.name) 
    // console.log(this.root)
    // const oldOne = this.el.innerHTML;
    const newOne = this.template();
  // Needs
    // console.log(newOne)
    // some diff logic to compare of two
 
    this.el.innerHTML= newOne //(should be oldOne after diff);
    requestAnimationFrame(()=> this.setRoot())
      // console.log("rendering here =", this.name, this.el)

  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);

/***/ }),

/***/ "./src/lib/Router.js":
/*!***************************!*\
  !*** ./src/lib/Router.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Router {
  
  routes; base; index; root; app; cur; eventBounder;
  
  constructor(){

    this.cur = 0;
    this.routeState = { value : "" };

  }
  
  subscribe(app){
    this.app = app;
  }

  setRoutes( routes ){
    this.routes = routes
  }

  setRoot(root){
    if(!this.root && !root) this.root = document.querySelector('#root')
    if(!this.root) this.root = root 
    // console.log(this.root)
    try{
      this.app.setRoot(this.root);
      this.app.onLoad();
      // this.app.setEvent();

    }catch(err){
      if(err instanceof TypeError){ 
        return this.serverRender()
      }
    }
  }


  setIndex(index){
    this.index =Number(index)
  }
  
  setPathCur(newCur, serverRender=false){
    // console.log('newCur========', newCur)
    newCur = newCur === '/page' ? '/' : newCur
    this.cur = this.routes.filter( 
      route => route.path === newCur )[0].comPosition;
    
    this.app.curPos = this.cur; 

    if(serverRender) return 
    this.templateRender()

  }

  templateRender(){
    this.app.innerHTML = this.app.template();
    this.root.innerHTML = this.app.innerHTML;
    this.setRoot(this.root)
  }
  
  serverRender(){
    // console.log('asdfasdfasdfdsa=========', this.app.state)
    return this.app.template();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);

/***/ }),

/***/ "./src/lib/Store.js":
/*!**************************!*\
  !*** ./src/lib/Store.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Store {
  state; app; cacheHandler;

  constructor(){
    this.cacheHandler = {}; 
  }

  subscribe(app){
    this.app =app;
  }

  initState(initial, server=false){
    this.state = initial;
    if(server) return 
    // console.log(this.state)
    // history.pushState({ state : this.state }, null, location.origin + '/page?' + this.cacheHandler.getCacheId())    

  }

  setState(newState){
    this.state = { ...this.state, ...newState };
    // console.log(this.cacheHandler.getCacheId())
    history.pushState({ state : this.state }, null, location.origin + '/page?' + this.cacheHandler.getCacheId())    
    // console.log(history)
    this.updateView();
    // const { filter, name, order, page, size, total }  = this.state
    // const url = `/page?filter=${filter}&name=${name}&order=${order}&page=${page}&size=${size}&total=${total}`
    // console.log('after setState=', this.state, location.origin + '/page?' + this.cacheHandler.getCacheId())
  }

  updateView(){
    if(Object.keys(this.cacheHandler).length !== 0) this.cacheHandler.searchCache();
    this.renderAll()
  }

  renderAll(){
    // console.log('render All works')
    this.app.render();
  }

  hydrate(newState){
    this.state = newState
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./csr.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=csr.js.map