import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import YtbSearchList from './components/ytbSearchList';
import { ytbApiServiceCall } from './services/ytbSearchData';

class SearchYtb extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vlists: [],
      vlist: [],
      filterText: '',
      nextPageToken: '',
      prevPageToken: '',
      pageToken: ''
    }
  }

  tokenUpdate(token) {
    ytbApiServiceCall(this.state.filterText, token).then((obj) => {
      this.setState({
        'vlists': obj.vlists,
        'vlist': obj.vlist
      });
    });
  };

  filterUpdate(value) {
    this.setState({
      filterText: value
    });
    ytbApiServiceCall(this.state.filterText).then((obj) => {
      this.setState({
        'vlists': obj.vlists,
        'vlist': obj.vlist
      });
    })
  };

  componentDidMount() {
    ytbApiServiceCall(this.state.filterText).then((obj) => {
      this.setState({
        'vlists': obj.vlists,
        'vlist': obj.vlist
      });
    });    
  }

  render() {
    return (
      <div className="col-sm-9">
        <div className="searchytb-container mt-3 ml-3">
          <h5>Search Youtube API</h5>
          <SearchBar filterVar={this.state.filterText} filterUpdate={this.filterUpdate.bind(this)} />
          <YtbSearchList vlist={this.state.vlist} />
        </div>
      </div>
    )
  }
}

export default SearchYtb;