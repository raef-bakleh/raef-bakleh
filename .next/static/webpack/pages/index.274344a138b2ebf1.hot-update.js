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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AboutMe/AboutMe */ \"./components/AboutMe/AboutMe.js\");\n/* harmony import */ var _components_Contact_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Contact/Contact */ \"./components/Contact/Contact.js\");\n/* harmony import */ var _components_EduSk_EduSk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/EduSk/EduSk */ \"./components/EduSk/EduSk.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _img_IMG_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/IMG.jpeg */ \"./pages/img/IMG.jpeg\");\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _components_Sidebar_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Sidebar/Nav */ \"./components/Sidebar/Nav.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! typewriter-effect */ \"./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const AnimatedCursor = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-animated-cursor_dist_index_umd_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-animated-cursor */ \"./node_modules/react-animated-cursor/dist/index.umd.js\", 23)), {\n        loadableGenerated: {\n            modules: [\n                \"index.js -> \" + \"react-animated-cursor\"\n            ]\n        },\n        ssr: true\n    });\n    const hideShowNav = ()=>{\n        setNav(!nav);\n    };\n    const names = [\n        \"Raef Bakleh\",\n        \"Computer Science Student\",\n        \"Learning Web Development\"\n    ];\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function onFirstMount() {\n        const changeValue = ()=>{\n            const scrollValue = document.documentElement.scrollTop;\n            if (scrollValue > 100) {\n                setState(true);\n            } else {\n                setState(false);\n            }\n        };\n        window.addEventListener(\"scroll\", changeValue);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedCursor, {\n                color: \"75, 73, 73\",\n                innerSize: 8,\n                outerSize: 25,\n                innerScale: 0,\n                outerScale: 1,\n                outerAlpha: 0,\n                trailingSpeed: 5,\n                outerStyle: {\n                    border: \"2px solid rgb(75, 73, 73)\",\n                    zIndex: \"10001\"\n                },\n                innerStyle: {\n                    zIndex: \"1001\"\n                },\n                clickables: [\n                    a\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().hamburger),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(hamburger_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                        toggled: nav,\n                        toggle: hideShowNav\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    nav && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        setNav: setNav\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: state ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().leftScroll) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().leftContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"about\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"edusk\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EduSk_EduSk__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"contact\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact_Contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: state ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().rightScoll) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().rightContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().imgWrapper),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: state ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().longBoxScroll) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().longBox),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: state ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().wideBoxScroll) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().wideBox),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _img_IMG_jpeg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().image)\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"HI THERE I AM\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().changedTitle),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                        options: {\n                                            autoStart: true,\n                                            loop: true\n                                        },\n                                        onInit: (typewriter)=>{\n                                            typewriter.typeString(names[0]).pauseFor(3000).deleteAll().typeString(names[1]).pauseFor(3000).deleteAll().typeString(names[2]).pauseFor(3000).start();\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"JCKj6WqU7bkABSdovm/Zfwk0gBk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsQ0FBQ2xELEtBQUssQ0FBQyxFQUFFLEVBQ25CbUQsUUFBUSxDQUFDLE1BQ1RFLEtBQUs7d0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2xCLENBQUM7R0FoR3VCM0Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWJvdXRNZSBmcm9tIFwiLi4vY29tcG9uZW50cy9BYm91dE1lL0Fib3V0TWVcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhY3QvQ29udGFjdFwiO1xuaW1wb3J0IEVkdVNrIGZyb20gXCIuLi9jb21wb25lbnRzL0VkdVNrL0VkdVNrXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHByb2ZpbGVJbWFnZSBmcm9tIFwiLi9pbWcvSU1HLmpwZWdcIjtcbmltcG9ydCBIYW1idXJnZXIgZnJvbSBcImhhbWJ1cmdlci1yZWFjdFwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyL05hdlwiO1xuaW1wb3J0IFR5cGV3cml0ZXIgZnJvbSBcInR5cGV3cml0ZXItZWZmZWN0XCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtuYXYsIHNldE5hdl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IEFuaW1hdGVkQ3Vyc29yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1hbmltYXRlZC1jdXJzb3JcIiksIHtcbiAgICBzc3I6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnN0IGhpZGVTaG93TmF2ID0gKCkgPT4ge1xuICAgIHNldE5hdighbmF2KTtcbiAgfTtcbiAgY29uc3QgbmFtZXMgPSBbXG4gICAgXCJSYWVmIEJha2xlaFwiLFxuICAgIFwiQ29tcHV0ZXIgU2NpZW5jZSBTdHVkZW50XCIsXG4gICAgXCJMZWFybmluZyBXZWIgRGV2ZWxvcG1lbnRcIixcbiAgXTtcblxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gb25GaXJzdE1vdW50KCkge1xuICAgIGNvbnN0IGNoYW5nZVZhbHVlID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsVmFsdWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgaWYgKHNjcm9sbFZhbHVlID4gMTAwKSB7XG4gICAgICAgIHNldFN0YXRlKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U3RhdGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hhbmdlVmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cbiAgICAgIDxBbmltYXRlZEN1cnNvclxuICAgICAgICBjb2xvcj1cIjc1LCA3MywgNzNcIlxuICAgICAgICBpbm5lclNpemU9ezh9XG4gICAgICAgIG91dGVyU2l6ZT17MjV9XG4gICAgICAgIGlubmVyU2NhbGU9ezB9XG4gICAgICAgIG91dGVyU2NhbGU9ezF9XG4gICAgICAgIG91dGVyQWxwaGE9ezB9XG4gICAgICAgIHRyYWlsaW5nU3BlZWQ9ezV9XG4gICAgICAgIG91dGVyU3R5bGU9e3tcbiAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIHJnYig3NSwgNzMsIDczKVwiLFxuICAgICAgICAgIHpJbmRleDogXCIxMDAwMVwiLFxuICAgICAgICB9fVxuICAgICAgICBpbm5lclN0eWxlPXt7XG4gICAgICAgICAgekluZGV4OiBcIjEwMDFcIixcbiAgICAgICAgfX1cbiAgICAgICAgY2xpY2thYmxlcz17W2FdfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhhbWJ1cmdlcn0+XG4gICAgICAgIDxIYW1idXJnZXIgdG9nZ2xlZD17bmF2fSB0b2dnbGU9e2hpZGVTaG93TmF2fSAvPlxuICAgICAgICB7bmF2ICYmIDxOYXYgc2V0TmF2PXtzZXROYXZ9IC8+fVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdGF0ZSA/IGNsYXNzZXMubGVmdFNjcm9sbCA6IGNsYXNzZXMubGVmdENvbnRhaW5lcn0+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIj5cbiAgICAgICAgICA8QWJvdXRNZSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiZWR1c2tcIj5cbiAgICAgICAgICA8RWR1U2sgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBpZD1cImNvbnRhY3RcIj5cbiAgICAgICAgICA8Q29udGFjdCAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdGF0ZSA/IGNsYXNzZXMucmlnaHRTY29sbCA6IGNsYXNzZXMucmlnaHRDb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdXcmFwcGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RhdGUgPyBjbGFzc2VzLmxvbmdCb3hTY3JvbGwgOiBjbGFzc2VzLmxvbmdCb3h9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0YXRlID8gY2xhc3Nlcy53aWRlQm94U2Nyb2xsIDogY2xhc3Nlcy53aWRlQm94fT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvZmlsZUltYWdlfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IC8+XG4gICAgICAgICAgICAgIDxwPkhJIFRIRVJFIEkgQU08L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNoYW5nZWRUaXRsZX0+XG4gICAgICAgICAgICAgICAgPFR5cGV3cml0ZXJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgYXV0b1N0YXJ0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uSW5pdD17KHR5cGV3cml0ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZXdyaXRlclxuICAgICAgICAgICAgICAgICAgICAgIC50eXBlU3RyaW5nKG5hbWVzWzBdKVxuXG4gICAgICAgICAgICAgICAgICAgICAgLnBhdXNlRm9yKDMwMDApXG4gICAgICAgICAgICAgICAgICAgICAgLmRlbGV0ZUFsbCgpXG4gICAgICAgICAgICAgICAgICAgICAgLnR5cGVTdHJpbmcobmFtZXNbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgLnBhdXNlRm9yKDMwMDApXG4gICAgICAgICAgICAgICAgICAgICAgLmRlbGV0ZUFsbCgpXG4gICAgICAgICAgICAgICAgICAgICAgLnR5cGVTdHJpbmcobmFtZXNbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgLnBhdXNlRm9yKDMwMDApXG4gICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFib3V0TWUiLCJDb250YWN0IiwiRWR1U2siLCJjbGFzc2VzIiwicHJvZmlsZUltYWdlIiwiSGFtYnVyZ2VyIiwiTmF2IiwiVHlwZXdyaXRlciIsImR5bmFtaWMiLCJIb21lIiwibmF2Iiwic2V0TmF2IiwiQW5pbWF0ZWRDdXJzb3IiLCJzc3IiLCJoaWRlU2hvd05hdiIsIm5hbWVzIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9uRmlyc3RNb3VudCIsImNoYW5nZVZhbHVlIiwic2Nyb2xsVmFsdWUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwiY29sb3IiLCJpbm5lclNpemUiLCJvdXRlclNpemUiLCJpbm5lclNjYWxlIiwib3V0ZXJTY2FsZSIsIm91dGVyQWxwaGEiLCJ0cmFpbGluZ1NwZWVkIiwib3V0ZXJTdHlsZSIsImJvcmRlciIsInpJbmRleCIsImlubmVyU3R5bGUiLCJjbGlja2FibGVzIiwiYSIsImhhbWJ1cmdlciIsInRvZ2dsZWQiLCJ0b2dnbGUiLCJsZWZ0U2Nyb2xsIiwibGVmdENvbnRhaW5lciIsInNlY3Rpb24iLCJpZCIsInJpZ2h0U2NvbGwiLCJyaWdodENvbnRhaW5lciIsImltZ1dyYXBwZXIiLCJsb25nQm94U2Nyb2xsIiwibG9uZ0JveCIsIndpZGVCb3hTY3JvbGwiLCJ3aWRlQm94Iiwic3JjIiwiaW1hZ2UiLCJwIiwiY2hhbmdlZFRpdGxlIiwib3B0aW9ucyIsImF1dG9TdGFydCIsImxvb3AiLCJvbkluaXQiLCJ0eXBld3JpdGVyIiwidHlwZVN0cmluZyIsInBhdXNlRm9yIiwiZGVsZXRlQWxsIiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});