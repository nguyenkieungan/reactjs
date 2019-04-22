import React, { Component } from "react";
import moment from "moment";
import { DatetimeInput } from "react-datetime-inputs";

class DateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datetime: null,
      mindate: moment()
    };
  }

  handleOnChange(value) {
    this.setState({
      datetime: value
    });
    this.props.onChange(value);
  }

  render() {
    return (
      <div className="datetime">
        <DatetimeInput
          datetime={this.state.datetime}
          onChange={this.handleOnChange.bind(this)}
          minDate={this.state.mindate}
        />
      </div>
    );
  }
}

DatetimeInput.defaultProps = {
  dateFormat: "ddd MMM DD YYYY",
  timeFormat: "HH:mm:ss",
  placeholder: "Choose Dates"
};

export default DateTime;
