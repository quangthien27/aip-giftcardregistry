import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import helpers from '../lib/helpers';

// Login page content
class PageLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formFields: {
        email: '',
        password: ''
      }
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const formFields = {...this.state.formFields};

    formFields[name] = value;

    this.setState({formFields: formFields});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const form = document.getElementById('loginForm');
    const isValidForm = form.checkValidity();

    if (isValidForm) {
      axios.post(`${window.GCR.apiBase}/api/user/authorizeUser`, this.state.formFields).then(function(response) {
        if (200 === response.status) {
          if (response.data.success) {
            helpers.setUserLoggedIn(true);
            window.location.href = '/dashboard';
          } else {
            alert(response.data.message);
          }
        } else {
          alert('Something went wrong, please try again!');
        }
      }).catch(function(error) {
        console.log(error);

        alert('Something went wrong, please try again!');
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center mb-4">Login</h1>

        <div className="card mx-auto" style={{maxWidth: 500}}>
          <div className="card-body">
            <form onSubmit={this.handleSubmit} id="loginForm">
              <div className="form-group">
                <input type="email"
                       className="form-control"
                       placeholder="Email address *"
                       name="email"
                       required={true}
                       onChange={this.handleInputChange}
                       value={this.state.formFields.email}
                />
              </div>
              <div className="form-group">
                <input type="password"
                       className="form-control"
                       placeholder="Password *"
                       name="password"
                       required={true}
                       onChange={this.handleInputChange}
                       value={this.state.formFields.password}
                />
              </div>
              {/*<div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
              </div>*/}

              {/* Submit button */}
              <button type="submit" className="btn btn-primary mt-3">Submit</button>

              {/* Propose creating an account */}
              <p className="mt-3 mb-0">
                <small className="text-muted">Don't have an account? <Link to="/register">Register Now</Link></small>
              </p>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageLogin;
