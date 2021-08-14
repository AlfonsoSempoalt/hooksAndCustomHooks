import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import '../02-UseEffect/effects.css';
import todoReducer from './todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [formValues, handleInputChange, resetForm] = useForm({
    description: '',
  });

  const { description } = formValues;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length >= 2) {
      const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false,
      };

      const action = {
        type: 'add',
        payload: newTodo,
      };

      dispatch(action);
      resetForm();
    }
  };

  const handleOnDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    });
  };

  return (
    <>
      <h1>Todo App ({todos.length})</h1>
      <hr />
      <section className='row'>
        <section className='col-7'>
          <ol className='list-group list-group-flush'>
            {todos.map((todo, i) => (
              <li key={todo.id} className='list-group-item text-center'>
                <p
                  className={`${todo.done && 'complete'}`}
                  onClick={() => handleToggle(todo.id)}
                >
                  {i + 1} {todo.desc}
                </p>
                <button
                  className='btn btn-danger'
                  onClick={() => handleOnDelete(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ol>
        </section>
        <section className='col-5'>
          <h4>Add todo</h4>
          <hr />
          <form onSubmit={handleSubmit} className='d-grid gap-2'>
            <input
              type='text'
              placeholder='learn...'
              name='description'
              value={description}
              onChange={handleInputChange}
              autoComplete='off'
              className='form-control'
            />
            <button
              type='submit'
              className='btn btn-outline-primary mt-2 btn-block'
            >
              Add
            </button>
          </form>
        </section>
      </section>
    </>
  );
};

export default TodoApp;
