import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import PageHome from './containers/PageHome';
import PageLogin from './containers/PageLogin';
import PageDashboard from './containers/PageDashboard';
import PageRegister from './containers/PageRegister';
import PageRegistryAddNew from './containers/PageRegistryAddNew';
import PageRegistrySingle from './containers/PageRegistrySingle';
import PartHeader from './components/PartHeader';
import PartFooter from './components/PartFooter';
import helpers from './inc/helpers';

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
              <Route path="/registry/:registryID" component={PageRegistrySingle}/>

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
                  <PageRegistryAddNew/>
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
