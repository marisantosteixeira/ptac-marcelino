"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/functions/handlerAcess.js":
/*!*******************************************!*\
  !*** ./src/app/functions/handlerAcess.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _validateToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateToken */ \"(app-pages-browser)/./src/app/functions/validateToken.js\");\n/* harmony import */ var _handlerAcessAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlerAcessAPI */ \"(app-pages-browser)/./src/app/functions/handlerAcessAPI.js\");\n\n\n\nconst handlerAcessUser = async (user)=>{\n    const userAuth = await (0,_handlerAcessAPI__WEBPACK_IMPORTED_MODULE_2__.getUserAuthenticated)(user);\n    const isTokenValidate = (0,_validateToken__WEBPACK_IMPORTED_MODULE_1__.validateToken)(userAuth.token);\n    if (isTokenValidate) {\n        js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"token\", userAuth.token, {\n            expires: 1\n        });\n        if (true) {\n            localStorage.setItem(\"nome\", userAuth.nome) //aparecer no localStorage\n            ;\n        }\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (handlerAcessUser);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZnVuY3Rpb25zL2hhbmRsZXJBY2Vzcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWdDO0FBQ2dCO0FBQ1M7QUFFekQsTUFBTUcsbUJBQW1CLE9BQU9DO0lBRTVCLE1BQU1DLFdBQVcsTUFBTUgsc0VBQW9CQSxDQUFDRTtJQUU1QyxNQUFNRSxrQkFBa0JMLDZEQUFhQSxDQUFDSSxTQUFTRSxLQUFLO0lBRXBELElBQUlELGlCQUFpQjtRQUNqQk4saURBQU9BLENBQUNRLEdBQUcsQ0FBQyxTQUFTSCxTQUFTRSxLQUFLLEVBQUU7WUFBRUUsU0FBUztRQUFFO1FBQ2xELElBQUksSUFBa0IsRUFBWTtZQUM5QkMsYUFBYUMsT0FBTyxDQUFDLFFBQVFOLFNBQVNPLElBQUksRUFBRSwwQkFBMEI7O1FBQzFFO0lBQ0o7QUFFSjtBQUNBLCtEQUFlVCxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9mdW5jdGlvbnMvaGFuZGxlckFjZXNzLmpzPzdkZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZVRva2VuIH0gZnJvbSBcIi4vdmFsaWRhdGVUb2tlblwiO1xyXG5pbXBvcnQgeyBnZXRVc2VyQXV0aGVudGljYXRlZCB9IGZyb20gXCIuL2hhbmRsZXJBY2Vzc0FQSVwiO1xyXG5cclxuY29uc3QgaGFuZGxlckFjZXNzVXNlciA9IGFzeW5jICh1c2VyKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdXNlckF1dGggPSBhd2FpdCBnZXRVc2VyQXV0aGVudGljYXRlZCh1c2VyKTtcclxuICAgIFxyXG4gICAgY29uc3QgaXNUb2tlblZhbGlkYXRlID0gdmFsaWRhdGVUb2tlbih1c2VyQXV0aC50b2tlbik7XHJcblxyXG4gICAgaWYgKGlzVG9rZW5WYWxpZGF0ZSkge1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCd0b2tlbicsIHVzZXJBdXRoLnRva2VuLCB7IGV4cGlyZXM6IDEgfSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25vbWUnLCB1c2VyQXV0aC5ub21lKSAvL2FwYXJlY2VyIG5vIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlckFjZXNzVXNlcjtcclxuXHJcbiJdLCJuYW1lcyI6WyJDb29raWVzIiwidmFsaWRhdGVUb2tlbiIsImdldFVzZXJBdXRoZW50aWNhdGVkIiwiaGFuZGxlckFjZXNzVXNlciIsInVzZXIiLCJ1c2VyQXV0aCIsImlzVG9rZW5WYWxpZGF0ZSIsInRva2VuIiwic2V0IiwiZXhwaXJlcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJub21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/functions/handlerAcess.js\n"));

/***/ })

});