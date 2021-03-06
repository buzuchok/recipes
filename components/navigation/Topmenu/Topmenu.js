import React from 'react';
import { NavLink } from "react-router-dom";
import './Topmenu.scss';

const Topmenu = (props) => {
  console.log(props);
  return (
    <nav className="topmenu" id="topmenu">
      <ul className="nav">
        {/* <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li> */}
        <li>
          <NavLink activeClassName="active" to="/recipes">
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/homemade-recipes">
            Homemade Recipes
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/search">
            Book Search
          </NavLink>
        </li>
        <li className="nav-login">
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-signup">
          <NavLink activeClassName="active" to="/signup">
            Sign up
          </NavLink>
        </li>
        <li className="nav-profile">
          <NavLink activeClassName="active" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-logout">
          <NavLink to="/">
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Topmenu;