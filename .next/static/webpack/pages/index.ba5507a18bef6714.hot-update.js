"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TodoList/index.tsx":
/*!***************************************!*\
  !*** ./components/TodoList/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_furiumjung_Desktop_dev_Project_next_mind_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_furiumjung_Desktop_dev_Project_next_mind_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_furiumjung_Desktop_dev_Project_next_mind_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_furiumjung_Desktop_dev_Project_next_mind_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_furiumjung_Desktop_dev_Project_next_mind_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var _lib_api_todos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/api/todos */ \"./lib/api/todos.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/Users/furiumjung/Desktop/dev/Project/next-mind/components/TodoList/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_Users_furiumjung_Desktop_dev_Project_next_mind_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\nvar CheckMarkIcon = function CheckMarkIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"path\", {\n      d: \"M21 6.285 9.84 19.018 3 13l1.319-1.49 5.341 4.686L19.525 5 21 6.285z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\n_c3 = CheckMarkIcon;\nCheckMarkIcon.defaultProps = {\n  width: \"24\",\n  height: \"24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fillRule: \"evenodd\",\n  clipRule: \"evenodd\"\n};\n\nvar TrashCanIcon = function TrashCanIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"path\", {\n      d: \"M19 24H5a2 2 0 0 1-2-2V5H2V3h6V1.5C8 .673 8.673 0 9.5 0h5c.825 0 1.5.671 1.5 1.5V3h6v2h-1v17a2 2 0 0 1-2 2zm0-19H5v16.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V5zm-9 4a1 1 0 0 0-2 0v9a1 1 0 0 0 2 0V9zm6 0a1 1 0 0 0-2 0v9a1 1 0 0 0 2 0V9zm-2-7h-4v1h4V2z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\n_c4 = TrashCanIcon;\nTrashCanIcon.defaultProps = {\n  width: \"24\",\n  height: \"24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fillRule: \"evenodd\",\n  clipRule: \"evenodd\"\n};\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n  displayName: \"TodoList__Container\",\n  componentId: \"sc-1v721uk-0\"\n})([\"width:100%;.todo-num{margin-left:12px;}.todo-list-header{padding:12px;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;span{margin-left:8px;}}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}.bg-blue{background-color:\", \";}.bg-green{background-color:\", \";}.bg-navy{background-color:\", \";}.bg-orange{background-color:\", \";}.bg-red{background-color:\", \";}.bg-yellow{background-color:\", \";}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid \", \";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:\", \";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:22px;path{fill:\", \";}}.todo-check-mark{fill:\", \";}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid \", \";background-color:transparent;outline:none;}}}}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray);\n_c = Container;\n\nvar TodoList = function TodoList(_ref) {\n  _s();\n\n  var todos = _ref.todos;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)(); // const getTodoColorNums = useCallback(() => {\n  //   let red = 0;\n  //   let orange = 0;\n  //   let yellow = 0;\n  //   let green = 0;\n  //   let blue = 0;\n  //   let navy = 0;\n  //   todos.map(todo => {\n  //     switch (todo.color) {\n  //       case 'red':\n  //         red += 1;\n  //         break;\n  //       case 'orange':\n  //         orange += 1;\n  //         break;\n  //       case 'yellow':\n  //         yellow += 1;\n  //         break;\n  //       case 'green':\n  //         green += 1;\n  //         break;\n  //       case 'blue':\n  //         blue += 1;\n  //         break;\n  //       case 'navy':\n  //         navy += 1;\n  //         break;\n  //     }\n  //   });\n  //   return {\n  //     red,\n  //     orange,\n  //     yellow,\n  //     green,\n  //     blue,\n  //     navy,\n  //   };\n  // }, [todos]);\n\n  var getTodoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {\n    var colors = {};\n    todos.map(function (todo) {\n      var value = colors[todo.color];\n      if (!value) colors[\"\".concat(todo.color)] = 1;else colors[\"\".concat(todo.color)] = value + 1;\n    });\n    return colors;\n  }, [todos]);\n\n  var checkTodo = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_furiumjung_Desktop_dev_Project_next_mind_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_furiumjung_Desktop_dev_Project_next_mind_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(id) {\n      return _Users_furiumjung_Desktop_dev_Project_next_mind_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return (0,_lib_api_todos__WEBPACK_IMPORTED_MODULE_6__.checkTodoAPI)(id);\n\n            case 3:\n              console.log('체크하였습니다.');\n              router.push('/');\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function checkTodo(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"todo-list-header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n          children: [todos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 206,\n          columnNumber: 19\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 205,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"todo-list-header-colors\",\n        children: Object.keys(getTodoColorNums).map(function (color, colorIndex) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"todo-list-header-color-num\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              className: \"todo-list-header-round-color bg-\".concat(color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 211,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n              children: [getTodoColorNums[color], \"\\uAC1C\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 212,\n              columnNumber: 15\n            }, _this)]\n          }, colorIndex, true, {\n            fileName: _jsxFileName,\n            lineNumber: 210,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 208,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 204,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"ul\", {\n      className: \"todo-list\",\n      children: todos.map(function (todo) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n          className: \"todo-item\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"todo-left-side\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              className: \"todo-color-block bg-\".concat(todo.color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 221,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n              className: \"todo-text \".concat(todo.checked ? 'checked-todo-text' : ''),\n              children: todo.text\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 222,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 220,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"todo-right-side\",\n            children: todo.checked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TrashCanIcon, {\n                className: \"todo-trash-can\",\n                onClick: function onClick() {}\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 227,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(CheckMarkIcon, {\n                className: \"todo-check-mark\",\n                onClick: function onClick() {\n                  return checkTodo(todo.id);\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 228,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n              type: \"button\",\n              className: \"todo-button\",\n              onClick: function onClick() {\n                return checkTodo(todo.id);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 231,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 224,\n            columnNumber: 13\n          }, _this)]\n        }, todo.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 219,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 217,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 203,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TodoList, \"/vQ9eWr17XpaN/zvAyWqkeFgDxY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];\n});\n\n_c2 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"TodoList\");\n$RefreshReg$(_c3, \"CheckMarkIcon\");\n$RefreshReg$(_c4, \"TrashCanIcon\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyxhQUFoQztjQUE4QyxPQUFPLEVBQUU7Z0JBQUEsT0FBTUQsU0FBUyxDQUFDSCxJQUFJLENBQUNJLEVBQU4sQ0FBZjtjQUFBO1lBQXZEO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFQSjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBTEY7UUFBQSxHQUErQkosSUFBSSxDQUFDSSxFQUFwQztVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRGE7TUFBQSxDQUFkO0lBREg7TUFBQTtNQUFBO01BQUE7SUFBQSxTQWRGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBcUNELENBckdEOztHQUFNVjtVQUNXWjs7O01BRFhZO0FBdUdOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9kb0xpc3QvaW5kZXgudHN4P2Y2MGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuLi8uLi9zdHlsZXMvcGFsZXR0ZSc7XG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL3RvZG8nO1xuaW1wb3J0IENoZWNrTWFya0ljb24gZnJvbSAnLi4vLi4vc3ZnL2ljb25zL3N5c3RlbS9zeXN0ZW1fY2hlY2suc3ZnJztcbmltcG9ydCBUcmFzaENhbkljb24gZnJvbSAnLi4vLi4vc3ZnL2ljb25zL3N5c3RlbS9zeXN0ZW1fdHJhc2hfY2FuLnN2Zyc7XG5pbXBvcnQgeyBjaGVja1RvZG9BUEkgfSBmcm9tICcuLi8uLi9saWIvYXBpL3RvZG9zJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLnRvZG8tbnVtIHtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgfVxuXG4gIC50b2RvLWxpc3QtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XG5cbiAgICAudG9kby1saXN0LWxhc3QtdG9kbyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudG9kby1saXN0LWhlYWRlci1jb2xvcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLnRvZG8tbGlzdC1oZWFkZXItY29sb3ItbnVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICB9XG4gICAgICAudG9kby1saXN0LWhlYWRlci1yb3VuZC1jb2xvciB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYmctYmx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmJsdWV9O1xuICB9XG4gIC5iZy1ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmdyZWVufTtcbiAgfVxuICAuYmctbmF2eSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLm5hdnl9O1xuICB9XG4gIC5iZy1vcmFuZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5vcmFuZ2V9O1xuICB9XG4gIC5iZy1yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5yZWR9O1xuICB9XG4gIC5iZy15ZWxsb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS55ZWxsb3d9O1xuICB9XG5cbiAgLnRvZG8tbGlzdCB7XG4gICAgLnRvZG8taXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcblxuICAgICAgLnRvZG8tbGVmdC1zaWRlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLnRvZG8tY29sb3ItYmxvY2sge1xuICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGVja2VkLXRvZG8tdGV4dCB7XG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5fTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgfVxuICAgICAgICAudG9kby10ZXh0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRvZG8tcmlnaHQtc2lkZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50b2RvLXRyYXNoLWNhbiB7XG4gICAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgICAgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAke3BhbGV0dGUuZGVlcF9yZWR9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50b2RvLWNoZWNrLW1hcmsge1xuICAgICAgICAgIGZpbGw6ICR7cGFsZXR0ZS5kZWVwX2dyZWVufTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b2RvLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICB0b2RvczogVG9kb1R5cGVbXTtcbn1cblxudHlwZSBPYmplY3RJbmRleFR5cGUgPSB7XG4gIFtrZXk6IHN0cmluZ106IG51bWJlciB8IHVuZGVmaW5lZDtcbn07XG5cbmNvbnN0IFRvZG9MaXN0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgdG9kb3MgfTogSVByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAvLyBjb25zdCBnZXRUb2RvQ29sb3JOdW1zID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAvLyAgIGxldCByZWQgPSAwO1xuICAvLyAgIGxldCBvcmFuZ2UgPSAwO1xuICAvLyAgIGxldCB5ZWxsb3cgPSAwO1xuICAvLyAgIGxldCBncmVlbiA9IDA7XG4gIC8vICAgbGV0IGJsdWUgPSAwO1xuICAvLyAgIGxldCBuYXZ5ID0gMDtcblxuICAvLyAgIHRvZG9zLm1hcCh0b2RvID0+IHtcbiAgLy8gICAgIHN3aXRjaCAodG9kby5jb2xvcikge1xuICAvLyAgICAgICBjYXNlICdyZWQnOlxuICAvLyAgICAgICAgIHJlZCArPSAxO1xuICAvLyAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICBjYXNlICdvcmFuZ2UnOlxuICAvLyAgICAgICAgIG9yYW5nZSArPSAxO1xuICAvLyAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICBjYXNlICd5ZWxsb3cnOlxuICAvLyAgICAgICAgIHllbGxvdyArPSAxO1xuICAvLyAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICBjYXNlICdncmVlbic6XG4gIC8vICAgICAgICAgZ3JlZW4gKz0gMTtcbiAgLy8gICAgICAgICBicmVhaztcbiAgLy8gICAgICAgY2FzZSAnYmx1ZSc6XG4gIC8vICAgICAgICAgYmx1ZSArPSAxO1xuICAvLyAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICBjYXNlICduYXZ5JzpcbiAgLy8gICAgICAgICBuYXZ5ICs9IDE7XG4gIC8vICAgICAgICAgYnJlYWs7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG5cbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgcmVkLFxuICAvLyAgICAgb3JhbmdlLFxuICAvLyAgICAgeWVsbG93LFxuICAvLyAgICAgZ3JlZW4sXG4gIC8vICAgICBibHVlLFxuICAvLyAgICAgbmF2eSxcbiAgLy8gICB9O1xuICAvLyB9LCBbdG9kb3NdKTtcblxuICBjb25zdCBnZXRUb2RvQ29sb3JOdW1zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgY29sb3JzOiBPYmplY3RJbmRleFR5cGUgPSB7fTtcbiAgICB0b2Rvcy5tYXAodG9kbyA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNvbG9yc1t0b2RvLmNvbG9yXTtcbiAgICAgIGlmICghdmFsdWUpIGNvbG9yc1tgJHt0b2RvLmNvbG9yfWBdID0gMTtcbiAgICAgIGVsc2UgY29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSB2YWx1ZSArIDE7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29sb3JzO1xuICB9LCBbdG9kb3NdKTtcblxuICBjb25zdCBjaGVja1RvZG8gPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjaGVja1RvZG9BUEkoaWQpO1xuICAgICAgY29uc29sZS5sb2coJ+yytO2BrO2VmOyYgOyKteuLiOuLpC4nKTtcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXJcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9kby1saXN0LWxhc3QtdG9kb1wiPlxuICAgICAgICAgIOuCqOydgCBUT0RPIDxzcGFuPnt0b2Rvcy5sZW5ndGh96rCcPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0LWhlYWRlci1jb2xvcnNcIj5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoZ2V0VG9kb0NvbG9yTnVtcykubWFwKChjb2xvciwgY29sb3JJbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bVwiIGtleT17Y29sb3JJbmRleH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9kby1saXN0LWhlYWRlci1yb3VuZC1jb2xvciBiZy0ke2NvbG9yfWB9PjwvZGl2PlxuICAgICAgICAgICAgICA8cD57Z2V0VG9kb0NvbG9yTnVtc1tjb2xvcl196rCcPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwidG9kby1saXN0XCI+XG4gICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRvZG8taXRlbVwiIGtleT17dG9kby5pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGVmdC1zaWRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9kby1jb2xvci1ibG9jayBiZy0ke3RvZG8uY29sb3J9YH0gLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdG9kby10ZXh0ICR7dG9kby5jaGVja2VkID8gJ2NoZWNrZWQtdG9kby10ZXh0JyA6ICcnfWB9Pnt0b2RvLnRleHR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tcmlnaHQtc2lkZVwiPlxuICAgICAgICAgICAgICB7dG9kby5jaGVja2VkID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8VHJhc2hDYW5JY29uIGNsYXNzTmFtZT1cInRvZG8tdHJhc2gtY2FuXCIgb25DbGljaz17KCkgPT4ge319IC8+XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tNYXJrSWNvbiBjbGFzc05hbWU9XCJ0b2RvLWNoZWNrLW1hcmtcIiBvbkNsaWNrPXsoKSA9PiBjaGVja1RvZG8odG9kby5pZCl9IC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidG9kby1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBjaGVja1RvZG8odG9kby5pZCl9PjwvYnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZW1vIiwic3R5bGVkIiwicGFsZXR0ZSIsIkNoZWNrTWFya0ljb24iLCJUcmFzaENhbkljb24iLCJjaGVja1RvZG9BUEkiLCJ1c2VSb3V0ZXIiLCJDb250YWluZXIiLCJkaXYiLCJncmF5IiwiYmx1ZSIsImdyZWVuIiwibmF2eSIsIm9yYW5nZSIsInJlZCIsInllbGxvdyIsImRlZXBfcmVkIiwiZGVlcF9ncmVlbiIsIlRvZG9MaXN0IiwidG9kb3MiLCJyb3V0ZXIiLCJnZXRUb2RvQ29sb3JOdW1zIiwiY29sb3JzIiwibWFwIiwidG9kbyIsInZhbHVlIiwiY29sb3IiLCJjaGVja1RvZG8iLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZXJyb3IiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwiY29sb3JJbmRleCIsImNoZWNrZWQiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList/index.tsx\n"));

/***/ })

});