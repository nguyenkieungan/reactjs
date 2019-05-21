import React from 'react';
import YtbListLayout from './ytbListLayout';

class YtbSearchList extends React.Component {
  render() {
    const {vlists} = this.props;
    return (
      <div className="searchytb-list mt-3 mb-3">
        <h6>Most Popular</h6>
        <div className="row">
          {vlists.map((vlists, i) => 
            <YtbListLayout key={i} vlists={vlists} />
          )}
        </div>
      </div>
    )
  }
}

export default YtbSearchList;