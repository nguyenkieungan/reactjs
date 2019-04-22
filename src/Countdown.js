import React, { Component } from "react";
import moment from "moment";
import CountdownView from "./countdown/CountdownView";
import DateTime from "./countdown/DateTimePicker";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  }

  onDatetimeChange(updatedate) {
    this.setState({
      deadline: updatedate
    });
  }

  render() {
    return (
      <div className="col-sm-9">
        <div className="react-ex__content">
          <DateTime onChange={this.onDatetimeChange.bind(this)} />
          <CountdownView deadline={this.state.deadline} />
        </div>
      </div>
    );
  }
}

export default Countdown;
