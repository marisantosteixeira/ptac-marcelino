"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.js":
/*!***************************!*\
  !*** ./src/middleware.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var _app_functions_validateToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/functions/validateToken */ \"(middleware)/./src/app/functions/validateToken.js\");\n\"use server\";\n\n\nconst middleware = (request)=>{\n    const token = request.cookies.get(\"token\")?.value;\n    const urlLogin = new URL(\"/\", request.url);\n    const Users = new URL(\"/pages/dashboard\", request.url);\n    const isTokenValidated = (0,_app_functions_validateToken__WEBPACK_IMPORTED_MODULE_1__.validateToken)(token);\n    if (!isTokenValidated || !token) {\n        if (request.nextUrl.pathname === \"./pages/dashboard\" || request.nextUrl.pathname === \"/pages/alterar\" || request.nextUrl.pathname === \"/pages/registrar\") {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(urlLogin);\n        }\n    }\n    if (isTokenValidated) {\n        if (request.nextUrl.pathname === \"/\") {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(Users);\n        }\n    }\n    next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n};\nconst config = {\n    matcher: [\n        \"/\",\n        \"/pages/dashboard\",\n        \"/pages/alterar\",\n        \"/pages/registrar\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQzJDO0FBQ21CO0FBRXZELE1BQU1FLGFBQWEsQ0FBQ0M7SUFFdkIsTUFBTUMsUUFBUUQsUUFBUUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVUM7SUFDNUMsTUFBTUMsV0FBVyxJQUFJQyxJQUFJLEtBQUtOLFFBQVFPLEdBQUc7SUFDekMsTUFBTUMsUUFBUSxJQUFJRixJQUFJLG9CQUFxQk4sUUFBUU8sR0FBRztJQUN0RCxNQUFNRSxtQkFBbUJYLDJFQUFhQSxDQUFDRztJQUV2QyxJQUFJLENBQUNRLG9CQUFvQixDQUFDUixPQUFPO1FBQzdCLElBQUlELFFBQVFVLE9BQU8sQ0FBQ0MsUUFBUSxLQUFLLHVCQUNqQ1gsUUFBUVUsT0FBTyxDQUFDQyxRQUFRLEtBQUssb0JBQzVCWCxRQUFRVSxPQUFPLENBQUNDLFFBQVEsS0FBSyxvQkFDNUI7WUFDRSxPQUFPZCxrRkFBWUEsQ0FBQ2UsUUFBUSxDQUFDUDtRQUNqQztJQUNKO0lBQ0EsSUFBSUksa0JBQWtCO1FBQ2xCLElBQUlULFFBQVFVLE9BQU8sQ0FBQ0MsUUFBUSxLQUFLLEtBQUs7WUFDbEMsT0FBT2Qsa0ZBQVlBLENBQUNlLFFBQVEsQ0FBQ0o7UUFDakM7SUFDSjtJQUNBWCxrRkFBWUEsQ0FBQ2dCLElBQUk7QUFDckIsRUFBRTtBQUNLLE1BQU1DLFNBQVM7SUFDbEJDLFNBQVM7UUFBQztRQUFLO1FBQW9CO1FBQWtCO0tBQXFCO0FBQzlFLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUuanM/YTQ5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IHZhbGlkYXRlVG9rZW4gfSBmcm9tIFwiLi9hcHAvZnVuY3Rpb25zL3ZhbGlkYXRlVG9rZW5cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtaWRkbGV3YXJlID0gKHJlcXVlc3QpID0+IHtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoJ3Rva2VuJyk/LnZhbHVlO1xyXG4gICAgY29uc3QgdXJsTG9naW4gPSBuZXcgVVJMKCcvJywgcmVxdWVzdC51cmwpO1xyXG4gICAgY29uc3QgVXNlcnMgPSBuZXcgVVJMKCcvcGFnZXMvZGFzaGJvYXJkJyAsIHJlcXVlc3QudXJsKTtcclxuICAgIGNvbnN0IGlzVG9rZW5WYWxpZGF0ZWQgPSB2YWxpZGF0ZVRva2VuKHRva2VuKTtcclxuXHJcbiAgICBpZiAoIWlzVG9rZW5WYWxpZGF0ZWQgfHwgIXRva2VuKSB7XHJcbiAgICAgICAgaWYgKHJlcXVlc3QubmV4dFVybC5wYXRobmFtZSA9PT0gJy4vcGFnZXMvZGFzaGJvYXJkJ3x8IFxyXG4gICAgICAgIHJlcXVlc3QubmV4dFVybC5wYXRobmFtZSA9PT0gJy9wYWdlcy9hbHRlcmFyJyB8fFxyXG4gICAgICAgICByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUgPT09ICcvcGFnZXMvcmVnaXN0cmFyJ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KHVybExvZ2luKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaXNUb2tlblZhbGlkYXRlZCkge1xyXG4gICAgICAgIGlmIChyZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUgPT09ICcvJykge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KFVzZXJzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBOZXh0UmVzcG9uc2UubmV4dCgpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gICAgbWF0Y2hlcjogWycvJywgJy9wYWdlcy9kYXNoYm9hcmQnLCAnL3BhZ2VzL2FsdGVyYXInLCAnL3BhZ2VzL3JlZ2lzdHJhcicsIF1cclxufTtcclxuXHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJ2YWxpZGF0ZVRva2VuIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsInVybExvZ2luIiwiVVJMIiwidXJsIiwiVXNlcnMiLCJpc1Rva2VuVmFsaWRhdGVkIiwibmV4dFVybCIsInBhdGhuYW1lIiwicmVkaXJlY3QiLCJuZXh0IiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.js\n");

/***/ })

});