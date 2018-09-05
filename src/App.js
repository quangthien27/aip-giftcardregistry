import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PageHome from './containers/PageHome';
import PageLogin from './containers/PageLogin';
import PageRegister from './containers/PageRegister';
import PartHeader from './components/PartHeader';
import PartFooter from './components/PartFooter';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page">
          {/* HEADER */}
          <PartHeader/>

          {/* Main page content */}
          <main id="content">
            <div className="container">
              {/* Pages routing */}
              <Route exact path="/" component={PageHome}/>
              <Route path="/login" component={PageLogin}/>
              <Route path="/register" component={PageRegister}/>
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
