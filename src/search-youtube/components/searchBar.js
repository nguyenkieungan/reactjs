import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { filterVal, filterUpdate } = this.props;
    return (
      <form>
        <input 
        class="form-control" 
        placeholder="Search Bar..."
        type="text"
        ref="filterInput"
        value={filterVal}
        onChange={() => {filterUpdate(this.refs.filterInput.value)}} />
      </form>
    )
  }
}

export default SearchBar;
