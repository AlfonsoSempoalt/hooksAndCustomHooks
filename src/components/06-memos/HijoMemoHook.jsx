import React from 'react';

const HijoMemoHook = ({ increment }) => {
  return (
    <>
      <button className='btn btn-primary' onClick={increment}>
        +1
      </button>
    </>
  );
};

export default HijoMemoHook;
