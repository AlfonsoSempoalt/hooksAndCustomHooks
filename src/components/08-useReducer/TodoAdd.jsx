import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';

const TodoAdd = ({ handleAddTodo }) => {
  const [formValues, handleInputChange, resetForm] = useForm({
    description: '',
  });
  const { description } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length >= 2) {
      const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false,
      };
      handleAddTodo(newTodo);
      resetForm();
    }
  };

  return (
    <>
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
    </>
  );
};

TodoAdd.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};

export default TodoAdd;
