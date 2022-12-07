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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === \"GET\") {\n    try {\n      // readFile\n      // const todos = await new Promise<TodoType[]>((resolve, reject) => {\n      //     fs.readFile(\"data/todos.json\", (err, data) => {\n      //         if(err) return reject(err.message);\n      //         const todosData = data.toString();\n      //         // data가 비었을 때\n      //         if(!todosData) return resolve([]);\n      //         const todos = JSON.parse(data.toString());\n      //         return resolve(todos);\n      //     });\n      // });\n      // res.statusCode = 200;\n      // return res.send(todos);\n      //readFileSync\n      const todosBuffer = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(\"data/todos.json\");\n      const todosString = todosBuffer.toString();\n\n      if (!todosString) {\n        res.statusCode = 200;\n        res.send([]);\n      }\n\n      const todos = JSON.parse(todosString);\n      res.statusCode = 200;\n      return res.send(todos);\n    } catch (error) {\n      console.log(error);\n      res.statusCode = 500;\n      res.send(error);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7QUFFQSxpRUFBZSxPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtFQUNoRSxJQUFHRCxHQUFHLENBQUNFLE1BQUosS0FBZSxLQUFsQixFQUF3QjtJQUNwQixJQUFJO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFFQTtNQUNBLE1BQU1DLFdBQVcsR0FBR0osc0RBQUEsQ0FBZ0IsaUJBQWhCLENBQXBCO01BQ0EsTUFBTU0sV0FBVyxHQUFHRixXQUFXLENBQUNHLFFBQVosRUFBcEI7O01BQ0EsSUFBRyxDQUFDRCxXQUFKLEVBQWdCO1FBQ1pKLEdBQUcsQ0FBQ00sVUFBSixHQUFpQixHQUFqQjtRQUNBTixHQUFHLENBQUNPLElBQUosQ0FBUyxFQUFUO01BQ0g7O01BQ0QsTUFBTUMsS0FBaUIsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLFdBQVgsQ0FBMUI7TUFDQUosR0FBRyxDQUFDTSxVQUFKLEdBQWlCLEdBQWpCO01BQ0EsT0FBT04sR0FBRyxDQUFDTyxJQUFKLENBQVNDLEtBQVQsQ0FBUDtJQUNILENBekJELENBeUJFLE9BQU9HLEtBQVAsRUFBYztNQUNaQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtNQUNBWCxHQUFHLENBQUNNLFVBQUosR0FBaUIsR0FBakI7TUFDQU4sR0FBRyxDQUFDTyxJQUFKLENBQVNJLEtBQVQ7SUFDSDtFQUNKO0FBQ0osQ0FqQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW1pbmQvLi9wYWdlcy9hcGkvdG9kb3MudHM/ZGI4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3RvZG9cIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gICAgaWYocmVxLm1ldGhvZCA9PT0gXCJHRVRcIil7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyByZWFkRmlsZVxuICAgICAgICAgICAgLy8gY29uc3QgdG9kb3MgPSBhd2FpdCBuZXcgUHJvbWlzZTxUb2RvVHlwZVtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgZnMucmVhZEZpbGUoXCJkYXRhL3RvZG9zLmpzb25cIiwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICBpZihlcnIpIHJldHVybiByZWplY3QoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCB0b2Rvc0RhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGRhdGHqsIAg67mE7JeI7J2EIOuVjFxuICAgICAgICAgICAgLy8gICAgICAgICBpZighdG9kb3NEYXRhKSByZXR1cm4gcmVzb2x2ZShbXSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShkYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gcmVzb2x2ZSh0b2Rvcyk7XG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xuICAgICAgICAgICAgLy8gcmV0dXJuIHJlcy5zZW5kKHRvZG9zKTtcblxuICAgICAgICAgICAgLy9yZWFkRmlsZVN5bmNcbiAgICAgICAgICAgIGNvbnN0IHRvZG9zQnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKFwiZGF0YS90b2Rvcy5qc29uXCIpO1xuICAgICAgICAgICAgY29uc3QgdG9kb3NTdHJpbmcgPSB0b2Rvc0J1ZmZlci50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYoIXRvZG9zU3RyaW5nKXtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICAgICAgICAgICAgICByZXMuc2VuZChbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0b2RvczogVG9kb1R5cGVbXSA9IEpTT04ucGFyc2UodG9kb3NTdHJpbmcpO1xuICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnNlbmQodG9kb3MpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICByZXMuc2VuZChlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59OyJdLCJuYW1lcyI6WyJmcyIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRvZG9zQnVmZmVyIiwicmVhZEZpbGVTeW5jIiwidG9kb3NTdHJpbmciLCJ0b1N0cmluZyIsInN0YXR1c0NvZGUiLCJzZW5kIiwidG9kb3MiLCJKU09OIiwicGFyc2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos.ts\n");

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