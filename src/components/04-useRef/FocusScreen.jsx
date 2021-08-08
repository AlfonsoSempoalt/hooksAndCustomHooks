import React, { useRef } from 'react';
import '../02-UseEffect/effects.css';

const FocusScreen = () => {
  const inputRef = useRef(0);

  const handleOnSubmit = (e) => {
    inputRef.current.focus();
  };

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input
        ref={inputRef}
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
