import React, {useContext, useEffect, useState} from 'react'
import {TicketObj} from '../App'

function ClickUpTicket(props) {
  const {client} = props
  const ticketContext = useContext(TicketObj)
  const {setChild, setShowModal, clickTick, comments} = ticketContext
  const [linked, setLinked] = useState()
  const [linkTask, setLinkTask] = useState()
  const [linkComments, setLinkComments] = useState()

  useEffect(()=>{
    if(clickTick && clickTick.linked_tasks.length >0){
      setLinked(clickTick.linked_tasks)
    }
  },[clickTick])

  useEffect(()=>{
    if(linked){
      linked.map((link)=>{
        var options = {
          headers: { 
            'Authorization': process.env.CLICKUP_KEY
          }
        };
        client.request.get(`https://api.clickup.com/api/v2/task/${link.link_id}/`, options)
        .then(function (response) {
          setLinkTask(JSON.parse(response.response))
        })
        .catch(function (error) {
          console.log(error);
        });
        client.request.get(`https://api.clickup.com/api/v2/task/${link.link_id}/comment/`, options)
        .then(function (response) {
          setLinkComments(JSON.parse(response.response))
        })
        .catch(function (error) {
          console.log(error);
        });
      })
    }
  },[linked])

  return (
    <div>
      {clickTick && <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <h3>Click Up Ticket {clickTick.custom_id}</h3>
        <strong>Status:</strong>
        <p style={{backgroundColor:`${clickTick.status.color}`, borderRadius:'2px', padding:'2px'}}>{clickTick.status.status.toUpperCase()}</p>
        <div>
          <div>Comments</div>
            <div>
              {(comments.comments.length > 0) && <ul>
                {comments.comments.map((comment)=><li style={{marginBottom:'5px'}}><strong>{comment.user.username}:</strong>{comment.comment_text}</li>)}
                </ul>
              }
              {(comments.comments.length === 0) && <>
                Ticket has no comments
              </>}
            </div>
          </div>  
        <a href={clickTick.url} target='blank'>Link to Ticket</a>
      </div>}
      {linkTask && <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <h3>Click Up Ticket {linkTask.custom_id}</h3>
        <strong>Status:</strong>
        <p style={{backgroundColor:`${linkTask.status.color}`, borderRadius:'2px', padding:'2px'}}>{linkTask.status.status.toUpperCase()}</p>
        <div>
          <div>Comments</div>
            <div>
              {(linkComments.comments.length > 0) && <ul>
                {linkComments.comments.map((comment)=><li style={{marginBottom:'5px'}}><strong>{comment.user.username}:</strong>{comment.comment_text}</li>)}
                </ul>
              }
              {(linkComments.comments.length === 0) && <>
                Ticket has no comments
              </>}
            </div>
          </div>  
        <a href={linkTask.url} target='blank'>Link to Ticket</a>
      </div>}
    </div> 
  )
}

export default ClickUpTicket