import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const AboutScreen = (props) => {
  const { user, setUser } = useContext(UserContext);
  const handleLogOut = () => {
    setUser({});
  };
  return (
    <>
      <h1>AboutScreen</h1>
      <hr />
      <pre>{JSON.stringify(user)}</pre>
      <button className='btn btn-warning' onClick={handleLogOut}>
        logout
      </button>
    </>
  );
};

export default AboutScreen;
