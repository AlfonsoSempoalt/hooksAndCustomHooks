import { useState } from 'react';

export const useCounter = (defaultValue = 0) => {
  const [counter, setCounter] = useState({
    counter1: defaultValue,
    counter2: defaultValue,
  });

  const increaseCounter1 = (factor=1) => {
    setCounter({ ...counter, counter1: counter.counter1 + factor });
  };

  const decreaseCounter1 = (factor=1) => {
    setCounter({ ...counter, counter1: counter.counter1 - factor });
  };

  const restartCounter1 = () => {
    setCounter({ ...counter, counter1: defaultValue });
  };

  const increaseCounter2 = (factor=1) => {
    setCounter({ ...counter, counter2: counter.counter2 + factor });
  };

  const decreaseCounter2 = (factor=1) => {
    setCounter({ ...counter, counter2: counter.counter2 - factor });
  };

  const restartCounter2 = () => {
    setCounter({ ...counter, counter2: defaultValue });
  };

  return {
    increaseCounter1: increaseCounter1,
    decreaseCounter1: decreaseCounter1,
    restartCounter1: restartCounter1,
    increaseCounter2: increaseCounter2,
    decreaseCounter2: decreaseCounter2,
    restartCounter2: restartCounter2,
    counter,
  };
};
