import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Form, Formik, Field } from 'formik';
import axios from 'axios';


const TicketForm = (props) => {
  const [ticket, setTicket] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    props.client.data.get('ticket').then((data) => {
      setTicket(data.ticket)
      console.log("ticket",data.ticket)
      setLoading(true)
    })
  },[])


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
          "id":"693b7b05-8c30-4e7b-be39-295245333faf",
          "value": values.reqCustomer
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
      <h3>Ticket {ticket.id},</h3>
      {loading && 
        <Formik
          onSubmit={onSubmit}
          validate={validate}
          initialValues={initialValues}
        >
          <Form>
            <div style={{display:"flex", flexDirection:"column"}}>
              <label>TicketID:</label>
              <Field name="ticketID"/>
            </div>
            <div>
              <label>Title:</label><br/>
              <Field name="title" />
            </div>
            <div>
              {/* dropdown field for Assignees. Need everyones clickup id number */}
              <label>Assignee:</label><br/>
              <Field as="select" name="assignees" multiple="multiple">
                <option value= "1" >Adam</option>
                <option value= "2" >Chelsea</option>
                <option value="3">Corrie</option>
                <option value="4">Marissa</option>
                <option value="26300173">Sam</option>
              </Field>
            </div>
            <div>
              <label>Description:</label>
              <Field as="textarea" name="description"/>
            </div>
            <div>
            <label>Additional Notes:</label>
              <Field as="textarea" name="notes"/>
            </div>
            <div>
              {/* dropdown field for requesting customer */}
              <label>Requesting Customer:</label>
              <Field as="select" name="reqCustomer" >
                {requestingArr.map((item, i)=><option value={item}>{item}</option>)}
              </Field>
            </div>
            <div>
              {/* dropdown field for Priority */}
              <label>Priority:</label><br/>
              <Field as="select" name="priority" >
                <option value= "1" >Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
                <option value="4">Urgent</option>
              </Field>
            </div>
            <div>
              {/* multi-select input field */}
              <label>Tags:</label><br/>
              <Field id="tags" name="tags" as="select" multiple="multiple">
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
