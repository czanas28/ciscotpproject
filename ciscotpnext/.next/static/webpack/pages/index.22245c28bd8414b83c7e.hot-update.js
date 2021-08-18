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
      }, this), platform && !registration == 'Error Connecting' && !devicesWithoutPeriphrals.includes(platform) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXZpY2VJbmZvLmpzIl0sIm5hbWVzIjpbImpzeGFwaSIsInJlcXVpcmUiLCJEZXZpY2VJbmZvIiwiZGV2aWNlIiwidXNlU3RhdGUiLCJjb25uZWN0ZWQiLCJzZXRDb25uZWN0ZWQiLCJkb05vdENvbm5lY3QiLCJzZXREb05vdENvbm5lY3QiLCJjb25uZWN0aW9uQ3RyIiwic2V0Q29ubmVjdGlvbkN0ciIsImNvbm5lY3RlZE1zZyIsInNldENvbm5lY3RlZE1zZyIsImNibiIsInNldENibiIsInBsYXRmb3JtIiwic2V0UGxhdGZvcm0iLCJwZXJpcGhlcmFsIiwic2V0UGVyaXBoZXJhbCIsInJlZ2lzdHJhdGlvbiIsInNldFJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvblRleHQiLCJzZXRSZWdpc3RyYXRpb25UZXh0IiwidXJsIiwiaG9zdG5hbWUiLCJpcCIsImRldmljZXNXaXRob3V0UGVyaXBocmFscyIsImdldFBlcmlwaGVyYWxTdGF0dXMiLCJ4YXBpIiwiYXJyIiwiaSIsImluY2x1ZGVzIiwiU3RhdHVzIiwiUGVyaXBoZXJhbHMiLCJDb25uZWN0ZWREZXZpY2UiLCJUeXBlIiwiZ2V0IiwicGVyaXBoZXJhbFN0YXR1cyIsInB1c2giLCJ0eXBlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImdldFJlZ2lzdHJhdGlvblN0YXR1cyIsIldlYmV4IiwicmVnaXN0cmF0aW9uU3RhdHVzIiwiY29ubmVjdFRvRGV2aWNlIiwiY29ubmVjdCIsImhvc3QiLCJwcm90b2NvbCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJvbiIsInByZXZTdGF0ZSIsIkNhbGwiLCJjYWxsIiwibGVuZ3RoIiwiY2FsbElkIiwiQ2FsbGJhY2tOdW1iZXIiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiRXZlbnQiLCJDYWxsU3VjY2Vzc2Z1bCIsIkNhbGxEaXNjb25uZWN0IiwiU3lzdGVtVW5pdCIsIlByb2R1Y3RQbGF0Zm9ybSIsImdldFBsYXRmb3JtIiwidXNlRWZmZWN0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXAiLCJwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBdEI7O0FBRUE7QUFFZSxTQUFTQyxVQUFULE9BQWdDO0FBQUE7O0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUFBLGtCQUNYQywrQ0FBUSxFQURHO0FBQUEsTUFDdENDLFNBRHNDO0FBQUEsTUFDM0JDLFlBRDJCOztBQUFBLG1CQUVMRiwrQ0FBUSxFQUZIO0FBQUEsTUFFdENHLFlBRnNDO0FBQUEsTUFFeEJDLGVBRndCOztBQUFBLG1CQUdISiwrQ0FBUSxDQUFDLENBQUQsQ0FITDtBQUFBLE1BR3RDSyxhQUhzQztBQUFBLE1BR3ZCQyxnQkFIdUI7O0FBQUEsbUJBSUxOLCtDQUFRLENBQUMsZUFBRCxDQUpIO0FBQUEsTUFJdENPLFlBSnNDO0FBQUEsTUFJeEJDLGVBSndCOztBQUFBLG1CQUt2QlIsK0NBQVEsQ0FBQyxhQUFELENBTGU7QUFBQSxNQUt0Q1MsR0FMc0M7QUFBQSxNQUtqQ0MsTUFMaUM7O0FBQUEsbUJBTWJWLCtDQUFRLEVBTks7QUFBQSxNQU10Q1csUUFOc0M7QUFBQSxNQU01QkMsV0FONEI7O0FBQUEsbUJBT1RaLCtDQUFRLEVBUEM7QUFBQSxNQU90Q2EsVUFQc0M7QUFBQSxNQU8xQkMsYUFQMEI7O0FBQUEsbUJBUUxkLCtDQUFRLEVBUkg7QUFBQSxNQVF0Q2UsWUFSc0M7QUFBQSxNQVF4QkMsZUFSd0I7O0FBQUEsbUJBU0doQiwrQ0FBUSxDQUFDLGFBQUQsQ0FUWDtBQUFBLE1BU3RDaUIsZ0JBVHNDO0FBQUEsTUFTcEJDLG1CQVRvQjs7QUFXN0MsTUFBSUMsR0FBRyxHQUFHcEIsTUFBTSxDQUFDcUIsUUFBUCxHQUFrQnJCLE1B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Q0FBQ25DLElBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUsseUJBQVMsRUFBRWdDLHdFQUFoQjtBQUFBLGtEQUNzQkcsR0FBRyxDQUFDbEMsTUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUEsZUFBVWtDLEdBQUcsQ0FBQ25DLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQVFELFdBVEQsTUFTTztBQUNMLG1CQUFPLElBQVA7QUFDRDtBQUNGLFNBYkE7QUFESCx1QkFERCxHQWlCRyxJQTFCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBLGtCQURGO0FBc0NEOztHQWhLdUJyQyxVOztLQUFBQSxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIyMjQ1YzI4YmQ4NDE0YjgzYzdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IGpzeGFwaSA9IHJlcXVpcmUoXCJqc3hhcGlcIik7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvRGV2aWNlSW5mby5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXZpY2VJbmZvKHsgZGV2aWNlIH0pIHtcclxuICBjb25zdCBbY29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZG9Ob3RDb25uZWN0LCBzZXREb05vdENvbm5lY3RdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbY29ubmVjdGlvbkN0ciwgc2V0Q29ubmVjdGlvbkN0cl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY29ubmVjdGVkTXNnLCBzZXRDb25uZWN0ZWRNc2ddID0gdXNlU3RhdGUoXCJDb25uZWN0aW5nLi4uXCIpO1xyXG4gIGNvbnN0IFtjYm4sIHNldENibl0gPSB1c2VTdGF0ZShcIk5vdCBpbiBjYWxsXCIpO1xyXG4gIGNvbnN0IFtwbGF0Zm9ybSwgc2V0UGxhdGZvcm1dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcGVyaXBoZXJhbCwgc2V0UGVyaXBoZXJhbF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtyZWdpc3RyYXRpb24sIHNldFJlZ2lzdHJhdGlvbl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtyZWdpc3RyYXRpb25UZXh0LCBzZXRSZWdpc3RyYXRpb25UZXh0XSA9IHVzZVN0YXRlKFwiUGxlYXNlIHdhaXRcIik7XHJcblxyXG4gIGxldCB1cmwgPSBkZXZpY2UuaG9zdG5hbWUgPyBkZXZpY2UuaG9zdG5hbWUgOiBkZXZpY2UuaXA7XHJcblxyXG4gIGNvbnN0IGRldmljZXNXaXRob3V0UGVyaXBocmFscyA9IFtcIkRYNzBcIiwgXCJEWDgwXCJdO1xyXG5cclxuICBjb25zdCBnZXRQZXJpcGhlcmFsU3RhdHVzID0gYXN5bmMgKHhhcGkpID0+IHtcclxuICAgIGxldCBhcnIgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAxMDAwOyBpIDwgMTEwMDsgaSsrKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKCFkZXZpY2VzV2l0aG91dFBlcmlwaHJhbHMuaW5jbHVkZXMocGxhdGZvcm0pKSB7XHJcbiAgICAgICAgICBjb25zdCBwZXJpcGhlcmFsID0gYXdhaXQgeGFwaS5TdGF0dXMuUGVyaXBoZXJhbHMuQ29ubmVjdGVkRGV2aWNlW1xyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICBdLlR5cGUuZ2V0KCk7XHJcbiAgICAgICAgICBjb25zdCBwZXJpcGhlcmFsU3RhdHVzID1cclxuICAgICAgICAgICAgYXdhaXQgeGFwaS5TdGF0dXMuUGVyaXBoZXJhbHMuQ29ubmVjdGVkRGV2aWNlW2ldLlN0YXR1cy5nZXQoKTtcclxuICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgdHlwZTogcGVyaXBoZXJhbCxcclxuICAgICAgICAgICAgc3RhdHVzOiBwZXJpcGhlcmFsU3RhdHVzLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgfVxyXG4gICAgc2V0UGVyaXBoZXJhbChhcnIpO1xyXG4gICAgY29uc29sZS5sb2coYXJyKTtcclxuICB9O1xyXG4gIGNvbnN0IGdldFJlZ2lzdHJhdGlvblN0YXR1cyA9IGFzeW5jICh4YXBpKSA9PiB7XHJcbiAgICBjb25zdCByZWdpc3RyYXRpb25TdGF0dXMgPSBhd2FpdCB4YXBpLlN0YXR1cy5XZWJleC5TdGF0dXMuZ2V0KCk7XHJcblxyXG4gICAgc3dpdGNoIChyZWdpc3RyYXRpb25TdGF0dXMpIHtcclxuICAgICAgY2FzZSBcIkRpc2FibGVkXCI6XHJcbiAgICAgICAgc2V0UmVnaXN0cmF0aW9uKFwiIzAwMFwiKTtcclxuICAgICAgICBzZXRSZWdpc3RyYXRpb25UZXh0KHJlZ2lzdHJhdGlvblN0YXR1cyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJFcnJvclwiOlxyXG4gICAgICAgIHNldFJlZ2lzdHJhdGlvbihcIiNkNjFjNDFcIik7XHJcbiAgICAgICAgc2V0UmVnaXN0cmF0aW9uVGV4dChyZWdpc3RyYXRpb25TdGF0dXMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiUmVnaXN0ZXJlZFwiOlxyXG4gICAgICAgIHNldFJlZ2lzdHJhdGlvbihcIiM0OGNjNDVcIik7XHJcbiAgICAgICAgc2V0UmVnaXN0cmF0aW9uVGV4dChyZWdpc3RyYXRpb25TdGF0dXMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiUmVnaXN0ZXJpbmdcIjpcclxuICAgICAgICBzZXRSZWdpc3RyYXRpb24oXCIjZGNlMzE5XCIpO1xyXG4gICAgICAgIHNldFJlZ2lzdHJhdGlvblRleHQocmVnaXN0cmF0aW9uU3RhdHVzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIlN0b3BwZWRcIjpcclxuICAgICAgICBzZXRSZWdpc3RyYXRpb24oXCIjZDYxYzQxXCIpO1xyXG4gICAgICAgIHNldFJlZ2lzdHJhdGlvblRleHQocmVnaXN0cmF0aW9uU3RhdHVzKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGNvbm5lY3RUb0RldmljZSA9ICgpID0+IHtcclxuICAgIGpzeGFwaVxyXG4gICAgICAuY29ubmVjdCh7XHJcbiAgICAgICAgaG9zdDogZGV2aWNlLmhvc3RuYW1lIHx8IGRldmljZS5pcCxcclxuICAgICAgICBwcm90b2NvbDogXCJ3czpcIixcclxuICAgICAgICB1c2VybmFtZTogZGV2aWNlLnVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBkZXZpY2UucGFzc3dvcmQsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcImVycm9yXCIsICgpID0+IHtcclxuICAgICAgICBzZXRDb25uZWN0aW9uQ3RyKChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArIDEpO1xyXG4gICAgICAgIHNldFJlZ2lzdHJhdGlvblRleHQoXCJFcnJvciBDb25uZWN0aW5nXCIpO1xyXG4gICAgICAgIGlmIChjb25uZWN0aW9uQ3RyID4gMCkge1xyXG4gICAgICAgICAgc2V0RG9Ob3RDb25uZWN0KHRydWUpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDb25uZWN0ZWQoZmFsc2UpO1xyXG4gICAgICAgIHNldENvbm5lY3RlZE1zZyhcIkZhaWxlZCB0byBjb25uZWN0XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJyZWFkeVwiLCBhc3luYyAoeGFwaSkgPT4ge1xyXG4gICAgICAgIHNldENvbm5lY3RlZCh0cnVlKTtcclxuICAgICAgICBzZXRDb25uZWN0ZWRNc2coXCJDb25uZWN0ZWRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbGwgPSBhd2FpdCB4YXBpLlN0YXR1cy5DYWxsLmdldCgpO1xyXG4gICAgICAgIGlmIChjYWxsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvbnN0IGNhbGxJZCA9IGNhbGxbMF0uQ2FsbGJhY2tOdW1iZXIuc3Vic3RyaW5nKFxyXG4gICAgICAgICAgICBjYWxsWzBdLkNhbGxiYWNrTnVtYmVyLmluZGV4T2YoXCI6XCIpICsgMVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHNldENibihjYWxsSWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgeGFwaS5FdmVudC5DYWxsU3VjY2Vzc2Z1bC5vbihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjYWxsID0gYXdhaXQgeGFwaS5TdGF0dXMuQ2FsbC5nZXQoKTtcclxuICAgICAgICAgIGNvbnN0IGNhbGxJZCA9IGNhbGxbMF0uQ2FsbGJhY2tOdW1iZXIuc3Vic3RyaW5nKFxyXG4gICAgICAgICAgICBjYWxsWzBdLkNhbGxiYWNrTnVtYmVyLmluZGV4T2YoXCI6XCIpICsgMVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHNldENibihjYWxsSWQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB4YXBpLkV2ZW50LkNhbGxEaXNjb25uZWN0Lm9uKCgpID0+IHtcclxuICAgICAgICAgIHNldENibihcIk5vdCBpbiBjYWxsXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBnZXRQbGF0Zm9ybSA9IGF3YWl0IHhhcGkuU3RhdHVzLlN5c3RlbVVuaXQuUHJvZHVjdFBsYXRmb3JtLmdldCgpO1xyXG4gICAgICAgIHNldFBsYXRmb3JtKGdldFBsYXRmb3JtKTtcclxuXHJcbiAgICAgICAgZ2V0UGVyaXBoZXJhbFN0YXR1cyh4YXBpKTtcclxuXHJcbiAgICAgICAgZ2V0UmVnaXN0cmF0aW9uU3RhdHVzKHhhcGkpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNvbm5lY3RlZCB8fCBkb05vdENvbm5lY3QpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbm5lY3RUb0RldmljZSgpO1xyXG4gICAgfSwgMzAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW2Nvbm5lY3RlZCwgZG9Ob3RDb25uZWN0XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29ubmVjdGVkfVxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogcmVnaXN0cmF0aW9uIH19XHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb25uZWN0ZWR0b29sdGlwfT57cmVnaXN0cmF0aW9uVGV4dH08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkVGl0bGV9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYX0gaHJlZj17YGh0dHBzOi8vJHt1cmx9L2B9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICB7ZGV2aWNlLmhvc3RuYW1lIHx8IGRldmljZS5pcH1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucH0+e3BsYXRmb3JtfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucH0+RGV2aWNlIFN0YXR1czoge2Nvbm5lY3RlZE1zZ308L2Rpdj5cclxuICAgICAgICB7Y29ubmVjdGVkICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucH0+Q2FsbCBTdGF0dXM6IHtjYm59PC9kaXY+fVxyXG4gICAgICAgIHtwbGF0Zm9ybSAmJiAhcmVnaXN0cmF0aW9uID09ICdFcnJvciBDb25uZWN0aW5nJyAmJiAhZGV2aWNlc1dpdGhvdXRQZXJpcGhyYWxzLmluY2x1ZGVzKHBsYXRmb3JtKSA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtwZXJpcGhlcmFsLm1hcCgocGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHBlci50eXBlID09IFwiVG91Y2hQYW5lbFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGVyLnR5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucH0+UGVyaXBoZXJhbDoge3Blci50eXBlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQZXJpcGhlcmFsIFN0YXR1czoge3Blci5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==