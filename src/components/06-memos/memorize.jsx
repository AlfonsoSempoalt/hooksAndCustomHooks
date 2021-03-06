import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounterV2';
import Small from './Small';
import '../02-UseEffect/effects.css';

const Memorize = () => {
  const { counter, increase } = useCounter(0);

  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Memorize <Small value={counter} />{' '}
      </h1>
      <hr />
      <button className='btn btn-primary' onClick={increase}>
        +1
      </button>

      <button
        className='btn btn-outline-primary mx-3'
        onClick={() => {
          setShow(!show);
        }}
      >show/hide {JSON.stringify(show)}</button>
    </>
  );
};

export default Memorize;
