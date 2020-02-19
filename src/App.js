import React from 'react';
import Calendar from './Calendar';
import './style.css'
import Dates from './Dates'
import {useState, useEffect, useRef} from 'react'
import Events from './Events'


const LOCAL_STORAGE_KEY = "CalendarApp.events"
function App() {
  const [date, setDate] = useState(new Date())
  const [events, setEvents] = useState([])
  const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const handleClick = () => setDate(new Date(
    document.getElementById("yearSelection").value, document.getElementById("monthSelection").value
  ))
  const eventDescription = useRef();
  const eventDate = useRef();

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedEvents)setEvents(storedEvents)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(events))
  }, [events])

  function addEvent(e){
    let obj = {};
    obj[eventDate.current.value] = [eventDescription.current.value];
    for (let i = 0; i <events.length; i++){
      if (eventDate.current.value in events[i]){
        let obj2 = {};     
        obj2[eventDate.current.value] = [...events[i][eventDate.current.value], eventDescription.current.value];
        let newEvents = events.filter(event =>!events[i])
        setEvents(events => {return [...newEvents, obj2]})
      }
  
      else{
        setEvents(events => {
          return [...events, obj]
        })
      }
    }
    console.log(events)
    // eventDate.current.value = null;
    // eventDescription.current.value = null;
  }
  
  return (
    <>
    <div id = "title">
      Calendar
      <br/>
      </div>
      <div id = "center">
      <div>
        <select id="monthSelection">
          <option>Choose your month</option>
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
      </div>
        <input placeholder ="year" type = "text" id = "yearSelection"></input>
        <button  onClick= {handleClick} > Submit</button>        <br/>
        <Calendar weekdays = {weekdays}/>
        <br/>
        < Dates date = {date} events = {events}/>
        <input placeholder ="e.g. 1/1/2018" type = "text" id = "eventDate" ref = {eventDate}></input> 
        <textarea placeholder ="event's description" type = "text" id = "eventDescription" ref = {eventDescription}></textarea> 
        <button onClick = {addEvent}> Add Event</button>       
         <br/>
          <Events/>
      </div>    
    
    </>
  )
}

export default App;
