(this["webpackChunkreact_webpack_dev"] = this["webpackChunkreact_webpack_dev"] || []).push([["main"],{

/***/ 48187:
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketObj": () => (/* binding */ TicketObj),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ 95722);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ClickUpStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ClickUpStatus */ 39731);
/* harmony import */ var _components_TicketForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TicketForm */ 60282);
/* harmony import */ var _components_formArrays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/formArrays */ 7818);
/* harmony import */ var https_clickup_com_landing_images_brand_assets_logo_symbol_color_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! https://clickup.com/landing/images/brand-assets/logo-symbol-color.svg */ 70);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_clickup_com_landing_images_brand_assets_logo_symbol_color_svg__WEBPACK_IMPORTED_MODULE_5__, _components_TicketForm__WEBPACK_IMPORTED_MODULE_3__, _components_ClickUpStatus__WEBPACK_IMPORTED_MODULE_2__]);
([https_clickup_com_landing_images_brand_assets_logo_symbol_color_svg__WEBPACK_IMPORTED_MODULE_5__, _components_TicketForm__WEBPACK_IMPORTED_MODULE_3__, _components_ClickUpStatus__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var TicketObj = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();

var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "App is loading")),
      _useState4 = _slicedToArray(_useState3, 2),
      child = _useState4[0],
      setChild = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showModal = _useState6[0],
      setShowModal = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      contact = _useState8[0],
      setContact = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      ticket = _useState10[0],
      setTicket = _useState10[1];
  /* function that runs on ticket update to check contact company */


  var eventCallback = function eventCallback(event, client) {
    client.data.get("ticket").then(function (data) {
      /* if no company attached to contact and customer field has been updated  */
      if (data.ticket.custom_fields.cf_customer && ticket.custom_fields.cf_customer === null && contact.company_id === null) {
        var _data = {
          "company_id": _components_formArrays__WEBPACK_IMPORTED_MODULE_4__.companies[_data.ticket.custom_fields.cf_customer]
        };
        var options = {
          //put in API key
          headers: {
            'Authorization': "Basic ",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(_data)
        };
        client.request.put("https://onerail.freshdesk.com/api/v2/contacts/".concat(contact.id), options).then(function (data) {
          console.log(data);
        })["catch"](function (error) {
          console.log(error);
        });
        /* if contact company exists but customer ticket field has not been filled, fill it  */
      } else if (contact.company_id && ticket.custom_fields.cf_customer === null && data.ticket.custom_fields.cf_customer === null) {
        var companyKeys = Object.keys(_components_formArrays__WEBPACK_IMPORTED_MODULE_4__.companies);
        var companyID;
        companyKeys.map(function (key, i) {
          if (_components_formArrays__WEBPACK_IMPORTED_MODULE_4__.companies[key] === contact.company_id) {
            companyID = key;
          }
        });
        var _data2 = {
          "custom_fields": {
            "cf_customer": companyID
          }
        };
        var options = {
          //put in API key
          headers: {
            'Authorization': "Basic ",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(_data2)
        };
        client.request.put("https://onerail.freshdesk.com/api/v2/tickets/".concat(ticket.id), options).then(function (data) {
          console.log(data);
        })["catch"](function (error) {
          console.log(error);
        });
        /* if company exists log it or log internal agent*/
      } else {
        contact.company_id ? console.log("customer belongs to ", contact.company_id) : console.log("ticket created by internal agent");
      }

      event.helper.done();
      event.helper.fail('errorMessage');
    });
  };
  /* function to run on status change. opens ticketform  modal */


  var propertyChangeCallback = function propertyChangeCallback(event, client, ticket) {
    var event_data = event.helper.getData();
    client.instance.close();

    if (event_data["new"] === 8 && ticket.custom_fields.cf_clickup_ticket === null) {
      setShowModal(true);
    }
  };
  /* on load create script element to import freshdesk cdn */


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var script = document.createElement('script');
    script.src = 'https://static.freshdev.io/fdk/2.0/assets/fresh_client.js';
    script.addEventListener('load', function () {
      return setLoaded(true);
    });
    script.defer = true;
    document.head.appendChild(script);
  }, []);
  /* enable eventcallback after ticket and contact stored in state */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (ticket && contact) {
      app.initialized().then(function (client) {
        client.events.on("ticket.propertiesUpdated", function (event) {
          return eventCallback(event, client);
        }, {
          intercept: true
        });
      });
    }
  }, [ticket, contact]);
  /* load components after freshdesk cdn loaded*/

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!loaded && !showModal) return;
    app.initialized().then(function (client) {
      client.data.get('contact').then(function (data) {
        setContact(data.contact);
      });
      client.data.get('ticket').then(function (data) {
        /* set initial component to clickup ticket maker */
        if (window.innerWidth < 300) {
          setChild( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ClickUpStatus__WEBPACK_IMPORTED_MODULE_2__["default"], {
            ticket: data.ticket,
            client: client
          }));
        } else {
          setChild( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_TicketForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
            ticket: data.ticket,
            client: client
          }));
        }

        setTicket(data.ticket);
        client.events.on("ticket.statusChanged", function (event) {
          return propertyChangeCallback(event, client, data.ticket);
        });
        /* set app activate and deactivate events and callbacks and pass retrieved ticket data*/
        // client.events.on("app.activated", ()=>onAppActivated(data.ticket, client));
        // client.events.on("app.deactivated", ()=>onAppDeactivated(data.ticket, client)); 
      });
    });

    if (showModal) {
      /*initialize client to pull modal */
      app.initialized().then(function (client) {
        client["interface"].trigger("showModal", {
          title: "".concat(https_clickup_com_landing_images_brand_assets_logo_symbol_color_svg__WEBPACK_IMPORTED_MODULE_5__["default"], "ClickUp Integration"),
          template: "index.html"
        }).then(function (data) {})["catch"](function (error) {});
      });
    }
  }, [loaded, showModal]);
  /* on app activate and deactivate event callbacks. not needed but maybe in future */
  // const onAppActivated =(ticket, client)=>{
  //     setChild((<ClickUpStatus ticket={ticket} client={client} />))
  // }
  // const onAppDeactivated = (ticket, client)=>{
  //     setChild((<TicketForm ticket={ticket} client={client} />))
  // }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TicketObj.Provider, {
    value: {
      setChild: setChild
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, child));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
});

/***/ }),

/***/ 39731:
/*!*****************************************!*\
  !*** ./src/components/ClickUpStatus.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ 9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ 48187);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_App__WEBPACK_IMPORTED_MODULE_2__]);
_App__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function ClickUpStatus(props) {
  var ticket = props.ticket,
      client = props.client;
  var ticketContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_App__WEBPACK_IMPORTED_MODULE_2__.TicketObj);
  var setChild = ticketContext.setChild;
  console.log("context", ticketContext);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      customID = _useState2[0],
      setCustomID = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      clickUpExists = _useState4[0],
      setClickUpExists = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      clickTick = _useState6[0],
      setClickTick = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setCustomID(ticket.custom_fields.cf_clickup_ticket); // need to make new field in freshdesk and then change this to find that value
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log(customID);

    if (customID === null) {
      setClickUpExists(false);
    } else {// var config = {
      //   method: 'get',
      //   url: `https://api.clickup.com/api/v2/task/${customID}/?custom_task_ids=true`,
      //   headers: { 
      //     'Authorization': '"access_token"'
      //   }
      // };
      // axios(config)
      // .then(function (response) {
      //   console.log(JSON.stringify(response.data));
      //   setClickTick(response.data)
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    }
  }, [customID]);

  var openClickUpModal = function openClickUpModal() {
    client["interface"].trigger("showModal", {
      title: "Click up Integration",
      template: "clickup.html",
      data: ticket
    }).then(function (data) {// data - success message
    })["catch"](function (error) {// error - error object
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, clickUpExists && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      border: '1px solid lightgrey',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      flexDirection: "column",
      paddingTop: '2vh',
      width: '98vw',
      borderRadius: "4px",
      height: "95vh"
    }
  }, "click up ticket number is ", customID, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: openClickUpModal
  }, "More Detailed View")), !clickUpExists && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      border: '1px solid lightgrey',
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      flexDirection: "column",
      padding: '1vh',
      width: '94vw',
      borderRadius: "4px",
      height: "94vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Click up ticket doesn't exist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "To make one, switch status to 'In Development'")));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClickUpStatus);
});

/***/ }),

/***/ 48122:
/*!***********************************!*\
  !*** ./src/components/Success.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);


function Success(props) {
  var clickCustID = props.clickCustID,
      client = props.client;
  setTimeout(function () {
    client.instance.close();
  }, 2000);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Click up Ticket sent, ticket created ", clickCustID, " and Freshdesk ticket updated successfully. You can close this window.");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Success);

/***/ }),

/***/ 60282:
/*!**************************************!*\
  !*** ./src/components/TicketForm.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ 45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ 62598);
/* harmony import */ var _formArrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formArrays */ 7818);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App */ 48187);
/* harmony import */ var _Success__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Success */ 48122);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ 22715);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ 53640);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ 60076);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ 16012);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ 99460);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ 99226);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ 58308);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ 63931);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ 69397);
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! form-data */ 6230);
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-dropzone */ 65012);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ 42003);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_App__WEBPACK_IMPORTED_MODULE_3__]);
_App__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var TicketForm = function TicketForm(props) {
  var ticket = props.ticket,
      client = props.client;
  var ticketContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_App__WEBPACK_IMPORTED_MODULE_3__.TicketObj);
  var setChild = ticketContext.setChild;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      files = _useState4[0],
      setFiles = _useState4[1];
  /* send attachments to clickup */


  var sendAttachments = function sendAttachments(id, files) {
    files.map(function (file, i) {
      console.log("file", file.path);
      var form = new (form_data__WEBPACK_IMPORTED_MODULE_5___default())();
      form.append("attachment", file.path);
      form.append("filename", file.name);
      var options = {
        headers: {
          'Authorization': '',
          'Content-Type': 'multipart/form-data'
        },
        body: form
      };
      var url = "https://api.clickup.com/api/v2/task/".concat(id, "/attachment");

      var _iterator = _createForOfIteratorHelper(form.values()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _i2 = _step.value;
          console.log("values", _i2);
        } // client.request.post(url, options)
        // .then(function(data){
        //   console.log("data", data)
        // }
        // .catch(function(error){
        //   console.log("error",error)
        // }))

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  };
  /* get click up custom id after ticket creation */


  var getClickUpCustomID = function getClickUpCustomID(id) {
    var options = {
      headers: {
        //need clickup api key
        'Authorization': ''
      }
    };
    client.request.get("https://api.clickup.com/api/v2/task/".concat(id), options).then(function (data) {
      var response = JSON.parse(data.response);
      console.log(response.custom_id);

      if (response.custom_id === null) {
        getClickUpCustomID(id);
      } else {
        updateFreshdeskWithClickup(response.custom_id);
      }
    })["catch"](function (error) {
      console.log(error);
    });
  };
  /* once clickup cutom id is recieved, update freshdesk ticket field with it */


  var updateFreshdeskWithClickup = function updateFreshdeskWithClickup(custom_id) {
    var data = {
      "custom_fields": {
        "cf_clickup_ticket": custom_id
      }
    };
    var options = {
      headers: {
        'Authorization': "Basic ",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    client.request.put("https://onerail.freshdesk.com/api/v2/tickets/".concat(ticket.id), options).then(function (data) {
      console.log(data);
      setChild( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Success__WEBPACK_IMPORTED_MODULE_4__["default"], {
        client: client,
        clickCustID: custom_id
      }));
    })["catch"](function (error) {
      console.log(error);
    });
  };
  /* set priority level based on priority uuid. maybe find better way idk */


  var handlePriority = function handlePriority(priority) {
    var level = 0;

    switch (priority) {
      case 'a932b0ae-1ce9-4664-9b21-af813f5e5e97':
        level = 4;
        break;

      case 'dfc34a8f-0c76-4e30-a522-9b7caa722d92':
        level = 3;
        break;

      case '23a52a86-534e-4d5a-8adc-274054d1eb19':
        level = 2;
        break;

      case '72790d5b-fb1e-44b6-be6a-59f8ff4e5ac3':
        level = 1;
        break;
    }

    return level;
  };
  /* remove file from attachment array */


  var removeFile = function removeFile(index) {
    var newFiles = _toConsumableArray(files);

    newFiles.splice(index, 1);
    setFiles(newFiles);
  };
  /* style elements for drag and drop. move to CSS file */


  var baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  var thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  var thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  var thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  var img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };
  /********************** */

  /* generate thumbnail previews of files */

  var thumbs = files.map(function (file, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: thumb,
      key: file.name,
      onClick: function onClick() {
        return removeFile(i);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: thumbInner
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: file.preview,
      style: img
    })));
  });
  /* creates payload from formik values and sends it to clickup */

  var onSubmit = function onSubmit(values) {
    var level = handlePriority(values.priority);
    var dueDate = "".concat(values.reqDueDate, "T00:00:00");
    var milliDate = Date.parse(dueDate);
    var timeEst = milliDate - Date.now();
    var payload = {
      "name": values.title,
      "markdown_description": "### Problem Description: \n ".concat(values.description, " \n ### Steps to Reproduce: \n ").concat(values.steps, " \n ### Acceptance Criteria: \n ").concat(values.acceptance),
      "assignees": values.assignees,
      "tags": values.tags,
      "status": "Requested",
      "priority": level,
      "due_date": milliDate,
      "due_date_time": false,
      "time_estimate": timeEst,
      "start_date": Date.now(),
      "start_date_time": false,
      "notify_all": true,
      "parent": null,
      "links_to": null,
      "check_required_custom_Textfields": true,
      "custom_fields": [{
        "id": "693b7b05-8c30-4e7b-be39-295245333faf",
        "value": values.reqCustomer
      }, {
        "id": "5418bbd8-47f5-479c-8b07-88dded5b0540",
        "value": "Freshdesk Ticket ".concat(ticket.id)
      }, {
        "id": "9cfbd761-8aff-416c-bd8e-6fb06f2849f3",
        "value": values.priority
      }]
    };
    setLoading(true);
    var options = {
      headers: {
        /*GET API KEY*/
        'Authorization': '',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }; // client.request.post("https://api.clickup.com/api/v2/list/71601233/task", options).then(
    //   function(data){
    //     let response = JSON.parse(data.response)
    //     console.log("response form clickup:",response.id)

    /* on successful ticket creation, send attachments */
    //     sendAttachments(response.id, values.attachments)

    /* get custom id from clickup */
    //     setTimeout(
    //       ()=>{
    //         getClickUpCustomID(response.id)
    //       }, 500)
    //   },
    //   function(error){
    //     console.log(error)
    //   }
    // )
  };

  var validate = function validate(values) {
    var errors = {};

    if (!values.ticketID) {
      errors.ticketID = "Ticket ID required";
    }

    if (!values.title) {
      errors.title = "Title required";
    }

    if (!values.description) {
      errors.description = "Description required";
    }

    if (!values.steps) {
      errors.steps = "Steps required";
    }

    if (!values.acceptance) {
      errors.acceptance = "Acceptance required";
    }

    if (!values.reqCustomer) {
      errors.reqCustomer = "Requesting customer required";
    }

    if (values.assignees.length === 0) {
      errors.assignees = "Assignees required";
    }

    if (values.tags.length === 0) {
      errors.tags = "Tags required";
    }

    if (!values.priority) {
      errors.priority = "Priority required";
    }

    if (!values.reqDueDate) {
      errors.reqDueDate = "Requested date required";
    }

    return errors;
  };

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useFormik)({
    initialValues: {
      ticketID: ticket.id,
      title: ticket.subject,
      description: "",
      steps: "",
      acceptance: "",
      reqCustomer: "",
      assignees: [],
      tags: [],
      priority: _formArrays__WEBPACK_IMPORTED_MODULE_2__.priorityArr[ticket.priority - 1].value,
      reqDueDate: 0,
      attachments: []
    },
    validate: validate,
    onSubmit: onSubmit
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginTop: "2vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "ticketID",
    name: "ticketID",
    className: "input-div",
    label: "TicketID:",
    value: formik.values.ticketID,
    onChange: formik.handleChange,
    error: Boolean(formik.errors.ticketID)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "title",
    name: "title",
    type: "text",
    className: "input",
    label: "Title:",
    value: formik.values.title,
    onChange: formik.handleChange,
    error: Boolean(formik.errors.title)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    shrink: true,
    htmlFor: "assignees",
    style: {
      backgroundColor: "white",
      padding: "3px"
    }
  }, "Assignee:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: "assignees",
    labelID: "assignees",
    id: "assignees",
    name: "assignees",
    multiple: true,
    defaultValue: "Assignee",
    onChange: formik.handleChange,
    value: formik.values.assignees,
    error: Boolean(formik.errors.assignees),
    input: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: "assignees",
      label: "Chip"
    }),
    renderValue: function renderValue(selected) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
        sx: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: 0.5
        }
      }, selected.map(function (value) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
          key: value,
          label: _formArrays__WEBPACK_IMPORTED_MODULE_2__.assigneeArr.filter(function (item) {
            return item[value];
          })[0][value]
        });
      }));
    }
  }, _formArrays__WEBPACK_IMPORTED_MODULE_2__.assigneeArr.map(function (name) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: name,
      value: name.value
    }, name.label);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    shrink: true,
    htmlFor: "description",
    style: {
      backgroundColor: "white",
      padding: "3px"
    }
  }, "Description:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "desription",
    label: "Description",
    "aria-label": "description",
    name: "description",
    className: "textarea",
    placeholder: "Enter description of problem",
    value: formik.values.description,
    onChange: formik.handleChange,
    error: Boolean(formik.errors.description),
    multiline: true,
    minRows: 3
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    shrink: true,
    htmlFor: "steps",
    style: {
      backgroundColor: "white",
      padding: "3px"
    }
  }, "Steps to Reproduce:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "steps",
    "aria-label": "steps",
    name: "steps",
    className: "textarea",
    placeholder: "Enter steps to reproduce problem",
    value: formik.values.steps,
    onChange: formik.handleChange,
    error: Boolean(formik.errors.steps),
    multiline: true,
    minRows: 3
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    shrink: true,
    htmlFor: "notes",
    style: {
      backgroundColor: "white",
      padding: "3px"
    }
  }, "Acceptance Criteria:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "acceptance",
    "aria-label": "acceptance",
    name: "acceptance",
    className: "textarea",
    placeholder: "Enter acceptance criteria for problem resolution",
    value: formik.values.acceptance,
    onChange: formik.handleChange,
    error: Boolean(formik.errors.acceptance),
    multiline: true,
    minRows: 3
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    shrink: true,
    htmlFor: "date",
    style: {
      backgroundColor: "white",
      padding: "3px"
    }
  }, "Requested Due Date:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "date",
    id: "date",
    name: "reqDueDate",
    className: "input",
    value: formik.values.reqDueDate,
    onChange: formik.handleChange,
    error: Boolean(formik.errors.reqDueDate)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    error: Boolean(formik.errors.reqCustomer)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    shrink: true,
    htmlFor: "reqCustomer",
    style: {
      backgroundColor: "white",
      padding: "3px"
    }
  }, "Requesting Customer:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "reqCustomer",
    name: "reqCustomer",
    className: "input",
    value: formik.values.reqCustomer,
    onChange: formik.handleChange,
    input: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: "reqCustomer",
      label: "reqCustomer"
    }),
    style: {
      height: "200%"
    }
  }, _formArrays__WEBPACK_IMPORTED_MODULE_2__.requestingArr.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: item.label,
      value: item.value
    }, item.label);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    error: Boolean(formik.errors.priority)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    shrink: true,
    htmlFor: "priority",
    style: {
      backgroundColor: "white",
      padding: "3px"
    }
  }, "Priority:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "priority",
    name: "priority",
    className: "input",
    value: formik.values.priority,
    onChange: formik.handleChange,
    input: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: "priority",
      label: "Priority"
    }),
    style: {
      height: "200%"
    }
  }, _formArrays__WEBPACK_IMPORTED_MODULE_2__.priorityArr.map(function (priority, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: priority.label,
      value: priority.value
    }, priority.label);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    shrink: true,
    htmlFor: "tags",
    style: {
      backgroundColor: "white",
      padding: "3px"
    }
  }, "Tags:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    select: true,
    id: "tags",
    name: "tags",
    multiple: true,
    onChange: formik.handleChange,
    value: formik.values.tags,
    error: Boolean(formik.errors.tags),
    renderValue: function renderValue(selected) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
        sx: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: 0.5
        }
      }, selected.map(function (value) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
          key: value,
          label: value
        });
      }));
    }
  }, _formArrays__WEBPACK_IMPORTED_MODULE_2__.tagList.map(function (tag) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: tag,
      value: tag.value
    }, tag.label);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onDrop: function onDrop(fileObjects) {
      formik.setFieldValue("attachments", fileObjects);
      setFiles(fileObjects.map(function (file) {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        });
      }));
    },
    multiple: true
  }, function (_ref) {
    var getRootProps = _ref.getRootProps,
        getInputProps = _ref.getInputProps;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", getRootProps({
      style: baseStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", getInputProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Drag 'n' drop some files here, or click to select files")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("aside", null, thumbs));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    type: "submit"
  }, "Make Click-up Ticket"))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Sending..."));
};

TicketForm.propTypes = {
  client: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TicketForm);
});

/***/ }),

/***/ 7818:
/*!**************************************!*\
  !*** ./src/components/formArrays.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestingArr": () => (/* binding */ requestingArr),
/* harmony export */   "tagList": () => (/* binding */ tagList),
/* harmony export */   "priorityArr": () => (/* binding */ priorityArr),
/* harmony export */   "assigneeArr": () => (/* binding */ assigneeArr),
/* harmony export */   "companies": () => (/* binding */ companies)
/* harmony export */ });
var requestingArr = [{
  value: "",
  label: "Who is Requesting?"
}, {
  value: "45c3d4ca-f36c-47c4-bb0e-d8f66cb08e49",
  label: "AAP"
}, {
  value: "2ac912e7-4c67-4a20-a88e-c5b573acc59d",
  label: "TSC"
}, {
  value: "45ecfb6a-dcd4-4fa1-ab4e-a88127b7e741",
  label: "Menard's"
}, {
  value: "4755f95d-7e13-4122-9d4e-b4cb4451af3f",
  label: "PetPeople"
}, {
  value: "0f6fed9c-9e13-43a6-b79f-03f68a67202d",
  label: "TBC"
}, {
  value: "89705354-3e0b-4d9a-b2c3-7ca5232e825e",
  label: "ATD"
}, {
  value: "6b56f348-eecc-438e-881f-270f8f386d80",
  label: "MiltonCat"
}, {
  value: "85a42e7b-c746-49cd-afae-a4e09c188ab6",
  label: "Skullcandy"
}, {
  value: "11bc28f1-75fa-4226-a366-bb5ef4f1c9de",
  label: "Pepsi"
}, {
  value: "a665613e-c932-4196-9bba-6b51356c2ef5",
  label: "OneRail"
}, {
  value: "31d4abc2-fa8b-45be-9694-e686291cc88e",
  label: "Clmbr"
}, {
  value: "f1444b44-b75c-4451-855e-27068bd1cc36",
  label: "Peloton"
}, {
  value: "7a4e7755-b302-4dea-8b73-c6fef6441822",
  label: "World Electric"
}, {
  value: "b7169c14-93ac-4b99-b2ea-23f8b36f985b",
  label: "Lowes"
}, {
  value: "9ae72a95-a5df-428a-8cff-22cc2451df8e",
  label: "AAFES"
}, {
  value: "4d014f1a-e3d8-433c-930a-602d55f2b383",
  label: "Galleghar Tire"
}, {
  value: "45ecfb6a-dcd4-4fa1-ab4e-a88127b7e741",
  label: "Menards"
}, {
  value: "1ab62bd3-cc40-45cb-8ba3-0c0a3a0bf86b",
  label: "onePotluck"
}, {
  value: "f8580be7-3b19-40ce-b208-c791bc25affa",
  label: "Pitney Bowes"
}];
var tagList = [{
  value: "aap",
  label: "aap"
}, {
  value: "address/name issue",
  label: "address/name issue"
}, {
  value: "all customer",
  label: "all customer"
}, {
  value: "atd",
  label: "atd"
}, {
  value: "audit/watcher",
  label: "audit/watcher"
}, {
  value: "back end",
  label: "back end"
}, {
  value: "back-end",
  label: "back-end"
}, {
  value: "blue green",
  label: "blue green"
}, {
  value: "blue team",
  label: "blue team"
}, {
  value: "bug",
  label: "bug"
}, {
  value: "bugs",
  label: "bugs"
}, {
  value: "cd",
  label: "cd"
}, {
  value: "ci",
  label: "ci"
}, {
  value: "contract(s)",
  label: "contract(s)"
}, {
  value: "core",
  label: "core"
}, {
  value: "cx",
  label: "cx"
}, {
  value: "data engineering",
  label: "data engineering"
}, {
  value: "design",
  label: "design"
}, {
  value: "devs",
  label: "devs"
}, {
  value: "dispatching issue",
  label: "dispatching issue"
}, {
  value: "door dash",
  label: "door dash"
}, {
  value: "duplicate",
  label: "duplicate"
}, {
  value: "edi",
  label: "edi"
}, {
  value: "engineering",
  label: "engineering"
}, {
  value: "epic",
  label: "epic"
}, {
  value: "escalation",
  label: "escalation"
}, {
  value: "eta",
  label: "eta"
}, {
  value: "extra",
  label: "extra"
}, {
  value: "feature-enhancement",
  label: "feature-enhancement"
}, {
  value: "featureflags",
  label: "featureflags"
}, {
  value: "fedex",
  label: "fedex"
}, {
  value: "filter/sort issue",
  label: "filter/sort issue"
}, {
  value: "front end",
  label: "front end"
}, {
  value: "front-end",
  label: "front-end"
}, {
  value: "global",
  label: "global"
}, {
  value: "green",
  label: "green"
}, {
  value: "green team",
  label: "green team"
}, {
  value: "high-impact",
  label: "high-impact"
}, {
  value: "holiday",
  label: "holiday"
}, {
  value: "hotfix",
  label: "hotfix"
}, {
  value: "implementation",
  label: "implementation"
}, {
  value: "insert",
  label: "insert"
}, {
  value: "integrations",
  label: "integrations"
}, {
  value: "limestone",
  label: "limestone"
}, {
  value: "logistics",
  label: "logistics"
}, {
  value: "lp portal",
  label: "lp portal"
}, {
  value: "lp pricing",
  label: "lp pricing"
}, {
  value: "menard",
  label: "menard"
}, {
  value: "menards",
  label: "menards"
}, {
  value: "milton cat",
  label: "milton cat"
}, {
  value: "miltoncat",
  label: "miltoncat"
}, {
  value: "mobile",
  label: "mobile"
}, {
  value: "not a bug",
  label: "not a bug"
}, {
  value: "notifications",
  label: "notifications"
}, {
  value: "ops",
  label: "ops"
}, {
  value: "ord",
  label: "ord"
}, {
  value: "order status",
  label: "order status"
}, {
  value: "pepsi",
  label: "pepsi"
}, {
  value: "petpeople",
  label: "petpeople"
}, {
  value: "plugin",
  label: "plugin"
}, {
  value: "pod issue",
  label: "pod issue"
}, {
  value: "qa",
  label: "qa"
}, {
  value: "red",
  label: "red"
}, {
  value: "red team",
  label: "red team"
}, {
  value: "rel-team",
  label: "rel-team"
}, {
  value: "reporting",
  label: "reporting"
}, {
  value: "returns",
  label: "returns"
}, {
  value: "revoke",
  label: "revoke"
}, {
  value: "risk",
  label: "risk"
}, {
  value: "risk-mit",
  label: "risk-mit"
}, {
  value: "routing issue",
  label: "routing issue"
}, {
  value: "scaling",
  label: "scaling"
}, {
  value: "skullcandy",
  label: "skullcandy"
}, {
  value: "staging",
  label: "staging"
}, {
  value: "support",
  label: "support"
}, {
  value: "synthetic events",
  label: "synthetic events"
}, {
  value: "tbc",
  label: "tbc"
}, {
  value: "tech debt",
  label: "tech debt"
}, {
  value: "technical design",
  label: "technical design"
}, {
  value: "test(s)",
  label: "test(s)"
}];
var priorityArr = [{
  value: "a932b0ae-1ce9-4664-9b21-af813f5e5e97",
  label: "Low",
  level: 4
}, {
  value: "dfc34a8f-0c76-4e30-a522-9b7caa722d92",
  label: "Normal",
  level: 3
}, {
  value: "23a52a86-534e-4d5a-8adc-274054d1eb19",
  label: "High",
  level: 2
}, {
  value: "72790d5b-fb1e-44b6-be6a-59f8ff4e5ac3",
  label: "Urgent",
  level: 1
}];
var assigneeArr = [{
  value: 14701989,
  label: "Adam",
  "14701989": "Adam"
}, {
  value: 12644874,
  label: "Chelsea",
  "12644874": "Chelsea"
}, {
  value: 12703227,
  label: "Corrie",
  "12703227": "Corrie"
}, {
  value: 26198452,
  label: "Marissa",
  "26198452": "Marissa"
}, {
  value: 26300173,
  label: "Sam",
  "26300173": "Sam"
}];
var companies = {
  "Advance Auto Parts": 69000959145,
  "ATD": 69000959147,
  "Menard's": 69000959172,
  "MiltonCAT": 69000959173,
  "Pepsi": 69000959179,
  "PetPeople": 69000998973,
  "Skullcandy": 7,
  "TBC/NTW": 69000959175,
  "TSC": 69000972056
};


/***/ }),

/***/ 55579:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 73935);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ 98548);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ 48187);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_App__WEBPACK_IMPORTED_MODULE_3__]);
_App__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById('root'));
});

/***/ }),

/***/ 39087:
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".App {\r\n  text-align: center;\r\n}\r\n\r\n.App-logo {\r\n  height: 40vmin;\r\n  pointer-events: none;\r\n}\r\n\r\n.input-div{\r\n  display:flex;\r\n  flex-direction:column;\r\n\r\n}\r\n.input{\r\n  border-radius: 5px;\r\n  height: 4vh;\r\n  font-size: 2vh;\r\n  padding-left: 1vw;\r\n  font-family:\"Inter\"\r\n}\r\n.textarea{\r\n  height: 14vh;\r\n  border: 1px solid grey;\r\n  border-radius: 5px;\r\n  font-family:\"Inter\"\r\n}\r\nlabel{\r\n  font-weight: 900;\r\n  margin-bottom:0.5vh;\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,qBAAqB;;AAEvB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB;AACF;AACA;EACE,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB;AACF;AACA;EACE,gBAAgB;EAChB,mBAAmB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');\r\n\r\n.App {\r\n  text-align: center;\r\n}\r\n\r\n.App-logo {\r\n  height: 40vmin;\r\n  pointer-events: none;\r\n}\r\n\r\n.input-div{\r\n  display:flex;\r\n  flex-direction:column;\r\n\r\n}\r\n.input{\r\n  border-radius: 5px;\r\n  height: 4vh;\r\n  font-size: 2vh;\r\n  padding-left: 1vw;\r\n  font-family:\"Inter\"\r\n}\r\n.textarea{\r\n  height: 14vh;\r\n  border: 1px solid grey;\r\n  border-radius: 5px;\r\n  font-family:\"Inter\"\r\n}\r\nlabel{\r\n  font-weight: 900;\r\n  margin-bottom:0.5vh;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 51424:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n\tmargin: 0;\r\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\r\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\r\n\t\tsans-serif;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n\theight:200%;\r\n}\r\n\r\ncode {\r\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\r\n\t\tmonospace;\r\n}\r\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT;;YAEW;CACX,mCAAmC;CACnC,kCAAkC;CAClC,WAAW;AACZ;;AAEA;CACC;WACU;AACX","sourcesContent":["body {\r\n\tmargin: 0;\r\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\r\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\r\n\t\tsans-serif;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n\theight:200%;\r\n}\r\n\r\ncode {\r\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\r\n\t\tmonospace;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 95722:
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ 39087);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 98548:
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ 51424);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 70:
false

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(26981), __webpack_exec__(55579)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.40a7c050.js.map