import { useState } from 'react';

export const useCounter = (defaultValue = 1) => {
  const [counter, setCounter] = useState(defaultValue);

  const increase = () => {
    setCounter(counter+1);
  };

  const decrease = () => {
    setCounter(counter-1);
  };

  const restart = () => {
    setCounter(defaultValue);
  };
 
  return {
    increase: increase,
    decrease: decrease,
    restart: restart,
    counter: counter,
  };
};
