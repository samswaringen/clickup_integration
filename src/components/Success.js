import React from 'react'

function Success(props) {
  const {clickCustID} = props
  return (
    <div>
      Click up Ticket sent, ticket created {clickCustID} and Freshdesk ticket updated successfully. You can close this window.
    </div>
  )
}

export default Success
