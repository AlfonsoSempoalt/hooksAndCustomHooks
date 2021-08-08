import React, { useCallback, useState } from 'react';
import HijoMemoHook from './HijoMemoHook';
import '../02-UseEffect/effects.css';

const UseCallbackHook = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, [setCounter]);

  return (
    <>
      <h1>useCallbackHook {counter}</h1>
      <hr />
      <HijoMemoHook increment={increment} />
    </>
  );
};

export default UseCallbackHook;
