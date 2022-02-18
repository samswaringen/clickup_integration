import React, { useState, useEffect, createContext } from 'react';
import 'dotenv/config'
import './App.css';
import ClickUpStatus from './components/ClickUpStatus';
import TicketForm from './components/TicketForm';
import ClickUpTicket from './components/ClickUpTicket';
import { companies } from './components/formArrays';
import { ApolloProvider } from '@apollo/client'
import { client} from "./ApolloClient/client"




export const TicketObj = createContext()

const App = () => {

  const [loaded, setLoaded] = useState(false);
  const [child, setChild] = useState(<h3>App is loading</h3>)
  const [showModal, setShowModal] = useState(false)
  const [contact,setContact] = useState()
  const [ticket,setTicket] = useState()
  const [clickTick, setClickTick] = useState()
  const [comments, setComments] = useState()

  /* function that runs on ticket update to check contact company */
  var eventCallback = function (client) {
      /* if no company attached to contact and customer field has been updated  */
      if(ticket.custom_fields.cf_customer && ticket.custom_fields.cf_customer === null && contact.company_id === null){
        let data = {
          "company_id": companies[ticket.custom_fields.cf_customer]
        }
        var options = {
          //put in API key
          headers: { 
            'Authorization': `Basic ${process.env.FRESHDESK_KEY}`,
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
      }else if(contact.company_id && ticket.custom_fields.cf_customer === null && ticket.custom_fields.cf_customer === null){
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
            'Authorization': `Basic ${process.env.FRESHDESK_KEY}`,
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
      // event.helper.done()    
      // event.helper.fail('errorMessage')
  }

  const getClickTick = (client, customID)=>{
    var options = {
      headers: { 
        'Authorization': process.env.CLICKUP_KEY
      }
    };
    client.request.get(`https://api.clickup.com/api/v2/task/${customID}/?custom_task_ids=true&team_id=2224044`, options)
    .then(function (response) {
      setClickTick(JSON.parse(response.response))
    })
    .catch(function (error) {
      console.log(error);
    });

    client.request.get(`https://api.clickup.com/api/v2/task/${customID}/comment/?custom_task_ids=true&team_id=2224044`, options)
    .then(function (response) {
      setComments(JSON.parse(response.response))
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  /* function to run on status change. opens ticketform  modal */
  // var propertyChangeCallback = function (event, client, ticket)
  //       {
  //           var event_data = event.helper.getData();
  //           client.instance.close()
  //           if(event_data.new === 8 && ticket.custom_fields.cf_clickup_ticket === null){
  //             setShowModal(true)
  //           }
  //       };
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
    if(ticket && contact ){
      app.initialized().then((client) => {
        eventCallback(client)
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
          let customID = data.ticket.custom_fields.cf_clickup_ticket
          /* set initial component to clickup ticket maker */
          if(window.innerWidth < 300){
            if(customID){
              getClickTick(client,customID)
              setChild((<ClickUpStatus ticket={data.ticket}  client={client} />))
              setShowModal(false) 
            }else{
              setChild((<ClickUpStatus ticket={data.ticket}  client={client} />))
              setShowModal(false) 
            }
            
          }else{
            if(customID === null){
              setChild((<TicketForm ticket={data.ticket} client={client} />))
            }else{
              getClickTick(client,customID)
              setChild((<ClickUpTicket client={client}/>))
            }
          }
        
          setTicket(data.ticket)
          //client.events.on("ticket.statusChanged", (event)=>propertyChangeCallback(event, client, data.ticket));
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
    <ApolloProvider client = {client}>
    <TicketObj.Provider value={{setChild:setChild, setShowModal:setShowModal, clickTick:clickTick, setClickTick:setClickTick, comments:comments}}>
      <div>
          {child}
      </div>
    </TicketObj.Provider>
    </ApolloProvider>
  )
}

export default App;
