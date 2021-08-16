import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <ul>
          <Link to='/' className='navbar-brand'>
            NavBar
          </Link>
          <section className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <li>
                <NavLink
                  activeClassName='active'
                  className='nav-link'
                  to='./'
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName='active'
                  className='nav-link'
                  to='./about'
                  exact
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName='active'
                  className='nav-link'
                  to='./login'
                  exact
                >
                  Log in
                </NavLink>
              </li>
            </div>
          </section>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
