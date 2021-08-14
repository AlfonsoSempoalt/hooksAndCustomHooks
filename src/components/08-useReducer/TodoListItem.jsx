import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, handleToggle, handleOnDelete, index }) => {
  return (
    <>
      <li key={todo.id} className='list-group-item text-center'>
        <p
          className={`${todo.done && 'complete'}`}
          onClick={() => handleToggle(todo.id)}
        >  
          {index + 1} {todo.desc}
        </p>
        <button
          className='btn btn-danger'
          onClick={() => handleOnDelete(todo.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleOnDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default TodoListItem;
