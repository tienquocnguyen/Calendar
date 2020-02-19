import React from 'react'
import './style.css'

export default function Events(events) {
    return (
        <textarea id = "eventBox" placeholder = "Click on a date to see if you have an event" >
            {/* {events.map(event =>{
                return
            })} */}
        </textarea>
    )
}
