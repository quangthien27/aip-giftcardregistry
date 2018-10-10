import React from 'react';
import axios from 'axios';
import configs from '../inc/configs';
import FormPage from '../components/FormPage';

import card01 from '../assets/images/samples/card01.png';
import card02 from '../assets/images/samples/card02.png';
import card03 from '../assets/images/samples/card03.png';
import card04 from '../assets/images/samples/card04.png';
import card05 from '../assets/images/samples/card05.png';
import card06 from '../assets/images/samples/card06.png';
import card07 from '../assets/images/samples/card07.png';
import card08 from '../assets/images/samples/card08.png';

// Page Registry Single content
class PageRegistrySingle extends FormPage {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      registry: null,
      formFields: {
        registryID: props.match.params['registryID'],
        amount: 0
      }
    };
  }

  componentDidMount() {
    axios.get(`${configs.apiBase}/api/registry/getRegistry/${this.state.formFields.registryID}`).then((response) => {
      if (200 === response.status) {
        if (response.data.success) {
          this.setState({
            registry: response.data.registry,
            loading: false
          });
        } else {
          alert(response.data.message);

          this.setState({
            loading: false
          });
        }
      } else {
        alert('Something went wrong, please try again!');
      }
    }).catch(function(error) {
      console.log(error);

      alert('Something went wrong, please try again!');
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const form = document.getElementById('contributeForm');
    const isValidForm = form.checkValidity();

    if (isValidForm) {
      axios.post(`${configs.apiBase}/api/registry/updateRegistry`, this.state.formFields).then(function(response) {
        if (200 === response.status) {
          if (response.data.success) {
            alert('Thanks for your contribution');
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
    const {registry} = this.state;

    const images = [
      card01,
      card02,
      card03,
      card04,
      card05,
      card06,
      card07,
      card08
    ];

    return (
      <React.Fragment>
        <h1 className="text-center mb-4">Gift Registry</h1>

        <div className="card mx-auto" style={{maxWidth: 800}}>
          <div className="card-body">
            {registry !== null ? (
              <div className="jumbotron text-center mb-0">
                <h1 className="display-4">{registry.event}</h1>
                <p className="lead">{registry.greetingMessage}</p>
                <hr className="my-4"/>
                <p>
                  <img src={images[registry.cardDesign]} alt="" className="img-fluid"/>
                </p>

                <form onSubmit={this.handleSubmit} className="form-inline text-center px-5 mx-5" id="contributeForm">
                  Amount in AUD:
                  <div className="form-group mx-sm-3">
                    <input type="number"
                           className="form-control"
                           placeholder="Amount *"
                           name="amount"
                           required={true}
                           onChange={this.handleInputChange}
                           value={this.state.formFields.amount}
                    />
                  </div>

                  {/* Submit button */}
                  <button type="submit" className="btn btn-primary">Contribute</button>
                </form>
              </div>
            ) : (
              this.state.loading ? (
                <p className="text-center py-5">Loading...</p>
              ) : (
                <p className="text-center py-5">This registry is not found.</p>
              )
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageRegistrySingle;
