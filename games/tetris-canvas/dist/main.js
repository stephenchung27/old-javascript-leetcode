/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/J-shape.js":
/*!***************************!*\
  !*** ./src/js/J-shape.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ \"./src/js/shape.js\");\n\n\nclass JShape extends _shape__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n\n    this.rotations = [\n      [[-1, 0], [0, 0], [1, 0], [-1, 1]],\n      [[0, 1], [0, 0], [0, -1], [-1, -1]],\n      [[1, 0], [0, 0], [-1, 0], [1, -1]],\n      [[0, -1], [0, 0], [0, 1], [1, 1]],\n    ]\n\n    this.offset = this.rotations[0];\n\n    this.positions = this.offset.map((offset) => (\n      [this.start[0] + offset[0], this.start[1] + offset[1]]\n    ));\n\n    this.getPositions = this.getPositions.bind(this);\n  }\n\n  getPositions() {\n    this.start[1]++;\n    this.offset = this.rotations[this.start[1] % 4];\n\n    this.positions = this.offset.map((offset) => (\n      [this.start[0] + offset[0], this.start[1] + offset[1]]\n    ));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (JShape);\n\n//# sourceURL=webpack:///./src/js/J-shape.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ \"./src/js/grid.js\");\n/* harmony import */ var _J_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./J-shape */ \"./src/js/J-shape.js\");\n\n\n\nclass Game {\n  constructor() {\n    this.grid = new _grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.shape = new _J_shape__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  render() {\n    ctx.clearRect(0, 0, 600, 600);\n    this.grid.render();\n    this.shape.render();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/grid.js":
/*!************************!*\
  !*** ./src/js/grid.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Grid {\n  constructor() {\n    this.grid = new Array(20).fill(new Array(10).fill(1));\n  }\n\n  render() {\n    for (let row = 0; row < this.grid.length; row++) {\n      for (let cell = 0; cell < this.grid[row].length; cell++) {\n        ctx.beginPath();\n        ctx.rect(10 + cell * 20, 10 + row * 20, 20, 20);\n        ctx.lineWidth = \"1\";\n        ctx.strokeStyle = \"#BBB\";\n        ctx.stroke();\n        ctx.closePath();\n      }\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n\n//# sourceURL=webpack:///./src/js/grid.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/js/game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById(\"canvas\");\n  window.ctx = canvas.getContext(\"2d\");\n  canvas.height = 600;\n  canvas.width = 600;\n  \n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n  animate();\n\n  function animate() {\n    game.render();\n\n    requestAnimationFrame(animate);\n  }\n})\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/shape.js":
/*!*************************!*\
  !*** ./src/js/shape.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Shape {\n  constructor() {\n    this.start = [3, 0];\n    this.positions = [this.start];\n\n    setInterval(() => {\n      this.getPositions();\n    }, 1000);\n  }\n\n  render() {\n    for (let position of this.positions) {\n      ctx.beginPath();\n      ctx.rect(10 + position[0] * 20, 10 + position[1] * 20, 20, 20);\n      ctx.lineWidth = \"1\";\n      ctx.fillStyle = \"#FF0000\";\n      ctx.fill();\n      ctx.closePath();\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shape);\n\n//# sourceURL=webpack:///./src/js/shape.js?");

/***/ })

/******/ });