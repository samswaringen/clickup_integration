import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import {TicketObj} from '../App'

function ClickUpStatus(props) {
  const {ticket, client} = props
  const ticketContext = useContext(TicketObj)
  const {setChild} = ticketContext
  console.log("context",ticketContext)

  const [customID, setCustomID] = useState("")
  const [clickUpExists, setClickUpExists] = useState(true)
  const [clickTick, setClickTick] = useState({})

  useEffect(()=>{
    setCustomID(ticket.custom_fields.cf_clickup_ticket)
    // need to make new field in freshdesk and then change this to find that value
  },[])

  useEffect(()=>{
    console.log(customID)
    if(customID === null){
      setClickUpExists(false)
    }else{
      // var config = {
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
  },[customID])

  const openClickUpModal = ()=>{

  }

  return (
    <div>
      {clickUpExists &&
        <div>
          click up ticket number is {customID}
          {/*here we will get click up ticket and post pertanent information*/}
          Status: <br/>
          <button onClick={openClickUpModal}>More Detailed View</button>
        </div>
      }
      {!clickUpExists &&
        <div>
          Click up ticket doesn't exist
        </div>}
    </div>
  )
}

export default ClickUpStatus
