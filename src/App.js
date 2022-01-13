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


  var eventCallback = function (event, client) {
    //var event_data = event.helper.getData();
    // console.log('contact in state', contact)
    // console.log("ticket in state", ticket)
    client.data.get("ticket").then((data)=>{
      if(data.ticket.custom_fields.cf_customer && ticket.custom_fields.cf_customer === null && contact.company_id === null){
        console.log("no company, setting company as", data.ticket.custom_fields.cf_customer)
        //send contact update based off data.ticket.custom_fields.cf_customer result. create key/value array with customer and freshdesk ids
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
          console.log("success")
        })
        .catch(function (error) {
          console.log(error);
        });

      }else if(contact.company_id && ticket.custom_fields.cf_customer === null && data.ticket.custom_fields.cf_customer === null){
        let companyKeys = Object.keys(companies)
        let companyID;
        companyKeys.map((key,i)=>{
          if(companies[key] === contact.company_id){
            companyID = key
          }
        })
        let data = {
          "custom_fields":{
            "cf_customer": companyID
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
          console.log("success")
        })
        .catch(function (error) {
          console.log(error);
        });
      }else {
        (contact.company_id)?console.log("customer belongs to ",contact.company_id): console.log("ticket created by internal agent");
      }
      event.helper.done()    
      event.helper.fail('errorMessage')

    })
  }

  var propertyChangeCallback = function (event, client, ticket)
        // code to be executed when the status of the ticket is changed.
        {
            var event_data = event.helper.getData();
            client.instance.close()
            console.log(event.type + " changed from " + event_data.old + " to " +  event_data.new);
            console.log("ticket inside property change function",ticket.custom_fields.cf_clickup_ticket)
            if(event_data.new === 8 && ticket.custom_fields.cf_clickup_ticket === null){
              setShowModal(true)
            }
        };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.freshdev.io/fdk/2.0/assets/fresh_client.js';
    script.addEventListener('load', () => setLoaded(true));
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  useEffect(()=>{
    if(ticket  && contact ){
      app.initialized().then((client) => {
        client.events.on("ticket.propertiesUpdated", (event)=>eventCallback(event,client), {intercept: true});
      })
    }
  },[ticket,contact])

  useEffect(() => {
    if (!loaded && !showModal) return
      app.initialized().then((client) => {
        client.data.get('contact').then(data=>{
          setContact(data.contact)
          console.log("contact set")
        })
        client.data.get('ticket').then((data) => {
          /* set initial component to clickup ticket maker */
          if(window.innerWidth < 300){
            setChild((<ClickUpStatus ticket={data.ticket}  client={client} />))
          }else{
            setChild((<TicketForm ticket={data.ticket} client={client} />))
          }
          setTicket(data.ticket)
          console.log("ticket set")
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
            title: "Click up Integration",
            template: "index.html",
          }).then(function(data) {
          // data - success message
          }).catch(function(error) {
          // error - error object
          });
      })
    }
  }, [loaded,showModal])

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
