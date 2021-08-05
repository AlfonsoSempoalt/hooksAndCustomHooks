import React from 'react';
import './counter.css';
import { useCounter } from './hooks/useCounter';

const UseState = () => {
  const {
    increaseCounter1,
    decreaseCounter1,
    restartCounter1,
    increaseCounter2,
    decreaseCounter2,
    restartCounter2,
    counter,
  } = useCounter(0);

  const { counter1, counter2 } = counter;

  return (
    <>
      <h1>Counter 1: {counter1}</h1>
      <hr />
      <button onClick={() => increaseCounter1(1)} className='btn btn-primary'>
        +1
      </button>
      <button onClick={restartCounter1} className='btn btn-primary'>
        Restart
      </button>
      <button onClick={() => decreaseCounter1(1)} className='btn btn-primary'>
        -1
      </button>
      <hr />
      <h1>Counter 2: {counter2}</h1>
      <button onClick={() => increaseCounter2(1)} className='btn btn-primary'>
        +1
      </button>
      <button onClick={restartCounter2} className='btn btn-primary'>
        Restart
      </button>
      <button onClick={() => decreaseCounter2(1)} className='btn btn-primary'>
        -1
      </button>
    </>
  );
};

export default UseState;
