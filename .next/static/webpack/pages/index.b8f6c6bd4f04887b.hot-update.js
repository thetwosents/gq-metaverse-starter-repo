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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var _Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_matrix_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/matrix.js */ \"./components/matrix.js\");\n/* harmony import */ var _utils_getWeb3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getWeb3 */ \"./utils/getWeb3.js\");\n/* harmony import */ var _utils_getBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getBalance */ \"./utils/getBalance.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Index() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), selection = ref[0], setSelection = ref[1];\n    var redPill = function() {\n        (0,_utils_getWeb3__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(true).then(function(result) {\n            (0,_utils_getBalance__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(result, '0x9a77eE1DACCc13674B047F967F863B5C8A9f6807').then(function(balance) {\n                console.log(balance);\n            });\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var checkConnection = _asyncToGenerator(_Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n            var web3;\n            return _Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        ;\n                        if (window.ethereum) {\n                            web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(window.ethereum);\n                        } else if (window.web3) {\n                            web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(window.web3.currentProvider);\n                        }\n                        ;\n                        // Check if User is already connected by retrieving the accounts\n                        web3.eth.getAccounts().then(_asyncToGenerator(_Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(addr) {\n                            return _Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        // Set User account into state\n                        })));\n                    case 4:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        checkConnection();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    __source: {\n                        fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"link\", {\n                        rel: \"preload\",\n                        href: \"/fonts/orange_kid.ttf\",\n                        as: \"font\",\n                        crossOrigin: \"\",\n                        __source: {\n                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        },\n                        __self: this\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                        className: 'matrix',\n                        __source: {\n                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                            lineNumber: 55,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                                __source: {\n                                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"Welcome to Scion.\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                                __source: {\n                                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"You know what you must do.\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                                className: 'row',\n                                __source: {\n                                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                                        className: 'button',\n                                        onClick: redPill,\n                                        __source: {\n                                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \" Red pill \"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"br\", {\n                                        __source: {\n                                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 13\n                                        },\n                                        __self: this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                                        className: \"button\",\n                                        onClick: function() {\n                                            return setSelection(false);\n                                        },\n                                        __source: {\n                                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \" Blue pill \"\n                                    })\n                                ]\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_matrix_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        selection: true,\n                        __source: {\n                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                            lineNumber: 69,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Index, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0E7QUFDc0I7QUFDM0I7QUFDdUI7QUFDUjtBQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLFFBQVEsQ0FBQ1MsS0FBSyxHQUFHLENBQUM7O0lBQy9CLEdBQUssQ0FBNkJOLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXpDTyxTQUFTLEdBQWtCUCxHQUFlLEtBQS9CUSxZQUFZLEdBQUlSLEdBQWU7SUFDakQsR0FBSyxDQUFDUyxPQUFPLEdBQUcsUUFDbEIsR0FEd0IsQ0FBQztRQUNyQkwsMERBQU8sQ0FBQyxJQUFJLEVBQ1RNLElBQUksQ0FBQyxRQUFRLENBQVBDLE1BQU0sRUFBSyxDQUFDO1lBQ2pCTiw2REFBVSxDQUFDTSxNQUFNLEVBQUMsQ0FBNEMsNkNBQzdERCxJQUFJLENBQUNFLFFBQVEsQ0FBUkEsT0FBTyxFQUFHLENBQUM7Z0JBQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPO1lBQ3JCLENBQUM7UUFDSCxDQUFDO0lBQ0wsQ0FBQztJQUVEWCxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEdBQUssQ0FBQ2MsZUFBZSw2S0FBRyxRQUFRLFlBQUksQ0FBQztnQkFHL0JDLElBQUk7Ozs7O3dCQUNSLEVBQUUsRUFBRUMsTUFBTSxDQUFDQyxRQUFRLEVBQUUsQ0FBQzs0QkFDbEJGLElBQUksR0FBRyxHQUFHLENBQUNkLDZDQUFJLENBQUNlLE1BQU0sQ0FBQ0MsUUFBUTt3QkFDbkMsQ0FBQyxNQUFNLEVBQUUsRUFBRUQsTUFBTSxDQUFDRCxJQUFJLEVBQUUsQ0FBQzs0QkFDckJBLElBQUksR0FBRyxHQUFHLENBQUNkLDZDQUFJLENBQUNlLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRyxlQUFlO3dCQUMvQyxDQUFDOzt3QkFFRCxFQUFnRTt3QkFDaEVILElBQUksQ0FBQ0ksR0FBRyxDQUFDQyxXQUFXLEdBQ2ZYLElBQUksMktBQUMsUUFBUSxTQUFEWSxJQUFJLEVBQUssQ0FBQzs7Ozs7Ozs7d0JBQ25CLEVBQThCO3dCQUNsQyxDQUFDOzs7Ozs7UUFDVCxDQUFDO1FBQ0RQLGVBQWU7SUFDZixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTTs7aUZBR0RRLENBQUc7Ozs7Ozs7K0ZBQ0QxQixrREFBSTs7Ozs7OzttR0FDRjJCLENBQUk7d0JBQ0hDLEdBQUcsRUFBQyxDQUFTO3dCQUNiQyxJQUFJLEVBQUMsQ0FBdUI7d0JBQzVCQyxFQUFFLEVBQUMsQ0FBTTt3QkFDVEMsV0FBVyxFQUFDLENBQUU7Ozs7Ozs7Ozs7OzswRkFLakJMLENBQUc7d0JBQ0ZNLFNBQVMsRUFBRSxDQUFROzs7Ozs7OztpR0FDbEJDLENBQUU7Ozs7Ozs7MENBQUMsQ0FBaUI7O2lHQUNwQkMsQ0FBQzs7Ozs7OzswQ0FBQyxDQUEwQjs7a0dBQzVCUixDQUFHO2dDQUFDTSxTQUFTLEVBQUUsQ0FBSzs7Ozs7Ozs7eUdBQ2xCTixDQUFHO3dDQUNGTSxTQUFTLEVBQUUsQ0FBUTt3Q0FDbkJHLE9BQU8sRUFBRXZCLE9BQU87Ozs7Ozs7a0RBQ2pCLENBQVU7O3lHQUNWd0IsQ0FBRTs7Ozs7Ozs7eUdBRUZWLENBQUc7d0NBQUNNLFNBQVMsRUFBQyxDQUFRO3dDQUFDRyxPQUFPLEVBQUUsUUFBUTs0Q0FBRnhCLE1BQU0sQ0FBTkEsWUFBWSxDQUFDLEtBQUs7Ozs7Ozs7O2tEQUFHLENBQVc7Ozs7Ozt5RkFHMUVMLDZEQUFRO3dCQUFDSSxTQUFTLEVBQUUsSUFBSTs7Ozs7Ozs7Ozs7O0FBSWpDLENBQUM7R0FoRXVCRCxLQUFLO0tBQUxBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5pbXBvcnQgTWF0cml4QkcgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWF0cml4LmpzXCI7XG5pbXBvcnQgZ2V0V2ViMyBmcm9tICcuLi91dGlscy9nZXRXZWIzJztcbmltcG9ydCBnZXRCYWxhbmNlIGZyb20gJy4uL3V0aWxzL2dldEJhbGFuY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgcmVkUGlsbCA9ICgpID0+IHtcbiAgICBnZXRXZWIzKHRydWUpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGdldEJhbGFuY2UocmVzdWx0LCcweDlhNzdlRTFEQUNDYzEzNjc0QjA0N0Y5NjdGODYzQjVDOEE5ZjY4MDcnKVxuICAgICAgICAudGhlbihiYWxhbmNlID0+e1xuICAgICAgICAgIGNvbnNvbGUubG9nKGJhbGFuY2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tDb25uZWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAvLyBDaGVjayBpZiBicm93c2VyIGlzIHJ1bm5pbmcgTWV0YW1hc2tcbiAgICAgIGxldCB3ZWIzO1xuICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgICAgIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgfSBlbHNlIGlmICh3aW5kb3cud2ViMykge1xuICAgICAgICAgIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xuICAgICAgfTtcblxuICAgICAgLy8gQ2hlY2sgaWYgVXNlciBpcyBhbHJlYWR5IGNvbm5lY3RlZCBieSByZXRyaWV2aW5nIHRoZSBhY2NvdW50c1xuICAgICAgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxuICAgICAgICAgIC50aGVuKGFzeW5jIChhZGRyKSA9PiB7XG4gICAgICAgICAgICAgIC8vIFNldCBVc2VyIGFjY291bnQgaW50byBzdGF0ZVxuICAgICAgICAgIH0pO1xuICB9O1xuICBjaGVja0Nvbm5lY3Rpb24oKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG5cbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgaHJlZj1cIi9mb250cy9vcmFuZ2Vfa2lkLnR0ZlwiXG4gICAgICAgICAgICBhcz1cImZvbnRcIlxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPD5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17J21hdHJpeCd9PlxuICAgICAgICAgIDxoMT5XZWxjb21lIHRvIFNjaW9uLjwvaDE+XG4gICAgICAgICAgPHA+WW91IGtub3cgd2hhdCB5b3UgbXVzdCBkby48L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyb3cnfT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnYnV0dG9uJ31cbiAgICAgICAgICAgICAgb25DbGljaz17cmVkUGlsbH1cbiAgICAgICAgICAgID4gUmVkIHBpbGwgPC9kaXY+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0aW9uKGZhbHNlKX0+IEJsdWUgcGlsbCA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNYXRyaXhCRyBzZWxlY3Rpb249e3RydWV9IC8+XG4gICAgICA8Lz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJXZWIzIiwiTWF0cml4QkciLCJnZXRXZWIzIiwiZ2V0QmFsYW5jZSIsIkluZGV4Iiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwicmVkUGlsbCIsInRoZW4iLCJyZXN1bHQiLCJiYWxhbmNlIiwiY29uc29sZSIsImxvZyIsImNoZWNrQ29ubmVjdGlvbiIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImN1cnJlbnRQcm92aWRlciIsImV0aCIsImdldEFjY291bnRzIiwiYWRkciIsImRpdiIsImxpbmsiLCJyZWwiLCJocmVmIiwiYXMiLCJjcm9zc09yaWdpbiIsImNsYXNzTmFtZSIsImgxIiwicCIsIm9uQ2xpY2siLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});