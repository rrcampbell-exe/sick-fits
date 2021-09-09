module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/init.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/init.js":
/*!***********************!*\
  !*** ./pages/init.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Init; });\n/* harmony import */ var _keystone_next_auth_pages_InitPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @keystone-next/auth/pages/InitPage */ \"@keystone-next/auth/pages/InitPage\");\n/* harmony import */ var _keystone_next_auth_pages_InitPage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_auth_pages_InitPage__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _keystone_next_admin_ui_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @keystone-next/admin-ui/apollo */ \"@keystone-next/admin-ui/apollo\");\n/* harmony import */ var _keystone_next_admin_ui_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_admin_ui_apollo__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst fieldPaths = ['name', 'email', 'password'];\nfunction Init() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_keystone_next_auth_pages_InitPage__WEBPACK_IMPORTED_MODULE_0__[\"InitPage\"], {\n    listKey: \"User\",\n    fieldPaths: fieldPaths,\n    showKeystoneSignup: true\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbml0LmpzP2IzYzQiXSwibmFtZXMiOlsiZmllbGRQYXRocyIsIkluaXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxVQUFVLEdBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixVQUFsQixDQUFuQjtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0UsMkRBQUMsMkVBQUQ7QUFDRSxXQUFPLEVBQUMsTUFEVjtBQUVFLGNBQVUsRUFBRUQsVUFGZDtBQUdFLHNCQUFrQixFQUFFO0FBSHRCLElBREY7QUFPRCIsImZpbGUiOiIuL3BhZ2VzL2luaXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbml0UGFnZSB9IGZyb20gJ0BrZXlzdG9uZS1uZXh0L2F1dGgvcGFnZXMvSW5pdFBhZ2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdxbCB9IGZyb20gJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2Fwb2xsbyc7XG5cbmNvbnN0IGZpZWxkUGF0aHMgPSBbJ25hbWUnLCAnZW1haWwnLCAncGFzc3dvcmQnXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5pdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8SW5pdFBhZ2VcbiAgICAgIGxpc3RLZXk9XCJVc2VyXCJcbiAgICAgIGZpZWxkUGF0aHM9e2ZpZWxkUGF0aHN9XG4gICAgICBzaG93S2V5c3RvbmVTaWdudXA9e3RydWV9XG4gICAgLz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/init.js\n");

/***/ }),

/***/ "@keystone-next/admin-ui/apollo":
/*!*************************************************!*\
  !*** external "@keystone-next/admin-ui/apollo" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@keystone-next/admin-ui/apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9hcG9sbG9cIj9hNDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2Fwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2Fwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@keystone-next/admin-ui/apollo\n");

/***/ }),

/***/ "@keystone-next/auth/pages/InitPage":
/*!*****************************************************!*\
  !*** external "@keystone-next/auth/pages/InitPage" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@keystone-next/auth/pages/InitPage\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtbmV4dC9hdXRoL3BhZ2VzL0luaXRQYWdlXCI/Y2RkZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAa2V5c3RvbmUtbmV4dC9hdXRoL3BhZ2VzL0luaXRQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLW5leHQvYXV0aC9wYWdlcy9Jbml0UGFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@keystone-next/auth/pages/InitPage\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });