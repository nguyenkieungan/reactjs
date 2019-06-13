import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({onClick}) => (
  <div className="user-management__add">
    <button onClick={onClick} className="user-management__add-btn">
      Create New
    </button>
  </div>
)
