import React from 'react';
import './effects.css';
import { useForm } from './hooks/useForm';
import { Message } from './Message.jsx';

export const UseEffect = () => {
  const [formValues, handleInputChange, handleOnSubmit] = useForm({
    name: '',
    email: '',
  });

  const { name, email } = formValues;

  return (
    <form onSubmit={handleOnSubmit}>
      <h1>Simple Form - useEffect</h1>
      <hr />
      <section className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Alfonso Sempoalt'
          value={name}
          onChange={handleInputChange}
        />

        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='alfonsosempoalt@hotmail.com'
          value={email}
          onChange={handleInputChange}
        />
      </section>

      {name === 'Alfonso' && <Message />}

      <button  type='submit' className='btn btn-primary'>
        Send
      </button>
    </form>
  );
};
