import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Form, Formik, Field } from 'formik';
import axios from 'axios';
import Select from 'react-select'
import { tagList } from './tagList';


const TicketForm = (props) => {
  const {ticket} = props
  console.log("ticket in ticketform",ticket)
  const [loading, setLoading] = useState(false)
  const [tags, setTags] = useState([])



  const requestingArr = ["Who is Requesting?","AAP","TSC","Menard's","PetPeople","TBC","ATD","MiltonCat","Skullcandy","Pepsi","OneRail"]

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

  const tagChange= (e)=>{
    console.log(e)
    e.map((item)=>setTags([...tags,item.value]))
    console.log("tags",tags)
  }

  const onSubmit = (values)=>{
    let assignees = values.assignees.map((item)=>Number(item))
    const payload = {
      "name": values.title,
      "description": `Ticket:${values.description} | Notes:${values.notes}`,
      "assignees": assignees,
      "tags": tags,
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
        },
        {
          /* Requested Due Date */
          "id":"b27c4ef5-a843-4c29-a3d4-e613bafcbad1",
          "value": dueDate
        }
      ]
    }
    console.log("paylod",payload)
    console.log("form", this.Form)
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
                <option value="0">Choose Priority</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
                <option value="4">Urgent</option>
              </Field>
            </div><br/>
            <div className="input">
              {/* multi-select input field */}
              <label>Tags:</label>
              <Select id="tags" name="tags" options={tagList} isMulti classNamePrefix="select" closeMenuOnSelect={false} onChange={tagChange} />
            </div><br/>
            <button type="submit">Make Click-up Ticket</button>
          </Form>
        </Formik>
    </div>
  )
}

TicketForm.propTypes = {
  client: PropTypes.object
}

export default TicketForm

