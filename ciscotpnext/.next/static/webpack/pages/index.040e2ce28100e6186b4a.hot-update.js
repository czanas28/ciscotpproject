self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/DeviceInfo.js":
/*!**********************************!*\
  !*** ./components/DeviceInfo.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeviceInfo; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_nerdc_webdev_react_ciscotpproject_ciscotpnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_nerdc_webdev_react_ciscotpproject_ciscotpnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_nerdc_webdev_react_ciscotpproject_ciscotpnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_nerdc_webdev_react_ciscotpproject_ciscotpnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/DeviceInfo.module.css */ "./styles/DeviceInfo.module.css");
/* harmony import */ var _styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\nerdc\\webdev\\react\\ciscotpproject\\ciscotpnext\\components\\DeviceInfo.js",
    _s = $RefreshSig$();



var jsxapi = __webpack_require__(/*! jsxapi */ "./node_modules/jsxapi/lib/browser.js");


function DeviceInfo(_ref) {
  _s();

  var _this = this;

  var device = _ref.device;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      connected = _useState[0],
      setConnected = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      doNotConnect = _useState2[0],
      setDoNotConnect = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      connectionCtr = _useState3[0],
      setConnectionCtr = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("Connecting..."),
      connectedMsg = _useState4[0],
      setConnectedMsg = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("Not in call"),
      cbn = _useState5[0],
      setCbn = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      platform = _useState6[0],
      setPlatform = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      peripheral = _useState7[0],
      setPeripheral = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      registration = _useState8[0],
      setRegistration = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("Please wait"),
      registrationText = _useState9[0],
      setRegistrationText = _useState9[1];

  var url = device.hostname ? device.hostname : device.ip;
  var devicesWithoutPeriphrals = ["DX70", "DX80"];

  var getPeripheralStatus = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_nerdc_webdev_react_ciscotpproject_ciscotpnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_nerdc_webdev_react_ciscotpproject_ciscotpnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(xapi) {
      var arr, i, _peripheral, peripheralStatus;

      return C_Users_nerdc_webdev_react_ciscotpproject_ciscotpnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              arr = [];
              i = 1000;

            case 2:
              if (!(i < 1100)) {
                _context.next = 19;
                break;
              }

              _context.prev = 3;

              if (devicesWithoutPeriphrals.includes(platform)) {
                _context.next = 12;
                break;
              }

              _context.next = 7;
              return xapi.Status.Peripherals.ConnectedDevice[i].Type.get();

            case 7:
              _peripheral = _context.sent;
              _context.next = 10;
              return xapi.Status.Peripherals.ConnectedDevice[i].Status.get();

            case 10:
              peripheralStatus = _context.sent;
              arr.push({
                type: _peripheral,
                status: peripheralStatus
              });

            case 12:
              _context.next = 16;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](3);

            case 16:
              i++;
              _context.next = 2;
              break;

            case 19:
              setPeripheral(arr);
              console.log(arr);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 14]]);
    }));

    return function getPeripheralStatus(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getRegistrationStatus = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_nerdc_webdev_react_ciscotpproject_ciscotpnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_nerdc_webdev_react_ciscotpproject_ciscotpnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(xapi) {
      var registrationStatus;
      return C_Users_nerdc_webdev_react_ciscotpproject_ciscotpnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return xapi.Status.Webex.Status.get();

            case 2:
              registrationStatus = _context2.sent;
              _context2.t0 = registrationStatus;
              _context2.next = _context2.t0 === "Disabled" ? 6 : _context2.t0 === "Error" ? 9 : _context2.t0 === "Registered" ? 12 : _context2.t0 === "Registering" ? 15 : _context2.t0 === "Stopped" ? 18 : 21;
              break;

            case 6:
              setRegistration("#000");
              setRegistrationText(registrationStatus);
              return _context2.abrupt("break", 21);

            case 9:
              setRegistration("#d61c41");
              setRegistrationText(registrationStatus);
              return _context2.abrupt("break", 21);

            case 12:
              setRegistration("#48cc45");
              setRegistrationText(registrationStatus);
              return _context2.abrupt("break", 21);

            case 15:
              setRegistration("#dce319");
              setRegistrationText(registrationStatus);
              return _context2.abrupt("break", 21);

            case 18:
              setRegistration("#d61c41");
              setRegistrationText(registrationStatus);
              return _context2.abrupt("break", 21);

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getRegistrationStatus(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var connectToDevice = function connectToDevice() {
    jsxapi.connect({
      host: device.hostname || device.ip,
      protocol: "ws:",
      username: device.username,
      password: device.password
    }).on("error", function () {
      setConnectionCtr(function (prevState) {
        return prevState + 1;
      });
      setRegistrationText("Error Connecting");

      if (connectionCtr > 0) {
        setDoNotConnect(true);
        return;
      }

      setConnected(false);
      setConnectedMsg("Failed to connect");
    }).on("ready", /*#__PURE__*/function () {
      var _ref4 = (0,C_Users_nerdc_webdev_react_ciscotpproject_ciscotpnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_nerdc_webdev_react_ciscotpproject_ciscotpnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(xapi) {
        var call, callId, getPlatform;
        return C_Users_nerdc_webdev_react_ciscotpproject_ciscotpnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                setConnected(true);
                setConnectedMsg("Connected");
                _context4.next = 4;
                return xapi.Status.Call.get();

              case 4:
                call = _context4.sent;

                if (call.length > 0) {
                  callId = call[0].CallbackNumber.substring(call[0].CallbackNumber.indexOf(":") + 1);
                  setCbn(callId);
                }

                xapi.Event.CallSuccessful.on( /*#__PURE__*/(0,C_Users_nerdc_webdev_react_ciscotpproject_ciscotpnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_nerdc_webdev_react_ciscotpproject_ciscotpnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
                  var call, callId;
                  return C_Users_nerdc_webdev_react_ciscotpproject_ciscotpnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return xapi.Status.Call.get();

                        case 2:
                          call = _context3.sent;
                          callId = call[0].CallbackNumber.substring(call[0].CallbackNumber.indexOf(":") + 1);
                          setCbn(callId);

                        case 5:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                })));
                xapi.Event.CallDisconnect.on(function () {
                  setCbn("Not in call");
                });
                _context4.next = 10;
                return xapi.Status.SystemUnit.ProductPlatform.get();

              case 10:
                getPlatform = _context4.sent;
                setPlatform(getPlatform);
                getPeripheralStatus(xapi);
                getRegistrationStatus(xapi);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (connected || doNotConnect) {
      return;
    }

    var interval = setInterval(function () {
      connectToDevice();
    }, 3000);
    return function () {
      return clearInterval(interval);
    };
  }, [connected, doNotConnect]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_4___default().connected),
      style: {
        backgroundColor: registration
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_4___default().connectedtooltip),
        children: registrationText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_4___default().item),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardTitle),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_4___default().a),
          href: "https://".concat(url, "/"),
          target: "_blank",
          children: device.hostname || device.ip
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_4___default().p),
        children: platform
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_4___default().p),
        children: ["Device Status: ", connectedMsg]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this), connected && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_4___default().p),
        children: ["Call Status: ", cbn]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 23
      }, this), platform && connected && !devicesWithoutPeriphrals.includes(platform) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: peripheral.map(function (per) {
          if (per.type == "TouchPanel") {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_4___default().p),
                children: ["Peripheral: ", per.type]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_4___default().p),
                children: ["Peripheral Status: ", per.status]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 21
              }, _this)]
            }, per.type, true, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 19
            }, _this);
          } else {
            return null;
          }
        })
      }, void 0, false) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(DeviceInfo, "JRekeZ+WwTGDcJ3JVKGwcKfrVnc=");

_c = DeviceInfo;

var _c;

$RefreshReg$(_c, "DeviceInfo");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXZpY2VJbmZvLmpzIl0sIm5hbWVzIjpbImpzeGFwaSIsInJlcXVpcmUiLCJEZXZpY2VJbmZvIiwiZGV2aWNlIiwidXNlU3RhdGUiLCJjb25uZWN0ZWQiLCJzZXRDb25uZWN0ZWQiLCJkb05vdENvbm5lY3QiLCJzZXREb05vdENvbm5lY3QiLCJjb25uZWN0aW9uQ3RyIiwic2V0Q29ubmVjdGlvbkN0ciIsImNvbm5lY3RlZE1zZyIsInNldENvbm5lY3RlZE1zZyIsImNibiIsInNldENibiIsInBsYXRmb3JtIiwic2V0UGxhdGZvcm0iLCJwZXJpcGhlcmFsIiwic2V0UGVyaXBoZXJhbCIsInJlZ2lzdHJhdGlvbiIsInNldFJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvblRleHQiLCJzZXRSZWdpc3RyYXRpb25UZXh0IiwidXJsIiwiaG9zdG5hbWUiLCJpcCIsImRldmljZXNXaXRob3V0UGVyaXBocmFscyIsImdldFBlcmlwaGVyYWxTdGF0dXMiLCJ4YXBpIiwiYXJyIiwiaSIsImluY2x1ZGVzIiwiU3RhdHVzIiwiUGVyaXBoZXJhbHMiLCJDb25uZWN0ZWREZXZpY2UiLCJUeXBlIiwiZ2V0IiwicGVyaXBoZXJhbFN0YXR1cyIsInB1c2giLCJ0eXBlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImdldFJlZ2lzdHJhdGlvblN0YXR1cyIsIldlYmV4IiwicmVnaXN0cmF0aW9uU3RhdHVzIiwiY29ubmVjdFRvRGV2aWNlIiwiY29ubmVjdCIsImhvc3QiLCJwcm90b2NvbCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJvbiIsInByZXZTdGF0ZSIsIkNhbGwiLCJjYWxsIiwibGVuZ3RoIiwiY2FsbElkIiwiQ2FsbGJhY2tOdW1iZXIiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiRXZlbnQiLCJDYWxsU3VjY2Vzc2Z1bCIsIkNhbGxEaXNjb25uZWN0IiwiU3lzdGVtVW5pdCIsIlByb2R1Y3RQbGF0Zm9ybSIsImdldFBsYXRmb3JtIiwidXNlRWZmZWN0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXAiLCJwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBdEI7O0FBRUE7QUFFZSxTQUFTQyxVQUFULE9BQWdDO0FBQUE7O0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUFBLGtCQUNYQywrQ0FBUSxFQURHO0FBQUEsTUFDdENDLFNBRHNDO0FBQUEsTUFDM0JDLFlBRDJCOztBQUFBLG1CQUVMRiwrQ0FBUSxFQUZIO0FBQUEsTUFFdENHLFlBRnNDO0FBQUEsTUFFeEJDLGVBRndCOztBQUFBLG1CQUdISiwrQ0FBUSxDQUFDLENBQUQsQ0FITDtBQUFBLE1BR3RDSyxhQUhzQztBQUFBLE1BR3ZCQyxnQkFIdUI7O0FBQUEsbUJBSUxOLCtDQUFRLENBQUMsZUFBRCxDQUpIO0FBQUEsTUFJdENPLFlBSnNDO0FBQUEsTUFJeEJDLGVBSndCOztBQUFBLG1CQUt2QlIsK0NBQVEsQ0FBQyxhQUFELENBTGU7QUFBQSxNQUt0Q1MsR0FMc0M7QUFBQSxNQUtqQ0MsTUFMaUM7O0FBQUEsbUJBTWJWLCtDQUFRLEVBTks7QUFBQSxNQU10Q1csUUFOc0M7QUFBQSxNQU01QkMsV0FONEI7O0FBQUEsbUJBT1RaLCtDQUFRLEVBUEM7QUFBQSxNQU90Q2EsVUFQc0M7QUFBQSxNQU8xQkMsYUFQMEI7O0FBQUEsbUJBUUxkLCtDQUFRLEVBUkg7QUFBQSxNQVF0Q2UsWUFSc0M7QUFBQSxNQVF4QkMsZUFSd0I7O0FBQUEsbUJBU0doQiwrQ0FBUSxDQUFDLGFBQUQsQ0FUWDtBQUFBLE1BU3RDaUIsZ0JBVHNDO0FBQUEsTUFTcEJDLG1CQVRvQjs7QUFXN0MsTUFBSUMsR0FBRyxHQUFHcEIsTUFBTSxDQUFDcUIsUUFBUCxHQUFrQnJCLE1B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O0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFLLHlCQUFTLEVBQUVnQyx3RUFBaEI7QUFBQSxrREFDc0JHLEdBQUcsQ0FBQ2xDLE1BRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBLGVBQVVrQyxHQUFHLENBQUNuQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFRRCxXQVRELE1BU087QUFDTCxtQkFBTyxJQUFQO0FBQ0Q7QUFDRixTQWJBO0FBREgsdUJBREQsR0FpQkcsSUExQk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQSxrQkFERjtBQXNDRDs7R0FoS3VCckMsVTs7S0FBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNDBlMmNlMjgxMDBlNjE4NmI0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBqc3hhcGkgPSByZXF1aXJlKFwianN4YXBpXCIpO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0RldmljZUluZm8ubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV2aWNlSW5mbyh7IGRldmljZSB9KSB7XHJcbiAgY29uc3QgW2Nvbm5lY3RlZCwgc2V0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2RvTm90Q29ubmVjdCwgc2V0RG9Ob3RDb25uZWN0XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2Nvbm5lY3Rpb25DdHIsIHNldENvbm5lY3Rpb25DdHJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2Nvbm5lY3RlZE1zZywgc2V0Q29ubmVjdGVkTXNnXSA9IHVzZVN0YXRlKFwiQ29ubmVjdGluZy4uLlwiKTtcclxuICBjb25zdCBbY2JuLCBzZXRDYm5dID0gdXNlU3RhdGUoXCJOb3QgaW4gY2FsbFwiKTtcclxuICBjb25zdCBbcGxhdGZvcm0sIHNldFBsYXRmb3JtXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3BlcmlwaGVyYWwsIHNldFBlcmlwaGVyYWxdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcmVnaXN0cmF0aW9uLCBzZXRSZWdpc3RyYXRpb25dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcmVnaXN0cmF0aW9uVGV4dCwgc2V0UmVnaXN0cmF0aW9uVGV4dF0gPSB1c2VTdGF0ZShcIlBsZWFzZSB3YWl0XCIpO1xyXG5cclxuICBsZXQgdXJsID0gZGV2aWNlLmhvc3RuYW1lID8gZGV2aWNlLmhvc3RuYW1lIDogZGV2aWNlLmlwO1xyXG5cclxuICBjb25zdCBkZXZpY2VzV2l0aG91dFBlcmlwaHJhbHMgPSBbXCJEWDcwXCIsIFwiRFg4MFwiXTtcclxuXHJcbiAgY29uc3QgZ2V0UGVyaXBoZXJhbFN0YXR1cyA9IGFzeW5jICh4YXBpKSA9PiB7XHJcbiAgICBsZXQgYXJyID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTAwMDsgaSA8IDExMDA7IGkrKykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICghZGV2aWNlc1dpdGhvdXRQZXJpcGhyYWxzLmluY2x1ZGVzKHBsYXRmb3JtKSkge1xyXG4gICAgICAgICAgY29uc3QgcGVyaXBoZXJhbCA9IGF3YWl0IHhhcGkuU3RhdHVzLlBlcmlwaGVyYWxzLkNvbm5lY3RlZERldmljZVtcclxuICAgICAgICAgICAgaVxyXG4gICAgICAgICAgXS5UeXBlLmdldCgpO1xyXG4gICAgICAgICAgY29uc3QgcGVyaXBoZXJhbFN0YXR1cyA9XHJcbiAgICAgICAgICAgIGF3YWl0IHhhcGkuU3RhdHVzLlBlcmlwaGVyYWxzLkNvbm5lY3RlZERldmljZVtpXS5TdGF0dXMuZ2V0KCk7XHJcbiAgICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHBlcmlwaGVyYWwsXHJcbiAgICAgICAgICAgIHN0YXR1czogcGVyaXBoZXJhbFN0YXR1cyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgIH1cclxuICAgIHNldFBlcmlwaGVyYWwoYXJyKTtcclxuICAgIGNvbnNvbGUubG9nKGFycik7XHJcbiAgfTtcclxuICBjb25zdCBnZXRSZWdpc3RyYXRpb25TdGF0dXMgPSBhc3luYyAoeGFwaSkgPT4ge1xyXG4gICAgY29uc3QgcmVnaXN0cmF0aW9uU3RhdHVzID0gYXdhaXQgeGFwaS5TdGF0dXMuV2ViZXguU3RhdHVzLmdldCgpO1xyXG5cclxuICAgIHN3aXRjaCAocmVnaXN0cmF0aW9uU3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgXCJEaXNhYmxlZFwiOlxyXG4gICAgICAgIHNldFJlZ2lzdHJhdGlvbihcIiMwMDBcIik7XHJcbiAgICAgICAgc2V0UmVnaXN0cmF0aW9uVGV4dChyZWdpc3RyYXRpb25TdGF0dXMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiRXJyb3JcIjpcclxuICAgICAgICBzZXRSZWdpc3RyYXRpb24oXCIjZDYxYzQxXCIpO1xyXG4gICAgICAgIHNldFJlZ2lzdHJhdGlvblRleHQocmVnaXN0cmF0aW9uU3RhdHVzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIlJlZ2lzdGVyZWRcIjpcclxuICAgICAgICBzZXRSZWdpc3RyYXRpb24oXCIjNDhjYzQ1XCIpO1xyXG4gICAgICAgIHNldFJlZ2lzdHJhdGlvblRleHQocmVnaXN0cmF0aW9uU3RhdHVzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIlJlZ2lzdGVyaW5nXCI6XHJcbiAgICAgICAgc2V0UmVnaXN0cmF0aW9uKFwiI2RjZTMxOVwiKTtcclxuICAgICAgICBzZXRSZWdpc3RyYXRpb25UZXh0KHJlZ2lzdHJhdGlvblN0YXR1cyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJTdG9wcGVkXCI6XHJcbiAgICAgICAgc2V0UmVnaXN0cmF0aW9uKFwiI2Q2MWM0MVwiKTtcclxuICAgICAgICBzZXRSZWdpc3RyYXRpb25UZXh0KHJlZ2lzdHJhdGlvblN0YXR1cyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBjb25uZWN0VG9EZXZpY2UgPSAoKSA9PiB7XHJcbiAgICBqc3hhcGlcclxuICAgICAgLmNvbm5lY3Qoe1xyXG4gICAgICAgIGhvc3Q6IGRldmljZS5ob3N0bmFtZSB8fCBkZXZpY2UuaXAsXHJcbiAgICAgICAgcHJvdG9jb2w6IFwid3M6XCIsXHJcbiAgICAgICAgdXNlcm5hbWU6IGRldmljZS51c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogZGV2aWNlLnBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJlcnJvclwiLCAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29ubmVjdGlvbkN0cigocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyAxKTtcclxuICAgICAgICBzZXRSZWdpc3RyYXRpb25UZXh0KFwiRXJyb3IgQ29ubmVjdGluZ1wiKTtcclxuICAgICAgICBpZiAoY29ubmVjdGlvbkN0ciA+IDApIHtcclxuICAgICAgICAgIHNldERvTm90Q29ubmVjdCh0cnVlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q29ubmVjdGVkKGZhbHNlKTtcclxuICAgICAgICBzZXRDb25uZWN0ZWRNc2coXCJGYWlsZWQgdG8gY29ubmVjdFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKFwicmVhZHlcIiwgYXN5bmMgKHhhcGkpID0+IHtcclxuICAgICAgICBzZXRDb25uZWN0ZWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0Q29ubmVjdGVkTXNnKFwiQ29ubmVjdGVkXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjYWxsID0gYXdhaXQgeGFwaS5TdGF0dXMuQ2FsbC5nZXQoKTtcclxuICAgICAgICBpZiAoY2FsbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjb25zdCBjYWxsSWQgPSBjYWxsWzBdLkNhbGxiYWNrTnVtYmVyLnN1YnN0cmluZyhcclxuICAgICAgICAgICAgY2FsbFswXS5DYWxsYmFja051bWJlci5pbmRleE9mKFwiOlwiKSArIDFcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRDYm4oY2FsbElkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHhhcGkuRXZlbnQuQ2FsbFN1Y2Nlc3NmdWwub24oYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2FsbCA9IGF3YWl0IHhhcGkuU3RhdHVzLkNhbGwuZ2V0KCk7XHJcbiAgICAgICAgICBjb25zdCBjYWxsSWQgPSBjYWxsWzBdLkNhbGxiYWNrTnVtYmVyLnN1YnN0cmluZyhcclxuICAgICAgICAgICAgY2FsbFswXS5DYWxsYmFja051bWJlci5pbmRleE9mKFwiOlwiKSArIDFcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRDYm4oY2FsbElkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgeGFwaS5FdmVudC5DYWxsRGlzY29ubmVjdC5vbigoKSA9PiB7XHJcbiAgICAgICAgICBzZXRDYm4oXCJOb3QgaW4gY2FsbFwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0UGxhdGZvcm0gPSBhd2FpdCB4YXBpLlN0YXR1cy5TeXN0ZW1Vbml0LlByb2R1Y3RQbGF0Zm9ybS5nZXQoKTtcclxuICAgICAgICBzZXRQbGF0Zm9ybShnZXRQbGF0Zm9ybSk7XHJcblxyXG4gICAgICAgIGdldFBlcmlwaGVyYWxTdGF0dXMoeGFwaSk7XHJcblxyXG4gICAgICAgIGdldFJlZ2lzdHJhdGlvblN0YXR1cyh4YXBpKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjb25uZWN0ZWQgfHwgZG9Ob3RDb25uZWN0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb25uZWN0VG9EZXZpY2UoKTtcclxuICAgIH0sIDMwMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtjb25uZWN0ZWQsIGRvTm90Q29ubmVjdF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbm5lY3RlZH1cclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHJlZ2lzdHJhdGlvbiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29ubmVjdGVkdG9vbHRpcH0+e3JlZ2lzdHJhdGlvblRleHR9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFRpdGxlfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmF9IGhyZWY9e2BodHRwczovLyR7dXJsfS9gfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAge2RldmljZS5ob3N0bmFtZSB8fCBkZXZpY2UuaXB9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnB9PntwbGF0Zm9ybX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnB9PkRldmljZSBTdGF0dXM6IHtjb25uZWN0ZWRNc2d9PC9kaXY+XHJcbiAgICAgICAge2Nvbm5lY3RlZCAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnB9PkNhbGwgU3RhdHVzOiB7Y2JufTwvZGl2Pn1cclxuICAgICAgICB7cGxhdGZvcm0gJiYgY29ubmVjdGVkICYmICFkZXZpY2VzV2l0aG91dFBlcmlwaHJhbHMuaW5jbHVkZXMocGxhdGZvcm0pID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge3BlcmlwaGVyYWwubWFwKChwZXIpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocGVyLnR5cGUgPT0gXCJUb3VjaFBhbmVsXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwZXIudHlwZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wfT5QZXJpcGhlcmFsOiB7cGVyLnR5cGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wfT5cclxuICAgICAgICAgICAgICAgICAgICAgIFBlcmlwaGVyYWwgU3RhdHVzOiB7cGVyLnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9