import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: [],
      students:
      [
        {
          id: 1,
          name: "Anna",
          age: "20",
          score: "56"
        },
        {
          id: 2,
          name: "Max",
          age: "22",
          score: "100"
        },
        {
          id: 3,
          name: "Roy",
          age: "23",
          score: "87"
        },
        {
          id: 4,
          name: "Rose",
          age: "23",
          score: "87"
        },
        {
          id: 5,
          name: "Phạm Văn Mạnh",
          age: "21",
          score: "34"
        },
        {
          id: 6,
          name: "Nguyễn Văn Nam",
          age: "21",
          score: "34"
        }
      ]
    }
  }

  searchInput(filterName) {
    this.setState({filterName: filterName});
  };

  render() {
    return (
      <div className="container mt-3">
        <SearchBar filterName={this.state.filterName} onSearchInput={this.searchInput.bind(this)}/>
        <StudentTable students={this.state.students} filterName={this.state.filterName} />
      </div>
    )
  }
}

class SearchBar extends React.Component {
  searchChange(event) {
    this.props.onSearchInput(event.target.value);
  }

  render() {
    return (
      <input className="form-control mt-3" type="text" placeholder="Tìm kiếm..." value={this.props.filterName} onChange={this.searchChange.bind(this)} />
    )
  }
}

class StudentTable extends React.Component {
  render() {
    var filterName = this.props.filterName;
    var student = this.props.students.map(function(student, index) {
      if (student.name.indexOf(filterName)  === -1) {
        return;
      }
      return (
        <StudentRow key={student.id} itemIndex={index} student={student} />
      )
    })

    return (
      <table className="table table-striped table-bordered mt-3">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {student}
        </tbody>
      </table>
    )
  }
}

class StudentRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.itemIndex + 1}</td>
        <td>{this.props.student.name}</td>
        <td>{this.props.student.age}</td>
        <td>{this.props.student.score}</td>
      </tr>   
    )
  }
}

ReactDOM.render(<Students/>, document.getElementById('root'));

