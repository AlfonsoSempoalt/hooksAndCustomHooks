import { useState } from 'react';

export const useCounter = (defaultValue = 0) => {
  const [counter, setCounter] = useState({defaultValue});

  const increase = () => {
    setCounter(setCounter(counter+1));
  };

  const decrease = () => {
    setCounter(setCounter(counter-1));
  };

  const restart = () => {
    setCounter(setCounter(defaultValue));
  };
 
  return {
    increase: increase,
    decrease: decrease,
    restart: restart,
    counter,
  };
};
