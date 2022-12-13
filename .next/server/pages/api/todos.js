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

/***/ "(api)/./lib/data/index.ts":
/*!***************************!*\
  !*** ./lib/data/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"(api)/./lib/data/todo/index.ts\");\n\nconst Data = {\n  todo: _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUEsTUFBTUMsSUFBSSxHQUFHO0VBQUNELElBQUlBLCtDQUFBQTtBQUFMLENBQWI7QUFFQSxpRUFBZUMsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbWluZC8uL2xpYi9kYXRhL2luZGV4LnRzP2EyNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuY29uc3QgRGF0YSA9IHt0b2RvfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGE7Il0sIm5hbWVzIjpbInRvZG8iLCJEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/data/index.ts\n");

/***/ }),

/***/ "(api)/./lib/data/todo/index.ts":
/*!********************************!*\
  !*** ./lib/data/todo/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst getList = () => {\n  const todosBuffer = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)('data/todos.json');\n  const todosString = todosBuffer.toString();\n  if (!todosString) return [];\n  const todos = JSON.parse(todosString);\n  return todos;\n};\n\nconst exist = ({\n  id\n}) => {\n  const todos = getList(); // some : id가 있다면 true를 리턴하고, id가 없다면 false를 리턴\n\n  const todo = todos.some(todo => todo.id === id);\n  return todo;\n};\n\nconst write = async todos => {\n  (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)('data/todos.json', JSON.stringify(todos));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getList,\n  exist,\n  write\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS90b2RvL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUdBLE1BQU1FLE9BQU8sR0FBRyxNQUFNO0VBQ3BCLE1BQU1DLFdBQVcsR0FBR0gsZ0RBQVksQ0FBQyxpQkFBRCxDQUFoQztFQUNBLE1BQU1JLFdBQVcsR0FBR0QsV0FBVyxDQUFDRSxRQUFaLEVBQXBCO0VBQ0EsSUFBSSxDQUFDRCxXQUFMLEVBQWtCLE9BQU8sRUFBUDtFQUVsQixNQUFNRSxLQUFpQixHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osV0FBWCxDQUExQjtFQUNBLE9BQU9FLEtBQVA7QUFDRCxDQVBEOztBQVNBLE1BQU1HLEtBQUssR0FBRyxDQUFDO0VBQUVDO0FBQUYsQ0FBRCxLQUE0QjtFQUN4QyxNQUFNSixLQUFLLEdBQUdKLE9BQU8sRUFBckIsQ0FEd0MsQ0FFeEM7O0VBQ0EsTUFBTVMsSUFBSSxHQUFHTCxLQUFLLENBQUNNLElBQU4sQ0FBV0QsSUFBSSxJQUFJQSxJQUFJLENBQUNELEVBQUwsS0FBWUEsRUFBL0IsQ0FBYjtFQUNBLE9BQU9DLElBQVA7QUFDRCxDQUxEOztBQU9BLE1BQU1FLEtBQUssR0FBRyxNQUFPUCxLQUFQLElBQTZCO0VBQ3pDTCxpREFBYSxDQUFDLGlCQUFELEVBQW9CTSxJQUFJLENBQUNPLFNBQUwsQ0FBZVIsS0FBZixDQUFwQixDQUFiO0FBQ0QsQ0FGRDs7QUFJQSxpRUFBZTtFQUFFSixPQUFGO0VBQVdPLEtBQVg7RUFBa0JJO0FBQWxCLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW1pbmQvLi9saWIvZGF0YS90b2RvL2luZGV4LnRzPzRiOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZEZpbGVTeW5jLCB3cml0ZUZpbGVTeW5jIH0gZnJvbSAnZnMnO1xyXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3RvZG8nO1xyXG5cclxuY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcclxuICBjb25zdCB0b2Rvc0J1ZmZlciA9IHJlYWRGaWxlU3luYygnZGF0YS90b2Rvcy5qc29uJyk7XHJcbiAgY29uc3QgdG9kb3NTdHJpbmcgPSB0b2Rvc0J1ZmZlci50b1N0cmluZygpO1xyXG4gIGlmICghdG9kb3NTdHJpbmcpIHJldHVybiBbXTtcclxuXHJcbiAgY29uc3QgdG9kb3M6IFRvZG9UeXBlW10gPSBKU09OLnBhcnNlKHRvZG9zU3RyaW5nKTtcclxuICByZXR1cm4gdG9kb3M7XHJcbn07XHJcblxyXG5jb25zdCBleGlzdCA9ICh7IGlkIH06IHsgaWQ6IG51bWJlciB9KSA9PiB7XHJcbiAgY29uc3QgdG9kb3MgPSBnZXRMaXN0KCk7XHJcbiAgLy8gc29tZSA6IGlk6rCAIOyeiOuLpOuptCB0cnVl66W8IOumrO2EtO2VmOqzoCwgaWTqsIAg7JeG64uk66m0IGZhbHNl66W8IOumrO2EtFxyXG4gIGNvbnN0IHRvZG8gPSB0b2Rvcy5zb21lKHRvZG8gPT4gdG9kby5pZCA9PT0gaWQpO1xyXG4gIHJldHVybiB0b2RvO1xyXG59O1xyXG5cclxuY29uc3Qgd3JpdGUgPSBhc3luYyAodG9kb3M6IFRvZG9UeXBlW10pID0+IHtcclxuICB3cml0ZUZpbGVTeW5jKCdkYXRhL3RvZG9zLmpzb24nLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBnZXRMaXN0LCBleGlzdCwgd3JpdGUgfTtcclxuIl0sIm5hbWVzIjpbInJlYWRGaWxlU3luYyIsIndyaXRlRmlsZVN5bmMiLCJnZXRMaXN0IiwidG9kb3NCdWZmZXIiLCJ0b2Rvc1N0cmluZyIsInRvU3RyaW5nIiwidG9kb3MiLCJKU09OIiwicGFyc2UiLCJleGlzdCIsImlkIiwidG9kbyIsInNvbWUiLCJ3cml0ZSIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/data/todo/index.ts\n");

/***/ }),

/***/ "(api)/./pages/api/todos/index.ts":
/*!**********************************!*\
  !*** ./pages/api/todos/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/data */ \"(api)/./lib/data/index.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === 'GET') {\n    try {\n      // readFile\n      // const todos = await new Promise<TodoType[]>((resolve, reject) => {\n      //     fs.readFile(\"data/todos.json\", (err, data) => {\n      //         if(err) return reject(err.message);\n      //         const todosData = data.toString();\n      //         // data가 비었을 때\n      //         if(!todosData) return resolve([]);\n      //         const todos = JSON.parse(data.toString());\n      //         return resolve(todos);\n      //     });\n      // });\n      // res.statusCode = 200;\n      // return res.send(todos);\n      //readFileSync\n      // const todosBuffer = fs.readFileSync(\"data/todos.json\");\n      // const todosString = todosBuffer.toString();\n      // if(!todosString){\n      //     res.statusCode = 200;\n      //     res.send([]);\n      // }\n      // const todos: TodoType[] = JSON.parse(todosString);\n      // res.statusCode = 200;\n      // return res.send(todos);\n      const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n      res.statusCode = 200;\n      return res.send(todos);\n    } catch (error) {\n      console.log(error);\n      res.statusCode = 500;\n      res.send(error);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQTtBQUVBLGlFQUFlLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0VBQ2xFLElBQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQW5CLEVBQTBCO0lBQ3hCLElBQUk7TUFDRjtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BRUEsTUFBTUMsS0FBSyxHQUFHSiw4REFBQSxFQUFkO01BQ0FFLEdBQUcsQ0FBQ0ssVUFBSixHQUFpQixHQUFqQjtNQUNBLE9BQU9MLEdBQUcsQ0FBQ00sSUFBSixDQUFTSixLQUFULENBQVA7SUFDRCxDQTdCRCxDQTZCRSxPQUFPSyxLQUFQLEVBQWM7TUFDZEMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7TUFDQVAsR0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO01BQ0FMLEdBQUcsQ0FBQ00sSUFBSixDQUFTQyxLQUFUO0lBQ0Q7RUFDRjtBQUNGLENBckNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1taW5kLy4vcGFnZXMvYXBpL3RvZG9zL2luZGV4LnRzPzAyZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3RvZG8nO1xyXG5pbXBvcnQgRGF0YSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIHJlYWRGaWxlXHJcbiAgICAgIC8vIGNvbnN0IHRvZG9zID0gYXdhaXQgbmV3IFByb21pc2U8VG9kb1R5cGVbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAvLyAgICAgZnMucmVhZEZpbGUoXCJkYXRhL3RvZG9zLmpzb25cIiwgKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgICAvLyAgICAgICAgIGlmKGVycikgcmV0dXJuIHJlamVjdChlcnIubWVzc2FnZSk7XHJcbiAgICAgIC8vICAgICAgICAgY29uc3QgdG9kb3NEYXRhID0gZGF0YS50b1N0cmluZygpO1xyXG4gICAgICAvLyAgICAgICAgIC8vIGRhdGHqsIAg67mE7JeI7J2EIOuVjFxyXG4gICAgICAvLyAgICAgICAgIGlmKCF0b2Rvc0RhdGEpIHJldHVybiByZXNvbHZlKFtdKTtcclxuICAgICAgLy8gICAgICAgICBjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UoZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgLy8gICAgICAgICByZXR1cm4gcmVzb2x2ZSh0b2Rvcyk7XHJcbiAgICAgIC8vICAgICB9KTtcclxuICAgICAgLy8gfSk7XHJcbiAgICAgIC8vIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgICAvLyByZXR1cm4gcmVzLnNlbmQodG9kb3MpO1xyXG5cclxuICAgICAgLy9yZWFkRmlsZVN5bmNcclxuICAgICAgLy8gY29uc3QgdG9kb3NCdWZmZXIgPSBmcy5yZWFkRmlsZVN5bmMoXCJkYXRhL3RvZG9zLmpzb25cIik7XHJcbiAgICAgIC8vIGNvbnN0IHRvZG9zU3RyaW5nID0gdG9kb3NCdWZmZXIudG9TdHJpbmcoKTtcclxuICAgICAgLy8gaWYoIXRvZG9zU3RyaW5nKXtcclxuICAgICAgLy8gICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgICAvLyAgICAgcmVzLnNlbmQoW10pO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIGNvbnN0IHRvZG9zOiBUb2RvVHlwZVtdID0gSlNPTi5wYXJzZSh0b2Rvc1N0cmluZyk7XHJcbiAgICAgIC8vIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgICAvLyByZXR1cm4gcmVzLnNlbmQodG9kb3MpO1xyXG5cclxuICAgICAgY29uc3QgdG9kb3MgPSBEYXRhLnRvZG8uZ2V0TGlzdCgpO1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuICAgICAgcmV0dXJuIHJlcy5zZW5kKHRvZG9zKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XHJcbiAgICAgIHJlcy5zZW5kKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJEYXRhIiwicmVxIiwicmVzIiwibWV0aG9kIiwidG9kb3MiLCJ0b2RvIiwiZ2V0TGlzdCIsInN0YXR1c0NvZGUiLCJzZW5kIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/index.ts"));
module.exports = __webpack_exports__;

})();