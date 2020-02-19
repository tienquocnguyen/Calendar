import React from 'react'
import './style.css' 
export default function Calendar({weekdays}) {
    return ( 
        weekdays.map(weekday =>{
            return <th key={weekday} id="weekday">
            {weekday}
           </th>
        })
    )
}
