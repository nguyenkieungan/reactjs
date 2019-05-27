import React from 'react';
import { Link } from "react-router-dom";

class YtbDetail extends React.Component {

  render() {
    const {vlist, match} = this.props;
    const vitem = vlist.find(({ id }) => id === match.params.id);
    return (
      <div className="video-detail mt-3 mb-3">
        <iframe src={`https://www.youtube.com/embed/` + match.params.id} frameBorder="0" allowFullScreen />
        <br/>
        <Link to={`/search-youtube`}>Back to list</Link>
      </div>
      
    )
  }
}

export default YtbDetail;
