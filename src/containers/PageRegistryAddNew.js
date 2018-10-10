import React from 'react';
import axios from 'axios';
import helpers from '../inc/helpers';
import FormPage from '../components/FormPage';
import configs from '../inc/configs';

// Register page content
class PageRegistryAddNew extends FormPage {
  constructor(props) {
    super(props);

    this.state = {
      formFields: {
        event: '',
        greetingMessage: '',
        cardDesign: '',
        closeDate: '',
        userID: helpers.docCookies.getItem('gcr_user_logged_in')
      }
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const form = document.getElementById('newRegistryForm');
    const isValidForm = form.checkValidity();

    if (isValidForm) {
      axios.post(`${configs.apiBase}/api/registry/addRegistry`, this.state.formFields).then(function(response) {
        if (200 === response.status) {
          if (response.data.success) {
            alert('Registry added. You\'ll now be redirected to dashboard to get the registry link, and SHARE !!!');
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
        <h1 className="text-center mb-4">New Register</h1>

        <div className="card mx-auto" style={{maxWidth: 500}}>
          <div className="card-body">
            <form onSubmit={this.handleSubmit} id="newRegistryForm">
              <div className="form-group">
                <input type="text"
                       className="form-control"
                       name="event"
                       placeholder="Event name *"
                       required={true}
                       onChange={this.handleInputChange}
                       value={this.state.formFields.event}
                />
              </div>
              <div className="form-group">
                <textarea className="form-control"
                          name="greetingMessage"
                          placeholder="Greeting message to your friend"
                          onChange={this.handleInputChange}
                          value={this.state.formFields.greetingMessage}
                          rows={6}
                />
              </div>

              <div className="form-group">
                <select name="cardDesign"
                        className="w-100 form-control"
                        required={true}
                        onChange={this.handleInputChange}
                        value={this.state.formFields.cardDesign}
                >
                  <option value="">-- Please Select --</option>
                  {configs.cardDesigns.map((cardDesign, index) => {
                    return (<option value={cardDesign.id} key={index}>{cardDesign.label}</option>);
                  })}
                </select>
              </div>

              <div className="form-group">
                <input type="date"
                       className="form-control"
                       name="closeDate"
                       placeholder="Registry close date *"
                       required={true}
                       min="2018-10-10"
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

export default PageRegistryAddNew;
