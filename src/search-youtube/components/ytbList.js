import React from 'react';
import YtbListLayout from './ytbListLayout';

class YtbList extends React.Component {
  render() {
    const {flists} = this.props;
    return (
      <div className="searchytb-list mt-3 mb-3">
        <h6>Most Popular</h6>
        <div className="row">
          {flists.map((flists, i) => 
            <YtbListLayout key={i} vlists={flists} />
          )}
        </div>
      </div>
    )
  }
}

export default YtbList;