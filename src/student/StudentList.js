import React from "react";

class StudentTable extends React.Component {
  render() {
    var filterName = this.props.filterName;
    var student =
      this.props.users &&
      this.props.users.map(function(student, index) {
        if (
          student.name.toLowerCase().indexOf(filterName.toLowerCase()) === -1
        ) {
          return;
        }
        return (
          <StudentRow key={student.id} itemIndex={index} student={student} />
        );
      });

    return (
      <table className="table table-striped table-bordered mt-3">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>{student}</tbody>
      </table>
    );
  }
}

class StudentRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.itemIndex + 1}</td>
        <td>{this.props.student.name}</td>
        <td>{this.props.student.username}</td>
        <td>{this.props.student.email}</td>
        <td>{this.props.student.address.street}, {this.props.student.address.suite}, {this.props.student.address.city}</td>
      </tr>
    );
  }
}

export default StudentTable;
