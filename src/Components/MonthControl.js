import React from "react";
import PropTypes from "prop-types";

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
    if (this.state.produceVisible) {
      return (
        <React.Fragment>
          <p><strong>Produce:</strong></p>
          {this.props.selection.map((element) =>
            <p>{element}</p>)}
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <div class="day">
          <h2><a href="#" onClick={this.handleClick}>{this.props.month}</a></h2>

        </div>
      </React.Fragment>
    )




  }

  // function Month(props) {
  //   return (
  //     <React.Fragment>
  //       <div class="day">
  //         <h2><a href="#">{props.month}</a></h2>

  //         <ProduceControl
  //           selection={props.selection}
  //           key={props.index}
  //         />

  //         <p><strong>Produce:</strong></p>
  //         {props.selection.map((element) =>
  //           <p>{element}</p>
  //         )}
  //       </div>
  //     </React.Fragment>
  //   );
  // }


}

export default Month;