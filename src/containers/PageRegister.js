import React from 'react';
import FormPage from '../components/FormPage';
import axios from 'axios';
import helpers from '../inc/helpers';
import configs from '../inc/configs';

// Register page content
class PageRegister extends FormPage {
  constructor(props) {
    super(props);

    this.state = {
      formFields: {
        fullName: '',
        email: '',
        phone: '',
        password: '',
        address: '',
        suburb: '',
        state: '',
        postcode: '',
        country: 'AU'
      }
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const form = document.getElementById('registerForm');
    const isValidForm = form.checkValidity();

    if (isValidForm) {
      axios.post(`${configs.apiBase}/api/user/addUser`, this.state.formFields).then(function(response) {
        if (200 === response.status) {
          if (response.data.success) {
            helpers.setUserLoggedIn(response.data.userID);
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
        <h1 className="text-center mb-4">Register</h1>

        <div className="card mx-auto" style={{maxWidth: 500}}>
          <div className="card-body">
            <form onSubmit={this.handleSubmit} id="registerForm">
              <div className="form-group">
                <input type="text"
                       className="form-control"
                       name="fullName"
                       placeholder="Your full name *"
                       required={true}
                       onChange={this.handleInputChange}
                       value={this.state.formFields.fullName}
                />
              </div>
              <div className="form-group">
                <input type="email"
                       className="form-control"
                       name="email"
                       placeholder="Email address *"
                       required={true}
                       onChange={this.handleInputChange}
                       value={this.state.formFields.email}
                />
              </div>

              <div className="form-group">
                <input type="tel"
                       className="form-control"
                       name="phone"
                       placeholder="Phone number *"
                       required={true}
                       onChange={this.handleInputChange}
                       value={this.state.formFields.phone}
                />
              </div>

              <div className="form-group">
                <input type="text"
                       className="form-control"
                       name="address"
                       placeholder="Address *"
                       required={true}
                       onChange={this.handleInputChange}
                       value={this.state.formFields.address}
                />
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-6">
                    <input type="text"
                           className="form-control"
                           name="suburb"
                           placeholder="Suburb *"
                           required={true}
                           onChange={this.handleInputChange}
                           value={this.state.formFields.suburb}
                    />
                  </div>

                  <div className="col-6">
                    <input type="text"
                           className="form-control"
                           name="postcode"
                           placeholder="Postcode *"
                           required={true}
                           onChange={this.handleInputChange}
                           value={this.state.formFields.postcode}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="mb-1">State *</label>
                <select name="state"
                        className="w-100 form-control"
                        required={true}
                        onChange={this.handleInputChange}
                        value={this.state.formFields.state}
                >
                  <option value="">-- Please Select --</option>
                  <option value="NSW">New South Wales</option>
                  <option value="QLD">Queensland</option>
                  <option value="SA">South Australia</option>
                  <option value="TAS">Tasmania</option>
                  <option value="VIC">Victoria</option>
                  <option value="WA">Western Australia</option>
                </select>
              </div>

              <div className="form-group">
                <label className="mb-1">Country *</label>
                <select name="country"
                        className="w-100 form-control"
                        required={true}
                        onChange={this.handleInputChange}
                        value={this.state.formFields.country}
                >
                  <option value="AU">Australia</option>
                </select>
              </div>

              <div className="form-group">
                <input type="password"
                       className="form-control"
                       name="password"
                       placeholder="Password *"
                       required={true}
                       onChange={this.handleInputChange}
                       value={this.state.formFields.password}
                />
              </div>

              <p className="text-muted small">* is required field</p>

              {/* Submit button */}
              <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageRegister;
