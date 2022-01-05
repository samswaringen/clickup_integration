

function ModalForm() {

  const [tags, setTags] = React.useState([])
  const [assignees, setAssignees] = React.useState([])
  const [ticket, setTicket] = React.useState({})
  const [loaded,setLoaded] = React.useState(false)

  React.useEffect(() => {
    app.initialized().then((client) => {
      client.instance.context().then(
        function(context)  {
          setTicket(context.data)
        })
      })
  }, []);

  React.useEffect(()=>{
    if(ticket != {}){
      setLoaded(true)
    }
  },[ticket])



  const assigneeArr = [
    {value:1, label:"Adam"},
    {value:2, label:"Chelsea"},
    {value:3, label:"Corrie"},
    {value:4, label:"Marissa"},
    {value:26300173, label:"Sam"}
  ]

  const requestingArr = ["Who is Requesting?","AAP","TSC","Menard's","PetPeople","TBC","ATD","MiltonCat","Skullcandy","Pepsi","OneRail"]

  const tagList=[
    {value:"aap", label:"aap"},
    {value:"address/name issue", label:"address/name issue"}, 
    {value:"all customer", label:"all customer"},
    {value:"atd", label:"atd"}, 
    {value:"audit/watcher", label:"audit/watcher"},
    {value:"back end", label:"back end"},
    {value:"back-end", label:"back-end"}, 
    {value:"blue green", label:"blue green"},
    {value:"blue team", label:"blue team"},
    {value:"bug", label:"bug"},
    {value:"bugs", label:"bugs"},
    {value:"cd", label:"cd"},
    {value:"ci", label:"ci"},
    {value:"contract(s)", label:"contract(s)"},
    {value:"core", label:"core"},
    {value:"cx", label:"cx",},
    {value:"data engineering", label:"data engineering"},
    {value:"design", label:"design"},
    {value:"devs", label:"devs"},
    {value:"dispatching issue", label:"dispatching issue"},
    {value:"door dash", label:"door dash"},
    {value:"duplicate", label:"duplicate"},
    {value:"edi", label:"edi"},
    {value:"engineering", label:"engineering"},
    {value:"epic", label:"epic"},
    {value:"escalation", label:"escalation"},
    {value:"eta", label:"eta"},
    {value:"extra", label:"extra"},
    {value:"feature-enhancement", label:"feature-enhancement"},
    {value:"featureflags", label:"featureflags"},
    {value:"fedex", label:"fedex"}, 
    {value:"filter/sort issue", label:"filter/sort issue"},
    {value:"front end", label:"front end"},
    {value:"front-end", label:"front-end"},
    {value:"global", label:"global"},
    {value:"green", label:"green"},
    {value:"green team", label:"green team"},
    {value:"high-impact", label:"high-impact"},
    {value:"holiday", label:"holiday"},
    {value:"hotfix", label:"hotfix"},
    {value:"implementation", label:"implementation"},
    {value:"insert", label:"insert"},
    {value:"integrations", label:"integrations"}, 
    {value:"limestone", label:"limestone"},
    {value:"logistics", label:"logistics"}, 
    {value:"lp portal", label:"lp portal"},
    {value:"lp pricing", label:"lp pricing"},
    {value:"menard", label:"menard"},
    {value:"menards", label:"menards"},
    {value:"milton cat", label:"milton cat"},
    {value:"miltoncat", label:"miltoncat"}, 
    {value:"mobile", label:"mobile"},
    {value:"not a bug", label:"not a bug"}, 
    {value:"notifications", label:"notifications"}, 
    {value:"ops", label:"ops"},
    {value:"ord", label:"ord"},
    {value:"order status", label:"order status"},
    {value:"pepsi", label:"pepsi"}, 
    {value:"petpeople", label:"petpeople"}, 
    {value:"plugin", label:"plugin"}, 
    {value:"pod issue", label:"pod issue"}, 
    {value:"qa", label:"qa"}, 
    {value:"red", label:"red"}, 
    {value:"red team", label:"red team"}, 
    {value:"rel-team", label:"rel-team"}, 
    {value:"reporting", label:"reporting"}, 
    {value:"returns", label:"returns"}, 
    {value:"revoke", label:"revoke"}, 
    {value:"risk", label:"risk"}, 
    {value:"risk-mit", label:"risk-mit"},
    {value:"routing issue", label:"routing issue"}, 
    {value:"scaling", label:"scaling"},
    {value:"skullcandy", label:"skullcandy"},
    {value:"staging", label:"staging"},
    {value:"support", label:"support"},
    {value:"synthetic events", label:"synthetic events"},
    {value:"tbc", label:"tbc"},
    {value:"tech debt", label:"tech debt"}, 
    {value:"technical design", label:"technical design"},
    {value:"test(s)", label:"test(s)"}
]

  const tagChange= (e)=>{
    e.map((item)=>setTags([...tags,item.value]))
  }

  const assigneeChange = (e)=>{
    console.log(e)
    e.map((item)=>setAssignees([...assignees,item.value]))
  }

  return (
    <div>
      Modal form will show here
            {loaded && <form>
              <div className="input-div">
                <label>TicketID:</label>
                <input className="input" defaultValue={ticket.id}/>
              </div><br/>
              <div className="input-div">
                <label>Title:</label>
                <input type="text" className="input" defaultValue={ticket.subject} />
              </div><br/>
              <div className="input-div">
                {/* dropdown input for Assignees. Need everyones clickup id number */}
                <label>Assignee:</label>
                <select id="assignees" multiple="multiple" onChange={assigneeChange}>
                  {assigneeArr.map((item, i)=><option key={i} value={item.value}>{item.label}</option>)}
                </select>
              </div><br/>
              <div className="input-div">
                <label>Description:</label>
                <textarea defaultValue={ticket.description_text} className="textarea"/>
              </div><br/>
              <div className="input-div">
              <label>Additional Notes:</label>
                <input as="textarea" name="notes" className="textarea"/>
              </div><br/>
              <div className="input-div">
                {/* dropdown input for requesting customer */}
                <label>Requested Due Date:</label>
                <input type="date" name="reqDueDate" className="input" />
              </div><br/>
              <div className="input-div">
                {/* dropdown input for requesting customer */}
                <label>Requesting Customer:</label>
                <select name="reqCustomer" className="input">
                  {requestingArr.map((item, i)=><option key={i} value={item}>{item}</option>)}
                </select>
              </div><br/>
              <div className="input-div">
                {/* dropdown input for Priority */}
                <label>Priority:</label>
                <select name="priority" className="input">
                  <option value="0">Choose Priority</option>
                  <option value="4">Low</option>
                  <option value="3">Medium</option>
                  <option value="2">High</option>
                  <option value="1">Urgent</option>
                </select>
              </div><br/>
              <div className="input-div">
                {/* multi-select input input */}
                <label>Tags:</label>
              <select id="tags" multiple="multiple"  onChange={tagChange}>
                {tagList.map((tag, i)=><option key={i} value={tag.value}>{tag.label}</option>)}
              </select>
              </div><br/>
              <button type="submit">Make Click-up Ticket</button>
            </form>}
    </div>
  )
}

ReactDOM.render(

    <ModalForm />,

  document.getElementById("root")
)

