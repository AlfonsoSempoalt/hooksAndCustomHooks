import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const HomeScreen = (props) => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h1>Home page</h1>
      <hr />

      <pre>{ JSON.stringify( user )}</pre>
    </>
  );
};

export default HomeScreen;
