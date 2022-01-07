(this["webpackChunkreact_webpack_dev"] = this["webpackChunkreact_webpack_dev"] || []).push([["main"],{

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

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var script = document.createElement('script');
    script.src = 'https://static.freshdev.io/fdk/2.0/assets/fresh_client.js';
    script.addEventListener('load', function () {
      return setLoaded(true);
    });
    script.defer = true;
    document.head.appendChild(script);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!loaded && !showModal) return;
    app.initialized().then(function (client) {
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
        /* set app activate and deactivate events and callbacks and pass retrieved ticket data*/
        // client.events.on("app.activated", ()=>onAppActivated(data.ticket, client));
        // client.events.on("app.deactivated", ()=>onAppDeactivated(data.ticket, client)); 

      });

      var propertyChangeCallback = function propertyChangeCallback(event) // code to be executed when the status of the ticket is changed.
      {
        var event_data = event.helper.getData();
        client.instance.close();
        console.log(event.type + " changed from " + event_data.old + " to " + event_data["new"]);

        if (event_data["new"] === 8) {
          setShowModal(true);
        }
      };

      client.events.on("ticket.statusChanged", propertyChangeCallback);
    });

    if (showModal) {
      /*initialize client to pull modal */
      app.initialized().then(function (client) {
        client["interface"].trigger("showModal", {
          title: "Click up Integration",
          template: "index.html"
        }).then(function (data) {// data - success message
        })["catch"](function (error) {// error - error object
        });
      });
    }
  }, [loaded, showModal]); // const onAppActivated =(ticket, client)=>{
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, clickUpExists && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "click up ticket number is ", customID, "Status: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: openClickUpModal
  }, "More Detailed View")), !clickUpExists && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Click up ticket doesn't exist"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClickUpStatus);

/***/ }),

/***/ 60282:
/*!**************************************!*\
  !*** ./src/components/TicketForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ 45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ 62598);
/* harmony import */ var _formArrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formArrays */ 7818);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App */ 48187);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'Success'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ 6012);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ 9226);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ 8308);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ 3931);
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
      tags = _useState4[0],
      setTags = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      assignees = _useState6[0],
      setAssignees = _useState6[1];
  /* Get ids from everyone */


  var initialValues = {
    ticketID: ticket.id,
    title: ticket.subject,
    description: ticket.description_text,
    notes: "",
    reqCustomer: "",
    tags: [],
    priority: {},
    reqDueDate: 0
  };

  var tagChange = function tagChange(e) {
    setTags(e.target.value);
  };

  var assigneeChange = function assigneeChange(e) {
    console.log("taregt", e.target);
    setAssignees(e.target.value);
  };

  var getClickUpCustomID = function getClickUpCustomID(id) {
    var options = {
      headers: {
        'Authorization': 'pk_26300173_E1SRMU3J8KK4TJFKRET9M98NKVG9HV73'
      }
    };
    client.request.get("https://api.clickup.com/api/v2/task/".concat(id), options).then(function (data) {
      console.log(data);
      updateFreshdeskWithClickup(data.custom_id);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  var updateFreshdeskWithClickup = function updateFreshdeskWithClickup(res) {
    var data = {
      custom_fields: {
        /* figure out proper object property path for click up custom id looks like REQ-XXXX */
        cf_clickup_ticket: res.data.id
      }
    };
    var options = {
      headers: {
        'Authorization': "Basic /* Insert Freshdesk API Here */ "
      },
      body: data
    };
    client.request.put("https://onerail.freshdesk.com/api/v2/tickets/".concat(ticket.id), options).then(function (data) {
      console.log(data);
      setChild( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'Success'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null));
    })["catch"](function (error) {
      console.log(error);
    });
  };

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

  var onSubmit = function onSubmit(values) {
    var level = handlePriority(values.priority);
    var dueDate = "".concat(values.reqDueDate, "T00:00:00");
    var milliDate = Date.parse(dueDate);
    console.log("millidate", milliDate);
    var timeEst = milliDate - Date.now();
    var payload = {
      "name": values.title,
      "markdown_description": "**Freshdesk Ticket ".concat(values.ticketID, ":** \n ").concat(values.description, " \n **Additional Notes:** \n ").concat(values.notes),
      "assignees": assignees,
      "tags": tags,
      "status": "Requested",
      "priority": level,
      "due_date": milliDate,
      "due_date_time": false,
      "time_estimate": timeEst
      /* 2 weeks in milliseconds unless we want to have different times based on priority level */
      ,
      "start_date": Date.now()
      /* current dateTime in milliseconds */
      ,
      "start_date_time": false,
      "notify_all": true,
      "parent": null,
      "links_to": null,
      "check_required_custom_fields": true,
      "custom_fields": [{
        /* requesting customer */
        "id": "693b7b05-8c30-4e7b-be39-295245333faf",
        "value": values.reqCustomer
      }, {
        "id": "dd085afd-fdda-45c9-bd7e-7888e7d1ecac",
        "value": assignees
      }, {
        "id": "9cfbd761-8aff-416c-bd8e-6fb06f2849f3",
        "value": values.priority
      }]
    };
    console.log("payload", payload);
    setLoading(true);
    var options = {
      headers: {
        /*GET API KEY*/
        'Authorization': 'pk_26300173_XLACDBWL2MZ2QPURUK1U7P8I34K459CC',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }; // client.request.post("https://api.clickup.com/api/v2/list/71601233/task", options).then(
    //   function(data){
    //     console.log(data)
    //     getClickUpCustomID(data)
    //   },
    //   function(error){
    //     console.log(error)
    //   }
    //)
    // /* put this in updateFreshdeskWithClickup and make loading component.  update success with returned clickup information */
    // //simulate sending ticket and awaiting response, then updating freshdesk ticket and loading success page
    // setTimeout(()=>{
    //   setChild((<Success client={client}/>))
    // },2000)
  };

  var validate = function validate(values) {
    var errors = {};
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    onSubmit: onSubmit,
    validate: validate,
    initialValues: initialValues
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "TicketID:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    name: "ticketID",
    className: "input"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Title:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    name: "title",
    type: "text",
    className: "input"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Assignee:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "assignees",
    name: "assignees",
    multiple: true,
    onChange: assigneeChange,
    value: assignees,
    renderValue: function renderValue(selected) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        sx: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: 0.5
        }
      }, selected.map(function (value) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: value,
          label: value
        });
      }));
    }
  }, _formArrays__WEBPACK_IMPORTED_MODULE_2__.assigneeArr.map(function (name) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: name,
      value: name.value
    }, name.label);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Description:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    as: "textarea",
    name: "description",
    className: "textarea"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Additional Notes:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    as: "textarea",
    name: "notes",
    className: "textarea"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Requested Due Date:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    type: "date",
    name: "reqDueDate",
    className: "input"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Requesting Customer:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    as: "select",
    name: "reqCustomer",
    className: "input"
  }, _formArrays__WEBPACK_IMPORTED_MODULE_2__.requestingArr.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: i,
      value: item.value
    }, item.label);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Priority:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    as: "select",
    name: "priority",
    className: "input"
  }, _formArrays__WEBPACK_IMPORTED_MODULE_2__.priorityArr.map(function (priority, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: i,
      value: priority.value
    }, priority.label);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Tags:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "tags",
    name: "tags",
    multiple: true,
    onChange: tagChange,
    value: tags
  }, _formArrays__WEBPACK_IMPORTED_MODULE_2__.tagList.map(function (tag) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: tag,
      value: tag.value
    }, tag.label);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit"
  }, "Make Click-up Ticket"))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Sending..."));
};

TicketForm.propTypes = {
  client: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TicketForm);

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
/* harmony export */   "assigneeArr": () => (/* binding */ assigneeArr)
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
  value: "",
  label: "Priority Level",
  level: 0
}, {
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
  value: 1,
  label: "Adam"
}, {
  value: 2,
  label: "Chelsea"
}, {
  value: 3,
  label: "Corrie"
}, {
  value: 4,
  label: "Marissa"
}, {
  value: 26300173,
  label: "Sam"
}];


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
___CSS_LOADER_EXPORT___.push([module.id, ".App {\r\n  text-align: center;\r\n}\r\n\r\n.App-logo {\r\n  height: 40vmin;\r\n  pointer-events: none;\r\n}\r\n\r\n.input-div{\r\n  display:flex;\r\n  flex-direction:column;\r\n  margin-bottom: -2vh;\r\n}\r\n.input{\r\n  border-radius: 5px;\r\n  height: 4vh;\r\n  font-size: 2vh;\r\n  padding-left: 1vw;\r\n  font-family:\"Inter\"\r\n}\r\n.textarea{\r\n  height: 14vh;\r\n  border: 1px solid grey;\r\n  border-radius: 5px;\r\n  font-family:\"Inter\"\r\n}\r\nlabel{\r\n  font-weight: 900;\r\n  margin-bottom:0.5vh;\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB;AACF;AACA;EACE,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB;AACF;AACA;EACE,gBAAgB;EAChB,mBAAmB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');\r\n\r\n.App {\r\n  text-align: center;\r\n}\r\n\r\n.App-logo {\r\n  height: 40vmin;\r\n  pointer-events: none;\r\n}\r\n\r\n.input-div{\r\n  display:flex;\r\n  flex-direction:column;\r\n  margin-bottom: -2vh;\r\n}\r\n.input{\r\n  border-radius: 5px;\r\n  height: 4vh;\r\n  font-size: 2vh;\r\n  padding-left: 1vw;\r\n  font-family:\"Inter\"\r\n}\r\n.textarea{\r\n  height: 14vh;\r\n  border: 1px solid grey;\r\n  border-radius: 5px;\r\n  font-family:\"Inter\"\r\n}\r\nlabel{\r\n  font-weight: 900;\r\n  margin-bottom:0.5vh;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=main.c3472efa.js.map