import React from 'react'
import './style.css'
import uuid from "uuid"
import Events from './Events'

export default function Dates({date, events}) {
    let currentMonth = date.getMonth();
    let year = date.getFullYear();
    let dates = [];
    let k = 1;
    let firstDayOfMonth = new Date (year, currentMonth, 1).getDay();
    let daysInMonth = new Date(year, currentMonth+1, 0).getDate();
    for (let i = 0; i < 6; i++){
        dates[i] = [];
        for (let j = 0; j < 7; j++){
            if (i === 0 && j < firstDayOfMonth){
                dates[i][j] = 0;
            }
            else{
                if (k <= daysInMonth){
                    dates[i][j] = k;
                    k++;
                }
                else{
                    break;
                }
            }
        } 
    }
    const displayEvent = (da) => {
        let clickedDate = currentMonth+1 + "/" + da +"/" + year;
        let allEventsInClickedDate = [];
        events.map(date => {
            if (clickedDate === date[0]){
                allEventsInClickedDate.push(date)
            } 
        })
        return Events(allEventsInClickedDate)
    }
        return(
            dates.map(date => {
                return <>
                    {date.map( da => {
                        if (da === 0){
                            return <th key={uuid.v4()} id="weekday" >
                            {""}
                       </th>
                        }
                        else{
                            return <th key={uuid.v4()} id="weekday" onClick = {displayEvent.bind(this, da)}>
                            {da}
                       </th>
                        }
                    })}
                    <br></br>
                </>
            })
        )
}

