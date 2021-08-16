import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import NavBar from './NavBar';

const AppRouter = () => {
  return (
    <>
      <Router>
        <section>
          <NavBar />

          <Switch>
            <Route exact={true} path='/about' component={AboutScreen} />
            <Route exact={true} path='/login' component={LoginScreen} />
            <Route exact={true} path='/' component={HomeScreen} />
            <Redirect to='/' />
          </Switch>
        </section>
      </Router>
    </>
  );
};

export default AppRouter;
