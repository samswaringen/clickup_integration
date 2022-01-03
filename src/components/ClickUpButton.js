import React from 'react'

function ClickUpButton(props) {
    const {ticket} = props

    const getClickUp=()=>{
        console.log("click up ticket associated is", ticket.custom_fields.cf_clickup_ticket)
    }
    
    return (
        <div>
            <button onClick={getClickUp}>Get Click-Up Ticket Info</button>
        </div>
    )
}

export default ClickUpButton
