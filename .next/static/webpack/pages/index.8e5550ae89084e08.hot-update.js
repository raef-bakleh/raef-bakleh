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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AboutMe/AboutMe */ \"./components/AboutMe/AboutMe.js\");\n/* harmony import */ var _components_Contact_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Contact/Contact */ \"./components/Contact/Contact.js\");\n/* harmony import */ var _components_EduSk_EduSk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/EduSk/EduSk */ \"./components/EduSk/EduSk.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _img_IMG_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/IMG.jpeg */ \"./pages/img/IMG.jpeg\");\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _components_Sidebar_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Sidebar/Nav */ \"./components/Sidebar/Nav.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const hideShowNav = ()=>{\n        setNav(!nav);\n    };\n    console.log(nav);\n    const names = [\n        \"Raef Bakleh\",\n        \"Computer Science Student\",\n        \"Learning Web Development\"\n    ];\n    const [newName, setnewName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const shuffle = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{\n        const index = Math.floor(Math.random() * names.length);\n        setnewName(names[index]);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const intervalID = setInterval(shuffle, 5000);\n        return ()=>clearInterval(intervalID);\n    }, [\n        shuffle\n    ]);\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function onFirstMount() {\n        const changeValue = ()=>{\n            const scrollValue = document.documentElement.scrollTop;\n            if (scrollValue > 100) {\n                setState(true);\n            } else {\n                setState(false);\n            }\n        };\n        window.addEventListener(\"scroll\", changeValue);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(hamburger_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().hamburger),\n                        toggled: nav,\n                        toggle: hideShowNav\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    nav && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        setNav: setNav\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: state ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().leftScroll) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().leftContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"about\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"edusk\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EduSk_EduSk__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"contact\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact_Contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"#about\",\n                className: state ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().rightScoll) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().rightContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().imgWrapper),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: state ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().longBoxScroll) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().longBox),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: state ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().wideBoxScroll) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().wideBox),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _img_IMG_jpeg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().image)\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"HI THERE I AM\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().changedTitle),\n                                    children: newName\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"e/7S4eUogntJ/ImmTffseIgRkp4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUErQjtBQUNGO0FBQzRCO0FBQ0w7QUFDQTtBQUNOO0FBQ0U7QUFDTjtBQUN5QjtBQUMzQjtBQUNJO0FBQzdCLFNBQVNlLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHYiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRXBDLE1BQU1jLGNBQWMsSUFBTTtRQUN4QkQsT0FBTyxDQUFDRDtJQUNWO0lBQ0FHLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWixNQUFNSyxRQUFRO1FBQ1o7UUFDQTtRQUNBO0tBQ0Q7SUFDRCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR25CLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1vQixVQUFVdEIsa0RBQVdBLENBQUMsSUFBTTtRQUNoQyxNQUFNdUIsUUFBUUMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtQLE1BQU1RLE1BQU07UUFDckROLFdBQVdGLEtBQUssQ0FBQ0ksTUFBTTtJQUN6QixHQUFHLEVBQUU7SUFFTHRCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNMkIsYUFBYUMsWUFBWVAsU0FBUztRQUN4QyxPQUFPLElBQU1RLGNBQWNGO0lBQzdCLEdBQUc7UUFBQ047S0FBUTtJQUNaLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHOUIsK0NBQVFBLENBQUMsS0FBSztJQUV4Q0QsZ0RBQVNBLENBQUMsU0FBU2dDLGVBQWU7UUFDaEMsTUFBTUMsY0FBYyxJQUFNO1lBQ3hCLE1BQU1DLGNBQWNDLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUztZQUN0RCxJQUFJSCxjQUFjLEtBQUs7Z0JBQ3JCSCxTQUFTLElBQUk7WUFDZixPQUFPO2dCQUNMQSxTQUFTLEtBQUs7WUFDaEIsQ0FBQztRQUNIO1FBQ0FPLE9BQU9DLGdCQUFnQixDQUFDLFVBQVVOO0lBQ3BDO0lBQ0EscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVdwQyx3RUFBZTs7MEJBQzdCLDhEQUFDbUM7O2tDQUNDLDhEQUFDOUIsd0RBQVNBO3dCQUNSK0IsV0FBV3BDLDBFQUFpQjt3QkFDNUJ1QyxTQUFTL0I7d0JBQ1RnQyxRQUFROUI7Ozs7OztvQkFFVEYscUJBQU8sOERBQUNGLCtEQUFHQTt3QkFBQ0csUUFBUUE7Ozs7Ozs7Ozs7OzswQkFFdkIsOERBQUMwQjtnQkFBSUMsV0FBV1gsUUFBUXpCLDJFQUFrQixHQUFHQSw4RUFBcUI7O2tDQUNoRSw4REFBQzJDO3dCQUFRQyxJQUFHO2tDQUNWLDRFQUFDL0MsbUVBQU9BOzs7Ozs7Ozs7O2tDQUVWLDhEQUFDOEM7d0JBQVFDLElBQUc7a0NBQ1YsNEVBQUM3QywrREFBS0E7Ozs7Ozs7Ozs7a0NBRVIsOERBQUM0Qzt3QkFBUUMsSUFBRztrQ0FDViw0RUFBQzlDLG1FQUFPQTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHWiw4REFBQ3FDO2dCQUNDUyxJQUFHO2dCQUNIUixXQUFXWCxRQUFRekIsMkVBQWtCLEdBQUdBLCtFQUFzQjswQkFFOUQsNEVBQUNtQztvQkFBSUMsV0FBV3BDLDJFQUFrQjs4QkFDaEMsNEVBQUNtQzt3QkFBSUMsV0FBV1gsUUFBUXpCLDhFQUFxQixHQUFHQSx3RUFBZTtrQ0FDN0QsNEVBQUNtQzs0QkFBSUMsV0FBV1gsUUFBUXpCLDhFQUFxQixHQUFHQSx3RUFBZTs7OENBQzdELDhEQUFDUixtREFBS0E7b0NBQUM0RCxLQUFLbkQscURBQVlBO29DQUFFbUMsV0FBV3BDLHNFQUFhOzs7Ozs7OENBQ2xELDhEQUFDc0Q7OENBQUU7Ozs7Ozs4Q0FDSCw4REFBQ25CO29DQUFJQyxXQUFXcEMsNkVBQW9COzhDQUFHYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JELENBQUM7R0F6RXVCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBYm91dE1lIGZyb20gXCIuLi9jb21wb25lbnRzL0Fib3V0TWUvQWJvdXRNZVwiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFjdC9Db250YWN0XCI7XG5pbXBvcnQgRWR1U2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvRWR1U2svRWR1U2tcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgcHJvZmlsZUltYWdlIGZyb20gXCIuL2ltZy9JTUcuanBlZ1wiO1xuaW1wb3J0IHsgQnNHaXRodWIsIEJzTGlua2VkaW4sIEJzSW5zdGFncmFtIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gXCJoYW1idXJnZXItcmVhY3RcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhci9OYXZcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtuYXYsIHNldE5hdl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGlkZVNob3dOYXYgPSAoKSA9PiB7XG4gICAgc2V0TmF2KCFuYXYpO1xuICB9O1xuICBjb25zb2xlLmxvZyhuYXYpO1xuICBjb25zdCBuYW1lcyA9IFtcbiAgICBcIlJhZWYgQmFrbGVoXCIsXG4gICAgXCJDb21wdXRlciBTY2llbmNlIFN0dWRlbnRcIixcbiAgICBcIkxlYXJuaW5nIFdlYiBEZXZlbG9wbWVudFwiLFxuICBdO1xuICBjb25zdCBbbmV3TmFtZSwgc2V0bmV3TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBzaHVmZmxlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmFtZXMubGVuZ3RoKTtcbiAgICBzZXRuZXdOYW1lKG5hbWVzW2luZGV4XSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsSUQgPSBzZXRJbnRlcnZhbChzaHVmZmxlLCA1MDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgfSwgW3NodWZmbGVdKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uIG9uRmlyc3RNb3VudCgpIHtcbiAgICBjb25zdCBjaGFuZ2VWYWx1ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbFZhbHVlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIGlmIChzY3JvbGxWYWx1ZSA+IDEwMCkge1xuICAgICAgICBzZXRTdGF0ZSh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN0YXRlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoYW5nZVZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SGFtYnVyZ2VyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmhhbWJ1cmdlcn1cbiAgICAgICAgICB0b2dnbGVkPXtuYXZ9XG4gICAgICAgICAgdG9nZ2xlPXtoaWRlU2hvd05hdn1cbiAgICAgICAgLz5cbiAgICAgICAge25hdiAmJiA8TmF2IHNldE5hdj17c2V0TmF2fSAvPn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0YXRlID8gY2xhc3Nlcy5sZWZ0U2Nyb2xsIDogY2xhc3Nlcy5sZWZ0Q29udGFpbmVyfT5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiPlxuICAgICAgICAgIDxBYm91dE1lIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJlZHVza1wiPlxuICAgICAgICAgIDxFZHVTayAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiY29udGFjdFwiPlxuICAgICAgICAgIDxDb250YWN0IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBpZD1cIiNhYm91dFwiXG4gICAgICAgIGNsYXNzTmFtZT17c3RhdGUgPyBjbGFzc2VzLnJpZ2h0U2NvbGwgOiBjbGFzc2VzLnJpZ2h0Q29udGFpbmVyfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdXcmFwcGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RhdGUgPyBjbGFzc2VzLmxvbmdCb3hTY3JvbGwgOiBjbGFzc2VzLmxvbmdCb3h9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0YXRlID8gY2xhc3Nlcy53aWRlQm94U2Nyb2xsIDogY2xhc3Nlcy53aWRlQm94fT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvZmlsZUltYWdlfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IC8+XG4gICAgICAgICAgICAgIDxwPkhJIFRIRVJFIEkgQU08L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNoYW5nZWRUaXRsZX0+e25ld05hbWV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWJvdXRNZSIsIkNvbnRhY3QiLCJFZHVTayIsImNsYXNzZXMiLCJwcm9maWxlSW1hZ2UiLCJCc0dpdGh1YiIsIkJzTGlua2VkaW4iLCJCc0luc3RhZ3JhbSIsIkhhbWJ1cmdlciIsIk5hdiIsIkhvbWUiLCJuYXYiLCJzZXROYXYiLCJoaWRlU2hvd05hdiIsImNvbnNvbGUiLCJsb2ciLCJuYW1lcyIsIm5ld05hbWUiLCJzZXRuZXdOYW1lIiwic2h1ZmZsZSIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiaW50ZXJ2YWxJRCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInN0YXRlIiwic2V0U3RhdGUiLCJvbkZpcnN0TW91bnQiLCJjaGFuZ2VWYWx1ZSIsInNjcm9sbFZhbHVlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsImhhbWJ1cmdlciIsInRvZ2dsZWQiLCJ0b2dnbGUiLCJsZWZ0U2Nyb2xsIiwibGVmdENvbnRhaW5lciIsInNlY3Rpb24iLCJpZCIsInJpZ2h0U2NvbGwiLCJyaWdodENvbnRhaW5lciIsImltZ1dyYXBwZXIiLCJsb25nQm94U2Nyb2xsIiwibG9uZ0JveCIsIndpZGVCb3hTY3JvbGwiLCJ3aWRlQm94Iiwic3JjIiwiaW1hZ2UiLCJwIiwiY2hhbmdlZFRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});