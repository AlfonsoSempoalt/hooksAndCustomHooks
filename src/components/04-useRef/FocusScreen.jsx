import React from 'react';
import '../02-UseEffect/effects.css';

const FocusScreen = () => {
  const handleOnSubmit = (e) => {
    document.getElementById('name').select();
  };

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input
        type='text'
        className='form-control mb-3'
        placeholder='Enter your name'
        id='name'
        />
      <input
        type='button'
        className='btn btn-outline-primary mb-2'
        value='focus'
        onClick={handleOnSubmit}
      />
    </>
  );
};

export default FocusScreen;
