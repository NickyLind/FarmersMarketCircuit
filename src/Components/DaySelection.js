import React from "react";

function DaySelection(props) {
  return (
    <React.Fragment>
      <h2>{props.day}</h2>
      <h3>Location: {props.location}</h3>
      <p>Hours: {props.hours} | Booth: {props.booth}</p>
    </React.Fragment>
  )
}

export default DaySelection;