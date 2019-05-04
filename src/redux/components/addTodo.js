import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({onClick}) => (
  <div className="todo__btn">
    <button onClick={onClick} className="todo__btn--add">
      <FontAwesomeIcon icon="plus" />
    </button>
  </div>
)
