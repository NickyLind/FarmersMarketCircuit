import React from 'react';
import MonthList from './MonthList';
import DayList from './DayList';

class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      monthsVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      monthsVisibleOnPage: !prevState.monthsVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.monthsVisibleOnPage) {
      currentlyVisibleState = <MonthList />
      buttonText = "Return to days";
    } else {
      currentlyVisibleState = <DayList />
      buttonText = "View months";
    }
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default MarketControl;