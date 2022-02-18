import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik';
import { tagList, requestingArr, priorityArr, assigneeArr } from './formArrays';
import {TicketObj} from '../App'
import Success from './Success'
import { Select, Button, TextField, MenuItem, InputLabel, OutlinedInput, Box, Chip, FormControl, Autocomplete} from '@mui/material';
import FormData from 'form-data'
import Dropzone from 'react-dropzone'
import { useLazyQuery } from "@apollo/client";
import { GET_TAGS, GET_ASSIGNEES, GET_COMPANIES, GET_PRIORITIES, GET_REQUESTERS } from './graphql';


const TicketForm = (props) => {
  const {ticket, client} = props
  const ticketContext = useContext(TicketObj)
  const {setChild} = ticketContext

  const [loading, setLoading] = useState(false)
  const [files,setFiles] = useState([])

  const [tags, {loading:tagLoad, error:tagError, data:tagData}] = useLazyQuery(GET_TAGS, {
    fetchPolicy: "no-cache"
  })
  const [assignees, {loading:assignLoad, error:assignError, data:assignData}] = useLazyQuery(GET_ASSIGNEES, {
    fetchPolicy: "no-cache"
  })
  const [companies, {loading:compLoad, error:compError, data:compData}] = useLazyQuery(GET_COMPANIES, {
    fetchPolicy: "no-cache"
  })
  const [priorities, {loading:priorLoad, error:priorError, data:priorData}] = useLazyQuery(GET_PRIORITIES, {
    fetchPolicy: "no-cache"
  })
  const [requesters, {loading:reqLoad, error:reqError, data:reqData}] = useLazyQuery(GET_REQUESTERS, {
    fetchPolicy: "no-cache"
  })

  useEffect(()=>{
    tags()
    assignees()
    companies()
    priorities()
    requesters()
  },[])

  useEffect(()=>{
    if(!tagLoad && tagData){
      console.log("got tag data via graphql", tagData)
    }
  },[tagData])

  useEffect(()=>{
    if(!assignLoad && assignData){
      console.log("got assignee data via graphql", assignData)
    }
  },[assignData])

  useEffect(()=>{
    if(!compLoad && compData){
      console.log("got company data via graphql", compData)
    }
  },[compData])

  useEffect(()=>{
    if(!priorLoad && priorData){
      console.log("got priority data via graphql", priorData)
    }
  },[priorData])

  useEffect(()=>{
    if(!reqLoad && reqData){
      console.log("got requester data via graphql", reqData)
    }
  },[reqData])
  
/* send attachments to clickup */
  const sendAttachments = (id, files)=>{
    files.map((file,i)=>{
      console.log("file",file.path)
      const form = new FormData()
      form.append("attachment",file.path)
      form.append("filename", file.name)
      let options = {
       headers:{ 'Authorization': process.env.REACT_APP_CLICKUP_KEY,
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

/* get click up custom id after ticket creation */
  const getClickUpCustomID = (id)=>{
    var options = {
      headers:{
        //need clickup api key
        'Authorization': process.env.REACT_APP_CLICKUP_KEY
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

/* once clickup cutom id is recieved, update freshdesk ticket field with it */
  const updateFreshdeskWithClickup =(custom_id)=>{
    let data = {
      "custom_fields":{
        "cf_clickup_ticket":custom_id
      }
    }
    var options = {
      headers: { 
        'Authorization': `Basic ${process.env.REACT_APP_FRESHDESK_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    client.request.put(`https://onerail.freshdesk.com/api/v2/tickets/${ticket.id}`,options)
    .then(function (data) {
      setChild((<Success client={client} clickCustID={custom_id}/>))
    })
    .catch(function (error) {
      console.log(error);
    });
  }
/* set priority level based on priority uuid. maybe find better way idk */
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
/* remove file from attachment array */
  const removeFile = (index)=>{
    let newFiles = [...files]
    newFiles.splice(index,1)
    setFiles(newFiles)
  }

/* style elements for drag and drop. move to CSS file */
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
 /********************** */ 

/* generate thumbnail previews of files */
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

/* creates payload from formik values and sends it to clickup */
  const onSubmit = (values)=>{
    const level = handlePriority(values.priority)
    let dueDate = `${values.reqDueDate}T00:00:00`
    let milliDate = Date.parse(dueDate)
    let timeEst = milliDate - Date.now() 

    const payload = {
      "name": values.userStory,
      "markdown_description": `### Problem Description: \n ${values.description} \n ### Steps to Reproduce: \n ${values.steps} \n ### Acceptance Criteria: \n ${values.acceptance}`,
      "assignees": values.assignees,
      "tags": values.tags,
      "status": "Requested",
      "priority": level,
      "due_date":  milliDate,
      "due_date_time": false,
      "time_estimate": timeEst,
      "start_date": Date.now(),
      "start_date_time": false,
      "notify_all": true,
      "parent": null,
      "links_to": null,
      "check_required_custom_Textfields": true,
      "custom_fields": [
        {
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

    
    var options = {
      headers: { 
        /*GET API KEY*/
        'Authorization': process.env.REACT_APP_CLICKUP_KEY,
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(payload)
    };
    client.request.post("https://api.clickup.com/api/v2/list/71601233/task", options).then(
      function(data){
        let response = JSON.parse(data.response)
        console.log("response form clickup:",response.id)
    /* on successful ticket creation, send attachments */
        sendAttachments(response.id, values.attachments)
    /* get custom id from clickup */
        setTimeout(
          ()=>{
            getClickUpCustomID(response.id)
          }, 500)
      },
      function(error){
        console.log(error)
      }
    )


  }

  const validate = (values)=>{
    const errors = {}
    if(!values.userStory){
      errors.userStory="User Story required"
    }
    if(!values.description){
      errors.description="Description required"
    }
    if(!values.steps){
      errors.steps="Steps required"
    }
    if(!values.acceptance){
      errors.acceptance="Acceptance required"
    }
    if(!values.reqCustomer){
      errors.reqCustomer="Requesting customer required"
    }
    if(values.assignees.length === 0){
      errors.assignees="Assignees required"
    }
    if(values.tags.length === 0){
      errors.tags="Tags required"
    }
    if(!values.priority){
      errors.priority="Priority required"
    }
    if(!values.reqDueDate){
      errors.reqDueDate="Requested date required"
    }
    return errors
  }

  const formik = useFormik({
    initialValues : { 
      userStory: "",
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
                <FormControl>
                <InputLabel shrink htmlFor="assignees" style={{backgroundColor:"white", padding:"3px"}}>
                    User Story:
                  </InputLabel>
                  <TextField 
                    id="userStory"
                    name="userStory" 
                    type="text" 
                    className="input" 

                    value={formik.values.userStory}
                    onChange={formik.handleChange}
                    error={formik.touched.userStory && Boolean(formik.errors.userStory)}
                  />
                </FormControl>
              </div><br/><br/>
              <div className="input-div">
                <FormControl >
                  <InputLabel shrink htmlFor="assignees" style={{backgroundColor:"white", padding:"3px"}}>
                    Assignee:
                  </InputLabel>
                  <Select 
                    key="assignees"
                    labelID="assignees"
                    id="assignees" 
                    name="assignees" 
                    multiple 
                    defaultValue="Assignee"
                    onChange={formik.handleChange}
                    value={formik.values.assignees} 
                    error={formik.touched.assignees && Boolean(formik.errors.assignees)}
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
                  <TextField
                    id="desription"
                    aria-label="description"
                    name="description" 
                    className="textarea"
                    placeholder="Enter description of problem"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    multiline
                    minRows={3}
                  />
                </FormControl >
              </div><br/>
              <div className="input-div">
                <FormControl>
                  <InputLabel shrink htmlFor="steps" style={{backgroundColor:"white", padding:"3px"}}>Steps to Reproduce:</InputLabel>
                  <TextField
                    id="steps"
                    aria-label="steps"
                    name="steps" 
                    className="textarea"
                    placeholder="Enter steps to reproduce problem"
                    value={formik.values.steps}
                    onChange={formik.handleChange}
                    error={formik.touched.steps && Boolean(formik.errors.steps)}
                    multiline
                    minRows={3}
                  />
                </FormControl>
              </div><br/>
              <div className="input-div">
                <FormControl >
                  <InputLabel shrink htmlFor="notes" style={{backgroundColor:"white", padding:"3px"}}>Acceptance Criteria:</InputLabel>
                  <TextField
                    id="acceptance"
                    aria-label="acceptance"
                    name="acceptance" 
                    className="textarea"
                    placeholder="Enter acceptance criteria for problem resolution"
                    value={formik.values.acceptance}
                    onChange={formik.handleChange}
                    error={formik.touched.acceptance && Boolean(formik.errors.acceptance)}
                    multiline
                    minRows={3}
                  />
                </FormControl>
              </div><br/>
              <div className="input-div">
                <FormControl>
                  <InputLabel shrink htmlFor="date" style={{backgroundColor:"white", padding:"3px"}}>Requested Due Date:</InputLabel>
                  <TextField 
                    type="date" 
                    id="date"
                    name="reqDueDate" 
                    className="input"
                    value={formik.values.reqDueDate} 
                    onChange={formik.handleChange}
                    error={formik.touched.reqDueDate && Boolean(formik.errors.reqDueDate)}
                  />
                </FormControl>
              </div><br/><br/>
              <div className="input-div">
                <FormControl error={formik.touched.reqCustomer && Boolean(formik.errors.reqCustomer)}>
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
                <FormControl error={formik.touched.priority && Boolean(formik.errors.priority)}>
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
                <FormControl >
                  <InputLabel shrink htmlFor="tags" style={{backgroundColor:"white", padding:"3px"}}>Tags:</InputLabel>
                  <Select
                    select 
                    id="tags" 
                    name="tags" 
                    multiple 
                    onChange={formik.handleChange}
                    value={formik.values.tags}
                    error={formik.touched.tags && Boolean(formik.errors.tags)}
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
                        key={tag.value}
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


