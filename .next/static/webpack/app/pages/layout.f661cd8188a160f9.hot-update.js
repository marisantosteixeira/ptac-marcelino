"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/layout",{

/***/ "(app-pages-browser)/./src/app/pages/layout.js":
/*!*********************************!*\
  !*** ./src/app/pages/layout.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Layout(param) {\n    let { children } = param;\n    _s();\n    const { push } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const logout = (e)=>{\n        e.preventDefault();\n        js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove(\"token\");\n        push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"navicon\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\laboratorio\\\\Desktop\\\\ptac-marcelino\\\\src\\\\app\\\\pages\\\\layout.js\",\n                            lineNumber: 19,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\laboratorio\\\\Desktop\\\\ptac-marcelino\\\\src\\\\app\\\\pages\\\\layout.js\",\n                        lineNumber: 18,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"page\",\n                            id: \"rota\",\n                            children: \"HOME\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\laboratorio\\\\Desktop\\\\ptac-marcelino\\\\src\\\\app\\\\pages\\\\layout.js\",\n                            lineNumber: 22,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\laboratorio\\\\Desktop\\\\ptac-marcelino\\\\src\\\\app\\\\pages\\\\layout.js\",\n                        lineNumber: 22,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/pages/registrar\",\n                            id: \"rota\",\n                            children: \"REGISTRAR\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\laboratorio\\\\Desktop\\\\ptac-marcelino\\\\src\\\\app\\\\pages\\\\layout.js\",\n                            lineNumber: 23,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\laboratorio\\\\Desktop\\\\ptac-marcelino\\\\src\\\\app\\\\pages\\\\layout.js\",\n                        lineNumber: 23,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/pages/alterar\",\n                            id: \"rota\",\n                            children: \"ALTERAR\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\laboratorio\\\\Desktop\\\\ptac-marcelino\\\\src\\\\app\\\\pages\\\\layout.js\",\n                            lineNumber: 24,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\laboratorio\\\\Desktop\\\\ptac-marcelino\\\\src\\\\app\\\\pages\\\\layout.js\",\n                        lineNumber: 24,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\laboratorio\\\\Desktop\\\\ptac-marcelino\\\\src\\\\app\\\\pages\\\\layout.js\",\n                lineNumber: 17,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\laboratorio\\\\Desktop\\\\ptac-marcelino\\\\src\\\\app\\\\pages\\\\layout.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\laboratorio\\\\Desktop\\\\ptac-marcelino\\\\src\\\\app\\\\pages\\\\layout.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(Layout, \"XcbUrA/aL/MBnMFoyOqNl+FGIz4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvbGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNnQztBQUNIO0FBQ2M7QUFHNUIsU0FBU0csT0FBTyxLQUFVO1FBQVYsRUFBQ0MsUUFBUSxFQUFDLEdBQVY7O0lBQzNCLE1BQU0sRUFBQ0MsSUFBSSxFQUFDLEdBQUdILDBEQUFTQTtJQUV4QixNQUFNSSxTQUFTLENBQUNDO1FBQ1pBLEVBQUVDLGNBQWM7UUFDaEJSLGlEQUFPQSxDQUFDUyxNQUFNLENBQUM7UUFDZkosS0FBSztJQUNUO0lBQ0EscUJBQ0ksOERBQUNLOzswQkFDTiw4REFBQ0M7O2tDQUNGLDhEQUFDQzt3QkFBSUMsT0FBTTtrQ0FDVCw0RUFBQ0Q7Ozs7Ozs7Ozs7a0NBR0gsOERBQUNFO2tDQUFHLDRFQUFDYixrREFBSUE7NEJBQUNjLE1BQUs7NEJBQU9DLElBQUc7c0NBQU87Ozs7Ozs7Ozs7O2tDQUNsQyw4REFBQ0Y7a0NBQUcsNEVBQUNiLGtEQUFJQTs0QkFBQ2MsTUFBSzs0QkFBbUJDLElBQUc7c0NBQU87Ozs7Ozs7Ozs7O2tDQUM1Qyw4REFBQ0Y7a0NBQUcsNEVBQUNiLGtEQUFJQTs0QkFBQ2MsTUFBSzs0QkFBaUJDLElBQUc7c0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUk5Qiw4REFBQ0o7MEJBQUtSOzs7Ozs7Ozs7Ozs7QUFHbEI7R0F4QndCRDs7UUFDTEQsc0RBQVNBOzs7S0FESkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlcy9sYXlvdXQuanM/ZDc3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7Y2hpbGRyZW59KXtcclxuICAgIGNvbnN0IHtwdXNofSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGxvZ291dCA9IChlKSA9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgQ29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XHJcbiAgICAgICAgcHVzaCgnLycpXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGJvZHk+XHJcbiAgIDxuYXY+XHJcbiAgPGRpdiBjbGFzcz1cIm5hdmljb25cIj5cclxuICAgIDxkaXY+PC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxsaT48TGluayBocmVmPVwicGFnZVwiIGlkPVwicm90YVwiPkhPTUU8L0xpbms+PC9saT5cclxuPGxpPjxMaW5rIGhyZWY9XCIvcGFnZXMvcmVnaXN0cmFyXCIgaWQ9XCJyb3RhXCI+UkVHSVNUUkFSPC9MaW5rPjwvbGk+XHJcbjxsaT48TGluayBocmVmPVwiL3BhZ2VzL2FsdGVyYXJcIiBpZD1cInJvdGFcIj5BTFRFUkFSPC9MaW5rPjwvbGk+XHJcblxyXG48L25hdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgIClcclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJDb29raWVzIiwiTGluayIsInVzZVJvdXRlciIsIkxheW91dCIsImNoaWxkcmVuIiwicHVzaCIsImxvZ291dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZSIsImJvZHkiLCJuYXYiLCJkaXYiLCJjbGFzcyIsImxpIiwiaHJlZiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/layout.js\n"));

/***/ })

});