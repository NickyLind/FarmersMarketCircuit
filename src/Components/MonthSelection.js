import React from "react";

function MonthSelection(props) {
  return (
    <React.Fragment>
      <p><strong>Produce:</strong></p >
      { props.selection.map((element) =>
        <p>{element}</p>
      )}
    </React.Fragment>
  )
}

export default MonthSelection;