import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import ClickUpStatus from './components/ClickUpStatus';
import Success from './components/Success';
import TicketForm from './components/TicketForm'

export const TicketObj = createContext()

const App = () => {

  const [loaded, setLoaded] = useState(false);
  const [child, setChild] = useState(<h3>App is loading</h3>)
  const [showModal, setShowModal] = useState(false)


  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.freshdev.io/fdk/2.0/assets/fresh_client.js';
    script.addEventListener('load', () => setLoaded(true));
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!loaded && !showModal) return
      app.initialized().then((client) => {
        client.data.get('ticket').then((data) => {
          /* set initial component to clickup ticket maker */
          setChild((<TicketForm ticket={data.ticket} client={client} />))
          /* set app activate and deactivate events and callbacks and pass retrieved ticket data*/
          client.events.on("app.activated", ()=>onAppActivated(data.ticket, client));
          client.events.on("app.deactivated", ()=>onAppDeactivated(data.ticket, client)); 
        })
        var propertyChangeCallback = function (event)
        // code to be executed when the status of the ticket is changed.
        {
            var event_data = event.helper.getData();
            client.instance.close()
            console.log(event.type + " changed from " + event_data.old + " to " +  event_data.new);
            if(event_data.new === 8){
              setShowModal(true)
            }
        };
        client.events.on("ticket.statusChanged", propertyChangeCallback);

        
      })
      if(showModal){
        /*initialize client to pull modal */
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

  const onAppActivated =(ticket, client)=>{
    setChild((<ClickUpStatus ticket={ticket} client={client} />))
  }

  const onAppDeactivated = (ticket, client)=>{
    setChild((<TicketForm ticket={ticket} client={client} />))
  }


  return (
    <TicketObj.Provider value={{setChild:setChild, setShowModal:setShowModal}}>
      <div>
          {child}
      </div>
    </TicketObj.Provider>
  )
}

export default App;
