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

/***/ "(api)/./pages/api/todos/[id]/index.ts":
/*!***************************************!*\
  !*** ./pages/api/todos/[id]/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/data */ \"(api)/./lib/data/index.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === 'PATCH') {\n    try {\n      const todoId = Number(req.query.id);\n      const todo = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.exist({\n        id: todoId\n      });\n\n      if (!todo) {\n        res.statusCode = 404;\n        res.end();\n      }\n\n      const todos = await _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n      const changedTodos = todos.map(todo => {\n        if (todo.id === todoId) return _objectSpread(_objectSpread({}, todo), {}, {\n          checked: !todo.checked\n        });\n        return todo;\n      });\n      _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.write(changedTodos);\n      res.statusCode = 200;\n      res.end();\n    } catch (error) {\n      console.log(error);\n      res.statusCode = 500;\n      res.send(error);\n    }\n\n    res.statusCode = 405;\n    return res.end();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvW2lkXS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBRUEsaUVBQWUsT0FBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7RUFDbEUsSUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsT0FBbkIsRUFBNEI7SUFDMUIsSUFBSTtNQUNGLE1BQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDSixHQUFHLENBQUNLLEtBQUosQ0FBVUMsRUFBWCxDQUFyQjtNQUNBLE1BQU1DLElBQUksR0FBR1IsNERBQUEsQ0FBZ0I7UUFBRU8sRUFBRSxFQUFFSDtNQUFOLENBQWhCLENBQWI7O01BQ0EsSUFBSSxDQUFDSSxJQUFMLEVBQVc7UUFDVE4sR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO1FBQ0FSLEdBQUcsQ0FBQ1MsR0FBSjtNQUNEOztNQUVELE1BQU1DLEtBQUssR0FBRyxNQUFNWiw4REFBQSxFQUFwQjtNQUNBLE1BQU1jLFlBQVksR0FBR0YsS0FBSyxDQUFDRyxHQUFOLENBQVVQLElBQUksSUFBSTtRQUNyQyxJQUFJQSxJQUFJLENBQUNELEVBQUwsS0FBWUgsTUFBaEIsRUFBd0IsdUNBQVlJLElBQVo7VUFBa0JRLE9BQU8sRUFBRSxDQUFDUixJQUFJLENBQUNRO1FBQWpDO1FBQ3hCLE9BQU9SLElBQVA7TUFDRCxDQUhvQixDQUFyQjtNQUtBUiw0REFBQSxDQUFnQmMsWUFBaEI7TUFDQVosR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO01BQ0FSLEdBQUcsQ0FBQ1MsR0FBSjtJQUNELENBakJELENBaUJFLE9BQU9PLEtBQVAsRUFBYztNQUNkQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtNQUNBaEIsR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO01BQ0FSLEdBQUcsQ0FBQ21CLElBQUosQ0FBU0gsS0FBVDtJQUNEOztJQUVEaEIsR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO0lBQ0EsT0FBT1IsR0FBRyxDQUFDUyxHQUFKLEVBQVA7RUFDRDtBQUNGLENBNUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1taW5kLy4vcGFnZXMvYXBpL3RvZG9zL1tpZF0vaW5kZXgudHM/ZjQyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgRGF0YSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BBVENIJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2RvSWQgPSBOdW1iZXIocmVxLnF1ZXJ5LmlkKTtcbiAgICAgIGNvbnN0IHRvZG8gPSBEYXRhLnRvZG8uZXhpc3QoeyBpZDogdG9kb0lkIH0pO1xuICAgICAgaWYgKCF0b2RvKSB7XG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDA0O1xuICAgICAgICByZXMuZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvZG9zID0gYXdhaXQgRGF0YS50b2RvLmdldExpc3QoKTtcbiAgICAgIGNvbnN0IGNoYW5nZWRUb2RvcyA9IHRvZG9zLm1hcCh0b2RvID0+IHtcbiAgICAgICAgaWYgKHRvZG8uaWQgPT09IHRvZG9JZCkgcmV0dXJuIHsgLi4udG9kbywgY2hlY2tlZDogIXRvZG8uY2hlY2tlZCB9O1xuICAgICAgICByZXR1cm4gdG9kbztcbiAgICAgIH0pO1xuXG4gICAgICBEYXRhLnRvZG8ud3JpdGUoY2hhbmdlZFRvZG9zKTtcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xuICAgICAgcmVzLmVuZCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgIHJlcy5zZW5kKGVycm9yKTtcbiAgICB9XG5cbiAgICByZXMuc3RhdHVzQ29kZSA9IDQwNTtcbiAgICByZXR1cm4gcmVzLmVuZCgpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIkRhdGEiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2RvSWQiLCJOdW1iZXIiLCJxdWVyeSIsImlkIiwidG9kbyIsImV4aXN0Iiwic3RhdHVzQ29kZSIsImVuZCIsInRvZG9zIiwiZ2V0TGlzdCIsImNoYW5nZWRUb2RvcyIsIm1hcCIsImNoZWNrZWQiLCJ3cml0ZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/[id]/index.ts\n");

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