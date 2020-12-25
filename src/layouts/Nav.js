import React  from 'react';
import {NavLink } from 'react-router-dom';


const Nav = () =>{
 return (
  <>
  <div className="container">
    <nav className="navbar navbar-expand-sm navbar-dark bg-info">
    <NavLink className="navbar-brand" to="/react">REACT</NavLink >
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <NavLink activeClassName="menu_active" className="nav-link"  exact to="/">Home</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink activeClassName="menu_active" className="nav-link"  exact to="/about">About</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink activeClassName="menu_active" className="nav-link"  exact to="/service">Services</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink activeClassName="menu_active" className="nav-link"  exact to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </nav>
  </div>

  </>
 );
};

export default Nav;