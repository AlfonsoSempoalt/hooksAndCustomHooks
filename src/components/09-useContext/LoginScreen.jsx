import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = (props) => {
  const { setUser } = useContext(UserContext);
  const handleLogIn = () => {
    setUser({
      id: 123,
      name: 'Alfonso Sempoalt',
    });
  };

  return (
    <>
      <h1>LoginScreen</h1>
      <hr />
      <button className='btn btn-primary mx-5' onClick={handleLogIn}>
        Log in
      </button>
    </>
  );
};

export default LoginScreen;
