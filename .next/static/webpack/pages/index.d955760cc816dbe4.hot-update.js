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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AboutMe/AboutMe */ \"./components/AboutMe/AboutMe.js\");\n/* harmony import */ var _components_Contact_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Contact/Contact */ \"./components/Contact/Contact.js\");\n/* harmony import */ var _components_EduSk_EduSk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/EduSk/EduSk */ \"./components/EduSk/EduSk.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _img_IMG_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/IMG.jpeg */ \"./pages/img/IMG.jpeg\");\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _components_Sidebar_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Sidebar/Nav */ \"./components/Sidebar/Nav.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const hideShowNav = ()=>{\n        setNav(!nav);\n    };\n    console.log(nav);\n    const names = [\n        \"Raef Bakleh\",\n        \"Computer Science Student\",\n        \"Learning Web Development\"\n    ];\n    const [newName, setnewName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const shuffle = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{\n        const index = Math.floor(Math.random() * names.length);\n        setnewName(names[index]);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const intervalID = setInterval(shuffle, 5000);\n        return ()=>clearInterval(intervalID);\n    }, [\n        shuffle\n    ]);\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function onFirstMount() {\n        const changeValue = ()=>{\n            const scrollValue = document.documentElement.scrollTop;\n            if (scrollValue > 100) {\n                setState(true);\n            } else {\n                setState(false);\n            }\n        };\n        window.addEventListener(\"scroll\", changeValue);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().hamburger),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(hamburger_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    toggled: nav,\n                    toggle: hideShowNav\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            nav && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                setNav: setNav\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 15\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: state ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().leftScroll) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().leftContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"about\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"edusk\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EduSk_EduSk__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"contact\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact_Contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"#about\",\n                className: state ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().rightScoll) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().rightContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().imgWrapper),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: state ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().longBoxScroll) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().longBox),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: state ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().wideBoxScroll) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().wideBox),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _img_IMG_jpeg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().image)\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"HI THERE I AM\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().changedTitle),\n                                    children: newName\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/Desktop/raefbakleh96/pages/index.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"e/7S4eUogntJ/ImmTffseIgRkp4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUErQjtBQUNGO0FBQzRCO0FBQ0w7QUFDQTtBQUNOO0FBQ0U7QUFDTjtBQUN5QjtBQUMzQjtBQUNJO0FBQzdCLFNBQVNlLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHYiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRXBDLE1BQU1jLGNBQWMsSUFBTTtRQUN4QkQsT0FBTyxDQUFDRDtJQUNWO0lBQ0FHLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWixNQUFNSyxRQUFRO1FBQ1o7UUFDQTtRQUNBO0tBQ0Q7SUFDRCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR25CLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1vQixVQUFVdEIsa0RBQVdBLENBQUMsSUFBTTtRQUNoQyxNQUFNdUIsUUFBUUMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtQLE1BQU1RLE1BQU07UUFDckROLFdBQVdGLEtBQUssQ0FBQ0ksTUFBTTtJQUN6QixHQUFHLEVBQUU7SUFFTHRCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNMkIsYUFBYUMsWUFBWVAsU0FBUztRQUN4QyxPQUFPLElBQU1RLGNBQWNGO0lBQzdCLEdBQUc7UUFBQ047S0FBUTtJQUNaLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHOUIsK0NBQVFBLENBQUMsS0FBSztJQUV4Q0QsZ0RBQVNBLENBQUMsU0FBU2dDLGVBQWU7UUFDaEMsTUFBTUMsY0FBYyxJQUFNO1lBQ3hCLE1BQU1DLGNBQWNDLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUztZQUN0RCxJQUFJSCxjQUFjLEtBQUs7Z0JBQ3JCSCxTQUFTLElBQUk7WUFDZixPQUFPO2dCQUNMQSxTQUFTLEtBQUs7WUFDaEIsQ0FBQztRQUNIO1FBQ0FPLE9BQU9DLGdCQUFnQixDQUFDLFVBQVVOO0lBQ3BDO0lBQ0EscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVdwQyx3RUFBZTs7MEJBQzdCLDhEQUFDbUM7Z0JBQUlDLFdBQVdwQywwRUFBaUI7MEJBQy9CLDRFQUFDSyx3REFBU0E7b0JBQUNrQyxTQUFTL0I7b0JBQUtnQyxRQUFROUI7Ozs7Ozs7Ozs7O1lBRWxDRixxQkFBTyw4REFBQ0YsK0RBQUdBO2dCQUFDRyxRQUFRQTs7Ozs7OzBCQUNyQiw4REFBQzBCO2dCQUFJQyxXQUFXWCxRQUFRekIsMkVBQWtCLEdBQUdBLDhFQUFxQjs7a0NBQ2hFLDhEQUFDMkM7d0JBQVFDLElBQUc7a0NBQ1YsNEVBQUMvQyxtRUFBT0E7Ozs7Ozs7Ozs7a0NBRVYsOERBQUM4Qzt3QkFBUUMsSUFBRztrQ0FDViw0RUFBQzdDLCtEQUFLQTs7Ozs7Ozs7OztrQ0FFUiw4REFBQzRDO3dCQUFRQyxJQUFHO2tDQUNWLDRFQUFDOUMsbUVBQU9BOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDcUM7Z0JBQ0NTLElBQUc7Z0JBQ0hSLFdBQVdYLFFBQVF6QiwyRUFBa0IsR0FBR0EsK0VBQXNCOzBCQUU5RCw0RUFBQ21DO29CQUFJQyxXQUFXcEMsMkVBQWtCOzhCQUNoQyw0RUFBQ21DO3dCQUFJQyxXQUFXWCxRQUFRekIsOEVBQXFCLEdBQUdBLHdFQUFlO2tDQUM3RCw0RUFBQ21DOzRCQUFJQyxXQUFXWCxRQUFRekIsOEVBQXFCLEdBQUdBLHdFQUFlOzs4Q0FDN0QsOERBQUNSLG1EQUFLQTtvQ0FBQzRELEtBQUtuRCxxREFBWUE7b0NBQUVtQyxXQUFXcEMsc0VBQWE7Ozs7Ozs4Q0FDbEQsOERBQUNzRDs4Q0FBRTs7Ozs7OzhDQUNILDhEQUFDbkI7b0NBQUlDLFdBQVdwQyw2RUFBb0I7OENBQUdjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckQsQ0FBQztHQXJFdUJQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFib3V0TWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWJvdXRNZS9BYm91dE1lXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWN0L0NvbnRhY3RcIjtcbmltcG9ydCBFZHVTayBmcm9tIFwiLi4vY29tcG9uZW50cy9FZHVTay9FZHVTa1wiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBwcm9maWxlSW1hZ2UgZnJvbSBcIi4vaW1nL0lNRy5qcGVnXCI7XG5pbXBvcnQgeyBCc0dpdGh1YiwgQnNMaW5rZWRpbiwgQnNJbnN0YWdyYW0gfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCBIYW1idXJnZXIgZnJvbSBcImhhbWJ1cmdlci1yZWFjdFwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyL05hdlwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW25hdiwgc2V0TmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoaWRlU2hvd05hdiA9ICgpID0+IHtcbiAgICBzZXROYXYoIW5hdik7XG4gIH07XG4gIGNvbnNvbGUubG9nKG5hdik7XG4gIGNvbnN0IG5hbWVzID0gW1xuICAgIFwiUmFlZiBCYWtsZWhcIixcbiAgICBcIkNvbXB1dGVyIFNjaWVuY2UgU3R1ZGVudFwiLFxuICAgIFwiTGVhcm5pbmcgV2ViIERldmVsb3BtZW50XCIsXG4gIF07XG4gIGNvbnN0IFtuZXdOYW1lLCBzZXRuZXdOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHNodWZmbGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuYW1lcy5sZW5ndGgpO1xuICAgIHNldG5ld05hbWUobmFtZXNbaW5kZXhdKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKHNodWZmbGUsIDUwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICB9LCBbc2h1ZmZsZV0pO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gb25GaXJzdE1vdW50KCkge1xuICAgIGNvbnN0IGNoYW5nZVZhbHVlID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsVmFsdWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgaWYgKHNjcm9sbFZhbHVlID4gMTAwKSB7XG4gICAgICAgIHNldFN0YXRlKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U3RhdGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hhbmdlVmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhhbWJ1cmdlcn0+XG4gICAgICAgIDxIYW1idXJnZXIgdG9nZ2xlZD17bmF2fSB0b2dnbGU9e2hpZGVTaG93TmF2fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7bmF2ICYmIDxOYXYgc2V0TmF2PXtzZXROYXZ9IC8+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0YXRlID8gY2xhc3Nlcy5sZWZ0U2Nyb2xsIDogY2xhc3Nlcy5sZWZ0Q29udGFpbmVyfT5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiPlxuICAgICAgICAgIDxBYm91dE1lIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJlZHVza1wiPlxuICAgICAgICAgIDxFZHVTayAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiY29udGFjdFwiPlxuICAgICAgICAgIDxDb250YWN0IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBpZD1cIiNhYm91dFwiXG4gICAgICAgIGNsYXNzTmFtZT17c3RhdGUgPyBjbGFzc2VzLnJpZ2h0U2NvbGwgOiBjbGFzc2VzLnJpZ2h0Q29udGFpbmVyfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdXcmFwcGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RhdGUgPyBjbGFzc2VzLmxvbmdCb3hTY3JvbGwgOiBjbGFzc2VzLmxvbmdCb3h9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0YXRlID8gY2xhc3Nlcy53aWRlQm94U2Nyb2xsIDogY2xhc3Nlcy53aWRlQm94fT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvZmlsZUltYWdlfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IC8+XG4gICAgICAgICAgICAgIDxwPkhJIFRIRVJFIEkgQU08L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNoYW5nZWRUaXRsZX0+e25ld05hbWV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWJvdXRNZSIsIkNvbnRhY3QiLCJFZHVTayIsImNsYXNzZXMiLCJwcm9maWxlSW1hZ2UiLCJCc0dpdGh1YiIsIkJzTGlua2VkaW4iLCJCc0luc3RhZ3JhbSIsIkhhbWJ1cmdlciIsIk5hdiIsIkhvbWUiLCJuYXYiLCJzZXROYXYiLCJoaWRlU2hvd05hdiIsImNvbnNvbGUiLCJsb2ciLCJuYW1lcyIsIm5ld05hbWUiLCJzZXRuZXdOYW1lIiwic2h1ZmZsZSIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiaW50ZXJ2YWxJRCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInN0YXRlIiwic2V0U3RhdGUiLCJvbkZpcnN0TW91bnQiLCJjaGFuZ2VWYWx1ZSIsInNjcm9sbFZhbHVlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsImhhbWJ1cmdlciIsInRvZ2dsZWQiLCJ0b2dnbGUiLCJsZWZ0U2Nyb2xsIiwibGVmdENvbnRhaW5lciIsInNlY3Rpb24iLCJpZCIsInJpZ2h0U2NvbGwiLCJyaWdodENvbnRhaW5lciIsImltZ1dyYXBwZXIiLCJsb25nQm94U2Nyb2xsIiwibG9uZ0JveCIsIndpZGVCb3hTY3JvbGwiLCJ3aWRlQm94Iiwic3JjIiwiaW1hZ2UiLCJwIiwiY2hhbmdlZFRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});