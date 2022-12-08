"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/todos/[id]";
exports.ids = ["pages/api/todos/[id]"];
exports.modules = {

/***/ "(api)/./pages/api/todos/[id]/index.ts":
/*!***************************************!*\
  !*** ./pages/api/todos/[id]/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === \"PATCH\") {\n    try {\n      console.log(req.query);\n      res.statusCode = 200;\n      return res.end();\n    } catch (error) {\n      console.log(error);\n      res.statusCode = 500;\n      res.send(error);\n    }\n\n    res.statusCode = 405;\n    return res.end();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvW2lkXS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsaUVBQWUsT0FBT0EsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7RUFDaEUsSUFBR0QsR0FBRyxDQUFDRSxNQUFKLEtBQWUsT0FBbEIsRUFBMEI7SUFDdEIsSUFBSTtNQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUosR0FBRyxDQUFDSyxLQUFoQjtNQUNBSixHQUFHLENBQUNLLFVBQUosR0FBaUIsR0FBakI7TUFDQSxPQUFPTCxHQUFHLENBQUNNLEdBQUosRUFBUDtJQUNILENBSkQsQ0FJRSxPQUFPQyxLQUFQLEVBQWM7TUFDWkwsT0FBTyxDQUFDQyxHQUFSLENBQVlJLEtBQVo7TUFDQVAsR0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO01BQ0FMLEdBQUcsQ0FBQ1EsSUFBSixDQUFTRCxLQUFUO0lBQ0g7O0lBRURQLEdBQUcsQ0FBQ0ssVUFBSixHQUFpQixHQUFqQjtJQUNBLE9BQU9MLEdBQUcsQ0FBQ00sR0FBSixFQUFQO0VBQ0g7QUFDSixDQWZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1taW5kLy4vcGFnZXMvYXBpL3RvZG9zL1tpZF0vaW5kZXgudHM/ZjQyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gICAgaWYocmVxLm1ldGhvZCA9PT0gXCJQQVRDSFwiKXtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXEucXVlcnkpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5lbmQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xyXG4gICAgICAgICAgICByZXMuc2VuZChlcnJvcilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xyXG4gICAgICAgIHJldHVybiByZXMuZW5kKCk7XHJcbiAgICB9XHJcbn07Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsInN0YXR1c0NvZGUiLCJlbmQiLCJlcnJvciIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/[id]/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/[id]/index.ts"));
module.exports = __webpack_exports__;

})();