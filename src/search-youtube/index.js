import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import YtbSearchList from './components/ytbSearchList';
import YtbList from './components/ytbList';
import { ytbApiServiceCall, ytbGetServiceCall } from './services/ytbSearchData';

class SearchYtb extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vlists: [],
      flists: [],
      filterText: '',
      videoId: '',
      nextPageToken: '',
      prevPageToken: '',
      pageToken: ''
    }
  }

  tokenUpdate(token) {
    ytbApiServiceCall(this.state.filterText, token).then((obj) => {
      this.setState({
        'vlists': obj.vlists
      });
    });
    ytbGetServiceCall(token).then((obj) => {
      this.setState({
        'flists': obj.flists
      });
    });
  };

  filterUpdate(value) {
    this.setState({
      filterText: value
    });
    ytbApiServiceCall(this.state.filterText).then((obj) => {
      this.setState({
        'vlists': obj.vlists
      });
    })
  };

  componentDidMount() {
    ytbApiServiceCall(this.state.filterText).then((obj) => {
      this.setState({
        'vlists': obj.vlists
      });
    });
    ytbGetServiceCall().then((obj) => {
      this.setState({
        'flists': obj.flists
      });
    });
  }

  render() {
    return (
      <div className="col-sm-9">
        <div className="searchytb-container mt-3 ml-3">
          <h5>Search Youtube API</h5>
          <SearchBar filterVal={this.state.filterText} filterUpdate={this.filterUpdate.bind(this)} />
          <YtbSearchList vlists={this.state.vlists} />
          {/* <YtbList flists={this.state.flists} /> */}
        </div>
      </div>
    )
  }
}

export default SearchYtb;