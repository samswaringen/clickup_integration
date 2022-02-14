(this["webpackChunkreact_webpack_dev"] = this["webpackChunkreact_webpack_dev"] || []).push([["main"],{

/***/ 21713:
/*!************************************!*\
  !*** ./src/ApolloClient/client.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "client": () => (/* binding */ client)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ 72198);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ 86778);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ 88804);

var httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({
  //uri: process.env.REACT_APP_GRAPHQL_SERVER
  uri: "http://localhost:9001/graphql"
}); // const authMiddleware = new ApolloLink((operation, forward) => {
//   let jwtToken = `${cookies.get('tokenHead')}.${cookies.get('tokenSig')}`
//   // add the authorization to the headers
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//       Authorization: `Bearer ${jwtToken}` || null,
//     }
//   }));
//   return forward(operation);
// })

var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache(),
  link: httpLink
});

/***/ }),

/***/ 48187:
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ 768);
/* harmony import */ var _ApolloClient_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApolloClient/client */ 21713);
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
        var companyID = companyKeys.filter(function (key) {
          return _components_formArrays__WEBPACK_IMPORTED_MODULE_4__.companies[key] === contact.company_id;
        });
        var _data2 = {
          "custom_fields": {
            "cf_customer": companyID[0]
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
          title: "ClickUp Integration",
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloProvider, {
    client: _ApolloClient_client__WEBPACK_IMPORTED_MODULE_5__.client
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TicketObj.Provider, {
    value: {
      setChild: setChild
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, child)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 39731:
/*!*****************************************!*\
  !*** ./src/components/ClickUpStatus.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ 9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ 48187);
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

/***/ }),

/***/ 60282:
/*!**************************************!*\
  !*** ./src/components/TicketForm.js ***!
  \**************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\SamSwaringen\\Desktop\\Projects\\clickup_integration\\src\\components\\TicketForm.js: 'Const declarations' require an initialization value. (22:10)\n\n\u001b[0m \u001b[90m 20 |\u001b[39m   \u001b[36mconst\u001b[39m [files\u001b[33m,\u001b[39msetFiles] \u001b[33m=\u001b[39m useState([])\u001b[0m\n\u001b[0m \u001b[90m 21 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 22 |\u001b[39m   \u001b[36mconst\u001b[39m []\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 24 |\u001b[39m   \u001b[0m\n\u001b[0m \u001b[90m 25 |\u001b[39m \u001b[90m/* send attachments to clickup */\u001b[39m\u001b[0m\n    at Object._raise (C:\\Users\\SamSwaringen\\Desktop\\Projects\\clickup_integration\\node_modules\\@babel\\parser\\lib\\index.js:569:17)\n    at Object.raiseWithData (C:\\Users\\SamSwaringen\\Desktop\\Projects\\clickup_integration\\node_modules\\@babel\\parser\\lib\\index.js:562:17)\n    at Object.raise (C:\\Users\\SamSwaringen\\Desktop\\Projects\\clickup_integration\\node_modules\\@babel\\parser\\lib\\index.js:523:17)\n    at Object.parseVar (C:\\Users\\SamSwaringen\\Desktop\\Projects\\clickup_integration\\node_modules\\@babel\\parser\\lib\\index.js:14195:18)\n    at Object.parseVarStatement (C:\\Users\\SamSwaringen\\Desktop\\Projects\\clickup_integration\\node_modules\\@babel\\parser\\lib\\index.js:14005:10)\n    at Object.parseStatementContent (C:\\Users\\SamSwaringen\\Desktop\\Projects\\clickup_integration\\node_modules\\@babel\\parser\\lib\\index.js:13590:21)\n    at Object.parseStatement (C:\\Users\\SamSwaringen\\Desktop\\Projects\\clickup_integration\\node_modules\\@babel\\parser\\lib\\index.js:13521:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\Users\\SamSwaringen\\Desktop\\Projects\\clickup_integration\\node_modules\\@babel\\parser\\lib\\index.js:14110:25)\n    at Object.parseBlockBody (C:\\Users\\SamSwaringen\\Desktop\\Projects\\clickup_integration\\node_modules\\@babel\\parser\\lib\\index.js:14101:10)\n    at Object.parseBlock (C:\\Users\\SamSwaringen\\Desktop\\Projects\\clickup_integration\\node_modules\\@babel\\parser\\lib\\index.js:14085:10)\n    at Object.parseFunctionBody (C:\\Users\\SamSwaringen\\Desktop\\Projects\\clickup_integration\\node_modules\\@babel\\parser\\lib\\index.js:12875:24)\n    at Object.parseArrowExpression (C:\\Users\\SamSwaringen\\Desktop\\Projects\\clickup_integration\\node_modules\\@babel\\parser\\lib\\index.js:12847:10)\n    at Object.parseParenAndDistinguishExpression (C:\\Users\\SamSwaringen\\Desktop\\Projects\\clickup_integration\\node_modules\\@babel\\parser\\lib\\index.js:12383:12)\n    at Object.parseExprAtom (C:\\Users\\SamSwaringen\\Desktop\\Projects\\clickup_integration\\node_modules\\@babel\\parser\\lib\\index.js:11964:23)\n    at Object.parseExprAtom (C:\\Users\\SamSwaringen\\Desktop\\Projects\\clickup_integration\\node_modules\\@babel\\parser\\lib\\index.js:7523:20)\n    at Object.parseExprSubscripts (C:\\Users\\SamSwaringen\\Desktop\\Projects\\clickup_integration\\node_modules\\@babel\\parser\\lib\\index.js:11654:23)");

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 73935);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ 98548);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ 48187);




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById('root'));

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(26981), __webpack_exec__(55579)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.fb07b220.js.map