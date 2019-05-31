import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import YtbSearchList from './components/ytbSearchList';
import YtbDetail from './components/ytbDetail';
import { ytbApiServiceCall } from './services/ytbSearchData';

class SearchYtb extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vlists: [],
      vlist: [],
      id: props.match.params.id,
      filterText: '',
      nextPageToken: '',
      prevPageToken: '',
      pageToken: ''
    }
  }

  tokenUpdate(token) {
    ytbApiServiceCall(this.state.filterText, token).then((obj) => {
      this.setState({
        'vlist': obj.vlist
      });
    });
  };

  filterUpdate(e) {
    this.setState({
      filterText: e.target.value
    });
  };

  onSearch(e) {
    ytbApiServiceCall(this.state.filterText).then((obj) => {
      this.setState({
        'vlist': obj.vlist
      });
    });
    e.preventDefault();
  }

  componentDidMount() {
    ytbApiServiceCall(this.state.filterText).then((obj) => {
      this.setState({
        'vlist': obj.vlist
      });
    });    
  }

  render() {
    const match = this.props.match;
    return (

        <div className="col-sm-9">
          <div className="searchytb-container mt-3 ml-3">
            <h5>Search Youtube API</h5>

              <SearchBar filterVar={this.state.filterText} filterUpdate={this.filterUpdate.bind(this)} search={this.onSearch.bind(this)} />
              <Route exact path={this.props.match.url} render={() => (
                  <YtbSearchList vlist={this.state.vlist} />
              )} />
              <Route path={`${this.props.match.url}/detail/:id`} render={(props) => <YtbDetail vlist={this.state.vlist} {...props} />} />          
          </div>
        </div>

    )
  }
}

export default SearchYtb;