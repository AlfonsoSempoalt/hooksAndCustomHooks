import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import '../02-UseEffect/effects.css';
const MultipleCustomHooks = () => {
  const data = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
  console.log(data);
  return (
    <>
      <h1>Custom hooks</h1>
    </>
  );
};

export default MultipleCustomHooks;
