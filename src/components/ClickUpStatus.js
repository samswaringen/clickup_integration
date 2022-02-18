import React, {useEffect, useState, useContext} from 'react'
import {TicketObj} from '../App'
import { Button} from '@mui/material';

function ClickUpStatus(props) {
  const {ticket, client} = props
  const ticketContext = useContext(TicketObj)
  const {setChild, setShowModal, clickTick} = ticketContext

  const [customID, setCustomID] = useState("")
  const [clickUpExists, setClickUpExists] = useState(true)


  useEffect(()=>{
    setCustomID(ticket.custom_fields.cf_clickup_ticket)
    // need to make new field in freshdesk and then change this to find that value
  },[])

  useEffect(()=>{
    if(customID === null ){
      setClickUpExists(false)
    }
  },[customID])


  return (
    <div>

      {clickUpExists &&
        <div style={{border:'1px solid lightgrey', display:"flex",justifyContent:"center",alignItems:"center", textAlign:"center", flexDirection:"column", paddingTop:'1vh', padding:'4px', maxWidth:'98vw', borderRadius:"4px", height:"95vh", overflowY:'hidden'}}>
          <img src='https://dcbeer.com/wp-content/uploads/2012/05/samadamsbanner.jpg' width='100px'/>
          <div>This ticket has Click Up ticket <strong>{customID}</strong> associated</div><br/>
          {clickTick && <>
              <strong>Click Up Status:</strong>
              <p style={{backgroundColor:`${clickTick.status.color}`, borderRadius:'2px', padding:'2px'}}>{clickTick.status.status.toUpperCase()}</p>
            </>
          }
          {/*here we will get click up ticket and post pertanent information*/}
          <Button variant="outlined" onClick={()=>setShowModal(true)}>More Detailed View</Button>
        </div>
      }
      {!clickUpExists &&
        <div style={{border:'1px solid lightgrey', display:"flex",justifyContent:"center", alignItems:'center',textAlign:"center", flexDirection:"column", padding:'1vh', width:'94vw', borderRadius:"4px", height:"94vh"}}>
          <img src='https://dcbeer.com/wp-content/uploads/2012/05/samadamsbanner.jpg' width='100px'/>
          <h4>Click up ticket doesn't exist</h4>
          <Button variant="outlined" onClick={()=>setShowModal(true)}>Make Click Up Ticket</Button>
        </div>}
    </div>
  )
}

export default ClickUpStatus
