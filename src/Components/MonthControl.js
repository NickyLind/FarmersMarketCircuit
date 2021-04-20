import React from "react";
import PropTypes from "prop-types";
import MonthSelection from './MonthSelection'

class Month extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      produceVisible: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      produceVisible: !prevState.produceVisible
    }));
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.produceVisible) {
      currentlyVisibleState = <MonthSelection
        selection={this.props.selection}
      />
    }

    return (
      <React.Fragment>
        <div class="day">
          <h2><span class="click" onClick={this.handleClick}>{this.props.month}</span></h2>
          {currentlyVisibleState}
        </div>
      </React.Fragment>
    )
  }
}

export default Month;