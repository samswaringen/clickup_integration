import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { Form, Formik, Field } from 'formik';
import { tagList, requestingArr, priorityArr, assigneeArr } from './formArrays';
import {TicketObj} from '../App'
import Success from './Success'
import { useTheme } from '@mui/material/styles'
import { Select, Button, TextField, Drop, MenuItem, InputLabel, OutlinedInput, Box, Chip} from '@mui/material';


const TicketForm = (props) => {
  const {ticket, client} = props
  const ticketContext = useContext(TicketObj)
  const {setChild} = ticketContext

  const [loading, setLoading] = useState(false)
  const [tags, setTags] = useState([])
  const [assignees, setAssignees] = useState([])


  /* Get ids from everyone */


  const initialValues = { 
    ticketID: ticket.id,
    title: ticket.subject,
    description: ticket.description_text,
    notes: "",
    reqCustomer:"",
    tags:[],
    priority:{},
    reqDueDate:0
  }

  const tagChange= (e)=>{
   setTags(e.target.value)
  }

  const assigneeChange = (e)=>{
    console.log("taregt",e.target)
    setAssignees(e.target.value)
  }

    const getClickUpCustomID = (id)=>{
      var options = {
        headers:{
          'Authorization': 'pk_26300173_E1SRMU3J8KK4TJFKRET9M98NKVG9HV73'
        }
      }
      client.request.get(`https://api.clickup.com/api/v2/task/${id}`,options)
        .then(function (data) {
          console.log(data);
          updateFreshdeskWithClickup(data.custom_id)
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  const updateFreshdeskWithClickup =(res)=>{
    let data = {
      custom_fields:{
        /* figure out proper object property path for click up custom id looks like REQ-XXXX */
        cf_clickup_ticket:res.data.id
      }
    }
    var options = {
      headers: { 
        'Authorization': `Basic /* Insert Freshdesk API Here */ `
      },
      body:data
    };
    client.request.put(`https://onerail.freshdesk.com/api/v2/tickets/${ticket.id}`,options)
    .then(function (data) {
      console.log(data);
      setChild((<Success />))
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handlePriority = (priority)=>{
    let level = 0;
    switch(priority){
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
    return level
  }

  const onSubmit = (values)=>{
    const level = handlePriority(values.priority)
    let dueDate = `${values.reqDueDate}T00:00:00`
    let milliDate = Date.parse(dueDate)
    console.log("millidate",milliDate)
    let timeEst = milliDate - Date.now() 

    const payload = {
      "name": values.title,
      "markdown_description": `**Freshdesk Ticket ${values.ticketID}:** \n ${values.description} \n **Additional Notes:** \n ${values.notes}`,
      "assignees": assignees,
      "tags": tags,
      "status": "Requested",
      "priority": level,
      "due_date":  milliDate,
      "due_date_time": false,
      "time_estimate": timeEst /* 2 weeks in milliseconds unless we want to have different times based on priority level */,
      "start_date": Date.now() /* current dateTime in milliseconds */,
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
          "id":"dd085afd-fdda-45c9-bd7e-7888e7d1ecac",
          "value": assignees
        },
        {
          "id": "9cfbd761-8aff-416c-bd8e-6fb06f2849f3",
          "value": values.priority
        }
      ]
    }
    console.log("payload",payload)
    setLoading(true)
    
    var options = {
      headers: { 
        /*GET API KEY*/
        'Authorization': 'pk_26300173_XLACDBWL2MZ2QPURUK1U7P8I34K459CC',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(payload)
    };
    // client.request.post("https://api.clickup.com/api/v2/list/71601233/task", options).then(
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

  }

  const validate = (values)=>{
    const errors = {}
  }

  return (
    <div>
        {!loading && <Formik
            onSubmit={onSubmit}
            validate={validate}
            initialValues={initialValues}
          >
            <Form>
              <div className="input-div">
                <label>TicketID:</label>
                <Field name="ticketID" className="input"/>
              </div><br/>
              <div className="input-div">
                <label>Title:</label>
                <Field name="title" type="text" className="input" />
              </div><br/>
              <div className="input-div">
                {/* dropdown field for Assignees. Need everyones clickup id number */}
                <label>Assignee:</label>
                <Select 
                  id="assignees" 
                  name="assignees" 
                  multiple 
                  onChange={assigneeChange}
                  value={assignees} 
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                 { assigneeArr.map((name) => (
                    <MenuItem
                      key={name}
                      value={name.value}
                    >
                      {name.label}
                    </MenuItem>
                    ))
                  }
                </Select>
              </div><br/>
              <div className="input-div">
                <label>Description:</label>
                <Field as="textarea" name="description" className="textarea"/>
              </div><br/>
              <div className="input-div">
              <label>Additional Notes:</label>
                <Field as="textarea" name="notes" className="textarea"/>
              </div><br/>
              <div className="input-div">
                {/* dropdown field for requesting customer */}
                <label>Requested Due Date:</label>
                <Field type="date" name="reqDueDate" className="input" />
              </div><br/>
              <div className="input-div">
                {/* dropdown field for requesting customer */}
                <label>Requesting Customer:</label>
                <Field as="select" name="reqCustomer" className="input">
                  {requestingArr.map((item, i)=><option key={i} value={item.value}>{item.label}</option>)}
                </Field>
              </div><br/>
              <div className="input-div">
                {/* dropdown field for Priority */}
                <label>Priority:</label>
                <Field as="select" name="priority" className="input">
                  {priorityArr.map((priority, i)=><option key={i} value={priority.value}>{priority.label}</option>)}
                </Field>
              </div><br/>
              <div className="input-div">
                {/* multi-select input field */}
                <label>Tags:</label>
                <Select 
                  id="tags" 
                  name="tags"  
                  multiple
                  onChange={tagChange}
                  value={tags}
                >
                  {tagList.map((tag) => (
                    <MenuItem
                      key={tag}
                      value={tag.value}
                    >
                      {tag.label}
                    </MenuItem>
                    ))}
                </Select>
              </div><br/>
              <button type="submit">Make Click-up Ticket</button>
            </Form>
          </Formik>
        }
        { loading &&
        <div>
          Sending...
        </div>
        }
    </div>
  )
}

TicketForm.propTypes = {
  client: PropTypes.object
}

export default TicketForm


