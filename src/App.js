import React, {Component} from 'react';
import logo from './assets/images/logo.jpg';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import PageHome from './containers/PageHome';
import PageLogin from './containers/PageLogin';
import PageRegister from './containers/PageRegister';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page">
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

          <main id="content">
            <div className="container">
              <Route exact path="/" component={PageHome}/>
              <Route path="/login" component={PageLogin}/>
              <Route path="/register" component={PageRegister}/>
            </div>
          </main>

          <footer className="footer py-5">
            <div className="container">
              <div className="text-center">
                <p className="small">&copy; 2018 Super Team - University of Technology Sydney</p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
