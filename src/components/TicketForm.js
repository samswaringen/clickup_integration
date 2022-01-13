import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik';
import { tagList, requestingArr, priorityArr, assigneeArr } from './formArrays';
import {TicketObj} from '../App'
import Success from './Success'
import { Select, Button, TextField, MenuItem, InputLabel, OutlinedInput, Box, Chip, TextareaAutosize, FormControl} from '@mui/material';
import FormData from 'form-data'
import Dropzone from 'react-dropzone'


const TicketForm = (props) => {
  const {ticket, client} = props
  const ticketContext = useContext(TicketObj)
  const {setChild} = ticketContext

  const [loading, setLoading] = useState(false)
  const [files,setFiles] = useState([])

  

  const sendAttachments = (id, files)=>{
    files.map((file,i)=>{
      console.log("file",file.path)
      const form = new FormData()
      form.append("attachment",file)
      form.append("filename", file.name)
      let options = {
       headers:{ 'Authorization': '',
        'Content-Type': 'multipart/form-data'},
        body: form
      }
      let url = `https://api.clickup.com/api/v2/task/${id}/attachment`
      for(let i of form.values()){
        console.log("values",i)
      }

      // client.request.post(url, options)
      // .then(function(data){
      //   console.log("data", data)
      // }
      // .catch(function(error){
      //   console.log("error",error)
      // }))
    })

  }

  const getClickUpCustomID = (id)=>{
    var options = {
      headers:{
        //need clickup api key
        'Authorization': ''
      }
    }
    client.request.get(`https://api.clickup.com/api/v2/task/${id}`,options)
      .then(function (data) {
        let response = JSON.parse(data.response)
        console.log(response.custom_id);
        if(response.custom_id === null){
          getClickUpCustomID(id)
        }else{
          updateFreshdeskWithClickup(response.custom_id)
        }
      })
      .catch(function (error) {
         console.log(error);
      });
  }

  const updateFreshdeskWithClickup =(custom_id)=>{
    let data = {
      "custom_fields":{
        /* figure out proper object property path for click up custom id looks like REQ-XXXX */
        "cf_clickup_ticket":custom_id
      }
    }
    var options = {
      headers: { 
        'Authorization': `Basic `,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    client.request.put(`https://onerail.freshdesk.com/api/v2/tickets/${ticket.id}`,options)
    .then(function (data) {
      console.log(data);
      setChild((<Success client={client} clickCustID={custom_id}/>))
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

  const removeFile = (index)=>{
    let newFiles = [...files]
    newFiles.splice(index,1)
    setFiles(newFiles)
  }

  const baseStyle = {
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

  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
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
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };
  

  const thumbs = files.map((file,i) => (
    <div style={thumb} key={file.name} onClick={()=>removeFile(i)}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));


  const onSubmit = (values)=>{
    const level = handlePriority(values.priority)
    let dueDate = `${values.reqDueDate}T00:00:00`
    let milliDate = Date.parse(dueDate)
    let timeEst = milliDate - Date.now() 

    const payload = {
      "name": values.title,
      "markdown_description": `### Problem Description: \n ${values.description} \n ### Steps to Reproduce: \n ${values.steps} \n ### Acceptance Criteria: \n ${values.acceptance}`,
      "assignees": values.assignees,
      "tags": values.tags,
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
      "check_required_custom_Textfields": true,
      "custom_fields": [
        {
          /* requesting customer */
          "id":"693b7b05-8c30-4e7b-be39-295245333faf",
          "value": values.reqCustomer
        },
        {
          "id":"5418bbd8-47f5-479c-8b07-88dded5b0540",
          "value":`Freshdesk Ticket ${ticket.id}`
        },
        {
          "id": "9cfbd761-8aff-416c-bd8e-6fb06f2849f3",
          "value": values.priority
        }
      ]
    }
    setLoading(true)
    sendAttachments(1,values.attachments)
    console.log("payload",payload)
    
    var options = {
      headers: { 
        /*GET API KEY*/
        'Authorization': '',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(payload)
    };
    sendAttachments(1,values.attachments)
    // client.request.post("https://api.clickup.com/api/v2/list/71601233/task", options).then(
    //   function(data){
    //     let response = JSON.parse(data.response)
    //     console.log("response form clickup:",response.id)
    //     sendAttachments(response.id, values.attachments)
    //     setTimeout(
    //       ()=>{
    //         getClickUpCustomID(response.id)
    //       }, 500)
    //   },
    //   function(error){
    //     console.log(error)
    //   }
    // )


  }

  const validate = (values)=>{
    const errors = {}
  }

  const formik = useFormik({
    initialValues : { 
      ticketID: ticket.id,
      title: ticket.subject,
      description: "",
      steps: "",
      acceptance:"",
      reqCustomer:"",
      assignees:[],
      tags:[],
      priority:priorityArr[ticket.priority-1].value,
      reqDueDate:0,
      attachments:[]
    },
    validate: validate,
    onSubmit: onSubmit,
  });

  return (
    <div>
        {!loading && 
          <div style={{marginTop:"2vh"}}>
            <form onSubmit={formik.handleSubmit}>
              <div className="input-div">
                <TextField 
                  fullwidth
                  id="ticketID" 
                  name="ticketID" 
                  className="input-div"
                  label="TicketID:"
                  value={formik.values.ticketID}
                  onChange={formik.handleChange}
                />
              </div><br/>
              <div className="input-div">
                <TextField 
                  id="title"
                  name="title" 
                  type="text" 
                  className="input" 
                  label="Title:"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
              </div><br/><br/>
              <div className="input-div">
                {/* dropdown Textfield for Assignees. Need everyones clickup id number */}
                <FormControl >
                  <InputLabel shrink htmlFor="assignees" style={{backgroundColor:"white", padding:"3px"}}>
                    Assignee:
                  </InputLabel>
                  <Select 
                    key="assignees"
                    labelID="asignees"
                    id="assignees" 
                    name="assignees" 
                    multiple 
                    defaultValue="Assignee"
                    onChange={formik.handleChange}
                    value={formik.values.assignees} 
                    input={<OutlinedInput id="assignees" label="Chip" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={assigneeArr.filter((item)=>item[value])[0][value]} />
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
                </FormControl>
              </div><br/>
              <div className="input-div">
                <FormControl>
                  <InputLabel shrink htmlFor="description" style={{backgroundColor:"white", padding:"3px"}}>Description:</InputLabel>
                  <TextareaAutosize
                    id="desription"
                    label="Description"
                    aria-label="description"
                    name="description" 
                    className="textarea"
                    placeholder="Enter description of problem"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    minRows={3}
                    style={{padding:"10px"}}
                  />
                </FormControl >
              </div><br/>
              <div className="input-div">
                <FormControl>
                  <InputLabel shrink htmlFor="steps" style={{backgroundColor:"white", padding:"3px"}}>Steps to Reproduce:</InputLabel>
                  <TextareaAutosize
                    id="steps"
                    aria-label="steps"
                    name="steps" 
                    className="textarea"
                    placeholder="Enter steps to reproduce problem"
                    value={formik.values.steps}
                    onChange={formik.handleChange}
                    minRows={3}
                    style={{padding:"10px"}}
                  />
                </FormControl>
              </div><br/>
              <div className="input-div">
                <FormControl>
                  <InputLabel shrink htmlFor="notes" style={{backgroundColor:"white", padding:"3px"}}>Acceptance Criteria:</InputLabel>
                  <TextareaAutosize
                    id="acceptance"
                    aria-label="acceptance"
                    name="acceptance" 
                    className="textarea"
                    placeholder="Enter acceptance criteria for problem resolution"
                    value={formik.values.acceptance}
                    onChange={formik.handleChange}
                    minRows={3}
                    style={{padding:"10px"}}
                  />
                </FormControl>
              </div><br/>
              <div className="input-div">
                {/* dropdown Textfield for requesting customer */}
                <FormControl>
                  <InputLabel shrink htmlFor="date" style={{backgroundColor:"white", padding:"3px"}}>Requested Due Date:</InputLabel>
                  <TextField 
                    type="date" 
                    id="date"
                    name="reqDueDate" 
                    className="input"
                    value={formik.values.reqDueDate} 
                    onChange={formik.handleChange}
                  />
                </FormControl>
              </div><br/><br/>
              <div className="input-div">
                {/* dropdown Textfield for requesting customer */}
                <FormControl>
                  <InputLabel shrink htmlFor="reqCustomer" style={{backgroundColor:"white", padding:"3px"}}>Requesting Customer:</InputLabel>
                  <Select 
                    id="reqCustomer"
                    name="reqCustomer" 
                    className="input"
                    value={formik.values.reqCustomer}
                    onChange={formik.handleChange}
                    input={<OutlinedInput id="reqCustomer" label="reqCustomer" />}
                    style={{height:"200%"}}
                  >
                    {requestingArr.map((item, i)=><MenuItem key={item.label} value={item.value}>{item.label}</MenuItem>)}
                  </Select>
                </FormControl>
              </div><br/>
              <div className="input-div">
                {/* dropdown Textfield for Priority */}
                <FormControl>
                  <InputLabel shrink htmlFor="priority" style={{backgroundColor:"white", padding:"3px"}}>Priority:</InputLabel>
                  <Select 
                    id="priority" 
                    name="priority" 
                    className="input" 
                    value={formik.values.priority} 
                    onChange={formik.handleChange}
                    input={<OutlinedInput id="priority" label="Priority" />}
                    style={{height:"200%"}}
                  >
                    {priorityArr.map((priority, i)=><MenuItem key={priority.label} value={priority.value}>{priority.label}</MenuItem>)}
                  </Select>
                </FormControl>
              </div><br/>
              <div className="input-div">
                {/* multi-select input Textfield */}
                <FormControl>
                  <InputLabel shrink htmlFor="tags" style={{backgroundColor:"white", padding:"3px"}}>Tags:</InputLabel>
                  <Select 
                    id="tags" 
                    name="tags"  
                    multiple
                    onChange={formik.handleChange}
                    value={formik.values.tags}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
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
                </FormControl>
              </div><br/>
              <div className='input-div'>
                <Dropzone
                  onDrop={(fileObjects)=>{
                  formik.setFieldValue("attachments", fileObjects);
                  setFiles(
                    fileObjects.map((file) =>
                      Object.assign(file, {
                        preview: URL.createObjectURL(file)
                      })
                    )
                  );
                  }}
                  multiple
                >
                  {({getRootProps, getInputProps}) => (
                  <section>
                    <div {...getRootProps({style:baseStyle})}>
                      <input {...getInputProps()} />
                      <p>Drag 'n' drop some files here, or click to select files</p>
                    </div>
                    <aside>{thumbs}</aside>
                  </section>
                )}
                </Dropzone>
              </div><br/>
              <Button type="submit">Make Click-up Ticket</Button>
            </form>
          </div>
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


