import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

// Header
const PartHeader = () => (
  <header className="header">
    <div className="container clearfix">
      <Link to="/">
        <img src={logo} className="logo img-fluid mb-3" alt="logo"/>
      </Link>

      <div className="float-right">
        <Link to="/login" className="btn btn-primary mx-3" style={{minWidth: 100}}>Login</Link>
        <Link to="/register" className="btn btn-success mx-3" style={{minWidth: 100}}>Register</Link>
      </div>
    </div>
  </header>
);

export default PartHeader;
