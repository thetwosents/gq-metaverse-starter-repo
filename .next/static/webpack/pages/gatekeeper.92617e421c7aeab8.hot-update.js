"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/gatekeeper",{

/***/ "./pages/gatekeeper.js":
/*!*****************************!*\
  !*** ./pages/gatekeeper.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GateKeeper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction GateKeeper() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), address = ref[0], setAddress = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), ready = ref1[0], setReady = ref1[1];\n    var submitAddress = function() {\n        console.log(address);\n        setReady(true);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/gatekeeper.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/gatekeeper.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: \" GateKeeper \"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"text\",\n                onChange: function(e) {\n                    return setAddress(e.target.value);\n                },\n                placeholder: \"Enter HYPE address\",\n                __source: {\n                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/gatekeeper.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: function() {\n                    return submitAddress();\n                },\n                __source: {\n                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/gatekeeper.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: \"Red Pill\"\n            })\n        ]\n    }));\n};\n_s(GateKeeper, \"HnGarLJhUC1Ra6niu0LfaSDT4EA=\");\n_c = GateKeeper;\nvar _c;\n$RefreshReg$(_c, \"GateKeeper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYXRla2VlcGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0Q7O0FBRW5DLFFBQVEsQ0FBQ0csVUFBVSxHQUFHLENBQUM7O0lBQ3BDLEdBQUssQ0FBeUJGLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJDRyxPQUFPLEdBQWdCSCxHQUFlLEtBQTdCSSxVQUFVLEdBQUlKLEdBQWU7SUFDN0MsR0FBSyxDQUFxQkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBakNLLEtBQUssR0FBY0wsSUFBZSxLQUEzQk0sUUFBUSxHQUFJTixJQUFlO0lBQ3pDLEdBQUssQ0FBQ08sYUFBYSxHQUFHLFFBQ3hCLEdBRDhCLENBQUM7UUFDM0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixPQUFPO1FBQ25CRyxRQUFRLENBQUMsSUFBSTtJQUNmLENBQUM7SUFDQyxNQUFNLHVFQUNISSxDQUFHOzs7Ozs7OztpRkFDREMsQ0FBRTs7Ozs7OzswQkFBQyxDQUFZOztpRkFDZkMsQ0FBSztnQkFBQ0MsSUFBSSxFQUFDLENBQU07Z0JBQUNDLFFBQVEsRUFBRSxRQUFRLENBQVBDLENBQUM7b0JBQUtYLE1BQU0sQ0FBTkEsVUFBVSxDQUFDVyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSzs7Z0JBQUdDLFdBQVcsRUFBQyxDQUFvQjs7Ozs7Ozs7aUZBQy9GQyxDQUFNO2dCQUFDQyxPQUFPLEVBQUUsUUFBUTtvQkFBRmIsTUFBTSxDQUFOQSxhQUFhOzs7Ozs7OzswQkFBSSxDQUFROzs7O0FBR3RELENBQUM7R0FkcUJMLFVBQVU7S0FBVkEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYXRla2VlcGVyLmpzP2IwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2F0ZUtlZXBlcigpIHtcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3VibWl0QWRkcmVzcyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhhZGRyZXNzKVxuICAgIHNldFJlYWR5KHRydWUpO1xuICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+IEdhdGVLZWVwZXIgPC9oMT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJFbnRlciBIWVBFIGFkZHJlc3NcIiAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHN1Ym1pdEFkZHJlc3MoKX0+UmVkIFBpbGw8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJHYXRlS2VlcGVyIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJyZWFkeSIsInNldFJlYWR5Iiwic3VibWl0QWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/gatekeeper.js\n");

/***/ })

});