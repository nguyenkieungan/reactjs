import React from 'react';

import YtbListLayout from './ytbListLayout';

class YtbSearchList extends React.Component {
  render() {
    const {vlist} = this.props;
    return (
      
      <div className="searchytb-list mt-3 mb-3">
        <h6>Most Popular</h6>
        <div className="row">
          {vlist.map((vlist, i, id, title) => 
            <YtbListLayout key={i} vlist={vlist} />
          )}
        </div>
      </div>
    )
  }
}

export default YtbSearchList;