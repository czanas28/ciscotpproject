(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Card.module.css */ "./styles/Card.module.css");
/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\nerdc\\webdev\\react\\ciscotpproject\\ciscotpnext\\components\\Card.js";

function Card({
  children,
  onClick
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
    onClick: onClick,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./components/DeviceInfo.js":
/*!**********************************!*\
  !*** ./components/DeviceInfo.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeviceInfo; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/DeviceInfo.module.css */ "./styles/DeviceInfo.module.css");
/* harmony import */ var _styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\nerdc\\webdev\\react\\ciscotpproject\\ciscotpnext\\components\\DeviceInfo.js";


const jsxapi = __webpack_require__(/*! jsxapi */ "jsxapi");


function DeviceInfo({
  device
}) {
  const {
    0: connected,
    1: setConnected
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: doNotConnect,
    1: setDoNotConnect
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: connectionCtr,
    1: setConnectionCtr
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: connectedMsg,
    1: setConnectedMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Connecting...");
  const {
    0: cbn,
    1: setCbn
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Not in call");
  const {
    0: platform,
    1: setPlatform
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: peripheral,
    1: setPeripheral
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: registration,
    1: setRegistration
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: registrationText,
    1: setRegistrationText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Please wait");
  let url = device.hostname ? device.hostname : device.ip;
  const devicesWithoutPeriphrals = ["DX70", "DX80"];

  const getPeripheralStatus = async xapi => {
    let arr = [];

    for (let i = 1000; i < 1100; i++) {
      try {
        if (!devicesWithoutPeriphrals.includes(platform)) {
          const peripheral = await xapi.Status.Peripherals.ConnectedDevice[i].Type.get();
          const peripheralStatus = await xapi.Status.Peripherals.ConnectedDevice[i].Status.get();
          arr.push({
            type: peripheral,
            status: peripheralStatus
          });
        }
      } catch (e) {}
    }

    setPeripheral(arr);
    console.log(arr);
  };

  const getRegistrationStatus = async xapi => {
    const registrationStatus = await xapi.Status.Webex.Status.get();

    switch (registrationStatus) {
      case "Disabled":
        setRegistration("#000");
        setRegistrationText(registrationStatus);
        break;

      case "Error":
        setRegistration("#d61c41");
        setRegistrationText(registrationStatus);
        break;

      case "Registered":
        setRegistration("#48cc45");
        setRegistrationText(registrationStatus);
        break;

      case "Registering":
        setRegistration("#dce319");
        setRegistrationText(registrationStatus);
        break;

      case "Stopped":
        setRegistration("#d61c41");
        setRegistrationText(registrationStatus);
        break;
    }
  };

  const connectToDevice = () => {
    jsxapi.connect({
      host: device.hostname || device.ip,
      protocol: "ws:",
      username: device.username,
      password: device.password
    }).on("error", () => {
      setConnectionCtr(prevState => prevState + 1);
      setRegistrationText("Error Connecting");

      if (connectionCtr > 0) {
        setDoNotConnect(true);
        return;
      }

      setConnected(false);
      setConnectedMsg("Failed to connect");
    }).on("ready", async xapi => {
      setConnected(true);
      setConnectedMsg("Connected");
      const call = await xapi.Status.Call.get();

      if (call.length > 0) {
        const callId = call[0].CallbackNumber.substring(call[0].CallbackNumber.indexOf(":") + 1);
        setCbn(callId);
      }

      xapi.Event.CallSuccessful.on(async () => {
        const call = await xapi.Status.Call.get();
        const callId = call[0].CallbackNumber.substring(call[0].CallbackNumber.indexOf(":") + 1);
        setCbn(callId);
      });
      xapi.Event.CallDisconnect.on(() => {
        setCbn("Not in call");
      });
      const getPlatform = await xapi.Status.SystemUnit.ProductPlatform.get();
      setPlatform(getPlatform);
      getPeripheralStatus(xapi);
      getRegistrationStatus(xapi);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (connected || doNotConnect) {
      return;
    }

    const interval = setInterval(() => {
      connectToDevice();
    }, 3000);
    return () => clearInterval(interval);
  }, [connected, doNotConnect]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default().connected),
      style: {
        backgroundColor: registration
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default().connectedtooltip),
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
      className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default().item),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default().cardTitle),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default().a),
          href: `https://${url}/`,
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
        className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default().p),
        children: platform
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default().p),
        children: ["Device Status: ", connectedMsg]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this), connected && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default().p),
        children: ["Call Status: ", cbn]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 23
      }, this), platform && !registrationText == 'Error Connecting' && !devicesWithoutPeriphrals.includes(platform) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: peripheral.map(per => {
          if (per.type == "TouchPanel") {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default().p),
                children: ["Peripheral: ", per.type]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_DeviceInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default().p),
                children: ["Peripheral Status: ", per.status]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 21
              }, this)]
            }, per.type, true, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 19
            }, this);
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

/***/ }),

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navigation; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Navigation.module.css */ "./styles/Navigation.module.css");
/* harmony import */ var _styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\nerdc\\webdev\\react\\ciscotpproject\\ciscotpnext\\components\\Navigation.js";




function Navigation() {
  const matches = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__.default)("(max-width:600px)");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default().navigation),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/adddevice",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Add Device"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default().filter),
        children: [!matches ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "filter",
          className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),
          children: "Filter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 23
        }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          id: "filter",
          className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),
          placeholder: matches ? "Filter" : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NewStart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* harmony import */ var _components_DeviceInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DeviceInfo */ "./components/DeviceInfo.js");
/* harmony import */ var _styles_NewStart_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/NewStart.module.css */ "./styles/NewStart.module.css");
/* harmony import */ var _styles_NewStart_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_NewStart_module_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\nerdc\\webdev\\react\\ciscotpproject\\ciscotpnext\\pages\\index.js";






function NewStart() {
  const {
    0: devices,
    1: setDevices
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: selectedDevice,
    1: setSelectedDevice
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();

  const fetchDevices = async () => {
    const deviceArray = await axios__WEBPACK_IMPORTED_MODULE_2___default().get("/api/devices/");
    setDevices(deviceArray.data);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchDevices();
  }, []);

  const handleSelectDevice = device => {
    setSelectedDevice(device);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_NewStart_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_NewStart_module_css__WEBPACK_IMPORTED_MODULE_6___default().app),
        children: devices && devices.map(device => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_4__.default, {
            onClick: () => handleSelectDevice(device),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DeviceInfo__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: (_styles_NewStart_module_css__WEBPACK_IMPORTED_MODULE_6___default().item),
              device: device
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 19
            }, this)
          }, device._id, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 17
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./styles/Card.module.css":
/*!********************************!*\
  !*** ./styles/Card.module.css ***!
  \********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"card": "Card_card__2cXDm"
};


/***/ }),

/***/ "./styles/DeviceInfo.module.css":
/*!**************************************!*\
  !*** ./styles/DeviceInfo.module.css ***!
  \**************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"cardTitle": "DeviceInfo_cardTitle__1KtLV",
	"p": "DeviceInfo_p__3hRqh",
	"item": "DeviceInfo_item__2zZOQ",
	"a": "DeviceInfo_a__FaH04",
	"connected": "DeviceInfo_connected__2Pqo9",
	"connectedtooltip": "DeviceInfo_connectedtooltip__34VQS"
};


/***/ }),

/***/ "./styles/Navigation.module.css":
/*!**************************************!*\
  !*** ./styles/Navigation.module.css ***!
  \**************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"navigation": "Navigation_navigation__3Eh4w",
	"input": "Navigation_input__24To0",
	"filter": "Navigation_filter__1rWJS"
};


/***/ }),

/***/ "./styles/NewStart.module.css":
/*!************************************!*\
  !*** ./styles/NewStart.module.css ***!
  \************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"app": "NewStart_app__onn5s",
	"container": "NewStart_container__19bdX"
};


/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "jsxapi":
/*!*************************!*\
  !*** external "jsxapi" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("jsxapi");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_material-ui_core_esm_useMediaQuery_index_js-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXNjb3RwbmV4dC8uL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9jaXNjb3RwbmV4dC8uL2NvbXBvbmVudHMvRGV2aWNlSW5mby5qcyIsIndlYnBhY2s6Ly9jaXNjb3RwbmV4dC8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9jaXNjb3RwbmV4dC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2Npc2NvdHBuZXh0Ly4vc3R5bGVzL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9jaXNjb3RwbmV4dC8uL3N0eWxlcy9EZXZpY2VJbmZvLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vY2lzY290cG5leHQvLi9zdHlsZXMvTmF2aWdhdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL2Npc2NvdHBuZXh0Ly4vc3R5bGVzL05ld1N0YXJ0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vY2lzY290cG5leHQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vY2lzY290cG5leHQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Npc2NvdHBuZXh0L2V4dGVybmFsIFwianN4YXBpXCIiLCJ3ZWJwYWNrOi8vY2lzY290cG5leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vY2lzY290cG5leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vY2lzY290cG5leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Npc2NvdHBuZXh0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9jaXNjb3RwbmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Npc2NvdHBuZXh0L2lnbm9yZWR8QzpcXFVzZXJzXFxuZXJkY1xcd2ViZGV2XFxyZWFjdFxcY2lzY290cHByb2plY3RcXGNpc2NvdHBuZXh0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQ2FyZCIsImNoaWxkcmVuIiwib25DbGljayIsInN0eWxlcyIsImpzeGFwaSIsInJlcXVpcmUiLCJEZXZpY2VJbmZvIiwiZGV2aWNlIiwiY29ubmVjdGVkIiwic2V0Q29ubmVjdGVkIiwidXNlU3RhdGUiLCJkb05vdENvbm5lY3QiLCJzZXREb05vdENvbm5lY3QiLCJjb25uZWN0aW9uQ3RyIiwic2V0Q29ubmVjdGlvbkN0ciIsImNvbm5lY3RlZE1zZyIsInNldENvbm5lY3RlZE1zZyIsImNibiIsInNldENibiIsInBsYXRmb3JtIiwic2V0UGxhdGZvcm0iLCJwZXJpcGhlcmFsIiwic2V0UGVyaXBoZXJhbCIsInJlZ2lzdHJhdGlvbiIsInNldFJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvblRleHQiLCJzZXRSZWdpc3RyYXRpb25UZXh0IiwidXJsIiwiaG9zdG5hbWUiLCJpcCIsImRldmljZXNXaXRob3V0UGVyaXBocmFscyIsImdldFBlcmlwaGVyYWxTdGF0dXMiLCJ4YXBpIiwiYXJyIiwiaSIsImluY2x1ZGVzIiwiU3RhdHVzIiwiUGVyaXBoZXJhbHMiLCJDb25uZWN0ZWREZXZpY2UiLCJUeXBlIiwiZ2V0IiwicGVyaXBoZXJhbFN0YXR1cyIsInB1c2giLCJ0eXBlIiwic3RhdHVzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRSZWdpc3RyYXRpb25TdGF0dXMiLCJyZWdpc3RyYXRpb25TdGF0dXMiLCJXZWJleCIsImNvbm5lY3RUb0RldmljZSIsImNvbm5lY3QiLCJob3N0IiwicHJvdG9jb2wiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwib24iLCJwcmV2U3RhdGUiLCJjYWxsIiwiQ2FsbCIsImxlbmd0aCIsImNhbGxJZCIsIkNhbGxiYWNrTnVtYmVyIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsIkV2ZW50IiwiQ2FsbFN1Y2Nlc3NmdWwiLCJDYWxsRGlzY29ubmVjdCIsImdldFBsYXRmb3JtIiwiU3lzdGVtVW5pdCIsIlByb2R1Y3RQbGF0Zm9ybSIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwicGVyIiwiTmF2aWdhdGlvbiIsIm1hdGNoZXMiLCJ1c2VNZWRpYVF1ZXJ5IiwiTmV3U3RhcnQiLCJkZXZpY2VzIiwic2V0RGV2aWNlcyIsInNlbGVjdGVkRGV2aWNlIiwic2V0U2VsZWN0ZWREZXZpY2UiLCJmZXRjaERldmljZXMiLCJkZXZpY2VBcnJheSIsImF4aW9zIiwiZGF0YSIsImhhbmRsZVNlbGVjdERldmljZSIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsQ0FBYztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBZCxFQUFxQztBQUNsRCxzQkFBTztBQUFLLGFBQVMsRUFBRUMscUVBQWhCO0FBQTZCLFdBQU8sRUFBRUQsT0FBdEM7QUFBQSxjQUFnREQ7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkQ7O0FBQ0EsTUFBTUcsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFELENBQXRCOztBQUVBO0FBRWUsU0FBU0MsVUFBVCxDQUFvQjtBQUFFQztBQUFGLENBQXBCLEVBQWdDO0FBQzdDLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsK0NBQVEsRUFBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NGLCtDQUFRLEVBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLGFBQUQ7QUFBQSxP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Q0UsOERBQUMscURBQUQ7QUFFRSxtQkFBTyxFQUFFLE1BQU1vRixrQkFBa0IsQ0FBQ3BGLE1BQUQsQ0FGbkM7QUFBQSxtQ0FJRSw4REFBQywyREFBRDtBQUFZLHVCQUFTLEVBQUVKLHlFQUF2QjtBQUFvQyxvQkFBTSxFQUFFSTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkYsYUFDT0EsTUFBTSxDQUFDcUYsR0FEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBUUQsU0FURDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFERjtBQW9CRCxDOzs7Ozs7Ozs7O0FDN0NEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0NhcmQubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCh7IGNoaWxkcmVuLCBvbkNsaWNrIH0pIHtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBvbkNsaWNrPXtvbkNsaWNrfT57Y2hpbGRyZW59PC9kaXY+XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBqc3hhcGkgPSByZXF1aXJlKFwianN4YXBpXCIpO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0RldmljZUluZm8ubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV2aWNlSW5mbyh7IGRldmljZSB9KSB7XHJcbiAgY29uc3QgW2Nvbm5lY3RlZCwgc2V0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2RvTm90Q29ubmVjdCwgc2V0RG9Ob3RDb25uZWN0XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2Nvbm5lY3Rpb25DdHIsIHNldENvbm5lY3Rpb25DdHJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2Nvbm5lY3RlZE1zZywgc2V0Q29ubmVjdGVkTXNnXSA9IHVzZVN0YXRlKFwiQ29ubmVjdGluZy4uLlwiKTtcclxuICBjb25zdCBbY2JuLCBzZXRDYm5dID0gdXNlU3RhdGUoXCJOb3QgaW4gY2FsbFwiKTtcclxuICBjb25zdCBbcGxhdGZvcm0sIHNldFBsYXRmb3JtXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3BlcmlwaGVyYWwsIHNldFBlcmlwaGVyYWxdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcmVnaXN0cmF0aW9uLCBzZXRSZWdpc3RyYXRpb25dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcmVnaXN0cmF0aW9uVGV4dCwgc2V0UmVnaXN0cmF0aW9uVGV4dF0gPSB1c2VTdGF0ZShcIlBsZWFzZSB3YWl0XCIpO1xyXG5cclxuICBsZXQgdXJsID0gZGV2aWNlLmhvc3RuYW1lID8gZGV2aWNlLmhvc3RuYW1lIDogZGV2aWNlLmlwO1xyXG5cclxuICBjb25zdCBkZXZpY2VzV2l0aG91dFBlcmlwaHJhbHMgPSBbXCJEWDcwXCIsIFwiRFg4MFwiXTtcclxuXHJcbiAgY29uc3QgZ2V0UGVyaXBoZXJhbFN0YXR1cyA9IGFzeW5jICh4YXBpKSA9PiB7XHJcbiAgICBsZXQgYXJyID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTAwMDsgaSA8IDExMDA7IGkrKykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICghZGV2aWNlc1dpdGhvdXRQZXJpcGhyYWxzLmluY2x1ZGVzKHBsYXRmb3JtKSkge1xyXG4gICAgICAgICAgY29uc3QgcGVyaXBoZXJhbCA9IGF3YWl0IHhhcGkuU3RhdHVzLlBlcmlwaGVyYWxzLkNvbm5lY3RlZERldmljZVtcclxuICAgICAgICAgICAgaVxyXG4gICAgICAgICAgXS5UeXBlLmdldCgpO1xyXG4gICAgICAgICAgY29uc3QgcGVyaXBoZXJhbFN0YXR1cyA9XHJcbiAgICAgICAgICAgIGF3YWl0IHhhcGkuU3RhdHVzLlBlcmlwaGVyYWxzLkNvbm5lY3RlZERldmljZVtpXS5TdGF0dXMuZ2V0KCk7XHJcbiAgICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHBlcmlwaGVyYWwsXHJcbiAgICAgICAgICAgIHN0YXR1czogcGVyaXBoZXJhbFN0YXR1cyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgIH1cclxuICAgIHNldFBlcmlwaGVyYWwoYXJyKTtcclxuICAgIGNvbnNvbGUubG9nKGFycik7XHJcbiAgfTtcclxuICBjb25zdCBnZXRSZWdpc3RyYXRpb25TdGF0dXMgPSBhc3luYyAoeGFwaSkgPT4ge1xyXG4gICAgY29uc3QgcmVnaXN0cmF0aW9uU3RhdHVzID0gYXdhaXQgeGFwaS5TdGF0dXMuV2ViZXguU3RhdHVzLmdldCgpO1xyXG5cclxuICAgIHN3aXRjaCAocmVnaXN0cmF0aW9uU3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgXCJEaXNhYmxlZFwiOlxyXG4gICAgICAgIHNldFJlZ2lzdHJhdGlvbihcIiMwMDBcIik7XHJcbiAgICAgICAgc2V0UmVnaXN0cmF0aW9uVGV4dChyZWdpc3RyYXRpb25TdGF0dXMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiRXJyb3JcIjpcclxuICAgICAgICBzZXRSZWdpc3RyYXRpb24oXCIjZDYxYzQxXCIpO1xyXG4gICAgICAgIHNldFJlZ2lzdHJhdGlvblRleHQocmVnaXN0cmF0aW9uU3RhdHVzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIlJlZ2lzdGVyZWRcIjpcclxuICAgICAgICBzZXRSZWdpc3RyYXRpb24oXCIjNDhjYzQ1XCIpO1xyXG4gICAgICAgIHNldFJlZ2lzdHJhdGlvblRleHQocmVnaXN0cmF0aW9uU3RhdHVzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIlJlZ2lzdGVyaW5nXCI6XHJcbiAgICAgICAgc2V0UmVnaXN0cmF0aW9uKFwiI2RjZTMxOVwiKTtcclxuICAgICAgICBzZXRSZWdpc3RyYXRpb25UZXh0KHJlZ2lzdHJhdGlvblN0YXR1cyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJTdG9wcGVkXCI6XHJcbiAgICAgICAgc2V0UmVnaXN0cmF0aW9uKFwiI2Q2MWM0MVwiKTtcclxuICAgICAgICBzZXRSZWdpc3RyYXRpb25UZXh0KHJlZ2lzdHJhdGlvblN0YXR1cyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBjb25uZWN0VG9EZXZpY2UgPSAoKSA9PiB7XHJcbiAgICBqc3hhcGlcclxuICAgICAgLmNvbm5lY3Qoe1xyXG4gICAgICAgIGhvc3Q6IGRldmljZS5ob3N0bmFtZSB8fCBkZXZpY2UuaXAsXHJcbiAgICAgICAgcHJvdG9jb2w6IFwid3M6XCIsXHJcbiAgICAgICAgdXNlcm5hbWU6IGRldmljZS51c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogZGV2aWNlLnBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJlcnJvclwiLCAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29ubmVjdGlvbkN0cigocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyAxKTtcclxuICAgICAgICBzZXRSZWdpc3RyYXRpb25UZXh0KFwiRXJyb3IgQ29ubmVjdGluZ1wiKTtcclxuICAgICAgICBpZiAoY29ubmVjdGlvbkN0ciA+IDApIHtcclxuICAgICAgICAgIHNldERvTm90Q29ubmVjdCh0cnVlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q29ubmVjdGVkKGZhbHNlKTtcclxuICAgICAgICBzZXRDb25uZWN0ZWRNc2coXCJGYWlsZWQgdG8gY29ubmVjdFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKFwicmVhZHlcIiwgYXN5bmMgKHhhcGkpID0+IHtcclxuICAgICAgICBzZXRDb25uZWN0ZWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0Q29ubmVjdGVkTXNnKFwiQ29ubmVjdGVkXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjYWxsID0gYXdhaXQgeGFwaS5TdGF0dXMuQ2FsbC5nZXQoKTtcclxuICAgICAgICBpZiAoY2FsbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjb25zdCBjYWxsSWQgPSBjYWxsWzBdLkNhbGxiYWNrTnVtYmVyLnN1YnN0cmluZyhcclxuICAgICAgICAgICAgY2FsbFswXS5DYWxsYmFja051bWJlci5pbmRleE9mKFwiOlwiKSArIDFcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRDYm4oY2FsbElkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHhhcGkuRXZlbnQuQ2FsbFN1Y2Nlc3NmdWwub24oYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2FsbCA9IGF3YWl0IHhhcGkuU3RhdHVzLkNhbGwuZ2V0KCk7XHJcbiAgICAgICAgICBjb25zdCBjYWxsSWQgPSBjYWxsWzBdLkNhbGxiYWNrTnVtYmVyLnN1YnN0cmluZyhcclxuICAgICAgICAgICAgY2FsbFswXS5DYWxsYmFja051bWJlci5pbmRleE9mKFwiOlwiKSArIDFcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRDYm4oY2FsbElkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgeGFwaS5FdmVudC5DYWxsRGlzY29ubmVjdC5vbigoKSA9PiB7XHJcbiAgICAgICAgICBzZXRDYm4oXCJOb3QgaW4gY2FsbFwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0UGxhdGZvcm0gPSBhd2FpdCB4YXBpLlN0YXR1cy5TeXN0ZW1Vbml0LlByb2R1Y3RQbGF0Zm9ybS5nZXQoKTtcclxuICAgICAgICBzZXRQbGF0Zm9ybShnZXRQbGF0Zm9ybSk7XHJcblxyXG4gICAgICAgIGdldFBlcmlwaGVyYWxTdGF0dXMoeGFwaSk7XHJcblxyXG4gICAgICAgIGdldFJlZ2lzdHJhdGlvblN0YXR1cyh4YXBpKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjb25uZWN0ZWQgfHwgZG9Ob3RDb25uZWN0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb25uZWN0VG9EZXZpY2UoKTtcclxuICAgIH0sIDMwMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtjb25uZWN0ZWQsIGRvTm90Q29ubmVjdF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbm5lY3RlZH1cclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHJlZ2lzdHJhdGlvbiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29ubmVjdGVkdG9vbHRpcH0+e3JlZ2lzdHJhdGlvblRleHR9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFRpdGxlfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmF9IGhyZWY9e2BodHRwczovLyR7dXJsfS9gfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAge2RldmljZS5ob3N0bmFtZSB8fCBkZXZpY2UuaXB9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnB9PntwbGF0Zm9ybX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnB9PkRldmljZSBTdGF0dXM6IHtjb25uZWN0ZWRNc2d9PC9kaXY+XHJcbiAgICAgICAge2Nvbm5lY3RlZCAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnB9PkNhbGwgU3RhdHVzOiB7Y2JufTwvZGl2Pn1cclxuICAgICAgICB7cGxhdGZvcm0gJiYgIXJlZ2lzdHJhdGlvblRleHQgPT0gJ0Vycm9yIENvbm5lY3RpbmcnICYmICFkZXZpY2VzV2l0aG91dFBlcmlwaHJhbHMuaW5jbHVkZXMocGxhdGZvcm0pID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge3BlcmlwaGVyYWwubWFwKChwZXIpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocGVyLnR5cGUgPT0gXCJUb3VjaFBhbmVsXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwZXIudHlwZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wfT5QZXJpcGhlcmFsOiB7cGVyLnR5cGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wfT5cclxuICAgICAgICAgICAgICAgICAgICAgIFBlcmlwaGVyYWwgU3RhdHVzOiB7cGVyLnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9OYXZpZ2F0aW9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XHJcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1lZGlhUXVlcnkoXCIobWF4LXdpZHRoOjYwMHB4KVwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9ufT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hZGRkZXZpY2VcIj5cclxuICAgICAgICAgICAgPGE+QWRkIERldmljZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJ9PlxyXG4gICAgICAgICAgeyFtYXRjaGVzID8gPGxhYmVsIGh0bWxGb3I9XCJmaWx0ZXJcIiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+RmlsdGVyPC9sYWJlbD4gOiBudWxsfVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiZmlsdGVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXttYXRjaGVzID8gXCJGaWx0ZXJcIiA6IG51bGx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XHJcbmltcG9ydCBEZXZpY2VJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL0RldmljZUluZm9cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL05ld1N0YXJ0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1N0YXJ0KCkge1xyXG4gIGNvbnN0IFtkZXZpY2VzLCBzZXREZXZpY2VzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkRGV2aWNlLCBzZXRTZWxlY3RlZERldmljZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBmZXRjaERldmljZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkZXZpY2VBcnJheSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZGV2aWNlcy9cIik7XHJcbiAgICBzZXREZXZpY2VzKGRldmljZUFycmF5LmRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaERldmljZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdERldmljZSA9IChkZXZpY2UpID0+IHtcclxuICAgIHNldFNlbGVjdGVkRGV2aWNlKGRldmljZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+ICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcHB9PlxyXG4gICAgICAgICAge2RldmljZXMgJiZcclxuICAgICAgICAgICAgZGV2aWNlcy5tYXAoKGRldmljZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2RldmljZS5faWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdERldmljZShkZXZpY2UpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8RGV2aWNlSW5mbyBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfSBkZXZpY2U9e2RldmljZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX18yY1hEbVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFRpdGxlXCI6IFwiRGV2aWNlSW5mb19jYXJkVGl0bGVfXzFLdExWXCIsXG5cdFwicFwiOiBcIkRldmljZUluZm9fcF9fM2hScWhcIixcblx0XCJpdGVtXCI6IFwiRGV2aWNlSW5mb19pdGVtX18yelpPUVwiLFxuXHRcImFcIjogXCJEZXZpY2VJbmZvX2FfX0ZhSDA0XCIsXG5cdFwiY29ubmVjdGVkXCI6IFwiRGV2aWNlSW5mb19jb25uZWN0ZWRfXzJQcW85XCIsXG5cdFwiY29ubmVjdGVkdG9vbHRpcFwiOiBcIkRldmljZUluZm9fY29ubmVjdGVkdG9vbHRpcF9fMzRWUVNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdmlnYXRpb25cIjogXCJOYXZpZ2F0aW9uX25hdmlnYXRpb25fXzNFaDR3XCIsXG5cdFwiaW5wdXRcIjogXCJOYXZpZ2F0aW9uX2lucHV0X18yNFRvMFwiLFxuXHRcImZpbHRlclwiOiBcIk5hdmlnYXRpb25fZmlsdGVyX18xcldKU1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXBwXCI6IFwiTmV3U3RhcnRfYXBwX19vbm41c1wiLFxuXHRcImNvbnRhaW5lclwiOiBcIk5ld1N0YXJ0X2NvbnRhaW5lcl9fMTliZFhcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9zdHlsZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc3hhcGlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9