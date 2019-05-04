import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({todo, deleteTodo}) => {
  return (
    <li className="todo__list-item d-flex justify-content-between">
      <span>
        {todo.content}
      </span>
      <span>
        <button className="todo__btn--del" onClick={() => deleteTodo(todo.id)}>
          <FontAwesomeIcon icon="trash-alt" />
        </button>
      </span>
    </li>
  )
}
