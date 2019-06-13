import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({employee, deleteUser}) => {
  return (
    <tr>
      <td>
        <span>{employee.id}</span>
      </td>
      <td>
        <span>{employee.name}</span>
      </td>
      <td>
        <span>{employee.department}</span>
      </td>
      <td>
        <span>{employee.position}</span>
      </td>
      <td>
        <div className="d-flex">
          <button className="todo__btn--del" onClick={() => deleteUser(employee.id)}>
            <FontAwesomeIcon icon="trash-alt" />
          </button>
          <button className="todo__btn--edit">
            <FontAwesomeIcon icon="pencil-alt" />
          </button>
        </div>
      </td>
    </tr>
    // <li className="todo__list-item d-flex justify-content-between">
    //   <span>
    //     {employee.name}
    //   </span>
    //   <span>
    //     <button className="todo__btn--del" onClick={() => deleteTodo(employee.id)}>
    //       <FontAwesomeIcon icon="trash-alt" />
    //     </button>
    //   </span>
    // </li>
  )
}
