import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import helpers from '../inc/helpers';
import configs from '../inc/configs';
import FormPage from '../components/FormPage';

// Login page content
class PageLogin extends FormPage {
  constructor(props) {
    super(props);

    this.state = {
      formFields: {
        email: '',
        password: ''
      }
    };
  }

  /**
   * Form submission handler
   */
  handleSubmit = (event) => {
    event.preventDefault();

    const form = document.getElementById('loginForm');
    const isValidForm = form.checkValidity();

    if (isValidForm) {
      axios.post(`${configs.apiBase}/api/user/authorizeUser`, this.state.formFields).then(function(response) {
        if (200 === response.status) {
          if (response.data.success) {
            helpers.setUserLoggedIn(response.data.userID);
            window.location.href = configs.endpoints.dashboard;
          } else {
            alert(response.data.message);
          }
        } else {
          alert(configs.messages.error);
        }
      }).catch(function(error) {
        console.log(error);

        alert(configs.messages.error);
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

              <p className="text-muted small">* is required field</p>

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
