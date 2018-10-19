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

  /**
   * Form submission handler
   */
  handleSubmit = (event) => {
    event.preventDefault();

    const form = document.getElementById('newRegistryForm');
    const isValidForm = form.checkValidity();

    if (isValidForm) {
      axios.post(`${configs.apiBase}/api/registry/addRegistry`, this.state.formFields).then(function(response) {
        if (200 === response.status) {
          if (response.data.success) {
            alert(configs.messages.registryAdded);
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
        <h1 className="text-center mb-4">Create New Registry</h1>

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
                <label className="mb-1">Card Design *</label>
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
                <label className="mb-1">Registry close date *</label>
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

export default PageRegistryAddNew;
