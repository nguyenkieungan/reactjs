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
      <div className="App">
        <DateTime onChange={this.onDatetimeChange.bind(this)} />
        <CountdownView deadline={this.state.deadline} />
      </div>
    );
  }
}

export default Countdown;
