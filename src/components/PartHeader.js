import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import helpers from '../lib/helpers';

// Header
class PartHeader extends Component {
  handleLogoutClick = () => {
    helpers.setUserLoggedIn(false);
    window.location.href = '/';
  };

  render() {
    return (
      <header className="header">
        <div className="container clearfix">
          <Link to="/">
            <img src={logo} className="logo img-fluid mb-3" alt="logo"/>
          </Link>

          <div className="float-right">
            {helpers.isUserLoggedIn() ? (
              <React.Fragment>
                <Link to="/dashboard" className="btn btn-warning mx-3" style={{minWidth: 100}}>Dashboard</Link>
                <button className="btn btn-danger mx-3" onClick={this.handleLogoutClick} style={{minWidth: 100}}>Logout</button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to="/login" className="btn btn-primary mx-3" style={{minWidth: 100}}>Login</Link>
                <Link to="/register" className="btn btn-success mx-3" style={{minWidth: 100}}>Register</Link>
              </React.Fragment>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default PartHeader;
