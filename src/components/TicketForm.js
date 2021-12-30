import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Form, Formik, Field } from 'formik';
import axios from 'axios';


const TicketForm = (props) => {
  const [ticket, setTicket] = useState({})
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  var propertyChangeCallback = function (event)
    // code to be executed when the status of the ticket is changed.
    {
        var event_data = event.helper.getData();
        console.log(event.type + " changed from " + event_data.old + " to " +  event_data.new);
        if(event_data.new === 8){
          setShowModal(true)
        }
    };
  props.client.events.on("ticket.statusChanged", propertyChangeCallback);

  useEffect(()=>{
    props.client.data.get('ticket').then((data) => {
      setTicket(data.ticket)
      console.log("ticket",data.ticket)
      setLoading(true)
    })
  },[])

  useEffect(()=>{
    if(showModal){
      props.client.interface.trigger("showModal", {
        title: "Click up Integration",
        template: "index.html"
      }).then(function(data) {
      // data - success message
      }).catch(function(error) {
      // error - error object
      });
    }
  },[showModal])


  const tagList=["aap","address/name issue", "all customer","atd", "audit/watcher","back end",
    "back-end", "blue green", "blue team", "bug","bugs","cd","ci","contract(s)","core","cx","data engineering",
    "design","devs","dispatching issue","door dash", "duplicate", "edi","engineering","epic","escalation","eta",
    "extra","feature-enhancement","feratureflags", "fedex", "filter/sort issue","front end","front-end","global","green","green team",
    "high-impact","holiday","hotfix","impl","imple","implementation","insert","integrations", "limestone","logistics", "lp portal",
    "lp pricing","menard","menards","milton cat","miltoncat", "mobile","not a bug", "notifications", "ops","ord","order status",
    "pepsi", "petpeople", "plugin", "pod issue", "qa", "red", "red team", "rel-team", "reporting", "returns", "revoke", "risk", 
    "risk-mit","routing issue", "scaling","skullcandy","staging","support","synthetic events","tbc","tech debt", "technical design",
    "test(s)"]

  const requestingArr = ["AAP","TSC","Menard's","PetPeople","TBC","ATD","MiltonCat","Skullcandy","Pepsi","OneRail"]

  const assigneeArr = [
    {id:1, name:"Adam"},
    {id:2, name:"Chelsea"},
    {id:3, name:"Corrie"},
    {id:4, name:"Marissa"},
    {id:26300173, name:"Sam"}
  ]

  const initialValues = { 
    ticketID: ticket.id,
    title: ticket.subject,
    description: ticket.description_text,
    notes: "",
    reqCustomer:"",
    assignees:[],
    tags:[],
    priority:0
  }

  const onSubmit = (values)=>{
    let assignees = values.assignees.map((item)=>Number(item))
    const payload = {
      "name": values.title,
      "description": `Ticket:${values.description} | Notes:${values.notes}`,
      "assignees": assignees,
      "tags": values.tags,
      "status": "Open",
      "priority": Number(values.priority),
      "due_date": "" /* i dont know */,
      "due_date_time": false,
      "time_estimate": "" /* i dont know */,
      "start_date": "" /* i dont know */,
      "start_date_time": false,
      "notify_all": true,
      "parent": null,
      "links_to": null,
      "check_required_custom_fields": true,
      "custom_fields": [
        {
          /* requesting customer */
          "id":"693b7b05-8c30-4e7b-be39-295245333faf",
          "value": values.reqCustomer
        },
        {
          /* point of contact */
          "id":"dd085afd-fdda-45c9-bd7e-7888e7d1ecac",
          "value": values.assignees[0]
        },
        {
          /* description... use it to list freshdesk ticket ID? */
          "id":"5418bbd8-47f5-479c-8b07-88dded5b0540",
          "value": values.ticketID
        }
      ]
    }
    console.log("paylod",payload)
    // var config = {
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

  }

  const validate = (values)=>{
    const errors = {}
  }

  return (
    <div>
      {loading && 
        <Formik
          onSubmit={onSubmit}
          validate={validate}
          initialValues={initialValues}
        >
          <Form>
            <div className="input">
              <label>TicketID:</label>
              <Field name="ticketID"/>
            </div><br/>
            <div className="input">
              <label>Title:</label>
              <Field name="title" type="text" />
            </div><br/>
            <div className="input">
              {/* dropdown field for Assignees. Need everyones clickup id number */}
              <label>Assignee:</label>
              <Field as="select" name="assignees" multiple="multiple">
                {assigneeArr.map((item, i)=><option value={item.id}>{item.name}</option>)}
              </Field>
            </div><br/>
            <div className="input">
              <label>Description:</label>
              <Field as="textarea" name="description" className="textarea"/>
            </div><br/>
            <div className="input">
            <label>Additional Notes:</label>
              <Field as="textarea" name="notes" className="textarea"/>
            </div><br/>
            <div className="input">
              {/* dropdown field for requesting customer */}
              <label>Requesting Customer:</label>
              <Field as="select" name="reqCustomer" >
                {requestingArr.map((item, i)=><option value={item}>{item}</option>)}
              </Field>
            </div><br/>
            <div className="input">
              {/* dropdown field for Priority */}
              <label>Priority:</label>
              <Field as="select" name="priority" >
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
                <option value="4">Urgent</option>
              </Field>
            </div><br/>
            <div className="input">
              {/* multi-select input field */}
              <label>Tags:</label>
              <Field id="tags" name="tags" as="select" multiple="multiple" className="textarea">
                {tagList.map((tag, i)=><option value={tag}>{tag}</option>)}
              </Field>
            </div><br/>
            <button type="submit">Make Click-up Ticket</button>
          </Form>
        </Formik>
      }
    </div>
  )
}

TicketForm.propTypes = {
  client: PropTypes.object
}
export default TicketForm
