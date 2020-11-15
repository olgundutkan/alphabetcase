/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! flagged exports */
/*! export Uppercase [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Uppercase = void 0;
var version = __webpack_require__(/*! ../package.json */ "./package.json").version;
var Uppercase = (function () {
    function Uppercase() {
        this.version = function () {
            return "" + version;
        };
        console.log("Welcome to My First NPM Package!");
    }
    return Uppercase;
}());
exports.Uppercase = Uppercase;
window.Uppercase = new Uppercase();
eval("var Uppercase = Uppercase;");


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! default exports */
/*! export author [provided] [no usage info] [missing usage info prevents renaming] */
/*! export bugs [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export url [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export description [provided] [no usage info] [missing usage info prevents renaming] */
/*! export devDependencies [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export @babel/cli [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export @babel/core [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export awesome-typescript-loader [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export babel-loader [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export clean-webpack-plugin [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export typescript [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export webpack [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export webpack-cli [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export directories [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export dist [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export files [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export homepage [provided] [no usage info] [missing usage info prevents renaming] */
/*! export keywords [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export license [provided] [no usage info] [missing usage info prevents renaming] */
/*! export main [provided] [no usage info] [missing usage info prevents renaming] */
/*! export name [provided] [no usage info] [missing usage info prevents renaming] */
/*! export private [provided] [no usage info] [missing usage info prevents renaming] */
/*! export publishConfig [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export access [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export repository [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export type [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export url [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export scripts [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export compile [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export watch [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export version [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("{\"name\":\"@dutkan/uppercase\",\"private\":true,\"version\":\"0.1.3\",\"description\":\"Letter uppercase\",\"keywords\":[\"uppercase\"],\"author\":\"Olgun DUTKAN <olgundutkan@gmail.com>\",\"homepage\":\"https://github.com/olgundutkan/alphabetcase#readme\",\"license\":\"ISC\",\"main\":\"dist/main.bundle.js\",\"directories\":{\"dist\":\"dist\"},\"files\":[\"dist\"],\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/olgundutkan/alphabetcase.git\"},\"bugs\":{\"url\":\"https://github.com/olgundutkan/alphabetcase/issues\"},\"scripts\":{\"watch\":\"webpack --mode=development --watch\",\"compile\":\"webpack --mode=production\"},\"devDependencies\":{\"@babel/cli\":\"^7.12.1\",\"@babel/core\":\"^7.12.3\",\"awesome-typescript-loader\":\"^5.2.1\",\"babel-loader\":\"^8.2.1\",\"clean-webpack-plugin\":\"^3.0.0\",\"typescript\":\"^4.0.5\",\"webpack\":\"^5.4.0\",\"webpack-cli\":\"^4.2.0\"}}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZHV0a2FuL3VwcGVyY2FzZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9AZHV0a2FuL3VwcGVyY2FzZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AZHV0a2FuL3VwcGVyY2FzZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsV0FBTyxHQUFLLG9FQUFMLENBQWdDO0FBQy9DO0lBQ0U7UUFHQSxZQUFPLEdBQUc7WUFDUixPQUFPLEtBQUcsT0FBUyxDQUFDO1FBQ3RCLENBQUMsQ0FBQztRQUpBLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUM7SUFDakQsQ0FBQztJQUlILGdCQUFDO0FBQUQsQ0FBQztBQVBZLDhCQUFTO0FBV3JCLE1BQThDLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFFNUUsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkbkM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgdmVyc2lvbiB9ID0gcmVxdWlyZShcIi4uL3BhY2thZ2UuanNvblwiKTtcbmV4cG9ydCBjbGFzcyBVcHBlcmNhc2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIldlbGNvbWUgdG8gTXkgRmlyc3QgTlBNIFBhY2thZ2UhXCIpXG4gIH1cbiAgdmVyc2lvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gYCR7dmVyc2lvbn1gO1xuICB9O1xufVxuXG5pbXBvcnQgeyBXaW5kb3dJbnRlcmZhY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3dpbmRvd1wiO1xuXG4od2luZG93IGFzIFdpbmRvd0ludGVyZmFjZSAmIHR5cGVvZiBnbG9iYWxUaGlzKS5VcHBlcmNhc2UgPSBuZXcgVXBwZXJjYXNlKCk7XG5cbmV2YWwoXCJ2YXIgVXBwZXJjYXNlID0gVXBwZXJjYXNlO1wiKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=