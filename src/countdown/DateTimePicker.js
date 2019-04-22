import React, { Component } from "react";
import moment from "moment";
import { DatetimePicker, DatetimePickerTrigger } from "rc-datetime-picker";
import "rc-datetime-picker/dist/picker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datetime: null,
      mindate: moment(),
      moment: moment()
    };
  }

  handleChange = (moment) => {
    this.setState({
      moment
    });
    this.props.onChange(moment);
  }

  render() {
    return (
      <div className="datetime">
        <DatetimePickerTrigger
          moment={this.state.moment}
          onChange={this.handleChange}
          minDate={this.state.mindate}>
          <input className="datetime__input" type="text" value={this.state.moment.format('ddd MMM DD YYYY HH:mm:ss')} readOnly/>
          <span className="datetime__icon"><FontAwesomeIcon icon="calendar-alt" /></span>
        </DatetimePickerTrigger>
      </div>
    );
  }
}

export default DateTime;
