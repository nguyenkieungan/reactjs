import React from "react";

class SearchBar extends React.Component {
  searchChange(event) {
    this.props.onSearchInput(event.target.value);
  }

  render() {
    return (
      <input
        className="form-control mt-3"
        type="text"
        placeholder="Tìm kiếm..."
        value={this.props.filterName}
        onChange={this.searchChange.bind(this)}
      />
    );
  }
}

export default SearchBar;
