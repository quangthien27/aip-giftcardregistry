import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import PageHome from './containers/PageHome';
import PageLogin from './containers/PageLogin';
import PageDashboard from './containers/PageDashboard';
import PageRegister from './containers/PageRegister';
import PageRegistryNew from './containers/PageRegistryNew';
import PageTest from './containers/PageTest';
import PartHeader from './components/PartHeader';
import PartFooter from './components/PartFooter';
import helpers from './lib/helpers';

// Global var
window.GCR = {
  apiBase: 'http://localhost:5000'
};

// Main App
class App extends Component {
  render() {
    const isUserLoggedIn = helpers.isUserLoggedIn();

    return (
      <Router>
        <div className="page">
          {/* HEADER */}
          <PartHeader/>

          {/* Main page content */}
          <main id="content">
            <div className="container">
              <Route exact path="/" component={PageHome}/>

              <Route exact path="/dashboard" render={() => (
                !isUserLoggedIn ? (
                  <Redirect to="/login"/>
                ) : (
                  <PageDashboard/>
                )
              )}/>

              <Route exact path="/dashboard/create-registry" render={() => (
                !isUserLoggedIn ? (
                  <Redirect to="/login"/>
                ) : (
                  <PageRegistryNew/>
                )
              )}/>

              <Route path="/login" render={() => (
                isUserLoggedIn ? (
                  <Redirect to="/dashboard"/>
                ) : (
                  <PageLogin/>
                )
              )}/>

              <Route path="/register" render={() => (
                isUserLoggedIn ? (
                  <Redirect to="/dashboard"/>
                ) : (
                  <PageRegister/>
                )
              )}/>

              <Route path="/test" component={PageTest}/>
            </div>
          </main>

          {/* Footer */}
          <PartFooter/>
        </div>
      </Router>
    );
  }
}

export default App;
