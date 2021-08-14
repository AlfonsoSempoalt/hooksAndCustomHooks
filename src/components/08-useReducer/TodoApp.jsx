import React, { useEffect, useReducer } from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import todoReducer from './todoReducer';
import { todoHandlers } from './todoHandlers';
import '../02-UseEffect/effects.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const {handleOnDelete, handleToggle, handleAddTodo} = todoHandlers(dispatch);

  return (
    <>
      <h1>Todo App ({todos.length})</h1>
      <hr />
      <section className='row'>
        <section className='col-7'>
          <TodoList
            todos={todos}
            handleOnDelete={handleOnDelete}
            handleToggle={handleToggle}
          />
        </section>
        <section className='col-5'>
          <TodoAdd handleAddTodo={ handleAddTodo }/>
        </section>
      </section>
    </>
  );
};

export default TodoApp;
