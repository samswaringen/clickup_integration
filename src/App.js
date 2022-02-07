import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import ClickUpStatus from './components/ClickUpStatus';
import TicketForm from './components/TicketForm';
import { companies } from './components/formArrays';



export const TicketObj = createContext()

const App = () => {

  const [loaded, setLoaded] = useState(false);
  const [child, setChild] = useState(<h3>App is loading</h3>)
  const [showModal, setShowModal] = useState(false)
  const [contact,setContact] = useState()
  const [ticket,setTicket] = useState()

  /* function that runs on ticket update to check contact company */
  var eventCallback = function (event, client) {
    client.data.get("ticket").then((data)=>{
      /* if no company attached to contact and customer field has been updated  */
      if(data.ticket.custom_fields.cf_customer && ticket.custom_fields.cf_customer === null && contact.company_id === null){
        let data = {
          "company_id": companies[data.ticket.custom_fields.cf_customer]
        }
        var options = {
          //put in API key
          headers: { 
            'Authorization': `Basic `,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        };
        client.request.put(`https://onerail.freshdesk.com/api/v2/contacts/${contact.id}`,options)
        .then(function (data) {
          console.log(data);
        })
        .catch(function (error) {
          console.log(error);
        });
      /* if contact company exists but customer ticket field has not been filled, fill it  */
      }else if(contact.company_id && ticket.custom_fields.cf_customer === null && data.ticket.custom_fields.cf_customer === null){
        let companyKeys = Object.keys(companies)
        let companyID = companyKeys.filter((key)=>companies[key] === contact.company_id)
        let data = {
          "custom_fields":{
            "cf_customer": companyID[0]
          } 
        }
        var options = {
          //put in API key
          headers: { 
            'Authorization': `Basic `,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        };
        client.request.put(`https://onerail.freshdesk.com/api/v2/tickets/${ticket.id}`,options)
        .then(function (data) {
          console.log(data);
        })
        .catch(function (error) {
          console.log(error);
        });
      /* if company exists log it or log internal agent*/
      }else {
        (contact.company_id)?console.log("customer belongs to ",contact.company_id): console.log("ticket created by internal agent");
      }
      event.helper.done()    
      event.helper.fail('errorMessage')

    })
  }
  
  /* function to run on status change. opens ticketform  modal */
  var propertyChangeCallback = function (event, client, ticket)
        {
            var event_data = event.helper.getData();
            client.instance.close()
            if(event_data.new === 8 && ticket.custom_fields.cf_clickup_ticket === null){
              setShowModal(true)
            }
        };
/* on load create script element to import freshdesk cdn */
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.freshdev.io/fdk/2.0/assets/fresh_client.js';
    script.addEventListener('load', () => setLoaded(true));
    script.defer = true;
    document.head.appendChild(script);
  }, []);

/* enable eventcallback after ticket and contact stored in state */
  useEffect(()=>{
    if(ticket  && contact ){
      app.initialized().then((client) => {
        client.events.on("ticket.propertiesUpdated", (event)=>eventCallback(event,client), {intercept: true});
      })
    }
  },[ticket,contact])

/* load components after freshdesk cdn loaded*/
  useEffect(() => {
    if (!loaded && !showModal) return
      app.initialized().then((client) => {
        client.data.get('contact').then(data=>{
          setContact(data.contact)
        })
        client.data.get('ticket').then((data) => {
          /* set initial component to clickup ticket maker */
          if(window.innerWidth < 300){
            setChild((<ClickUpStatus ticket={data.ticket}  client={client} />))
          }else{
            setChild((<TicketForm ticket={data.ticket} client={client} />))
          }
          setTicket(data.ticket)
          client.events.on("ticket.statusChanged", (event)=>propertyChangeCallback(event, client, data.ticket));
          /* set app activate and deactivate events and callbacks and pass retrieved ticket data*/
          // client.events.on("app.activated", ()=>onAppActivated(data.ticket, client));
          // client.events.on("app.deactivated", ()=>onAppDeactivated(data.ticket, client)); 
        })
        
        
      })
      if(showModal){
        /*initialize client to pull modal */
        
        app.initialized().then((client) => {
          client.interface.trigger("showModal", {
            title: `ClickUp Integration`,
            template: "index.html",
          }).then(function(data) {
          }).catch(function(error) {
          });
      })
    }
  }, [loaded,showModal])

  /* on app activate and deactivate event callbacks. not needed but maybe in future */
  // const onAppActivated =(ticket, client)=>{
  //     setChild((<ClickUpStatus ticket={ticket} client={client} />))
  // }

  // const onAppDeactivated = (ticket, client)=>{
  //     setChild((<TicketForm ticket={ticket} client={client} />))
  // }




  return (
    <TicketObj.Provider value={{setChild:setChild}}>
      <div>
          {child}
      </div>
    </TicketObj.Provider>
  )
}

export default App;
