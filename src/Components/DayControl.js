import React from "react";
import DaySelection from "./DaySelection";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationVisible: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      locationVisible: !prevState.locationVisible
    }));
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.locationVisible) {
      currentlyVisibleState = <DaySelection
        location={this.props.location}
        hours={this.props.hours}
        booth={this.props.booth}
      />
    }

    return (
      <React.Fragment>
        <div class="day">
          <h2><span class="click" onClick={this.handleClick}>{this.props.day}</span></h2>
          {currentlyVisibleState}
        </div>
      </React.Fragment>
    )
  }
}

export default Day;
