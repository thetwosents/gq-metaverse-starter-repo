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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var _Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_matrix_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/matrix.js */ \"./components/matrix.js\");\n/* harmony import */ var _utils_getWeb3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getWeb3 */ \"./utils/getWeb3.js\");\n/* harmony import */ var _utils_getBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getBalance */ \"./utils/getBalance.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Index() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), selection = ref[0], setSelection = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), user = ref1[0], setUser = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), balance1 = ref2[0], setBalance = ref2[1];\n    var redPill = function() {\n        (0,_utils_getWeb3__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(true).then(function(result) {\n            (0,_utils_getBalance__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(result, '0x9a77eE1DACCc13674B047F967F863B5C8A9f6807').then(function(balance) {\n                setBalance(balance);\n            });\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var checkConnection = _asyncToGenerator(_Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n            var web3;\n            return _Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        ;\n                        if (window.ethereum) {\n                            web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(window.ethereum);\n                        } else if (window.web3) {\n                            web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(window.web3.currentProvider);\n                        }\n                        ;\n                        // Check if User is already connected by retrieving the accounts\n                        web3.eth.getAccounts().then(_asyncToGenerator(_Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(addr) {\n                            return _Users_jonsenterfitt_NEODAO_community_projects_fleek_deployment_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        // Set User account into state\n                                        setUser(addr[0]);\n                                        _ctx.t0 = // Set User balance into state\n                                        setBalance;\n                                        _ctx.next = 4;\n                                        return web3.eth.getBalance(addr[0]);\n                                    case 4:\n                                        _ctx.t1 = _ctx.sent;\n                                        (0, _ctx.t0)(_ctx.t1);\n                                    case 6:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        })));\n                    case 4:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        checkConnection();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    __source: {\n                        fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"link\", {\n                        rel: \"preload\",\n                        href: \"/fonts/orange_kid.ttf\",\n                        as: \"font\",\n                        crossOrigin: \"\",\n                        __source: {\n                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        },\n                        __self: this\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                        className: 'matrix',\n                        __source: {\n                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                                __source: {\n                                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"Welcome to Scion.\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                                __source: {\n                                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"You know what you must do.\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                                className: 'row',\n                                __source: {\n                                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                                        className: 'button',\n                                        onClick: redPill,\n                                        __source: {\n                                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \" Red pill \"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"br\", {\n                                        __source: {\n                                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 13\n                                        },\n                                        __self: this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                                        className: \"button\",\n                                        onClick: function() {\n                                            return setSelection(false);\n                                        },\n                                        __source: {\n                                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \" Blue pill \"\n                                    })\n                                ]\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_matrix_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        selection: true,\n                        __source: {\n                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                            lineNumber: 75,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Index, \"Z0AOvH/6tp9eIu6wBVQemt0Rg8Y=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0E7QUFDc0I7QUFDM0I7QUFDdUI7QUFDUjtBQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLFFBQVEsQ0FBQ1MsS0FBSyxHQUFHLENBQUM7O0lBQy9CLEdBQUssQ0FBNkJOLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXpDTyxTQUFTLEdBQWtCUCxHQUFlLEtBQS9CUSxZQUFZLEdBQUlSLEdBQWU7SUFDakQsR0FBSyxDQUFtQkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBL0JTLElBQUksR0FBYVQsSUFBZSxLQUExQlUsT0FBTyxHQUFJVixJQUFlO0lBQ3ZDLEdBQUssQ0FBeUJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJDVyxRQUFPLEdBQWdCWCxJQUFlLEtBQTdCWSxVQUFVLEdBQUlaLElBQWU7SUFDN0MsR0FBSyxDQUFDYSxPQUFPLEdBQUcsUUFDbEIsR0FEd0IsQ0FBQztRQUNyQlQsMERBQU8sQ0FBQyxJQUFJLEVBQ1RVLElBQUksQ0FBQyxRQUFRLENBQVBDLE1BQU0sRUFBSyxDQUFDO1lBQ2pCViw2REFBVSxDQUFDVSxNQUFNLEVBQUMsQ0FBNEMsNkNBQzdERCxJQUFJLENBQUNILFFBQVEsQ0FBUkEsT0FBTyxFQUFHLENBQUM7Z0JBQ2ZDLFVBQVUsQ0FBQ0QsT0FBTztZQUNwQixDQUFDO1FBQ0gsQ0FBQztJQUNMLENBQUM7SUFFRFYsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixHQUFLLENBQUNlLGVBQWUsNktBQUcsUUFBUSxZQUFJLENBQUM7Z0JBRy9CQyxJQUFJOzs7Ozt3QkFDUixFQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFLENBQUM7NEJBQ2xCRixJQUFJLEdBQUcsR0FBRyxDQUFDZiw2Q0FBSSxDQUFDZ0IsTUFBTSxDQUFDQyxRQUFRO3dCQUNuQyxDQUFDLE1BQU0sRUFBRSxFQUFFRCxNQUFNLENBQUNELElBQUksRUFBRSxDQUFDOzRCQUNyQkEsSUFBSSxHQUFHLEdBQUcsQ0FBQ2YsNkNBQUksQ0FBQ2dCLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRyxlQUFlO3dCQUMvQyxDQUFDOzt3QkFFRCxFQUFnRTt3QkFDaEVILElBQUksQ0FBQ0ksR0FBRyxDQUFDQyxXQUFXLEdBQ2ZSLElBQUksMktBQUMsUUFBUSxTQUFEUyxJQUFJLEVBQUssQ0FBQzs7Ozt3Q0FDbkIsRUFBOEI7d0NBQzlCYixPQUFPLENBQUNhLElBQUksQ0FBQyxDQUFDO2tEQUNkLEVBQThCO3dDQUM5QlgsVUFBVTs7K0NBQU9LLElBQUksQ0FBQ0ksR0FBRyxDQUFDaEIsVUFBVSxDQUFDa0IsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7Ozt3QkFFL0MsQ0FBQzs7Ozs7O1FBQ1QsQ0FBQztRQUNEUCxlQUFlO0lBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU07O2lGQUdEUSxDQUFHOzs7Ozs7OytGQUNEM0Isa0RBQUk7Ozs7Ozs7bUdBQ0Y0QixDQUFJO3dCQUNIQyxHQUFHLEVBQUMsQ0FBUzt3QkFDYkMsSUFBSSxFQUFDLENBQXVCO3dCQUM1QkMsRUFBRSxFQUFDLENBQU07d0JBQ1RDLFdBQVcsRUFBQyxDQUFFOzs7Ozs7Ozs7Ozs7MEZBS2pCTCxDQUFHO3dCQUNGTSxTQUFTLEVBQUUsQ0FBUTs7Ozs7Ozs7aUdBQ2xCQyxDQUFFOzs7Ozs7OzBDQUFDLENBQWlCOztpR0FDcEJDLENBQUM7Ozs7Ozs7MENBQUMsQ0FBMEI7O2tHQUM1QlIsQ0FBRztnQ0FBQ00sU0FBUyxFQUFFLENBQUs7Ozs7Ozs7O3lHQUNsQk4sQ0FBRzt3Q0FDRk0sU0FBUyxFQUFFLENBQVE7d0NBQ25CRyxPQUFPLEVBQUVwQixPQUFPOzs7Ozs7O2tEQUNqQixDQUFVOzt5R0FDVnFCLENBQUU7Ozs7Ozs7O3lHQUVGVixDQUFHO3dDQUFDTSxTQUFTLEVBQUMsQ0FBUTt3Q0FBQ0csT0FBTyxFQUFFLFFBQVE7NENBQUZ6QixNQUFNLENBQU5BLFlBQVksQ0FBQyxLQUFLOzs7Ozs7OztrREFBRyxDQUFXOzs7Ozs7eUZBRzFFTCw2REFBUTt3QkFBQ0ksU0FBUyxFQUFFLElBQUk7Ozs7Ozs7Ozs7OztBQUlqQyxDQUFDO0dBdEV1QkQsS0FBSztLQUFMQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IE1hdHJpeEJHIGZyb20gXCIuLi9jb21wb25lbnRzL21hdHJpeC5qc1wiO1xuaW1wb3J0IGdldFdlYjMgZnJvbSAnLi4vdXRpbHMvZ2V0V2ViMyc7XG5pbXBvcnQgZ2V0QmFsYW5jZSBmcm9tICcuLi91dGlscy9nZXRCYWxhbmNlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IFtzZWxlY3Rpb24sIHNldFNlbGVjdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByZWRQaWxsID0gKCkgPT4ge1xuICAgIGdldFdlYjModHJ1ZSlcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgZ2V0QmFsYW5jZShyZXN1bHQsJzB4OWE3N2VFMURBQ0NjMTM2NzRCMDQ3Rjk2N0Y4NjNCNUM4QTlmNjgwNycpXG4gICAgICAgIC50aGVuKGJhbGFuY2UgPT57XG4gICAgICAgICAgc2V0QmFsYW5jZShiYWxhbmNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrQ29ubmVjdGlvbiA9IGFzeW5jICgpID0+IHtcblxuICAgICAgLy8gQ2hlY2sgaWYgYnJvd3NlciBpcyBydW5uaW5nIE1ldGFtYXNrXG4gICAgICBsZXQgd2ViMztcbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgICB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LndlYjMpIHtcbiAgICAgICAgICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIENoZWNrIGlmIFVzZXIgaXMgYWxyZWFkeSBjb25uZWN0ZWQgYnkgcmV0cmlldmluZyB0aGUgYWNjb3VudHNcbiAgICAgIHdlYjMuZXRoLmdldEFjY291bnRzKClcbiAgICAgICAgICAudGhlbihhc3luYyAoYWRkcikgPT4ge1xuICAgICAgICAgICAgICAvLyBTZXQgVXNlciBhY2NvdW50IGludG8gc3RhdGVcbiAgICAgICAgICAgICAgc2V0VXNlcihhZGRyWzBdKTtcbiAgICAgICAgICAgICAgLy8gU2V0IFVzZXIgYmFsYW5jZSBpbnRvIHN0YXRlXG4gICAgICAgICAgICAgIHNldEJhbGFuY2UoYXdhaXQgd2ViMy5ldGguZ2V0QmFsYW5jZShhZGRyWzBdKSk7XG5cbiAgICAgICAgICB9KTtcbiAgfTtcbiAgY2hlY2tDb25uZWN0aW9uKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGhyZWY9XCIvZm9udHMvb3JhbmdlX2tpZC50dGZcIlxuICAgICAgICAgICAgYXM9XCJmb250XCJcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDw+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9eydtYXRyaXgnfT5cbiAgICAgICAgICA8aDE+V2VsY29tZSB0byBTY2lvbi48L2gxPlxuICAgICAgICAgIDxwPllvdSBrbm93IHdoYXQgeW91IG11c3QgZG8uPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncm93J30+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17J2J1dHRvbid9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3JlZFBpbGx9XG4gICAgICAgICAgICA+IFJlZCBwaWxsIDwvZGl2PlxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGlvbihmYWxzZSl9PiBCbHVlIHBpbGwgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TWF0cml4Qkcgc2VsZWN0aW9uPXt0cnVlfSAvPlxuICAgICAgPC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiV2ViMyIsIk1hdHJpeEJHIiwiZ2V0V2ViMyIsImdldEJhbGFuY2UiLCJJbmRleCIsInNlbGVjdGlvbiIsInNldFNlbGVjdGlvbiIsInVzZXIiLCJzZXRVc2VyIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJyZWRQaWxsIiwidGhlbiIsInJlc3VsdCIsImNoZWNrQ29ubmVjdGlvbiIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImN1cnJlbnRQcm92aWRlciIsImV0aCIsImdldEFjY291bnRzIiwiYWRkciIsImRpdiIsImxpbmsiLCJyZWwiLCJocmVmIiwiYXMiLCJjcm9zc09yaWdpbiIsImNsYXNzTmFtZSIsImgxIiwicCIsIm9uQ2xpY2siLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});