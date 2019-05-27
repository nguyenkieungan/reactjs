import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends React.Component {
  render() {
    const { filterVal,filterUpdate,search } = this.props;
    return (
      <form className="d-flex">
        <input 
        class="form-control" 
        placeholder="Search Bar..."
        type="text"
        ref="filterInput"
        value={filterVal}
        onChange={filterUpdate} />
        <button className="searchytb-list__btn-search" onClick={search}><span className=""><FontAwesomeIcon icon="search" /></span></button>
      </form>
    )
  }
}

export default SearchBar;
