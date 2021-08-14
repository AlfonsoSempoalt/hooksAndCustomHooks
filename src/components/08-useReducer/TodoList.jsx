import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos = [], handleToggle, handleOnDelete }) => {
  return (
    <>
      <ul className='list-group list-group-flush'>
        {todos.map((todo, i) => (
          <TodoListItem
            todo={todo}
            key={todo.id}
            handleOnDelete={handleOnDelete}
            handleToggle={handleToggle}
            index={i}
          />
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleOnDelete: PropTypes.func.isRequired,
};

export default TodoList;
