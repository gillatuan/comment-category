/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */

/******/
(() => {
  // webpackBootstrap

  /******/
  "use strict";
  /******/

  var __webpack_modules__ = {
    /***/
    "./node_modules/css-loader/dist/cjs.js!./node_modules/css-modules-typescript-loader/index.js!./src/components/HelloWorld/HelloWorld.scss": (module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".hello-world {\\n  background-color: white;\\n  \\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-comment-category/./src/components/HelloWorld/HelloWorld.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/css-modules-typescript-loader/index.js");
      /***/
    },

    /***/
    "./node_modules/css-loader/dist/runtime/api.js": module => {
      eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-comment-category/./node_modules/css-loader/dist/runtime/api.js?");
      /***/
    },

    /***/
    "./src/components/HelloWorld/HelloWorld.scss": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_css_modules_typescript_loader_index_js_HelloWorld_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/css-modules-typescript-loader/index.js!./HelloWorld.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/css-modules-typescript-loader/index.js!./src/components/HelloWorld/HelloWorld.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_css_modules_typescript_loader_index_js_HelloWorld_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_css_modules_typescript_loader_index_js_HelloWorld_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_css_modules_typescript_loader_index_js_HelloWorld_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_css_modules_typescript_loader_index_js_HelloWorld_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-comment-category/./src/components/HelloWorld/HelloWorld.scss?");
      /***/
    },

    /***/
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": module => {
      eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-comment-category/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");
      /***/
    },

    /***/
    "./node_modules/style-loader/dist/runtime/insertBySelector.js": module => {
      eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-comment-category/./node_modules/style-loader/dist/runtime/insertBySelector.js?");
      /***/
    },

    /***/
    "./node_modules/style-loader/dist/runtime/insertStyleElement.js": module => {
      eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-comment-category/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");
      /***/
    },

    /***/
    "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js": (module, __unused_webpack_exports, __webpack_require__) => {
      eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-comment-category/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");
      /***/
    },

    /***/
    "./node_modules/style-loader/dist/runtime/styleDomAPI.js": module => {
      eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-comment-category/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");
      /***/
    },

    /***/
    "./node_modules/style-loader/dist/runtime/styleTagTransform.js": module => {
      eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-comment-category/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");
      /***/
    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      id: moduleId,

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/compat get default export */

  /******/


  (() => {
    /******/
    // getDefaultExport function for compatibility with non-harmony modules

    /******/
    __webpack_require__.n = module => {
      /******/
      var getter = module && module.__esModule ?
      /******/
      () => module['default'] :
      /******/
      () => module;
      /******/

      __webpack_require__.d(getter, {
        a: getter
      });
      /******/


      return getter;
      /******/
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  (() => {
    /******/
    // define getter functions for harmony exports

    /******/
    __webpack_require__.d = (exports, definition) => {
      /******/
      for (var key in definition) {
        /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/


  (() => {
    /******/
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/


  (() => {
    /******/
    // define __esModule on exports

    /******/
    __webpack_require__.r = exports => {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  })();
  /******/

  /************************************************************************/

  /******/

  /******/
  // startup

  /******/
  // Load entry module and return exports

  /******/
  // This entry module can't be inlined because the eval devtool is used.

  /******/


  var __webpack_exports__ = __webpack_require__("./src/components/HelloWorld/HelloWorld.scss");
  /******/

  /******/

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5idW5kbGUuanMiXSwibmFtZXMiOlsiX193ZWJwYWNrX21vZHVsZXNfXyIsIm1vZHVsZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXZhbCIsIl9fdW51c2VkX3dlYnBhY2tfbW9kdWxlIiwiX191bnVzZWRfd2VicGFja19leHBvcnRzIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwiaWQiLCJuIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBUyxDQUFDLE1BQU07QUFBRTs7QUFDbEI7QUFBVTtBQUNWOztBQUFVLE1BQUlBLG1CQUFtQixHQUFJO0FBRXJDO0FBQU0sK0lBSUMsQ0FBQ0MsTUFBRCxFQUFTQyxtQkFBVCxFQUE4QkMsbUJBQTlCLEtBQXNEO0FBRTdEQyxNQUFBQSxJQUFJLENBQUMsNnNDQUFELENBQUo7QUFFQTtBQUFPLEtBVjhCOztBQVlyQztBQUFNLHFEQUlFSCxNQUFELElBQVk7QUFFbkJHLE1BQUFBLElBQUksQ0FBQyx5dURBQUQsQ0FBSjtBQUVBO0FBQU8sS0FwQjhCOztBQXNCckM7QUFBTSxtREFJQyxDQUFDQyx1QkFBRCxFQUEwQkgsbUJBQTFCLEVBQStDQyxtQkFBL0MsS0FBdUU7QUFFOUVDLE1BQUFBLElBQUksQ0FBQyx1aExBQUQsQ0FBSjtBQUVBO0FBQU8sS0E5QjhCOztBQWdDckM7QUFB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LG1CQUFtQixDQUFDLDZDQUFELENBQTdDO0FBQ1Y7O0FBQ0E7O0FBQVUsQ0F4S0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQVRURU5USU9OOiBUaGUgXCJldmFsXCIgZGV2dG9vbCBoYXMgYmVlbiB1c2VkIChtYXliZSBieSBkZWZhdWx0IGluIG1vZGU6IFwiZGV2ZWxvcG1lbnRcIikuXG4gKiBUaGlzIGRldnRvb2wgaXMgbmVpdGhlciBtYWRlIGZvciBwcm9kdWN0aW9uIG5vciBmb3IgcmVhZGFibGUgb3V0cHV0IGZpbGVzLlxuICogSXQgdXNlcyBcImV2YWwoKVwiIGNhbGxzIHRvIGNyZWF0ZSBhIHNlcGFyYXRlIHNvdXJjZSBmaWxlIGluIHRoZSBicm93c2VyIGRldnRvb2xzLlxuICogSWYgeW91IGFyZSB0cnlpbmcgdG8gcmVhZCB0aGUgb3V0cHV0IGZpbGUsIHNlbGVjdCBhIGRpZmZlcmVudCBkZXZ0b29sIChodHRwczovL3dlYnBhY2suanMub3JnL2NvbmZpZ3VyYXRpb24vZGV2dG9vbC8pXG4gKiBvciBkaXNhYmxlIHRoZSBkZWZhdWx0IGRldnRvb2wgd2l0aCBcImRldnRvb2w6IGZhbHNlXCIuXG4gKiBJZiB5b3UgYXJlIGxvb2tpbmcgZm9yIHByb2R1Y3Rpb24tcmVhZHkgb3V0cHV0IGZpbGVzLCBzZWUgbW9kZTogXCJwcm9kdWN0aW9uXCIgKGh0dHBzOi8vd2VicGFjay5qcy5vcmcvY29uZmlndXJhdGlvbi9tb2RlLykuXG4gKi9cbi8qKioqKiovICgoKSA9PiB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0XCJ1c2Ugc3RyaWN0XCI7XG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9kZV9tb2R1bGVzL2Nzcy1tb2R1bGVzLXR5cGVzY3JpcHQtbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC9IZWxsb1dvcmxkLnNjc3NcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvY3NzLW1vZHVsZXMtdHlwZXNjcmlwdC1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9IZWxsb1dvcmxkL0hlbGxvV29ybGQuc2NzcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykgPT4ge1xuXG5ldmFsKFwiX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xcbi8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XFxuLyogaGFybW9ueSBleHBvcnQgKi8gICBcXFwiZGVmYXVsdFxcXCI6ICgpID0+IChfX1dFQlBBQ0tfREVGQVVMVF9FWFBPUlRfXylcXG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMgKi8gXFxcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1xcXCIpO1xcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X3J1bnRpbWVfYXBpX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xcbi8vIEltcG9ydHNcXG5cXG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQoKShmdW5jdGlvbihpKXtyZXR1cm4gaVsxXX0pO1xcbi8vIE1vZHVsZVxcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXFxcIi5oZWxsby13b3JsZCB7XFxcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcXFxuICBcXFxcbn1cXFwiLCBcXFwiXFxcIl0pO1xcbi8vIEV4cG9ydHNcXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IF9fV0VCUEFDS19ERUZBVUxUX0VYUE9SVF9fID0gKF9fX0NTU19MT0FERVJfRVhQT1JUX19fKTtcXG5cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9teS1jb21tZW50LWNhdGVnb3J5Ly4vc3JjL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC9IZWxsb1dvcmxkLnNjc3M/Li9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vZGVfbW9kdWxlcy9jc3MtbW9kdWxlcy10eXBlc2NyaXB0LWxvYWRlci9pbmRleC5qc1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChtb2R1bGUpID0+IHtcblxuZXZhbChcIlxcblxcbi8qXFxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxcbiovXFxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcXG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcXG5cXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcXG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XFxuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xcblxcbiAgICAgIGlmIChpdGVtWzJdKSB7XFxuICAgICAgICByZXR1cm4gXFxcIkBtZWRpYSBcXFwiLmNvbmNhdChpdGVtWzJdLCBcXFwiIHtcXFwiKS5jb25jYXQoY29udGVudCwgXFxcIn1cXFwiKTtcXG4gICAgICB9XFxuXFxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XFxuICAgIH0pLmpvaW4oXFxcIlxcXCIpO1xcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXFxuXFxuXFxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XFxuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXFxcInN0cmluZ1xcXCIpIHtcXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcXFwiXFxcIl1dO1xcbiAgICB9XFxuXFxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XFxuXFxuICAgIGlmIChkZWR1cGUpIHtcXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcXG5cXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XFxuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XFxuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xcblxcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXFxuICAgICAgICBjb250aW51ZTtcXG4gICAgICB9XFxuXFxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcXG4gICAgICAgIGlmICghaXRlbVsyXSkge1xcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgIGl0ZW1bMl0gPSBcXFwiXFxcIi5jb25jYXQobWVkaWFRdWVyeSwgXFxcIiBhbmQgXFxcIikuY29uY2F0KGl0ZW1bMl0pO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XFxuICAgIH1cXG4gIH07XFxuXFxuICByZXR1cm4gbGlzdDtcXG59O1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL215LWNvbW1lbnQtY2F0ZWdvcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY29tcG9uZW50cy9IZWxsb1dvcmxkL0hlbGxvV29ybGQuc2Nzc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC9IZWxsb1dvcmxkLnNjc3MgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovICgoX191bnVzZWRfd2VicGFja19tb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcblxuZXZhbChcIl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcXG4vKiBoYXJtb255IGV4cG9ydCAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xcbi8qIGhhcm1vbnkgZXhwb3J0ICovICAgXFxcImRlZmF1bHRcXFwiOiAoKSA9PiAoX19XRUJQQUNLX0RFRkFVTFRfRVhQT1JUX18pXFxuLyogaGFybW9ueSBleHBvcnQgKi8gfSk7XFxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ub2RlX21vZHVsZXNfc3R5bGVfbG9hZGVyX2Rpc3RfcnVudGltZV9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWdfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohICEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMgKi8gXFxcIi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXFxcIik7XFxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ub2RlX21vZHVsZXNfc3R5bGVfbG9hZGVyX2Rpc3RfcnVudGltZV9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWdfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihfbm9kZV9tb2R1bGVzX3N0eWxlX2xvYWRlcl9kaXN0X3J1bnRpbWVfaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbm9kZV9tb2R1bGVzX3N0eWxlX2xvYWRlcl9kaXN0X3J1bnRpbWVfc3R5bGVEb21BUElfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohICEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyAqLyBcXFwiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1xcXCIpO1xcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbm9kZV9tb2R1bGVzX3N0eWxlX2xvYWRlcl9kaXN0X3J1bnRpbWVfc3R5bGVEb21BUElfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihfbm9kZV9tb2R1bGVzX3N0eWxlX2xvYWRlcl9kaXN0X3J1bnRpbWVfc3R5bGVEb21BUElfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyk7XFxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ub2RlX21vZHVsZXNfc3R5bGVfbG9hZGVyX2Rpc3RfcnVudGltZV9pbnNlcnRCeVNlbGVjdG9yX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyAqLyBcXFwiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXFxcIik7XFxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ub2RlX21vZHVsZXNfc3R5bGVfbG9hZGVyX2Rpc3RfcnVudGltZV9pbnNlcnRCeVNlbGVjdG9yX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oX25vZGVfbW9kdWxlc19zdHlsZV9sb2FkZXJfZGlzdF9ydW50aW1lX2luc2VydEJ5U2VsZWN0b3JfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyk7XFxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ub2RlX21vZHVsZXNfc3R5bGVfbG9hZGVyX2Rpc3RfcnVudGltZV9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXNfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohICEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMgKi8gXFxcIi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXFxcIik7XFxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ub2RlX21vZHVsZXNfc3R5bGVfbG9hZGVyX2Rpc3RfcnVudGltZV9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXNfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihfbm9kZV9tb2R1bGVzX3N0eWxlX2xvYWRlcl9kaXN0X3J1bnRpbWVfc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18pO1xcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbm9kZV9tb2R1bGVzX3N0eWxlX2xvYWRlcl9kaXN0X3J1bnRpbWVfaW5zZXJ0U3R5bGVFbGVtZW50X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzICovIFxcXCIuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1xcXCIpO1xcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbm9kZV9tb2R1bGVzX3N0eWxlX2xvYWRlcl9kaXN0X3J1bnRpbWVfaW5zZXJ0U3R5bGVFbGVtZW50X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oX25vZGVfbW9kdWxlc19zdHlsZV9sb2FkZXJfZGlzdF9ydW50aW1lX2luc2VydFN0eWxlRWxlbWVudF9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fKTtcXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX25vZGVfbW9kdWxlc19zdHlsZV9sb2FkZXJfZGlzdF9ydW50aW1lX3N0eWxlVGFnVHJhbnNmb3JtX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMgKi8gXFxcIi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcXFwiKTtcXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX25vZGVfbW9kdWxlc19zdHlsZV9sb2FkZXJfZGlzdF9ydW50aW1lX3N0eWxlVGFnVHJhbnNmb3JtX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oX25vZGVfbW9kdWxlc19zdHlsZV9sb2FkZXJfZGlzdF9ydW50aW1lX3N0eWxlVGFnVHJhbnNmb3JtX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X18pO1xcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfbm9kZV9tb2R1bGVzX2Nzc19tb2R1bGVzX3R5cGVzY3JpcHRfbG9hZGVyX2luZGV4X2pzX0hlbGxvV29ybGRfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLW1vZHVsZXMtdHlwZXNjcmlwdC1sb2FkZXIvaW5kZXguanMhLi9IZWxsb1dvcmxkLnNjc3MgKi8gXFxcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvY3NzLW1vZHVsZXMtdHlwZXNjcmlwdC1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9IZWxsb1dvcmxkL0hlbGxvV29ybGQuc2Nzc1xcXCIpO1xcblxcbiAgICAgIFxcbiAgICAgIFxcbiAgICAgIFxcbiAgICAgIFxcbiAgICAgIFxcbiAgICAgIFxcbiAgICAgIFxcbiAgICAgIFxcbiAgICAgIFxcblxcbnZhciBvcHRpb25zID0ge307XFxuXFxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IChfbm9kZV9tb2R1bGVzX3N0eWxlX2xvYWRlcl9kaXN0X3J1bnRpbWVfc3R5bGVUYWdUcmFuc2Zvcm1fanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX19kZWZhdWx0KCkpO1xcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IChfbm9kZV9tb2R1bGVzX3N0eWxlX2xvYWRlcl9kaXN0X3J1bnRpbWVfc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19fZGVmYXVsdCgpKTtcXG5cXG4gICAgICBvcHRpb25zLmluc2VydCA9IF9ub2RlX21vZHVsZXNfc3R5bGVfbG9hZGVyX2Rpc3RfcnVudGltZV9pbnNlcnRCeVNlbGVjdG9yX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdCgpLmJpbmQobnVsbCwgXFxcImhlYWRcXFwiKTtcXG4gICAgXFxub3B0aW9ucy5kb21BUEkgPSAoX25vZGVfbW9kdWxlc19zdHlsZV9sb2FkZXJfZGlzdF9ydW50aW1lX3N0eWxlRG9tQVBJX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCgpKTtcXG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IChfbm9kZV9tb2R1bGVzX3N0eWxlX2xvYWRlcl9kaXN0X3J1bnRpbWVfaW5zZXJ0U3R5bGVFbGVtZW50X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19fZGVmYXVsdCgpKTtcXG5cXG52YXIgdXBkYXRlID0gX25vZGVfbW9kdWxlc19zdHlsZV9sb2FkZXJfZGlzdF9ydW50aW1lX2luamVjdFN0eWxlc0ludG9TdHlsZVRhZ19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQoKShfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfbm9kZV9tb2R1bGVzX2Nzc19tb2R1bGVzX3R5cGVzY3JpcHRfbG9hZGVyX2luZGV4X2pzX0hlbGxvV29ybGRfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fW1xcXCJkZWZhdWx0XFxcIl0sIG9wdGlvbnMpO1xcblxcblxcblxcblxcbiAgICAgICAvKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IF9fV0VCUEFDS19ERUZBVUxUX0VYUE9SVF9fID0gKF9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19ub2RlX21vZHVsZXNfY3NzX21vZHVsZXNfdHlwZXNjcmlwdF9sb2FkZXJfaW5kZXhfanNfSGVsbG9Xb3JsZF9zY3NzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV82X19bXFxcImRlZmF1bHRcXFwiXSAmJiBfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfbm9kZV9tb2R1bGVzX2Nzc19tb2R1bGVzX3R5cGVzY3JpcHRfbG9hZGVyX2luZGV4X2pzX0hlbGxvV29ybGRfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fW1xcXCJkZWZhdWx0XFxcIl0ubG9jYWxzID8gX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX25vZGVfbW9kdWxlc19jc3NfbW9kdWxlc190eXBlc2NyaXB0X2xvYWRlcl9pbmRleF9qc19IZWxsb1dvcmxkX3Njc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzZfX1tcXFwiZGVmYXVsdFxcXCJdLmxvY2FscyA6IHVuZGVmaW5lZCk7XFxuXFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vbXktY29tbWVudC1jYXRlZ29yeS8uL3NyYy9jb21wb25lbnRzL0hlbGxvV29ybGQvSGVsbG9Xb3JsZC5zY3NzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKG1vZHVsZSkgPT4ge1xuXG5ldmFsKFwiXFxuXFxudmFyIHN0eWxlc0luRG9tID0gW107XFxuXFxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xcbiAgdmFyIHJlc3VsdCA9IC0xO1xcblxcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xcbiAgICAgIHJlc3VsdCA9IGk7XFxuICAgICAgYnJlYWs7XFxuICAgIH1cXG4gIH1cXG5cXG4gIHJldHVybiByZXN1bHQ7XFxufVxcblxcbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XFxuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XFxuXFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcXG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcXG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcXG4gICAgdmFyIGlkZW50aWZpZXIgPSBcXFwiXFxcIi5jb25jYXQoaWQsIFxcXCIgXFxcIikuY29uY2F0KGNvdW50KTtcXG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XFxuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xcbiAgICB2YXIgb2JqID0ge1xcbiAgICAgIGNzczogaXRlbVsxXSxcXG4gICAgICBtZWRpYTogaXRlbVsyXSxcXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cXG4gICAgfTtcXG5cXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XFxuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcXG4gICAgfSBlbHNlIHtcXG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcXG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxcbiAgICAgICAgcmVmZXJlbmNlczogMVxcbiAgICAgIH0pO1xcbiAgICB9XFxuXFxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XFxuICB9XFxuXFxuICByZXR1cm4gaWRlbnRpZmllcnM7XFxufVxcblxcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xcbiAgYXBpLnVwZGF0ZShvYmopO1xcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xcbiAgICBpZiAobmV3T2JqKSB7XFxuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xcbiAgICAgICAgcmV0dXJuO1xcbiAgICAgIH1cXG5cXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XFxuICAgIH0gZWxzZSB7XFxuICAgICAgYXBpLnJlbW92ZSgpO1xcbiAgICB9XFxuICB9O1xcbn1cXG5cXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XFxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcXG5cXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcXG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcXG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcXG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xcbiAgICB9XFxuXFxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XFxuXFxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XFxuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcXG5cXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xcblxcbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcXG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xcblxcbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcXG4gIH07XFxufTtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9teS1jb21tZW50LWNhdGVnb3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChtb2R1bGUpID0+IHtcblxuZXZhbChcIlxcblxcbnZhciBtZW1vID0ge307XFxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXFxuXFxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFxcXCJ1bmRlZmluZWRcXFwiKSB7XFxuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcXG5cXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xcbiAgICAgIHRyeSB7XFxuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XFxuICAgICAgfSBjYXRjaCAoZSkge1xcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XFxuICB9XFxuXFxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xcbn1cXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cXG5cXG5cXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcXG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcXG5cXG4gIGlmICghdGFyZ2V0KSB7XFxuICAgIHRocm93IG5ldyBFcnJvcihcXFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlxcXCIpO1xcbiAgfVxcblxcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcXG59XFxuXFxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL215LWNvbW1lbnQtY2F0ZWdvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKG1vZHVsZSkgPT4ge1xuXG5ldmFsKFwiXFxuXFxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXFxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcXG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXFxcInN0eWxlXFxcIik7XFxuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XFxuICBvcHRpb25zLmluc2VydChzdHlsZSk7XFxuICByZXR1cm4gc3R5bGU7XFxufVxcblxcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL215LWNvbW1lbnQtY2F0ZWdvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovICgobW9kdWxlLCBfX3VudXNlZF93ZWJwYWNrX2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcblxuZXZhbChcIlxcblxcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xcbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xcbiAgdmFyIG5vbmNlID0gIHRydWUgPyBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jIDogMDtcXG5cXG4gIGlmIChub25jZSkge1xcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXFxcIm5vbmNlXFxcIiwgbm9uY2UpO1xcbiAgfVxcbn1cXG5cXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcztcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9teS1jb21tZW50LWNhdGVnb3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovICgobW9kdWxlKSA9PiB7XG5cbmV2YWwoXCJcXG5cXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XFxuICB2YXIgY3NzID0gb2JqLmNzcztcXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xcblxcbiAgaWYgKG1lZGlhKSB7XFxuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcXFwibWVkaWFcXFwiLCBtZWRpYSk7XFxuICB9IGVsc2Uge1xcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXFxcIm1lZGlhXFxcIik7XFxuICB9XFxuXFxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcXFwidW5kZWZpbmVkXFxcIikge1xcbiAgICBjc3MgKz0gXFxcIlxcXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcXFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcXFwiICovXFxcIik7XFxuICB9IC8vIEZvciBvbGQgSUVcXG5cXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cXG5cXG5cXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XFxufVxcblxcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXFxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xcbiAgICByZXR1cm4gZmFsc2U7XFxuICB9XFxuXFxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcXG59XFxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXFxuXFxuXFxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcXG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xcbiAgcmV0dXJuIHtcXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XFxuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XFxuICAgIH0sXFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XFxuICAgIH1cXG4gIH07XFxufVxcblxcbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL215LWNvbW1lbnQtY2F0ZWdvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKG1vZHVsZSkgPT4ge1xuXG5ldmFsKFwiXFxuXFxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXFxuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcXG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xcbiAgfSBlbHNlIHtcXG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcXG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcXG4gICAgfVxcblxcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcXG4gIH1cXG59XFxuXFxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9teS1jb21tZW50LWNhdGVnb3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanM/XCIpO1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuLyoqKioqKi8gXHRcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuLyoqKioqKi8gXHRcdFx0XHQoKSA9PiAobW9kdWxlKTtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG4vKioqKioqLyBcdFx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSlcbi8qKioqKiovIFx0fSkoKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QgKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcbi8qKioqKiovIFx0XHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSkoKTtcbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0Ly8gVGhpcyBlbnRyeSBtb2R1bGUgY2FuJ3QgYmUgaW5saW5lZCBiZWNhdXNlIHRoZSBldmFsIGRldnRvb2wgaXMgdXNlZC5cbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY29tcG9uZW50cy9IZWxsb1dvcmxkL0hlbGxvV29ybGQuc2Nzc1wiKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyB9KSgpXG47Il19