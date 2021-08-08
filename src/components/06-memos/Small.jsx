import React, { memo } from 'react';

const Small = memo(({ value }) => {
  console.log('hola :c');
  return (
    <>
      <small>{value}</small>
    </>
  );
});

export default Small;
