import React from "react";
import PropTypes from "prop-types";
import MonthSelection from "./MonthSelection"

function Month(props) {
  return (
    <React.Fragment>
      <div class="day">
        <h2><a href="#">{props.month}</a></h2>
        <p><strong>Produce:</strong></p>
        {props.selection.map((element) =>
          <p>{element}</p>
        )}
      </div>
    </React.Fragment>
  );
}

export default Month;