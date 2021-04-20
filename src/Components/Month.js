import React from "react";
import PropTypes from "prop-types";

function Month(props) {
  return (
    <React.Fragment>
      <h3>{props.month}</h3>
      <p><strong>Produce:</strong></p>
      {props.selection.map((element) =>
        <p>{element}</p>
      )}
      <hr />
    </React.Fragment>
  );
}

export default Month;