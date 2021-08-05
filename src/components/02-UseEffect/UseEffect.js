import React, { useState } from 'react';
import './effects.css';
import { Message } from './Message.jsx';


export const UseEffect = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;
  
  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <>
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
    
      {(name === 'Alfonso') && <Message />}

    </>
  );
};
