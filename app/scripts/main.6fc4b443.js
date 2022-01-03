(this["webpackChunkreact_webpack_dev"] = this["webpackChunkreact_webpack_dev"] || []).push([["main"],{

/***/ 48187:
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ 95722);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ClickUpButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ClickUpButton */ 61054);
/* harmony import */ var _components_TicketForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TicketForm */ 60282);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "App is loading")),
      _useState4 = _slicedToArray(_useState3, 2),
      child = _useState4[0],
      setChild = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      ticket = _useState6[0],
      setTicket = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showModal = _useState8[0],
      setShowModal = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var script = document.createElement('script');
    script.src = 'https://static.freshdev.io/fdk/2.0/assets/fresh_client.js';
    script.addEventListener('load', function () {
      return setLoaded(true);
    });
    script.defer = true;
    document.head.appendChild(script);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [showModal]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!loaded && !showModal) return;
    app.initialized().then(function (client) {
      client.events.on("app.activated", onAppActivated);
      client.events.on("app.deactivated", onAppDeactivated);
      client.data.get('ticket').then(function (data) {
        setTicket(data.ticket);
        setChild( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_TicketForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
          ticket: data.ticket
        }));
      });

      var propertyChangeCallback = function propertyChangeCallback(event) // code to be executed when the status of the ticket is changed.
      {
        var event_data = event.helper.getData();
        console.log(event.type + " changed from " + event_data.old + " to " + event_data["new"]);

        if (event_data["new"] === 8) {
          setShowModal(true);
        }
      };

      client.events.on("ticket.statusChanged", propertyChangeCallback);
    });

    if (showModal) {
      app.initialized().then(function (client) {
        client["interface"].trigger("showModal", {
          title: "Click up Integration",
          template: "index.html"
        }).then(function (data) {// data - success message
        })["catch"](function (error) {// error - error object
        });
      });
    }
  }, [loaded, showModal]);

  var onAppActivated = function onAppActivated() {
    setChild( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ClickUpButton__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  };

  var onAppDeactivated = function onAppDeactivated() {
    console.log("client", client);
    setChild( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_TicketForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      client: client
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, child);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 61054:
/*!*****************************************!*\
  !*** ./src/components/ClickUpButton.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);


function ClickUpButton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", null, "Get Click-Up Ticket Info"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClickUpButton);

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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ 45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ 62598);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ 9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ 23157);
/* harmony import */ var _tagList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tagList */ 6519);
var _this = undefined;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var TicketForm = function TicketForm(props) {
  var ticket = props.ticket;
  console.log("ticket in ticketform", ticket);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      tags = _useState4[0],
      setTags = _useState4[1];

  var requestingArr = ["Who is Requesting?", "AAP", "TSC", "Menard's", "PetPeople", "TBC", "ATD", "MiltonCat", "Skullcandy", "Pepsi", "OneRail"];
  var assigneeArr = [{
    id: 1,
    name: "Adam"
  }, {
    id: 2,
    name: "Chelsea"
  }, {
    id: 3,
    name: "Corrie"
  }, {
    id: 4,
    name: "Marissa"
  }, {
    id: 26300173,
    name: "Sam"
  }];
  var initialValues = {
    ticketID: ticket.id,
    title: ticket.subject,
    description: ticket.description_text,
    notes: "",
    reqCustomer: "",
    assignees: [],
    tags: [],
    priority: 0
  };

  var tagChange = function tagChange(e) {
    console.log(e);
    e.map(function (item) {
      return setTags([].concat(_toConsumableArray(tags), [item.value]));
    });
    console.log("tags", tags);
  };

  var onSubmit = function onSubmit(values) {
    var assignees = values.assignees.map(function (item) {
      return Number(item);
    });
    var payload = {
      "name": values.title,
      "description": "Ticket:".concat(values.description, " | Notes:").concat(values.notes),
      "assignees": assignees,
      "tags": tags,
      "status": "Open",
      "priority": Number(values.priority),
      "due_date": ""
      /* i dont know */
      ,
      "due_date_time": false,
      "time_estimate": ""
      /* i dont know */
      ,
      "start_date": ""
      /* i dont know */
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
        /* point of contact */
        "id": "dd085afd-fdda-45c9-bd7e-7888e7d1ecac",
        "value": values.assignees[0]
      }, {
        /* description... use it to list freshdesk ticket ID? */
        "id": "5418bbd8-47f5-479c-8b07-88dded5b0540",
        "value": values.ticketID
      }, {
        /* Requested Due Date */
        "id": "b27c4ef5-a843-4c29-a3d4-e613bafcbad1",
        "value": dueDate
      }]
    };
    console.log("paylod", payload);
    console.log("form", _this.Form); // var config = {
    //   method: 'post',
    //   url: 'https://api.clickup.com/api/v2/list/list_id/task',
    //   headers: { 
    //     /*GET API KEY*/
    //     'Authorization': '"access token"', 
    //     'Content-Type': 'application/json'
    //   },
    //   data : payload
    // };
    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  var validate = function validate(values) {
    var errors = {};
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    onSubmit: onSubmit,
    validate: validate,
    initialValues: initialValues
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "TicketID:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    name: "ticketID"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Title:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    name: "title",
    type: "text"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Assignee:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    as: "select",
    name: "assignees",
    multiple: "multiple"
  }, assigneeArr.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: item.id
    }, item.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Description:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    as: "textarea",
    name: "description",
    className: "textarea"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Additional Notes:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    as: "textarea",
    name: "notes",
    className: "textarea"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Requesting Customer:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    as: "select",
    name: "reqCustomer"
  }, requestingArr.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: item
    }, item);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Priority:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    as: "select",
    name: "priority"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "0"
  }, "Choose Priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "1"
  }, "Low"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "2"
  }, "Medium"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "3"
  }, "High"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "4"
  }, "Urgent"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Tags:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "tags",
    name: "tags",
    options: _tagList__WEBPACK_IMPORTED_MODULE_3__.tagList,
    isMulti: true,
    classNamePrefix: "select",
    closeMenuOnSelect: false,
    onChange: tagChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit"
  }, "Make Click-up Ticket"))));
};

TicketForm.propTypes = {
  client: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TicketForm);

/***/ }),

/***/ 6519:
/*!***********************************!*\
  !*** ./src/components/tagList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tagList": () => (/* binding */ tagList)
/* harmony export */ });
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".App {\r\n  text-align: center;\r\n}\r\n\r\n.App-logo {\r\n  height: 40vmin;\r\n  pointer-events: none;\r\n}\r\n\r\n.input{\r\n  display:flex;\r\n  flex-direction:column;\r\n}\r\n.textarea{\r\n  height: 14vh;\r\n}\r\nlabel{\r\n  font-weight: 900;\r\n  margin-bottom:0.5vh;\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,mBAAmB;AACrB","sourcesContent":[".App {\r\n  text-align: center;\r\n}\r\n\r\n.App-logo {\r\n  height: 40vmin;\r\n  pointer-events: none;\r\n}\r\n\r\n.input{\r\n  display:flex;\r\n  flex-direction:column;\r\n}\r\n.textarea{\r\n  height: 14vh;\r\n}\r\nlabel{\r\n  font-weight: 900;\r\n  margin-bottom:0.5vh;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=main.6fc4b443.js.map