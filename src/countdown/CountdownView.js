import React, { Component } from "react";

class CountdownView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillMount() {
    this.getTimeLeft(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeLeft(this.props.deadline), 1000);
  }

  leading0(num) {
    return num < 10 ? "0" + num : num;
  }

  getTimeLeft(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());

    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const seconds = Math.floor((time / 1000) % 60);

      this.setState({ days, hours, minutes, seconds });
    }
  }

  render() {
    return (
      <div className="countdown-content">
        <div className="row">
          <div className="countdown-box">
            <p className="countdown-box__number">
              {this.leading0(this.state.days)}
            </p>
            <p>Days</p>
          </div>
          <div className="countdown-box">
            <p className="countdown-box__number">
              {this.leading0(this.state.hours)}
            </p>
            <p>Hours</p>
          </div>
          <div className="countdown-box">
            <p className="countdown-box__number">
              {this.leading0(this.state.minutes)}
            </p>
            <p>Minutes</p>
          </div>
          <div className="countdown-box">
            <p className="countdown-box__number">
              {this.leading0(this.state.seconds)}
            </p>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    );
  }
}
export default CountdownView;
