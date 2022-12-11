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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"(api)/./lib/data/todo/index.ts\");\n\nconst Data = {\n  todo: _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUEsTUFBTUMsSUFBSSxHQUFHO0VBQUNELElBQUlBLCtDQUFBQTtBQUFMLENBQWI7QUFFQSxpRUFBZUMsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbWluZC8uL2xpYi9kYXRhL2luZGV4LnRzP2EyNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5jb25zdCBEYXRhID0ge3RvZG99O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhOyJdLCJuYW1lcyI6WyJ0b2RvIiwiRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/data/index.ts\n");

/***/ }),

/***/ "(api)/./lib/data/todo/index.ts":
/*!********************************!*\
  !*** ./lib/data/todo/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst getList = () => {\n  const todosBuffer = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)('data/todos.json');\n  const todosString = todosBuffer.toString();\n  if (!todosString) return [];\n  const todos = JSON.parse(todosString);\n  return todos;\n};\n\nconst exist = ({\n  id\n}) => {\n  const todos = getList(); // some : id가 있다면 true를 리턴하고, id가 없다면 false를 리턴\n\n  const todo = todos.some(todo => todo.id === id);\n  return todo;\n};\n\nconst write = async todos => {\n  (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)('data/todos.json', JSON.stringify(todos));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getList,\n  exist,\n  write\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS90b2RvL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUdBLE1BQU1FLE9BQU8sR0FBRyxNQUFNO0VBQ3BCLE1BQU1DLFdBQVcsR0FBR0gsZ0RBQVksQ0FBQyxpQkFBRCxDQUFoQztFQUNBLE1BQU1JLFdBQVcsR0FBR0QsV0FBVyxDQUFDRSxRQUFaLEVBQXBCO0VBQ0EsSUFBSSxDQUFDRCxXQUFMLEVBQWtCLE9BQU8sRUFBUDtFQUVsQixNQUFNRSxLQUFpQixHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osV0FBWCxDQUExQjtFQUNBLE9BQU9FLEtBQVA7QUFDRCxDQVBEOztBQVNBLE1BQU1HLEtBQUssR0FBRyxDQUFDO0VBQUVDO0FBQUYsQ0FBRCxLQUE0QjtFQUN4QyxNQUFNSixLQUFLLEdBQUdKLE9BQU8sRUFBckIsQ0FEd0MsQ0FFeEM7O0VBQ0EsTUFBTVMsSUFBSSxHQUFHTCxLQUFLLENBQUNNLElBQU4sQ0FBV0QsSUFBSSxJQUFJQSxJQUFJLENBQUNELEVBQUwsS0FBWUEsRUFBL0IsQ0FBYjtFQUNBLE9BQU9DLElBQVA7QUFDRCxDQUxEOztBQU9BLE1BQU1FLEtBQUssR0FBRyxNQUFPUCxLQUFQLElBQTZCO0VBQ3pDTCxpREFBYSxDQUFDLGlCQUFELEVBQW9CTSxJQUFJLENBQUNPLFNBQUwsQ0FBZVIsS0FBZixDQUFwQixDQUFiO0FBQ0QsQ0FGRDs7QUFJQSxpRUFBZTtFQUFFSixPQUFGO0VBQVdPLEtBQVg7RUFBa0JJO0FBQWxCLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW1pbmQvLi9saWIvZGF0YS90b2RvL2luZGV4LnRzPzRiOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZEZpbGVTeW5jLCB3cml0ZUZpbGVTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy90b2RvJztcblxuY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgdG9kb3NCdWZmZXIgPSByZWFkRmlsZVN5bmMoJ2RhdGEvdG9kb3MuanNvbicpO1xuICBjb25zdCB0b2Rvc1N0cmluZyA9IHRvZG9zQnVmZmVyLnRvU3RyaW5nKCk7XG4gIGlmICghdG9kb3NTdHJpbmcpIHJldHVybiBbXTtcblxuICBjb25zdCB0b2RvczogVG9kb1R5cGVbXSA9IEpTT04ucGFyc2UodG9kb3NTdHJpbmcpO1xuICByZXR1cm4gdG9kb3M7XG59O1xuXG5jb25zdCBleGlzdCA9ICh7IGlkIH06IHsgaWQ6IG51bWJlciB9KSA9PiB7XG4gIGNvbnN0IHRvZG9zID0gZ2V0TGlzdCgpO1xuICAvLyBzb21lIDogaWTqsIAg7J6I64uk66m0IHRydWXrpbwg66as7YS07ZWY6rOgLCBpZOqwgCDsl4bri6TrqbQgZmFsc2Xrpbwg66as7YS0XG4gIGNvbnN0IHRvZG8gPSB0b2Rvcy5zb21lKHRvZG8gPT4gdG9kby5pZCA9PT0gaWQpO1xuICByZXR1cm4gdG9kbztcbn07XG5cbmNvbnN0IHdyaXRlID0gYXN5bmMgKHRvZG9zOiBUb2RvVHlwZVtdKSA9PiB7XG4gIHdyaXRlRmlsZVN5bmMoJ2RhdGEvdG9kb3MuanNvbicsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGdldExpc3QsIGV4aXN0LCB3cml0ZSB9O1xuIl0sIm5hbWVzIjpbInJlYWRGaWxlU3luYyIsIndyaXRlRmlsZVN5bmMiLCJnZXRMaXN0IiwidG9kb3NCdWZmZXIiLCJ0b2Rvc1N0cmluZyIsInRvU3RyaW5nIiwidG9kb3MiLCJKU09OIiwicGFyc2UiLCJleGlzdCIsImlkIiwidG9kbyIsInNvbWUiLCJ3cml0ZSIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/data/todo/index.ts\n");

/***/ }),

/***/ "(api)/./pages/api/todos/index.ts":
/*!**********************************!*\
  !*** ./pages/api/todos/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/data */ \"(api)/./lib/data/index.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === 'GET') {\n    try {\n      // readFile\n      // const todos = await new Promise<TodoType[]>((resolve, reject) => {\n      //     fs.readFile(\"data/todos.json\", (err, data) => {\n      //         if(err) return reject(err.message);\n      //         const todosData = data.toString();\n      //         // data가 비었을 때\n      //         if(!todosData) return resolve([]);\n      //         const todos = JSON.parse(data.toString());\n      //         return resolve(todos);\n      //     });\n      // });\n      // res.statusCode = 200;\n      // return res.send(todos);\n      //readFileSync\n      // const todosBuffer = fs.readFileSync(\"data/todos.json\");\n      // const todosString = todosBuffer.toString();\n      // if(!todosString){\n      //     res.statusCode = 200;\n      //     res.send([]);\n      // }\n      // const todos: TodoType[] = JSON.parse(todosString);\n      // res.statusCode = 200;\n      // return res.send(todos);\n      const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n      res.statusCode = 200;\n      return res.send(todos);\n    } catch (error) {\n      console.log(error);\n      res.statusCode = 500;\n      res.send(error);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQTtBQUVBLGlFQUFlLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0VBQ2xFLElBQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQW5CLEVBQTBCO0lBQ3hCLElBQUk7TUFDRjtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BRUEsTUFBTUMsS0FBSyxHQUFHSiw4REFBQSxFQUFkO01BQ0FFLEdBQUcsQ0FBQ0ssVUFBSixHQUFpQixHQUFqQjtNQUNBLE9BQU9MLEdBQUcsQ0FBQ00sSUFBSixDQUFTSixLQUFULENBQVA7SUFDRCxDQTdCRCxDQTZCRSxPQUFPSyxLQUFQLEVBQWM7TUFDZEMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7TUFDQVAsR0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO01BQ0FMLEdBQUcsQ0FBQ00sSUFBSixDQUFTQyxLQUFUO0lBQ0Q7RUFDRjtBQUNGLENBckNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1taW5kLy4vcGFnZXMvYXBpL3RvZG9zL2luZGV4LnRzPzAyZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvdG9kbyc7XG5pbXBvcnQgRGF0YSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICB0cnkge1xuICAgICAgLy8gcmVhZEZpbGVcbiAgICAgIC8vIGNvbnN0IHRvZG9zID0gYXdhaXQgbmV3IFByb21pc2U8VG9kb1R5cGVbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gICAgIGZzLnJlYWRGaWxlKFwiZGF0YS90b2Rvcy5qc29uXCIsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgIC8vICAgICAgICAgaWYoZXJyKSByZXR1cm4gcmVqZWN0KGVyci5tZXNzYWdlKTtcbiAgICAgIC8vICAgICAgICAgY29uc3QgdG9kb3NEYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgLy8gICAgICAgICAvLyBkYXRh6rCAIOu5hOyXiOydhCDrlYxcbiAgICAgIC8vICAgICAgICAgaWYoIXRvZG9zRGF0YSkgcmV0dXJuIHJlc29sdmUoW10pO1xuICAgICAgLy8gICAgICAgICBjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UoZGF0YS50b1N0cmluZygpKTtcbiAgICAgIC8vICAgICAgICAgcmV0dXJuIHJlc29sdmUodG9kb3MpO1xuICAgICAgLy8gICAgIH0pO1xuICAgICAgLy8gfSk7XG4gICAgICAvLyByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICAgIC8vIHJldHVybiByZXMuc2VuZCh0b2Rvcyk7XG5cbiAgICAgIC8vcmVhZEZpbGVTeW5jXG4gICAgICAvLyBjb25zdCB0b2Rvc0J1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhcImRhdGEvdG9kb3MuanNvblwiKTtcbiAgICAgIC8vIGNvbnN0IHRvZG9zU3RyaW5nID0gdG9kb3NCdWZmZXIudG9TdHJpbmcoKTtcbiAgICAgIC8vIGlmKCF0b2Rvc1N0cmluZyl7XG4gICAgICAvLyAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgICAvLyAgICAgcmVzLnNlbmQoW10pO1xuICAgICAgLy8gfVxuICAgICAgLy8gY29uc3QgdG9kb3M6IFRvZG9UeXBlW10gPSBKU09OLnBhcnNlKHRvZG9zU3RyaW5nKTtcbiAgICAgIC8vIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xuICAgICAgLy8gcmV0dXJuIHJlcy5zZW5kKHRvZG9zKTtcblxuICAgICAgY29uc3QgdG9kb3MgPSBEYXRhLnRvZG8uZ2V0TGlzdCgpO1xuICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgICByZXR1cm4gcmVzLnNlbmQodG9kb3MpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgIHJlcy5zZW5kKGVycm9yKTtcbiAgICB9XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiRGF0YSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRvZG9zIiwidG9kbyIsImdldExpc3QiLCJzdGF0dXNDb2RlIiwic2VuZCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/index.ts\n");

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