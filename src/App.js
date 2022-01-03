import React, { useState, useEffect } from 'react';
import './App.css';
import ClickUpButton from './components/ClickUpButton';
import TicketForm from './components/TicketForm'

const App = () => {

  const [loaded, setLoaded] = useState(false);
  const [child, setChild] = useState(<h3>App is loading</h3>)
  const [ticket, setTicket] = useState({})
  const [showModal, setShowModal] = useState(false)


  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.freshdev.io/fdk/2.0/assets/fresh_client.js';
    script.addEventListener('load', () => setLoaded(true));
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  useEffect(()=>{

  },[showModal])

  useEffect(() => {
    if (!loaded && !showModal) return
    app.initialized().then((client) => {
      client.events.on("app.activated", onAppActivated);
      client.events.on("app.deactivated", onAppDeactivated);
      client.data.get('ticket').then((data) => {
        setTicket(data.ticket)
        setChild((<TicketForm ticket={data.ticket} />))
      })
      
      var propertyChangeCallback = function (event)
      // code to be executed when the status of the ticket is changed.
      {
          var event_data = event.helper.getData();
          console.log(event.type + " changed from " + event_data.old + " to " +  event_data.new);
          if(event_data.new === 8){
            setShowModal(true)
          }
      };
      client.events.on("ticket.statusChanged", propertyChangeCallback);
      
    })
    if(showModal){
      app.initialized().then((client) => {
        client.interface.trigger("showModal", {
          title: "Click up Integration",
          template: "index.html"
        }).then(function(data) {
        // data - success message
        }).catch(function(error) {
        // error - error object
        });
      })
    }
  }, [loaded,showModal])

  const onAppActivated =()=>{
    setChild((<ClickUpButton />))
  }

  const onAppDeactivated = ()=>{
    console.log("client",client)
    setChild((<TicketForm client={client} />))
  }


  return (
    <div>
      {child}
    </div>
  )
}

export default App;
