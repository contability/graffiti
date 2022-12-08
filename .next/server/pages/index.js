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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/TodoList/index.tsx":
/*!***************************************!*\
  !*** ./components/TodoList/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"D:\\\\project\\\\next-mind\\\\components\\\\TodoList\\\\index.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar CheckMarkIcon = function CheckMarkIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"path\", {\n      d: \"M21 6.285 9.84 19.018 3 13l1.319-1.49 5.341 4.686L19.525 5 21 6.285z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\nCheckMarkIcon.defaultProps = {\n  width: \"24\",\n  height: \"24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fillRule: \"evenodd\",\n  clipRule: \"evenodd\"\n};\n\nvar TrashCanIcon = function TrashCanIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"path\", {\n      d: \"M19 24H5a2 2 0 0 1-2-2V5H2V3h6V1.5C8 .673 8.673 0 9.5 0h5c.825 0 1.5.671 1.5 1.5V3h6v2h-1v17a2 2 0 0 1-2 2zm0-19H5v16.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V5zm-9 4a1 1 0 0 0-2 0v9a1 1 0 0 0 2 0V9zm6 0a1 1 0 0 0-2 0v9a1 1 0 0 0 2 0V9zm-2-7h-4v1h4V2z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\nTrashCanIcon.defaultProps = {\n  width: \"24\",\n  height: \"24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fillRule: \"evenodd\",\n  clipRule: \"evenodd\"\n};\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n  displayName: \"TodoList__Container\",\n  componentId: \"sc-1v721uk-0\"\n})([\"width:100%;.todo-num{margin-left:12px;}.todo-list-header{padding:12px;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;span{margin-left:8px;}}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}.bg-blue{background-color:\", \";}.bg-green{background-color:\", \";}.bg-navy{background-color:\", \";}.bg-orange{background-color:\", \";}.bg-red{background-color:\", \";}.bg-yellow{background-color:\", \";}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid \", \";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:\", \";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:22px;path{fill:\", \";}}.todo-check-mark{fill:\", \";}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid \", \";background-color:transparent;outline:none;}}}}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray);\n\nconst TodoList = ({\n  todos\n}) => {\n  // const getTodoColorNums = useCallback(() => {\n  //   let red = 0;\n  //   let orange = 0;\n  //   let yellow = 0;\n  //   let green = 0;\n  //   let blue = 0;\n  //   let navy = 0;\n  //   todos.map(todo => {\n  //     switch (todo.color) {\n  //       case 'red':\n  //         red += 1;\n  //         break;\n  //       case 'orange':\n  //         orange += 1;\n  //         break;\n  //       case 'yellow':\n  //         yellow += 1;\n  //         break;\n  //       case 'green':\n  //         green += 1;\n  //         break;\n  //       case 'blue':\n  //         blue += 1;\n  //         break;\n  //       case 'navy':\n  //         navy += 1;\n  //         break;\n  //     }\n  //   });\n  //   return {\n  //     red,\n  //     orange,\n  //     yellow,\n  //     green,\n  //     blue,\n  //     navy,\n  //   };\n  // }, [todos]);\n  const getTodoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {\n    const colors = {};\n    todos.map(todo => {\n      const value = colors[todo.color];\n      if (!value) colors[`${todo.color}`] = 1;else colors[`${todo.color}`] = value + 1;\n    });\n    return colors;\n  }, [todos]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"todo-list-header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n          children: [todos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 193,\n          columnNumber: 19\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 192,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"todo-list-header-colors\",\n        children: Object.keys(getTodoColorNums).map((color, colorIndex) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"todo-list-header-color-num\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: `todo-list-header-round-color bg-${color}`\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 198,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [getTodoColorNums[color], \"\\uAC1C\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 199,\n            columnNumber: 15\n          }, undefined)]\n        }, colorIndex, true, {\n          fileName: _jsxFileName,\n          lineNumber: 197,\n          columnNumber: 13\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 195,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n      className: \"todo-list\",\n      children: todos.map(todo => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n        className: \"todo-item\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"todo-left-side\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: `todo-color-block bg-${todo.color}`\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 208,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            className: `todo-text ${todo.checked ? 'checked-todo-text' : ''}`,\n            children: todo.text\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 209,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 207,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"todo-right-side\",\n          children: todo.checked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(TrashCanIcon, {\n              className: \"todo-trash-can\",\n              onClick: () => {}\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 214,\n              columnNumber: 19\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(CheckMarkIcon, {\n              className: \"todo-check-mark\",\n              onClick: () => {}\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 215,\n              columnNumber: 19\n            }, undefined)]\n          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"todo-button\",\n            onClick: () => {}\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 218,\n            columnNumber: 17\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 211,\n          columnNumber: 13\n        }, undefined)]\n      }, todo.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 206,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 204,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 190,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLGFBQVlGLElBQUksQ0FBQ08sT0FBTCxHQUFlLG1CQUFmLEdBQXFDLEVBQUcsRUFBbkU7WUFBQSxVQUF1RVAsSUFBSSxDQUFDUTtVQUE1RTtZQUFBO1lBQUE7WUFBQTtVQUFBLGFBRkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBREYsZUFLRTtVQUFLLFNBQVMsRUFBQyxpQkFBZjtVQUFBLFVBQ0dSLElBQUksQ0FBQ08sT0FBTCxnQkFDQztZQUFBLHdCQUNFLDhEQUFDLFlBQUQ7Y0FBYyxTQUFTLEVBQUMsZ0JBQXhCO2NBQXlDLE9BQU8sRUFBRSxNQUFNLENBQUU7WUFBMUQ7Y0FBQTtjQUFBO2NBQUE7WUFBQSxhQURGLGVBRUUsOERBQUMsYUFBRDtjQUFlLFNBQVMsRUFBQyxpQkFBekI7Y0FBMkMsT0FBTyxFQUFFLE1BQU0sQ0FBRTtZQUE1RDtjQUFBO2NBQUE7Y0FBQTtZQUFBLGFBRkY7VUFBQSxnQkFERCxnQkFNQztZQUFRLElBQUksRUFBQyxRQUFiO1lBQXNCLFNBQVMsRUFBQyxhQUFoQztZQUE4QyxPQUFPLEVBQUUsTUFBTSxDQUFFO1VBQS9EO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFQSjtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBTEY7TUFBQSxHQUErQlAsSUFBSSxDQUFDUyxFQUFwQztRQUFBO1FBQUE7UUFBQTtNQUFBLGFBREQ7SUFESDtNQUFBO01BQUE7TUFBQTtJQUFBLGFBZEY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUFxQ0QsQ0ExRkQ7O0FBNEZBLGlFQUFlZCxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1taW5kLy4vY29tcG9uZW50cy9Ub2RvTGlzdC9pbmRleC50c3g/ZjYwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuLi8uLi9zdHlsZXMvcGFsZXR0ZSc7XHJcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvdG9kbyc7XHJcbmltcG9ydCBDaGVja01hcmtJY29uIGZyb20gJy4uLy4uL3N2Zy9pY29ucy9zeXN0ZW0vc3lzdGVtX2NoZWNrLnN2Zyc7XHJcbmltcG9ydCBUcmFzaENhbkljb24gZnJvbSAnLi4vLi4vc3ZnL2ljb25zL3N5c3RlbS9zeXN0ZW1fdHJhc2hfY2FuLnN2Zyc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAudG9kby1udW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICAudG9kby1saXN0LWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuXHJcbiAgICAudG9kby1saXN0LWxhc3QtdG9kbyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRvZG8tbGlzdC1oZWFkZXItY29sb3JzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAudG9kby1saXN0LWhlYWRlci1jb2xvci1udW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50b2RvLWxpc3QtaGVhZGVyLXJvdW5kLWNvbG9yIHtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmctYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuYmx1ZX07XHJcbiAgfVxyXG4gIC5iZy1ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZ3JlZW59O1xyXG4gIH1cclxuICAuYmctbmF2eSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUubmF2eX07XHJcbiAgfVxyXG4gIC5iZy1vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLm9yYW5nZX07XHJcbiAgfVxyXG4gIC5iZy1yZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnJlZH07XHJcbiAgfVxyXG4gIC5iZy15ZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnllbGxvd307XHJcbiAgfVxyXG5cclxuICAudG9kby1saXN0IHtcclxuICAgIC50b2RvLWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XHJcblxyXG4gICAgICAudG9kby1sZWZ0LXNpZGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLnRvZG8tY29sb3ItYmxvY2sge1xyXG4gICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hlY2tlZC10b2RvLXRleHQge1xyXG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5fTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9kby10ZXh0IHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnRvZG8tcmlnaHQtc2lkZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcblxyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvZG8tdHJhc2gtY2FuIHtcclxuICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgcGF0aCB7XHJcbiAgICAgICAgICAgIGZpbGw6ICR7cGFsZXR0ZS5kZWVwX3JlZH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG9kby1jaGVjay1tYXJrIHtcclxuICAgICAgICAgIGZpbGw6ICR7cGFsZXR0ZS5kZWVwX2dyZWVufTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50b2RvLWJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgdG9kb3M6IFRvZG9UeXBlW107XHJcbn1cclxuXHJcbnR5cGUgT2JqZWN0SW5kZXhUeXBlID0ge1xyXG4gIFtrZXk6IHN0cmluZ106IG51bWJlciB8IHVuZGVmaW5lZDtcclxufTtcclxuXHJcbmNvbnN0IFRvZG9MaXN0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgdG9kb3MgfTogSVByb3BzKSA9PiB7XHJcbiAgLy8gY29uc3QgZ2V0VG9kb0NvbG9yTnVtcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAvLyAgIGxldCByZWQgPSAwO1xyXG4gIC8vICAgbGV0IG9yYW5nZSA9IDA7XHJcbiAgLy8gICBsZXQgeWVsbG93ID0gMDtcclxuICAvLyAgIGxldCBncmVlbiA9IDA7XHJcbiAgLy8gICBsZXQgYmx1ZSA9IDA7XHJcbiAgLy8gICBsZXQgbmF2eSA9IDA7XHJcblxyXG4gIC8vICAgdG9kb3MubWFwKHRvZG8gPT4ge1xyXG4gIC8vICAgICBzd2l0Y2ggKHRvZG8uY29sb3IpIHtcclxuICAvLyAgICAgICBjYXNlICdyZWQnOlxyXG4gIC8vICAgICAgICAgcmVkICs9IDE7XHJcbiAgLy8gICAgICAgICBicmVhaztcclxuICAvLyAgICAgICBjYXNlICdvcmFuZ2UnOlxyXG4gIC8vICAgICAgICAgb3JhbmdlICs9IDE7XHJcbiAgLy8gICAgICAgICBicmVhaztcclxuICAvLyAgICAgICBjYXNlICd5ZWxsb3cnOlxyXG4gIC8vICAgICAgICAgeWVsbG93ICs9IDE7XHJcbiAgLy8gICAgICAgICBicmVhaztcclxuICAvLyAgICAgICBjYXNlICdncmVlbic6XHJcbiAgLy8gICAgICAgICBncmVlbiArPSAxO1xyXG4gIC8vICAgICAgICAgYnJlYWs7XHJcbiAgLy8gICAgICAgY2FzZSAnYmx1ZSc6XHJcbiAgLy8gICAgICAgICBibHVlICs9IDE7XHJcbiAgLy8gICAgICAgICBicmVhaztcclxuICAvLyAgICAgICBjYXNlICduYXZ5JzpcclxuICAvLyAgICAgICAgIG5hdnkgKz0gMTtcclxuICAvLyAgICAgICAgIGJyZWFrO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KTtcclxuXHJcbiAgLy8gICByZXR1cm4ge1xyXG4gIC8vICAgICByZWQsXHJcbiAgLy8gICAgIG9yYW5nZSxcclxuICAvLyAgICAgeWVsbG93LFxyXG4gIC8vICAgICBncmVlbixcclxuICAvLyAgICAgYmx1ZSxcclxuICAvLyAgICAgbmF2eSxcclxuICAvLyAgIH07XHJcbiAgLy8gfSwgW3RvZG9zXSk7XHJcblxyXG4gIGNvbnN0IGdldFRvZG9Db2xvck51bXMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbG9yczogT2JqZWN0SW5kZXhUeXBlID0ge307XHJcbiAgICB0b2Rvcy5tYXAodG9kbyA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gY29sb3JzW3RvZG8uY29sb3JdO1xyXG4gICAgICBpZiAoIXZhbHVlKSBjb2xvcnNbYCR7dG9kby5jb2xvcn1gXSA9IDE7XHJcbiAgICAgIGVsc2UgY29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSB2YWx1ZSArIDE7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29sb3JzO1xyXG4gIH0sIFt0b2Rvc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtaGVhZGVyXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9kby1saXN0LWxhc3QtdG9kb1wiPlxyXG4gICAgICAgICAg64Ko7J2AIFRPRE8gPHNwYW4+e3RvZG9zLmxlbmd0aH3qsJw8L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0LWhlYWRlci1jb2xvcnNcIj5cclxuICAgICAgICAgIHtPYmplY3Qua2V5cyhnZXRUb2RvQ29sb3JOdW1zKS5tYXAoKGNvbG9yLCBjb2xvckluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0LWhlYWRlci1jb2xvci1udW1cIiBrZXk9e2NvbG9ySW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9kby1saXN0LWhlYWRlci1yb3VuZC1jb2xvciBiZy0ke2NvbG9yfWB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwPntnZXRUb2RvQ29sb3JOdW1zW2NvbG9yXX3qsJw8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwidG9kby1saXN0XCI+XHJcbiAgICAgICAge3RvZG9zLm1hcCh0b2RvID0+IChcclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0b2RvLWl0ZW1cIiBrZXk9e3RvZG8uaWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGVmdC1zaWRlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0b2RvLWNvbG9yLWJsb2NrIGJnLSR7dG9kby5jb2xvcn1gfSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHRvZG8tdGV4dCAke3RvZG8uY2hlY2tlZCA/ICdjaGVja2VkLXRvZG8tdGV4dCcgOiAnJ31gfT57dG9kby50ZXh0fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1yaWdodC1zaWRlXCI+XHJcbiAgICAgICAgICAgICAge3RvZG8uY2hlY2tlZCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUcmFzaENhbkljb24gY2xhc3NOYW1lPVwidG9kby10cmFzaC1jYW5cIiBvbkNsaWNrPXsoKSA9PiB7fX0gLz5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrTWFya0ljb24gY2xhc3NOYW1lPVwidG9kby1jaGVjay1tYXJrXCIgb25DbGljaz17KCkgPT4ge319IC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidG9kby1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7fX0+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZW1vIiwic3R5bGVkIiwicGFsZXR0ZSIsIkNoZWNrTWFya0ljb24iLCJUcmFzaENhbkljb24iLCJDb250YWluZXIiLCJkaXYiLCJncmF5IiwiYmx1ZSIsImdyZWVuIiwibmF2eSIsIm9yYW5nZSIsInJlZCIsInllbGxvdyIsImRlZXBfcmVkIiwiZGVlcF9ncmVlbiIsIlRvZG9MaXN0IiwidG9kb3MiLCJnZXRUb2RvQ29sb3JOdW1zIiwiY29sb3JzIiwibWFwIiwidG9kbyIsInZhbHVlIiwiY29sb3IiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwiY29sb3JJbmRleCIsImNoZWNrZWQiLCJ0ZXh0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TodoList/index.tsx\n");

/***/ }),

/***/ "./lib/api/index.ts":
/*!**************************!*\
  !*** ./lib/api/index.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst axios = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n  baseURL: \"http://localhost:3000\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxLQUFLLEdBQUdELG9EQUFBLENBQWE7RUFDekJHLE9BQU8sRUFBRUMsdUJBQStCRTtBQURmLENBQWIsQ0FBZDtBQUlBLGlFQUFlTCxLQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW1pbmQvLi9saWIvYXBpL2luZGV4LnRzPzBiM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IGF4aW9zID0gQXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF4aW9zO1xyXG4iXSwibmFtZXMiOlsiQXhpb3MiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/api/index.ts\n");

/***/ }),

/***/ "./lib/api/todos.ts":
/*!**************************!*\
  !*** ./lib/api/todos.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTodosAPI\": () => (/* binding */ getTodosAPI)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./lib/api/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__]);\n___WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst getTodosAPI = () => ___WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"api/todos\");\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpL3RvZG9zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFHTyxNQUFNQyxXQUFXLEdBQUcsTUFBTUQsNkNBQUEsQ0FBc0IsV0FBdEIsQ0FBMUIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbWluZC8uL2xpYi9hcGkvdG9kb3MudHM/YzNhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdG9kb1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRvZG9zQVBJID0gKCkgPT4gYXhpb3MuZ2V0PFRvZG9UeXBlW10+KFwiYXBpL3RvZG9zXCIpOyJdLCJuYW1lcyI6WyJheGlvcyIsImdldFRvZG9zQVBJIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api/todos.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TodoList */ \"./components/TodoList/index.tsx\");\n/* harmony import */ var _lib_api_todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api/todos */ \"./lib/api/todos.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_todos__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_api_todos__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"D:\\\\project\\\\next-mind\\\\pages\\\\index.tsx\";\n\n // const todos: TodoType[] = [\n//   {\n//     id: 1,\n//     text: '마트 가서 장보기',\n//     color: 'red',\n//     checked: false,\n//   },\n//   {\n//     id: 2,\n//     text: '수학 숙제하기',\n//     color: 'orange',\n//     checked: false,\n//   },\n//   {\n//     id: 3,\n//     text: '코딩하기',\n//     color: 'yellow',\n//     checked: true,\n//   },\n//   {\n//     id: 4,\n//     text: '넥스트 공부하기',\n//     color: 'green',\n//     checked: true,\n//   },\n//   {\n//     id: 5,\n//     text: '요리 연습하기',\n//     color: 'blue',\n//     checked: false,\n//   },\n//   {\n//     id: 6,\n//     text: '분리수거 하기',\n//     color: 'navy',\n//     checked: false,\n//   },\n// ];\n\n\n\nconst Index = ({\n  todos\n}) => {\n  console.log(\"http://localhost:3000\", '클라이언트');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_TodoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    todos: todos\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 10\n  }, undefined);\n};\n\nconst getServerSideProps = async () => {\n  try {\n    console.log(\"http://localhost:3000\", '서버');\n    const {\n      data\n    } = await (0,_lib_api_todos__WEBPACK_IMPORTED_MODULE_1__.getTodosAPI)();\n    console.log(data);\n    return {\n      props: {\n        todos: data\n      }\n    };\n  } catch (error) {\n    console.log(error);\n    return {\n      props: {\n        todos: []\n      }\n    };\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBO0NBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU1FLEtBQUssR0FBRyxDQUFDO0VBQUNDO0FBQUQsQ0FBRCxLQUFzQjtFQUNsQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHVCQUFaLEVBQTZDLE9BQTdDO0VBQ0Esb0JBQU8sOERBQUMsNERBQUQ7SUFBVSxLQUFLLEVBQUVIO0VBQWpCO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFBUDtBQUNELENBSEQ7O0FBS08sTUFBTU0sa0JBQXNDLEdBQUcsWUFBWTtFQUNoRSxJQUFJO0lBQ0ZMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyx1QkFBWixFQUE2QyxJQUE3QztJQUVBLE1BQU07TUFBRUk7SUFBRixJQUFXLE1BQU1ULDJEQUFXLEVBQWxDO0lBQ0FHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxJQUFaO0lBQ0EsT0FBTztNQUFFQyxLQUFLLEVBQUU7UUFBRVIsS0FBSyxFQUFFTztNQUFUO0lBQVQsQ0FBUDtFQUNELENBTkQsQ0FNRSxPQUFPRSxLQUFQLEVBQWM7SUFDZFIsT0FBTyxDQUFDQyxHQUFSLENBQVlPLEtBQVo7SUFDQSxPQUFPO01BQUVELEtBQUssRUFBRTtRQUFFUixLQUFLLEVBQUU7TUFBVDtJQUFULENBQVA7RUFDRDtBQUNGLENBWE07QUFhUCxpRUFBZUQsS0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1taW5kLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcywgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IFRvZG9MaXN0LCB7IElQcm9wcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb0xpc3QnO1xyXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gJy4uL3R5cGVzL3RvZG8nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBnZXRUb2Rvc0FQSSB9IGZyb20gJy4uL2xpYi9hcGkvdG9kb3MnO1xyXG5cclxuLy8gY29uc3QgdG9kb3M6IFRvZG9UeXBlW10gPSBbXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICB0ZXh0OiAn66eI7Yq4IOqwgOyEnCDsnqXrs7TquLAnLFxyXG4vLyAgICAgY29sb3I6ICdyZWQnLFxyXG4vLyAgICAgY2hlY2tlZDogZmFsc2UsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogMixcclxuLy8gICAgIHRleHQ6ICfsiJjtlZkg7IiZ7KCc7ZWY6riwJyxcclxuLy8gICAgIGNvbG9yOiAnb3JhbmdlJyxcclxuLy8gICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDMsXHJcbi8vICAgICB0ZXh0OiAn7L2U65Sp7ZWY6riwJyxcclxuLy8gICAgIGNvbG9yOiAneWVsbG93JyxcclxuLy8gICAgIGNoZWNrZWQ6IHRydWUsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogNCxcclxuLy8gICAgIHRleHQ6ICfrhKXsiqTtirgg6rO167aA7ZWY6riwJyxcclxuLy8gICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4vLyAgICAgY2hlY2tlZDogdHJ1ZSxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiA1LFxyXG4vLyAgICAgdGV4dDogJ+yalOumrCDsl7DsirXtlZjquLAnLFxyXG4vLyAgICAgY29sb3I6ICdibHVlJyxcclxuLy8gICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDYsXHJcbi8vICAgICB0ZXh0OiAn67aE66as7IiY6rGwIO2VmOq4sCcsXHJcbi8vICAgICBjb2xvcjogJ25hdnknLFxyXG4vLyAgICAgY2hlY2tlZDogZmFsc2UsXHJcbi8vICAgfSxcclxuLy8gXTtcclxuXHJcbmNvbnN0IEluZGV4ID0gKHt0b2Rvc30gOiBJUHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMLCAn7YG065287J207Ja47Yq4Jyk7XHJcbiAgcmV0dXJuIDxUb2RvTGlzdCB0b2Rvcz17dG9kb3N9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMLCAn7ISc67KEJyk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBnZXRUb2Rvc0FQSSgpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICByZXR1cm4geyBwcm9wczogeyB0b2RvczogZGF0YX0gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9kb3M6IFtdIH0gfTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sIm5hbWVzIjpbIlRvZG9MaXN0IiwiZ2V0VG9kb3NBUEkiLCJJbmRleCIsInRvZG9zIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiZGF0YSIsInByb3BzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./styles/palette.ts":
/*!***************************!*\
  !*** ./styles/palette.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  red: '#FFAFB0',\n  orange: '#FFC282',\n  yellow: '#FCFFB0',\n  green: '#E2FFAF',\n  blue: '#AEE4FF',\n  navy: '#B5C7ED',\n  gray: '#E5E5E5',\n  deep_red: '#F35456',\n  deep_green: '#47E774'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvcGFsZXR0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWU7RUFDYkEsR0FBRyxFQUFFLFNBRFE7RUFFYkMsTUFBTSxFQUFFLFNBRks7RUFHYkMsTUFBTSxFQUFFLFNBSEs7RUFJYkMsS0FBSyxFQUFFLFNBSk07RUFLYkMsSUFBSSxFQUFFLFNBTE87RUFNYkMsSUFBSSxFQUFFLFNBTk87RUFPYkMsSUFBSSxFQUFFLFNBUE87RUFRYkMsUUFBUSxFQUFFLFNBUkc7RUFTYkMsVUFBVSxFQUFFO0FBVEMsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbWluZC8uL3N0eWxlcy9wYWxldHRlLnRzP2Q4ZjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHJlZDogJyNGRkFGQjAnLFxyXG4gIG9yYW5nZTogJyNGRkMyODInLFxyXG4gIHllbGxvdzogJyNGQ0ZGQjAnLFxyXG4gIGdyZWVuOiAnI0UyRkZBRicsXHJcbiAgYmx1ZTogJyNBRUU0RkYnLFxyXG4gIG5hdnk6ICcjQjVDN0VEJyxcclxuICBncmF5OiAnI0U1RTVFNScsXHJcbiAgZGVlcF9yZWQ6ICcjRjM1NDU2JyxcclxuICBkZWVwX2dyZWVuOiAnIzQ3RTc3NCcsXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJyZWQiLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJncmVlbiIsImJsdWUiLCJuYXZ5IiwiZ3JheSIsImRlZXBfcmVkIiwiZGVlcF9ncmVlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/palette.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();