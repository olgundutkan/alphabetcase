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
        console.log("Welcome to My Second NPM Package!");
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
/*!   export src [provided] [no usage info] [missing usage info prevents renaming] */
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

module.exports = JSON.parse("{\"name\":\"@dutkan/lowercase\",\"private\":true,\"version\":\"0.1.4\",\"description\":\"lowercase\",\"keywords\":[\"lowercase\"],\"author\":\"Olgun DUTKAN <olgundutkan@gmail.com>\",\"homepage\":\"https://github.com/olgundutkan/alphabetcase#readme\",\"license\":\"ISC\",\"main\":\"dist/main.bundle.js\",\"directories\":{\"src\":\"dist\"},\"files\":[\"dist\"],\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/olgundutkan/alphabetcase.git\"},\"bugs\":{\"url\":\"https://github.com/olgundutkan/alphabetcase/issues\"},\"scripts\":{\"watch\":\"webpack --mode=development --watch\",\"compile\":\"webpack --mode=production\"},\"devDependencies\":{\"@babel/cli\":\"^7.12.1\",\"@babel/core\":\"^7.12.3\",\"awesome-typescript-loader\":\"^5.2.1\",\"babel-loader\":\"^8.2.1\",\"clean-webpack-plugin\":\"^3.0.0\",\"typescript\":\"^4.0.5\",\"webpack\":\"^5.4.0\",\"webpack-cli\":\"^4.2.0\"}}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZHV0a2FuL2xvd2VyY2FzZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9AZHV0a2FuL2xvd2VyY2FzZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AZHV0a2FuL2xvd2VyY2FzZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsV0FBTyxHQUFLLG9FQUFMLENBQWdDO0FBQy9DO0lBQ0U7UUFHQSxZQUFPLEdBQUc7WUFDUixPQUFPLEtBQUcsT0FBUyxDQUFDO1FBQ3RCLENBQUMsQ0FBQztRQUpBLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUM7SUFDbEQsQ0FBQztJQUlILGdCQUFDO0FBQUQsQ0FBQztBQVBZLDhCQUFTO0FBYXJCLE1BQThDLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFFNUUsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQm5DO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHZlcnNpb24gfSA9IHJlcXVpcmUoXCIuLi9wYWNrYWdlLmpzb25cIik7XG5leHBvcnQgY2xhc3MgVXBwZXJjYXNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coXCJXZWxjb21lIHRvIE15IFNlY29uZCBOUE0gUGFja2FnZSFcIilcbiAgfVxuICB2ZXJzaW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBgJHt2ZXJzaW9ufWA7XG4gIH07XG59XG5cbi8vIFRPRE86IHRlc3RcblxuaW1wb3J0IHsgV2luZG93SW50ZXJmYWNlIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy93aW5kb3dcIjtcblxuKHdpbmRvdyBhcyBXaW5kb3dJbnRlcmZhY2UgJiB0eXBlb2YgZ2xvYmFsVGhpcykuVXBwZXJjYXNlID0gbmV3IFVwcGVyY2FzZSgpO1xuXG5ldmFsKFwidmFyIFVwcGVyY2FzZSA9IFVwcGVyY2FzZTtcIik7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9