import React, { Component } from 'react';

class RefsForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      fullName: this.fullName.value,
      genderType: this.genderType.value
    };
    console.log(payload);
  }
  render() {
    return (
      <div className="col-sm-9">
        <form className="refs-form mt-3 mb-3" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Họ Tên</label>
            <input
              className="form-control"
              ref={input => this.fullName = input}
              type="text"
              name="fullname"
              placeholder="Full Name"/>
          </div>
          <div className="form-group">
            <label>Giới tính</label>
            <select
              className="form-control"
              ref={select => this.genderType = select}
              name="genderType">
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default RefsForm;