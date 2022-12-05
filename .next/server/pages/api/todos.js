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
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/todos.ts":
/*!****************************!*\
  !*** ./pages/api/todos.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === \"GET\") {\n    try {\n      const todos = await new Promise((resolve, reject) => {\n        fs__WEBPACK_IMPORTED_MODULE_0___default().readFile(\"data/todos.json\", (err, data) => {\n          if (err) return reject(err.message);\n          const todosData = data.toString(); // data가 비었을 때\n\n          if (!todosData) return resolve([]);\n          const todos = JSON.parse(data.toString());\n          return resolve(todos);\n        });\n      });\n      res.statusCode = 200;\n      return res.send(todos);\n    } catch (error) {\n      console.log(error);\n      res.statusCode = 500;\n      res.send(error);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7QUFFQSxpRUFBZSxPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtFQUNoRSxJQUFHRCxHQUFHLENBQUNFLE1BQUosS0FBZSxLQUFsQixFQUF3QjtJQUNwQixJQUFJO01BQ0EsTUFBTUMsS0FBSyxHQUFHLE1BQU0sSUFBSUMsT0FBSixDQUF3QixDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7UUFDN0RQLGtEQUFBLENBQVksaUJBQVosRUFBK0IsQ0FBQ1MsR0FBRCxFQUFNQyxJQUFOLEtBQWU7VUFDMUMsSUFBR0QsR0FBSCxFQUFRLE9BQU9GLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDRSxPQUFMLENBQWI7VUFDUixNQUFNQyxTQUFTLEdBQUdGLElBQUksQ0FBQ0csUUFBTCxFQUFsQixDQUYwQyxDQUcxQzs7VUFDQSxJQUFHLENBQUNELFNBQUosRUFBZSxPQUFPTixPQUFPLENBQUMsRUFBRCxDQUFkO1VBQ2YsTUFBTUYsS0FBSyxHQUFHVSxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsSUFBSSxDQUFDRyxRQUFMLEVBQVgsQ0FBZDtVQUNBLE9BQU9QLE9BQU8sQ0FBQ0YsS0FBRCxDQUFkO1FBQ0gsQ0FQRDtNQVFILENBVG1CLENBQXBCO01BVUFGLEdBQUcsQ0FBQ2MsVUFBSixHQUFpQixHQUFqQjtNQUNBLE9BQU9kLEdBQUcsQ0FBQ2UsSUFBSixDQUFTYixLQUFULENBQVA7SUFDSCxDQWJELENBYUUsT0FBT2MsS0FBUCxFQUFjO01BQ1pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO01BQ0FoQixHQUFHLENBQUNjLFVBQUosR0FBaUIsR0FBakI7TUFDQWQsR0FBRyxDQUFDZSxJQUFKLENBQVNDLEtBQVQ7SUFDSDtFQUNKO0FBQ0osQ0FyQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW1pbmQvLi9wYWdlcy9hcGkvdG9kb3MudHM/ZGI4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdG9kb1wiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICAgIGlmKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpe1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9zID0gYXdhaXQgbmV3IFByb21pc2U8VG9kb1R5cGVbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZnMucmVhZEZpbGUoXCJkYXRhL3RvZG9zLmpzb25cIiwgKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVycikgcmV0dXJuIHJlamVjdChlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb3NEYXRhID0gZGF0YS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRhdGHqsIAg67mE7JeI7J2EIOuVjFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0b2Rvc0RhdGEpIHJldHVybiByZXNvbHZlKFtdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UoZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0b2Rvcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnNlbmQodG9kb3MpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XHJcbiAgICAgICAgICAgIHJlcy5zZW5kKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07Il0sIm5hbWVzIjpbImZzIiwicmVxIiwicmVzIiwibWV0aG9kIiwidG9kb3MiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRGaWxlIiwiZXJyIiwiZGF0YSIsIm1lc3NhZ2UiLCJ0b2Rvc0RhdGEiLCJ0b1N0cmluZyIsIkpTT04iLCJwYXJzZSIsInN0YXR1c0NvZGUiLCJzZW5kIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos.ts"));
module.exports = __webpack_exports__;

})();