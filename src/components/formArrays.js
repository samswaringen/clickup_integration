const requestingArr = [
  {value:"",label:"Who is Requesting?"},
  {value:"45c3d4ca-f36c-47c4-bb0e-d8f66cb08e49",label:"AAP"},
  {value:"2ac912e7-4c67-4a20-a88e-c5b573acc59d",label:"TSC"},
  {value:"45ecfb6a-dcd4-4fa1-ab4e-a88127b7e741",label:"Menard's"},
  {value:"4755f95d-7e13-4122-9d4e-b4cb4451af3f",label:"PetPeople"},
  {value:"0f6fed9c-9e13-43a6-b79f-03f68a67202d",label:"TBC"},
  {value:"89705354-3e0b-4d9a-b2c3-7ca5232e825e",label:"ATD"},
  {value:"6b56f348-eecc-438e-881f-270f8f386d80",label:"MiltonCat"},
  {value:"85a42e7b-c746-49cd-afae-a4e09c188ab6",label:"Skullcandy"},
  {value:"11bc28f1-75fa-4226-a366-bb5ef4f1c9de",label:"Pepsi"},
  {value:"a665613e-c932-4196-9bba-6b51356c2ef5",label:"OneRail"},
  {value:"31d4abc2-fa8b-45be-9694-e686291cc88e",label:"Clmbr"},
  {value:"f1444b44-b75c-4451-855e-27068bd1cc36",label:"Peloton"},
  {value:"7a4e7755-b302-4dea-8b73-c6fef6441822",label:"World Electric"},
  {value:"b7169c14-93ac-4b99-b2ea-23f8b36f985b",label:"Lowes"},
  {value:"9ae72a95-a5df-428a-8cff-22cc2451df8e",label:"AAFES"},
  {value:"4d014f1a-e3d8-433c-930a-602d55f2b383",label:"Galleghar Tire"},
  {value:"45ecfb6a-dcd4-4fa1-ab4e-a88127b7e741",label:"Menards"},
  {value:"1ab62bd3-cc40-45cb-8ba3-0c0a3a0bf86b",label:"onePotluck"},
  {value:"f8580be7-3b19-40ce-b208-c791bc25affa",label:"Pitney Bowes"}

]

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

const priorityArr = [
  {value:"Priority Level",label:"Priority Level",level:0},
  {value:"a932b0ae-1ce9-4664-9b21-af813f5e5e97",label:"Low",level:4},
  {value:"dfc34a8f-0c76-4e30-a522-9b7caa722d92",label:"Normal",level:3},
  {value:"23a52a86-534e-4d5a-8adc-274054d1eb19",label:"High",level:2},
  {value:"72790d5b-fb1e-44b6-be6a-59f8ff4e5ac3",label:"Urgent",level:1}
]

const assigneeArr = [
  {value:1, label:"Adam", "1":"Adam"},
  {value:2, label:"Chelsea", "2":"Chelsea"},
  {value:3, label:"Corrie", "3":"Corrie"},
  {value:4, label:"Marissa", "4":"Marissa"},
  {value:26300173, label:"Sam", "26300173":"Sam"}
]


export {requestingArr, tagList, priorityArr, assigneeArr}