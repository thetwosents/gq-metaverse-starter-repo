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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var _Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_matrix_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/matrix.js */ \"./components/matrix.js\");\n/* harmony import */ var _utils_getWeb3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getWeb3 */ \"./utils/getWeb3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Index() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), selection = ref[0], setSelection = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (selection) {\n            web3Getter();\n        }\n    }, [\n        selection\n    ]);\n    var web3Getter = _asyncToGenerator(_Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var web3;\n        return _Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return (0,_utils_getWeb3__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n                case 2:\n                    web3 = _ctx.sent;\n                    console.log(web3);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    __source: {\n                        fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"link\", {\n                        rel: \"preload\",\n                        href: \"/fonts/orange_kid.ttf\",\n                        as: \"font\",\n                        crossOrigin: \"\",\n                        __source: {\n                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        },\n                        __self: this\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                        className: 'matrix',\n                        __source: {\n                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                                __source: {\n                                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"Welcome to Scion.\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                                __source: {\n                                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"You know what you must do.\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                                className: 'row',\n                                __source: {\n                                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        onClick: function() {\n                                            return setSelection(true);\n                                        },\n                                        href: 'javascript://',\n                                        __source: {\n                                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                                            __source: {\n                                                fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \" Red pill \"\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"br\", {\n                                        __source: {\n                                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 13\n                                        },\n                                        __self: this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        onClick: function() {\n                                            return setSelection(false);\n                                        },\n                                        href: 'javascript://',\n                                        __source: {\n                                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                                            __source: {\n                                                fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \" Blue pill \"\n                                        })\n                                    })\n                                ]\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_matrix_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        selection: true,\n                        __source: {\n                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                            lineNumber: 58,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Index, \"J2ZUa9KThBV6uW+KTtJO6m6y82E=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0E7QUFDc0I7QUFDSjtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLFFBQVEsQ0FBQ08sS0FBSyxHQUFHLENBQUM7O0lBQy9CLEdBQUssQ0FBNkJKLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXhDSyxTQUFTLEdBQWtCTCxHQUFjLEtBQTlCTSxZQUFZLEdBQUlOLEdBQWM7SUFHaERDLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO0lBRWpCLENBQUMsRUFBQyxDQUFDLENBQUM7SUFFSkEsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixFQUFFLEVBQUVJLFNBQVMsRUFBRSxDQUFDO1lBQ2RFLFVBQVU7UUFDWixDQUFDO0lBQ0gsQ0FBQyxFQUFDLENBQUNGO1FBQUFBLFNBQVM7SUFBQSxDQUFDO0lBRWIsR0FBSyxDQUFDRSxVQUFVLDZLQUFHLFFBQVEsV0FBSSxDQUFDO1lBQ3hCQyxJQUFJOzs7OzsyQkFBU0wsMERBQU87O29CQUFwQkssSUFBSTtvQkFDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUk7Ozs7OztJQUNsQixDQUFDO0lBQ0QsTUFBTTs7aUZBR0RHLENBQUc7Ozs7Ozs7K0ZBQ0RkLGtEQUFJOzs7Ozs7O21HQUNGZSxDQUFJO3dCQUNIQyxHQUFHLEVBQUMsQ0FBUzt3QkFDYkMsSUFBSSxFQUFDLENBQXVCO3dCQUM1QkMsRUFBRSxFQUFDLENBQU07d0JBQ1RDLFdBQVcsRUFBQyxDQUFFOzs7Ozs7Ozs7Ozs7MEZBTWpCTCxDQUFHO3dCQUNKTSxTQUFTLEVBQUUsQ0FBUTs7Ozs7Ozs7aUdBQ2hCQyxDQUFFOzs7Ozs7OzBDQUFDLENBQWlCOztpR0FDcEJDLENBQUM7Ozs7Ozs7MENBQUMsQ0FBMEI7O2tHQUM1QlIsQ0FBRztnQ0FBQ00sU0FBUyxFQUFFLENBQUs7Ozs7Ozs7O3lHQUNsQm5CLGtEQUFJO3dDQUNIc0IsT0FBTyxFQUFFLFFBQVE7NENBQUZkLE1BQU0sQ0FBTkEsWUFBWSxDQUFDLElBQUk7O3dDQUNoQ1EsSUFBSSxFQUFFLENBQWU7Ozs7Ozs7dUhBQ3BCTyxDQUFDOzs7Ozs7O3NEQUFDLENBQVU7Ozt5R0FFZEMsQ0FBRTs7Ozs7Ozs7eUdBQ0Z4QixrREFBSTt3Q0FDSHNCLE9BQU8sRUFBRSxRQUFROzRDQUFGZCxNQUFNLENBQU5BLFlBQVksQ0FBQyxLQUFLOzt3Q0FDbkNRLElBQUksRUFBRSxDQUFlOzs7Ozs7O3VIQUNsQk8sQ0FBQzs7Ozs7OztzREFBQyxDQUFXOzs7Ozs7O3lGQUluQm5CLDZEQUFRO3dCQUFDRyxTQUFTLEVBQUUsSUFBSTs7Ozs7Ozs7Ozs7O0FBSWpDLENBQUM7R0F2RHVCRCxLQUFLO0tBQUxBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hdHJpeEJHIGZyb20gXCIuLi9jb21wb25lbnRzL21hdHJpeC5qc1wiO1xuaW1wb3J0IGdldFdlYjMgZnJvbSAnLi4vdXRpbHMvZ2V0V2ViMyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBbc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgXG4gIH0sW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICB3ZWIzR2V0dGVyKCk7XG4gICAgfVxuICB9LFtzZWxlY3Rpb25dKVxuXG4gIGNvbnN0IHdlYjNHZXR0ZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgd2ViMyA9IGF3YWl0IGdldFdlYjMoKTtcbiAgICBjb25zb2xlLmxvZyh3ZWIzKTtcbiAgfVxuICByZXR1cm4gKFxuXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGhyZWY9XCIvZm9udHMvb3JhbmdlX2tpZC50dGZcIlxuICAgICAgICAgICAgYXM9XCJmb250XCJcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPD5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgY2xhc3NOYW1lPXsnbWF0cml4J30+XG4gICAgICAgICAgPGgxPldlbGNvbWUgdG8gU2Npb24uPC9oMT5cbiAgICAgICAgICA8cD5Zb3Uga25vdyB3aGF0IHlvdSBtdXN0IGRvLjwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Jvdyd9PlxuICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGlvbih0cnVlKX1cbiAgICAgICAgICAgICAgaHJlZj17J2phdmFzY3JpcHQ6Ly8nfT5cbiAgICAgICAgICAgICAgPGE+IFJlZCBwaWxsIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPExpbmsgIFxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3Rpb24oZmFsc2UpfVxuICAgICAgICAgICAgaHJlZj17J2phdmFzY3JpcHQ6Ly8nfT5cbiAgICAgICAgICAgICAgPGE+IEJsdWUgcGlsbCA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TWF0cml4Qkcgc2VsZWN0aW9uPXt0cnVlfSAvPlxuICAgICAgPC8+XG4gICAgPC8+XG4gICk7XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1hdHJpeEJHIiwiZ2V0V2ViMyIsIkluZGV4Iiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwid2ViM0dldHRlciIsIndlYjMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibGluayIsInJlbCIsImhyZWYiLCJhcyIsImNyb3NzT3JpZ2luIiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwib25DbGljayIsImEiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});