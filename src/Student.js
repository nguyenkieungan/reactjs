import React, { Component } from 'react';
import StudentTable from "./student/StudentList";
import SearchBar from "./student/SearchList";

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      users: []
    }
  }

  componentDidMount() {
    var dataUrl = "https://jsonplaceholder.typicode.com/users";
    fetch(dataUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState ({
            users: result
          })
        },
        (error) => {
          this.setState({
            error
          })
        }
      )
  }

  searchInput(filterName) {
    this.setState({filterName: filterName});
  };

  // onDelete(id) {
  //   var delItems = this.state.users(student => {
  //     return student.id !== id
  //   })
  //   this.setState({users: delItems})
  // }

  render() {
    return (
      <div className="container mt-3">
        <SearchBar filterName={this.state.filterName} onSearchInput={this.searchInput.bind(this)}/>
        <StudentTable users={this.state.users} filterName={this.state.filterName}/>
      </div>
    )
  }
}

export default Students;