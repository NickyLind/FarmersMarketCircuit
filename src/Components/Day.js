import React from "react";
import PropTypes from "prop-types";

function Day(props) {
  return (
    <React.Fragment>
      <div class="day">
        <h2>{props.day}</h2>
        <h3>Location: {props.location}</h3>
        <p>Hours: {props.hours} | Booth: {props.booth}</p>
        {/* <hr /> */}
      </div>
    </React.Fragment>
  );
}

Day.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
}

export default Day;