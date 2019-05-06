import React from 'react';

export default (todo) => {
  return (
    <div className="d-flex todo__filter">
      <span>Show: </span>
      <div className="todo__filter-link">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
} 
