import React, {useEffect, useState} from 'react'

function ClickUpStatus(props) {
  const {ticket} = props
  const [clickTick, setClickTick] = useState("")
  const [clickUpExists, setClickUpExists] = useState(false)

  useEffect(()=>{
    setClickTick(ticket.custom_fields.cf_clickup_ticket)
    if(clickTick != null){
      setClickUpExists(true)
    }

  })

  return (
    <div>
      {clickUpExists &&
        <div>
          click up ticket number is {clickTick}
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
