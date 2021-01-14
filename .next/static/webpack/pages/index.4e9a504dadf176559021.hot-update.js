webpackHotUpdate_N_E("pages/index",{

/***/ "./components/urlInputForm.js":
/*!************************************!*\
  !*** ./components/urlInputForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\nvar _jsxFileName = \"/Users/charist/dev/sneaky-images/components/urlInputForm.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst UrlInputForm = () => {\n  _s();\n\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: url,\n    1: setUrl\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n\n  const onSubmit = event => {\n    setLoading(true);\n    console.log(\"UrlInputForm -> event\", event);\n    setLoading(false);\n  };\n\n  const onUrlInputChange = event => {\n    setUrl(event.target.value);\n  };\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(FormControl, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"InputLabel\"], {\n    htmlFor: \"url-input\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, \"URL\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    id: \"url-input\",\n    autoComplete: \"url\",\n    color: \"primary\",\n    autoFocus: true,\n    disabled: loading,\n    name: \"url\",\n    required: true,\n    type: \"url\",\n    onChange: onUrlInputChange,\n    \"aria-describedby\": \"url-input-caption\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"FormHelperText\"], {\n    id: \"url-input-caption\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }, \"Will preppend \", __jsx(\"code\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 35\n    }\n  }, \"https://\"), \" automatically\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"submit\",\n    color: \"primary\",\n    disabled: loading,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"SUBMIT\"));\n};\n\n_s(UrlInputForm, \"1Gx5xvnv3t+2R8fSsXfBIMCMjHY=\");\n\n_c = UrlInputForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UrlInputForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"UrlInputForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91cmxJbnB1dEZvcm0uanM/ZmM1YyJdLCJuYW1lcyI6WyJVcmxJbnB1dEZvcm0iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwidXJsIiwic2V0VXJsIiwib25TdWJtaXQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJvblVybElucHV0Q2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsTUFBTTtBQUFBOztBQUN2QixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDQyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQkYsc0RBQVEsQ0FBQyxJQUFELENBQTlCOztBQUVBLFFBQU1HLFFBQVEsR0FBR0MsS0FBSyxJQUFJO0FBQ3RCTCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBQXFDRixLQUFyQztBQUVBTCxjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0gsR0FMRDs7QUFPQSxRQUFNUSxnQkFBZ0IsR0FBR0gsS0FBSyxJQUFJO0FBQzlCRixVQUFNLENBQUNFLEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxLQUFkLENBQU47QUFDSCxHQUZEOztBQUlBLFNBQ0ksTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLFdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESixFQUVJLE1BQUMsdURBQUQ7QUFDSSxNQUFFLEVBQUMsV0FEUDtBQUVJLGdCQUFZLEVBQUMsS0FGakI7QUFHSSxTQUFLLEVBQUMsU0FIVjtBQUlJLGFBQVMsRUFBRSxJQUpmO0FBS0ksWUFBUSxFQUFFWCxPQUxkO0FBTUksUUFBSSxFQUFDLEtBTlQ7QUFPSSxZQUFRLE1BUFo7QUFRSSxRQUFJLEVBQUMsS0FSVDtBQVNJLFlBQVEsRUFBRVMsZ0JBVGQ7QUFVSSx3QkFBaUIsbUJBVnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQWNJLE1BQUMsZ0VBQUQ7QUFBZ0IsTUFBRSxFQUFDLG1CQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURsQixtQkFkSixDQURKLEVBbUJJLE1BQUMsd0RBQUQ7QUFDSSxRQUFJLEVBQUMsUUFEVDtBQUVJLFNBQUssRUFBQyxTQUZWO0FBR0ksWUFBUSxFQUFFVCxPQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQkosQ0FESjtBQTJCSCxDQTFDRDs7R0FBTUQsWTs7S0FBQUEsWTtBQTRDU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3VybElucHV0Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSW5wdXQsIEZvcm1Hcm91cCwgQnV0dG9uLCBGb3JtSGVscGVyVGV4dCwgSW5wdXRMYWJlbCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuY29uc3QgVXJsSW5wdXRGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShudWxsKVxuICAgIFxuICAgIGNvbnN0IG9uU3VibWl0ID0gZXZlbnQgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXJsSW5wdXRGb3JtIC0+IGV2ZW50XCIsIGV2ZW50KVxuICAgICAgICBcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9XG5cbiAgICBjb25zdCBvblVybElucHV0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICBzZXRVcmwoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInVybC1pbnB1dFwiPlVSTDwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXJsLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwidXJsXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidXJsXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVXJsSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ1cmwtaW5wdXQtY2FwdGlvblwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQgaWQ9XCJ1cmwtaW5wdXQtY2FwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICBXaWxsIHByZXBwZW5kIDxjb2RlPmh0dHBzOi8vPC9jb2RlPiBhdXRvbWF0aWNhbGx5XG4gICAgICAgICAgICAgICAgPC9Gb3JtSGVscGVyVGV4dD5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgPlNVQk1JVDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVybElucHV0Rm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/urlInputForm.js\n");

/***/ })

})