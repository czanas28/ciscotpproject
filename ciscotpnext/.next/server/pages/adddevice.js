(function() {
var exports = {};
exports.id = "pages/adddevice";
exports.ids = ["pages/adddevice"];
exports.modules = {

/***/ "./components/UI/Button.js":
/*!*********************************!*\
  !*** ./components/UI/Button.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\nerdc\\webdev\\react\\ciscotpproject\\ciscotpnext\\components\\UI\\Button.js";
function Button(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: props.style,
    id: props.name,
    name: props.name,
    onClick: props.onClick,
    value: props.value,
    children: props.label
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/UI/Input.js":
/*!********************************!*\
  !*** ./components/UI/Input.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Input; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\Users\\nerdc\\webdev\\react\\ciscotpproject\\ciscotpnext\\components\\UI\\Input.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Input(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      htmlFor: props.name,
      className: props.stylelabel,
      hidden: props.hidden,
      children: props.label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
      id: props.name,
      name: props.name,
      type: props.type,
      placeholder: props.placeholder,
      className: props.styleinput,
      onChange: props.onChange,
      hidden: props.hidden
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./pages/adddevice/index.js":
/*!**********************************!*\
  !*** ./pages/adddevice/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NewDevice; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_UI_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/UI/Input */ "./components/UI/Input.js");
/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/UI/Button */ "./components/UI/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Device.module.css */ "./styles/Device.module.css");
/* harmony import */ var _styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\nerdc\\webdev\\react\\ciscotpproject\\ciscotpnext\\pages\\adddevice\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function NewDevice(props) {
  const {
    0: submitting,
    1: setSubmitting
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: customUI,
    1: setCustomUI
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: formState,
    1: setFormState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    hostname: "",
    ip: "",
    username: "",
    password: "",
    customUi: {
      hasCustomUi: false,
      customUiFile: ""
    },
    associatedAccounts: {
      cms: [],
      webex: [],
      zoom: []
    },
    features: {
      muteOnCallStart: false
    }
  });

  const handleChange = e => {
    if (e.target.name === "customUi") {
      if (customUI) {
        setCustomUI(false);
        setFormState(_objectSpread(_objectSpread({}, formState), {}, {
          [e.target.name]: {
            hasCustomUi: false,
            customUiFile: formState.customUi.customUiFile
          }
        }));
      } else {
        setCustomUI(true);
        setFormState(_objectSpread(_objectSpread({}, formState), {}, {
          [e.target.name]: {
            hasCustomUi: true,
            customUiFile: formState.customUi.customUiFile
          }
        }));
      }
    } else {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        [e.target.name]: e.target.value
      }));
    }
  };

  const handleCustomUiFileUpload = e => {
    console.log(e);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      customUi: {
        hasCustomUi: formState.customUi.hasCustomUi,
        [e.target.name]: e.target.files[0]
      }
    }));
  };

  const handleAssociatedAccounts = e => {
    let accounts = e.target.value;
    const arr = accounts.split(",");
    const emailAccounts = arr.map(account => {
      return account.replace(/\s+/g, "").trim();
    });
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      associatedAccounts: _objectSpread(_objectSpread({}, formState.associatedAccounts), {}, {
        [e.target.name]: emailAccounts
      })
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    const formSubmission = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/devices", {
      device: formState
    });
    console.log(formSubmission.data.message);
    setTimeout(() => {
      setFormState({
        hostname: "",
        ip: "",
        username: "",
        password: "",
        customUi: {
          hasCustomUi: false,
          customUiFile: ""
        },
        associatedAccounts: {
          cms: [],
          webex: [],
          zoom: []
        },
        features: {
          muteOnCallStart: false
        }
      });
    }, 2000);
    setSubmitting(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().asideContainer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().aside),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        className: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().deviceForm),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            margin: "10px auto"
          },
          children: "Connection Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Input__WEBPACK_IMPORTED_MODULE_2__.default, {
          type: "text",
          label: "Hostname",
          name: "hostname",
          onChange: handleChange,
          value: formState.hostname,
          placeholder: "Enter the Hostname/FQDN",
          styleinput: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
          stylelabel: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().label),
          hidden: formState.ip ? true : false,
          required: formState.ip ? false : true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Input__WEBPACK_IMPORTED_MODULE_2__.default, {
          type: "text",
          label: "IP Address",
          name: "ip",
          onChange: handleChange,
          value: formState.ip,
          placeholder: "Enter the IP address",
          styleinput: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
          stylelabel: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().label),
          hidden: formState.hostname ? true : false,
          required: formState.hostname ? false : true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Input__WEBPACK_IMPORTED_MODULE_2__.default, {
          type: "text",
          label: "Username",
          name: "username",
          onChange: handleChange,
          value: formState.username,
          placeholder: "Enter the Username",
          styleinput: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
          stylelabel: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().label),
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Input__WEBPACK_IMPORTED_MODULE_2__.default, {
          type: "text",
          label: "Password",
          name: "password",
          value: formState.password,
          onChange: handleChange,
          placeholder: "Enter the Password",
          styleinput: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
          stylelabel: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().label),
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            margin: "10px auto"
          },
          children: "Associated Accounts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Input__WEBPACK_IMPORTED_MODULE_2__.default, {
          type: "text",
          name: "cms",
          label: "CMS Accounts",
          value: formState.associatedAccounts.cms,
          onChange: handleAssociatedAccounts,
          placeholder: "Enter the associated email addresses, seperated by a comma",
          styleinput: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
          stylelabel: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().label)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Input__WEBPACK_IMPORTED_MODULE_2__.default, {
          type: "text",
          name: "webex",
          label: "Webex Accounts",
          value: formState.associatedAccounts.webex,
          onChange: handleAssociatedAccounts,
          placeholder: "Enter the associated email addresses, seperated by a comma",
          styleinput: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
          stylelabel: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().label)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Input__WEBPACK_IMPORTED_MODULE_2__.default, {
          type: "text",
          name: "zoom",
          label: "Zoom Accounts",
          value: formState.associatedAccounts.zoom,
          onChange: handleAssociatedAccounts,
          placeholder: "Enter the associated email addresses, seperated by a comma",
          styleinput: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
          stylelabel: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().label)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            margin: "10px auto"
          },
          children: "Custom User Interface"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Input__WEBPACK_IMPORTED_MODULE_2__.default, {
          type: "checkbox",
          label: "Custom UI",
          name: "customUi",
          value: customUI,
          onChange: handleChange,
          styleinput: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
          stylelabel: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().label)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, this), customUI ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Input__WEBPACK_IMPORTED_MODULE_2__.default, {
          type: "file",
          label: "Choose a File",
          name: "customUiFile",
          onChange: handleCustomUiFileUpload,
          styleinput: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
          stylelabel: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().label)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 13
        }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            margin: "10px auto"
          },
          children: "Features"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          style: (_styles_Device_module_css__WEBPACK_IMPORTED_MODULE_5___default().submitBtn),
          label: "Submit",
          value: "submit",
          disabled: submitting ? false : true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./styles/Device.module.css":
/*!**********************************!*\
  !*** ./styles/Device.module.css ***!
  \**********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"asideContainer": "Device_asideContainer__3XwCW",
	"aside": "Device_aside__2hItx",
	"formLabel": "Device_formLabel__1cxzB",
	"btnFormOptions": "Device_btnFormOptions__13txU",
	"deviceForm": "Device_deviceForm__94oUQ",
	"input": "Device_input__lmSvM",
	"label": "Device_label__3sGkJ",
	"submitBtn": "Device_submitBtn__1fzHL"
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/adddevice/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXNjb3RwbmV4dC8uL2NvbXBvbmVudHMvVUkvQnV0dG9uLmpzIiwid2VicGFjazovL2Npc2NvdHBuZXh0Ly4vY29tcG9uZW50cy9VSS9JbnB1dC5qcyIsIndlYnBhY2s6Ly9jaXNjb3RwbmV4dC8uL3BhZ2VzL2FkZGRldmljZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXNjb3RwbmV4dC8uL3N0eWxlcy9EZXZpY2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9jaXNjb3RwbmV4dC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vY2lzY290cG5leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Npc2NvdHBuZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJzdHlsZSIsIm5hbWUiLCJvbkNsaWNrIiwidmFsdWUiLCJsYWJlbCIsIklucHV0Iiwic3R5bGVsYWJlbCIsImhpZGRlbiIsInR5cGUiLCJwbGFjZWhvbGRlciIsInN0eWxlaW5wdXQiLCJvbkNoYW5nZSIsIk5ld0RldmljZSIsInN1Ym1pdHRpbmciLCJzZXRTdWJtaXR0aW5nIiwidXNlU3RhdGUiLCJjdXN0b21VSSIsInNldEN1c3RvbVVJIiwiZm9ybVN0YXRlIiwic2V0Rm9ybVN0YXRlIiwiaG9zdG5hbWUiLCJpcCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjdXN0b21VaSIsImhhc0N1c3RvbVVpIiwiY3VzdG9tVWlGaWxlIiwiYXNzb2NpYXRlZEFjY291bnRzIiwiY21zIiwid2ViZXgiLCJ6b29tIiwiZmVhdHVyZXMiLCJtdXRlT25DYWxsU3RhcnQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaGFuZGxlQ3VzdG9tVWlGaWxlVXBsb2FkIiwiY29uc29sZSIsImxvZyIsImZpbGVzIiwiaGFuZGxlQXNzb2NpYXRlZEFjY291bnRzIiwiYWNjb3VudHMiLCJhcnIiLCJzcGxpdCIsImVtYWlsQWNjb3VudHMiLCJtYXAiLCJhY2NvdW50IiwicmVwbGFjZSIsInRyaW0iLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1TdWJtaXNzaW9uIiwiYXhpb3MiLCJkZXZpY2UiLCJkYXRhIiwibWVzc2FnZSIsInNldFRpbWVvdXQiLCJzdHlsZXMiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ3BDLHNCQUNFO0FBQ0UsYUFBUyxFQUFFQSxLQUFLLENBQUNDLEtBRG5CO0FBRUUsTUFBRSxFQUFFRCxLQUFLLENBQUNFLElBRlo7QUFHRSxRQUFJLEVBQUVGLEtBQUssQ0FBQ0UsSUFIZDtBQUlFLFdBQU8sRUFBRUYsS0FBSyxDQUFDRyxPQUpqQjtBQUtFLFNBQUssRUFBRUgsS0FBSyxDQUFDSSxLQUxmO0FBQUEsY0FRR0osS0FBSyxDQUFDSztBQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JjLFNBQVNDLEtBQVQsQ0FBZU4sS0FBZixFQUFzQjtBQUNuQyxzQkFDRTtBQUFBLDRCQUNFO0FBQ0UsYUFBTyxFQUFFQSxLQUFLLENBQUNFLElBRGpCO0FBRUUsZUFBUyxFQUFFRixLQUFLLENBQUNPLFVBRm5CO0FBR0UsWUFBTSxFQUFFUCxLQUFLLENBQUNRLE1BSGhCO0FBQUEsZ0JBS0dSLEtBQUssQ0FBQ0s7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRTtBQUNFLFFBQUUsRUFBRUwsS0FBSyxDQUFDRSxJQURaO0FBRUUsVUFBSSxFQUFFRixLQUFLLENBQUNFLElBRmQ7QUFHRSxVQUFJLEVBQUVGLEtBQUssQ0FBQ1MsSUFIZDtBQUlFLGlCQUFXLEVBQUVULEtBQUssQ0FBQ1UsV0FKckI7QUFLRSxlQUFTLEVBQUVWLEtBQUssQ0FBQ1csVUFMbkI7QUFNRSxjQUFRLEVBQUVYLEtBQUssQ0FBQ1ksUUFObEI7QUFP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O0FBTjFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRE8sR0FTTCxJQXJHTixlQXNHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRHRixlQXVHRTtBQUFLLGVBQUssRUFBRTtBQUFFc0Qsa0JBQU0sRUFBRTtBQUFWLFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkdGLGVBd0dFLDhEQUFDLDBEQUFEO0FBQ0UsZUFBSyxFQUFFRCw0RUFEVDtBQUVFLGVBQUssRUFBQyxRQUZSO0FBR0UsZUFBSyxFQUFDLFFBSFI7QUFJRSxrQkFBUSxFQUFFNUMsVUFBVSxHQUFHLEtBQUgsR0FBVztBQUpqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXhHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUhELEM7Ozs7Ozs7Ozs7QUMvT0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvYWRkZGV2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgY2xhc3NOYW1lPXtwcm9wcy5zdHlsZX1cclxuICAgICAgaWQ9e3Byb3BzLm5hbWV9XHJcbiAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgXHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5sYWJlbH1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXQocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGxhYmVsXHJcbiAgICAgICAgaHRtbEZvcj17cHJvcHMubmFtZX1cclxuICAgICAgICBjbGFzc05hbWU9e3Byb3BzLnN0eWxlbGFiZWx9XHJcbiAgICAgICAgaGlkZGVuPXtwcm9wcy5oaWRkZW59XHJcbiAgICAgID5cclxuICAgICAgICB7cHJvcHMubGFiZWx9XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgdHlwZT17cHJvcHMudHlwZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5zdHlsZWlucHV0fVxyXG4gICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICBoaWRkZW49e3Byb3BzLmhpZGRlbn1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0lucHV0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvRGV2aWNlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld0RldmljZShwcm9wcykge1xyXG4gIGNvbnN0IFtzdWJtaXR0aW5nLCBzZXRTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2N1c3RvbVVJLCBzZXRDdXN0b21VSV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBbZm9ybVN0YXRlLCBzZXRGb3JtU3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgaG9zdG5hbWU6IFwiXCIsXHJcbiAgICBpcDogXCJcIixcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBjdXN0b21VaToge1xyXG4gICAgICBoYXNDdXN0b21VaTogZmFsc2UsXHJcbiAgICAgIGN1c3RvbVVpRmlsZTogXCJcIixcclxuICAgIH0sXHJcbiAgICBhc3NvY2lhdGVkQWNjb3VudHM6IHtcclxuICAgICAgY21zOiBbXSxcclxuICAgICAgd2ViZXg6IFtdLFxyXG4gICAgICB6b29tOiBbXSxcclxuICAgIH0sXHJcbiAgICBmZWF0dXJlczoge1xyXG4gICAgICBtdXRlT25DYWxsU3RhcnQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5uYW1lID09PSBcImN1c3RvbVVpXCIpIHtcclxuICAgICAgaWYgKGN1c3RvbVVJKSB7XHJcbiAgICAgICAgc2V0Q3VzdG9tVUkoZmFsc2UpO1xyXG4gICAgICAgIHNldEZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAuLi5mb3JtU3RhdGUsXHJcbiAgICAgICAgICBbZS50YXJnZXQubmFtZV06IHtcclxuICAgICAgICAgICAgaGFzQ3VzdG9tVWk6IGZhbHNlLFxyXG4gICAgICAgICAgICBjdXN0b21VaUZpbGU6IGZvcm1TdGF0ZS5jdXN0b21VaS5jdXN0b21VaUZpbGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEN1c3RvbVVJKHRydWUpO1xyXG4gICAgICAgIHNldEZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAuLi5mb3JtU3RhdGUsXHJcbiAgICAgICAgICBbZS50YXJnZXQubmFtZV06IHtcclxuICAgICAgICAgICAgaGFzQ3VzdG9tVWk6IHRydWUsXHJcbiAgICAgICAgICAgIGN1c3RvbVVpRmlsZTogZm9ybVN0YXRlLmN1c3RvbVVpLmN1c3RvbVVpRmlsZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEZvcm1TdGF0ZSh7XHJcbiAgICAgICAgLi4uZm9ybVN0YXRlLFxyXG4gICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUN1c3RvbVVpRmlsZVVwbG9hZCA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHNldEZvcm1TdGF0ZSh7XHJcbiAgICAgIC4uLmZvcm1TdGF0ZSxcclxuICAgICAgY3VzdG9tVWk6IHtcclxuICAgICAgICBoYXNDdXN0b21VaTogZm9ybVN0YXRlLmN1c3RvbVVpLmhhc0N1c3RvbVVpLFxyXG4gICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQuZmlsZXNbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBc3NvY2lhdGVkQWNjb3VudHMgPSAoZSkgPT4ge1xyXG4gICAgbGV0IGFjY291bnRzID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCBhcnIgPSBhY2NvdW50cy5zcGxpdChcIixcIik7XHJcbiAgICBjb25zdCBlbWFpbEFjY291bnRzID0gYXJyLm1hcCgoYWNjb3VudCkgPT4ge1xyXG4gICAgICByZXR1cm4gYWNjb3VudC5yZXBsYWNlKC9cXHMrL2csIFwiXCIpLnRyaW0oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNldEZvcm1TdGF0ZSh7XHJcbiAgICAgIC4uLmZvcm1TdGF0ZSxcclxuICAgICAgYXNzb2NpYXRlZEFjY291bnRzOiB7XHJcbiAgICAgICAgLi4uZm9ybVN0YXRlLmFzc29jaWF0ZWRBY2NvdW50cyxcclxuICAgICAgICBbZS50YXJnZXQubmFtZV06IGVtYWlsQWNjb3VudHMsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgZm9ybVN1Ym1pc3Npb24gPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9kZXZpY2VzXCIsIHtcclxuICAgICAgZGV2aWNlOiBmb3JtU3RhdGUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhmb3JtU3VibWlzc2lvbi5kYXRhLm1lc3NhZ2UpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRGb3JtU3RhdGUoe1xyXG4gICAgICAgIGhvc3RuYW1lOiBcIlwiLFxyXG4gICAgICAgIGlwOiBcIlwiLFxyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIGN1c3RvbVVpOiB7XHJcbiAgICAgICAgICBoYXNDdXN0b21VaTogZmFsc2UsXHJcbiAgICAgICAgICBjdXN0b21VaUZpbGU6IFwiXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3NvY2lhdGVkQWNjb3VudHM6IHtcclxuICAgICAgICAgIGNtczogW10sXHJcbiAgICAgICAgICB3ZWJleDogW10sXHJcbiAgICAgICAgICB6b29tOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZlYXR1cmVzOiB7XHJcbiAgICAgICAgICBtdXRlT25DYWxsU3RhcnQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMjAwMCk7XHJcblxyXG4gICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXNpZGVDb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFzaWRlfT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5kZXZpY2VGb3JtfT5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4IGF1dG9cIiB9fT5Db25uZWN0aW9uIEluZm9ybWF0aW9uPC9kaXY+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkhvc3RuYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cImhvc3RuYW1lXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS5ob3N0bmFtZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgSG9zdG5hbWUvRlFETlwiXHJcbiAgICAgICAgICAgIHN0eWxlaW5wdXQ9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgc3R5bGVsYWJlbD17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICBoaWRkZW49e2Zvcm1TdGF0ZS5pcCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgcmVxdWlyZWQ9e2Zvcm1TdGF0ZS5pcCA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIklQIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICBuYW1lPVwiaXBcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVN0YXRlLmlwfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBJUCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgc3R5bGVpbnB1dD17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICBzdHlsZWxhYmVsPXtzdHlsZXMubGFiZWx9XHJcbiAgICAgICAgICAgIGhpZGRlbj17Zm9ybVN0YXRlLmhvc3RuYW1lID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICByZXF1aXJlZD17Zm9ybVN0YXRlLmhvc3RuYW1lID8gZmFsc2UgOiB0cnVlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVN0YXRlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBVc2VybmFtZVwiXHJcbiAgICAgICAgICAgIHN0eWxlaW5wdXQ9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgc3R5bGVsYWJlbD17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHN0eWxlaW5wdXQ9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgc3R5bGVsYWJlbD17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4IGF1dG9cIiB9fT5Bc3NvY2lhdGVkIEFjY291bnRzPC9kaXY+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY21zXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJDTVMgQWNjb3VudHNcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVN0YXRlLmFzc29jaWF0ZWRBY2NvdW50cy5jbXN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBc3NvY2lhdGVkQWNjb3VudHN9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIGFzc29jaWF0ZWQgZW1haWwgYWRkcmVzc2VzLCBzZXBlcmF0ZWQgYnkgYSBjb21tYVwiXHJcbiAgICAgICAgICAgIHN0eWxlaW5wdXQ9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgc3R5bGVsYWJlbD17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ3ZWJleFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiV2ViZXggQWNjb3VudHNcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVN0YXRlLmFzc29jaWF0ZWRBY2NvdW50cy53ZWJleH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFzc29jaWF0ZWRBY2NvdW50c31cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgYXNzb2NpYXRlZCBlbWFpbCBhZGRyZXNzZXMsIHNlcGVyYXRlZCBieSBhIGNvbW1hXCJcclxuICAgICAgICAgICAgc3R5bGVpbnB1dD17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICBzdHlsZWxhYmVsPXtzdHlsZXMubGFiZWx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInpvb21cIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlpvb20gQWNjb3VudHNcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVN0YXRlLmFzc29jaWF0ZWRBY2NvdW50cy56b29tfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQXNzb2NpYXRlZEFjY291bnRzfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBhc3NvY2lhdGVkIGVtYWlsIGFkZHJlc3Nlcywgc2VwZXJhdGVkIGJ5IGEgY29tbWFcIlxyXG4gICAgICAgICAgICBzdHlsZWlucHV0PXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIHN0eWxlbGFiZWw9e3N0eWxlcy5sYWJlbH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMTBweCBhdXRvXCIgfX0+Q3VzdG9tIFVzZXIgSW50ZXJmYWNlPC9kaXY+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgbGFiZWw9XCJDdXN0b20gVUlcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY3VzdG9tVWlcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Y3VzdG9tVUl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHN0eWxlaW5wdXQ9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgc3R5bGVsYWJlbD17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtjdXN0b21VSSA/IChcclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ2hvb3NlIGEgRmlsZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImN1c3RvbVVpRmlsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUN1c3RvbVVpRmlsZVVwbG9hZH1cclxuICAgICAgICAgICAgICBzdHlsZWlucHV0PXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgc3R5bGVsYWJlbD17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMTBweCBhdXRvXCIgfX0+RmVhdHVyZXM8L2Rpdj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5zdWJtaXRCdG59XHJcbiAgICAgICAgICAgIGxhYmVsPVwiU3VibWl0XCJcclxuICAgICAgICAgICAgdmFsdWU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0dGluZyA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXNpZGVDb250YWluZXJcIjogXCJEZXZpY2VfYXNpZGVDb250YWluZXJfXzNYd0NXXCIsXG5cdFwiYXNpZGVcIjogXCJEZXZpY2VfYXNpZGVfXzJoSXR4XCIsXG5cdFwiZm9ybUxhYmVsXCI6IFwiRGV2aWNlX2Zvcm1MYWJlbF9fMWN4ekJcIixcblx0XCJidG5Gb3JtT3B0aW9uc1wiOiBcIkRldmljZV9idG5Gb3JtT3B0aW9uc19fMTN0eFVcIixcblx0XCJkZXZpY2VGb3JtXCI6IFwiRGV2aWNlX2RldmljZUZvcm1fXzk0b1VRXCIsXG5cdFwiaW5wdXRcIjogXCJEZXZpY2VfaW5wdXRfX2xtU3ZNXCIsXG5cdFwibGFiZWxcIjogXCJEZXZpY2VfbGFiZWxfXzNzR2tKXCIsXG5cdFwic3VibWl0QnRuXCI6IFwiRGV2aWNlX3N1Ym1pdEJ0bl9fMWZ6SExcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9