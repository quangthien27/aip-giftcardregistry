import React, {Component} from 'react';
import axios from 'axios';
import helpers from '../lib/helpers';

// Register page content
class PageRegister extends Component {
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

    const form = document.getElementById('registerForm');
    const isValidForm = form.checkValidity();

    if (isValidForm) {
      axios.post(`${window.GCR.apiBase}/api/user/addUser`, this.state.formFields).then(function(response) {
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
                <select name="state"
                        className="w-100"
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
                <select name="country"
                        className="w-100"
                        required={true}
                        onChange={this.handleInputChange}
                        value={this.state.formFields.country}
                >
                  <option value="AU" disabled={true}>Australia</option>
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
