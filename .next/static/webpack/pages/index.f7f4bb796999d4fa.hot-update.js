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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AboutMe/AboutMe */ \"./components/AboutMe/AboutMe.js\");\n/* harmony import */ var _components_Contact_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Contact/Contact */ \"./components/Contact/Contact.js\");\n/* harmony import */ var _components_EduSk_EduSk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/EduSk/EduSk */ \"./components/EduSk/EduSk.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _img_IMG_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/IMG.jpeg */ \"./pages/img/IMG.jpeg\");\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _components_Sidebar_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Sidebar/Nav */ \"./components/Sidebar/Nav.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! typewriter-effect */ \"./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const AnimatedCursor = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-animated-cursor_dist_index_umd_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-animated-cursor */ \"./node_modules/react-animated-cursor/dist/index.umd.js\", 23)), {\n        loadableGenerated: {\n            modules: [\n                \"index.js -> \" + \"react-animated-cursor\"\n            ]\n        },\n        ssr: true\n    });\n    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const hideShowNav = ()=>{\n        setNav(!nav);\n    };\n    const names = [\n        \"Raef Bakleh\",\n        \"Informatics Student\",\n        \"Learning Web Development\"\n    ];\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function onFirstMount() {\n        const changeValue = ()=>{\n            const scrollValue = document.documentElement.scrollTop;\n            if (scrollValue > 150) {\n                setState(true);\n            } else {\n                setState(false);\n            }\n        };\n        window.addEventListener(\"scroll\", changeValue);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedCursor, {\n                color: \"75, 73, 73\",\n                innerSize: 4,\n                outerSize: 25,\n                innerScale: 4,\n                outerScale: 0,\n                outerAlpha: 0,\n                trailingSpeed: 5,\n                outerStyle: {\n                    border: \"2px solid rgb(75, 73, 73)\",\n                    zIndex: \"10001\"\n                },\n                innerStyle: {\n                    zIndex: \"1001\",\n                    border: \"2px solid rgb(205, 73, 73)\"\n                },\n                clickables: [\n                    \"none\"\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: state ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().leftScroll) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().leftContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"about\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"edusk\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EduSk_EduSk__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"contact\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact_Contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: state ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().rightScoll) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().rightContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: !nav ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().hamburger) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().hamburgerClose),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(hamburger_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().reactHamburger),\n                            toggled: nav,\n                            toggle: hideShowNav\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar_Nav__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        setNav: setNav,\n                        nav: nav\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 84,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().imgWrapper),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: state ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().longBoxScroll) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().longBox),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: state ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().wideBoxScroll) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().wideBox),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: _img_IMG_jpeg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().image)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"HI THERE, I AM\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().changedTitle),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                            options: {\n                                                autoStart: true,\n                                                loop: true\n                                            },\n                                            onInit: (typewriter)=>{\n                                                typewriter.typeString(names[0]).pauseFor(3000).deleteAll().typeString(names[1]).pauseFor(3000).deleteAll().typeString(names[2]).pauseFor(3000).start();\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"JCKj6WqU7bkABSdovm/Zfwk0gBk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VEYsVUFBVSxDQUFDbkQsS0FBSyxDQUFDLEVBQUUsRUFDbkJvRCxRQUFRLENBQUMsTUFDVEMsU0FBUyxHQUNURixVQUFVLENBQUNuRCxLQUFLLENBQUMsRUFBRSxFQUNuQm9ELFFBQVEsQ0FBQyxNQUNURSxLQUFLOzRDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVbEIsQ0FBQztHQXhHdUI1RDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFib3V0TWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWJvdXRNZS9BYm91dE1lXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWN0L0NvbnRhY3RcIjtcbmltcG9ydCBFZHVTayBmcm9tIFwiLi4vY29tcG9uZW50cy9FZHVTay9FZHVTa1wiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBwcm9maWxlSW1hZ2UgZnJvbSBcIi4vaW1nL0lNRy5qcGVnXCI7XG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gXCJoYW1idXJnZXItcmVhY3RcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhci9OYXZcIjtcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gXCJ0eXBld3JpdGVyLWVmZmVjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuXG5pbXBvcnQgeyBBaU91dGxpbmVBcnJvd1VwIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBBbmltYXRlZEN1cnNvciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3QtYW5pbWF0ZWQtY3Vyc29yXCIpLCB7XG4gICAgc3NyOiB0cnVlLFxuICB9KTtcbiAgY29uc3QgW25hdiwgc2V0TmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoaWRlU2hvd05hdiA9ICgpID0+IHtcbiAgICBzZXROYXYoIW5hdik7XG4gIH07XG4gIGNvbnN0IG5hbWVzID0gW1xuICAgIFwiUmFlZiBCYWtsZWhcIixcbiAgICBcIkluZm9ybWF0aWNzIFN0dWRlbnRcIixcbiAgICBcIkxlYXJuaW5nIFdlYiBEZXZlbG9wbWVudFwiLFxuICBdO1xuXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiBvbkZpcnN0TW91bnQoKSB7XG4gICAgY29uc3QgY2hhbmdlVmFsdWUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxWYWx1ZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICBpZiAoc2Nyb2xsVmFsdWUgPiAxNTApIHtcbiAgICAgICAgc2V0U3RhdGUodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTdGF0ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGFuZ2VWYWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxuICAgIFxuICAgICAgPEFuaW1hdGVkQ3Vyc29yXG4gICAgICAgIGNvbG9yPVwiNzUsIDczLCA3M1wiXG4gICAgICAgIGlubmVyU2l6ZT17NH1cbiAgICAgICAgb3V0ZXJTaXplPXsyNX1cbiAgICAgICAgaW5uZXJTY2FsZT17NH1cbiAgICAgICAgb3V0ZXJTY2FsZT17MH1cbiAgICAgICAgb3V0ZXJBbHBoYT17MH1cbiAgICAgICAgdHJhaWxpbmdTcGVlZD17NX1cbiAgICAgICAgb3V0ZXJTdHlsZT17e1xuICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgcmdiKDc1LCA3MywgNzMpXCIsXG4gICAgICAgICAgekluZGV4OiBcIjEwMDAxXCIsXG4gICAgICAgIH19XG4gICAgICAgIGlubmVyU3R5bGU9e3tcbiAgICAgICAgICB6SW5kZXg6IFwiMTAwMVwiLFxuICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgcmdiKDIwNSwgNzMsIDczKVwiLFxuICAgICAgICB9fVxuICAgICAgICBjbGlja2FibGVzPXtbXCJub25lXCJdfVxuICAgICAgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0YXRlID8gY2xhc3Nlcy5sZWZ0U2Nyb2xsIDogY2xhc3Nlcy5sZWZ0Q29udGFpbmVyfT5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiPlxuICAgICAgICAgIDxBYm91dE1lIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJlZHVza1wiPlxuICAgICAgICAgIDxFZHVTayAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiY29udGFjdFwiPlxuICAgICAgICAgIDxDb250YWN0IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0YXRlID8gY2xhc3Nlcy5yaWdodFNjb2xsIDogY2xhc3Nlcy5yaWdodENvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXshbmF2ID8gY2xhc3Nlcy5oYW1idXJnZXIgOiBjbGFzc2VzLmhhbWJ1cmdlckNsb3NlfT5cbiAgICAgICAgICA8SGFtYnVyZ2VyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucmVhY3RIYW1idXJnZXJ9XG4gICAgICAgICAgICB0b2dnbGVkPXtuYXZ9XG4gICAgICAgICAgICB0b2dnbGU9e2hpZGVTaG93TmF2fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7PE5hdiBzZXROYXY9e3NldE5hdn0gbmF2PXtuYXZ9IC8+fVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ1dyYXBwZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdGF0ZSA/IGNsYXNzZXMubG9uZ0JveFNjcm9sbCA6IGNsYXNzZXMubG9uZ0JveH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RhdGUgPyBjbGFzc2VzLndpZGVCb3hTY3JvbGwgOiBjbGFzc2VzLndpZGVCb3h9PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9maWxlSW1hZ2V9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgPHA+SEkgVEhFUkUsIEkgQU08L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNoYW5nZWRUaXRsZX0+XG4gICAgICAgICAgICAgICAgPFR5cGV3cml0ZXJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgYXV0b1N0YXJ0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uSW5pdD17KHR5cGV3cml0ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZXdyaXRlclxuICAgICAgICAgICAgICAgICAgICAgIC50eXBlU3RyaW5nKG5hbWVzWzBdKVxuXG4gICAgICAgICAgICAgICAgICAgICAgLnBhdXNlRm9yKDMwMDApXG4gICAgICAgICAgICAgICAgICAgICAgLmRlbGV0ZUFsbCgpXG4gICAgICAgICAgICAgICAgICAgICAgLnR5cGVTdHJpbmcobmFtZXNbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgLnBhdXNlRm9yKDMwMDApXG4gICAgICAgICAgICAgICAgICAgICAgLmRlbGV0ZUFsbCgpXG4gICAgICAgICAgICAgICAgICAgICAgLnR5cGVTdHJpbmcobmFtZXNbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgLnBhdXNlRm9yKDMwMDApXG4gICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWJvdXRNZSIsIkNvbnRhY3QiLCJFZHVTayIsImNsYXNzZXMiLCJwcm9maWxlSW1hZ2UiLCJIYW1idXJnZXIiLCJOYXYiLCJUeXBld3JpdGVyIiwiZHluYW1pYyIsIkFpT3V0bGluZUFycm93VXAiLCJMaW5rIiwiSG9tZSIsIkFuaW1hdGVkQ3Vyc29yIiwic3NyIiwibmF2Iiwic2V0TmF2IiwiaGlkZVNob3dOYXYiLCJuYW1lcyIsInN0YXRlIiwic2V0U3RhdGUiLCJvbkZpcnN0TW91bnQiLCJjaGFuZ2VWYWx1ZSIsInNjcm9sbFZhbHVlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsImNvbG9yIiwiaW5uZXJTaXplIiwib3V0ZXJTaXplIiwiaW5uZXJTY2FsZSIsIm91dGVyU2NhbGUiLCJvdXRlckFscGhhIiwidHJhaWxpbmdTcGVlZCIsIm91dGVyU3R5bGUiLCJib3JkZXIiLCJ6SW5kZXgiLCJpbm5lclN0eWxlIiwiY2xpY2thYmxlcyIsImxlZnRTY3JvbGwiLCJsZWZ0Q29udGFpbmVyIiwic2VjdGlvbiIsImlkIiwicmlnaHRTY29sbCIsInJpZ2h0Q29udGFpbmVyIiwiaGFtYnVyZ2VyIiwiaGFtYnVyZ2VyQ2xvc2UiLCJyZWFjdEhhbWJ1cmdlciIsInRvZ2dsZWQiLCJ0b2dnbGUiLCJpbWdXcmFwcGVyIiwibG9uZ0JveFNjcm9sbCIsImxvbmdCb3giLCJ3aWRlQm94U2Nyb2xsIiwid2lkZUJveCIsInNyYyIsImltYWdlIiwicCIsImNoYW5nZWRUaXRsZSIsIm9wdGlvbnMiLCJhdXRvU3RhcnQiLCJsb29wIiwib25Jbml0IiwidHlwZXdyaXRlciIsInR5cGVTdHJpbmciLCJwYXVzZUZvciIsImRlbGV0ZUFsbCIsInN0YXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});