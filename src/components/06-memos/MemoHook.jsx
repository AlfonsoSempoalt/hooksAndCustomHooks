import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounterV2';
import '../02-UseEffect/effects.css';

const MemoHook = () => {
  const { counter, increase } = useCounter(100);

  const [show, setShow] = useState(true);
  const memoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <>
      <h1>
        Memorize <small>{counter}</small>
      </h1>
      <hr />
      <p>{memoPesado}</p>
      <button className='btn btn-primary' onClick={increase}>
        +1
      </button>

      <button
        className='btn btn-outline-primary mx-3'
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default MemoHook;
