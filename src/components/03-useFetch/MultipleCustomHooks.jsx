import React from 'react';
import { useCounter } from '../../hooks/useCounterV2';
import { useFetch } from '../../hooks/useFetch';
import '../02-UseEffect/effects.css';
const MultipleCustomHooks = () => {
  
  const { increase, counter } = useCounter(1);
  
  const { data, loading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Custom hooks</h1>
      {loading ? (
        <section className='alert alert-info text-center'>loading...</section>
      ) : (
        <blockquote className='blockquote text-right'>
          <p className='mb-2'>{quote}</p>
          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
      )}

      <button className='btn btn-primary' onClick={increase}>
        Next
      </button>
    </>
  );
};

export default MultipleCustomHooks;
