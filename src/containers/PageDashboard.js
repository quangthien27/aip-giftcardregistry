import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import helpers from '../inc/helpers';
import axios from 'axios';
import configs from '../inc/configs';

// Register page content
class PageDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      userID: helpers.docCookies.getItem('gcr_user_logged_in'),
      registries: []
    };
  }

  componentDidMount() {
    axios.post(`${configs.apiBase}/api/registry/getAllRegistries`, {userID: this.state.userID}).then((response) => {
      if (200 === response.status) {
        if (response.data.success) {
          this.setState({
            registries: response.data.registries,
            loading: false
          });
        } else {
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

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center mb-4">Dashboard</h1>

        {this.state.registries.length > 0 ? (
          <table className="table table-striped">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Event</th>
              <th scope="col">Greeting</th>
              <th scope="col">Card Design</th>
              <th scope="col">Closed date</th>
              <th scope="col">Amount received</th>
              <th scope="col">Share this link</th>
            </tr>
            </thead>
            <tbody>
            {this.state.registries.map((registry, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{registry.event}</td>
                  <td className="admin-message">{registry.greetingMessage}</td>
                  <td>{configs.cardDesigns.filter((cardDesign) => {return cardDesign.id.toString() === registry.cardDesign.toString();})[0].label}</td>
                  <td>{helpers.formatDate(new Date(registry.closeDate))}</td>
                  <td>A$ {registry.amount}</td>
                  <td><a href={`/registry/${registry._id}`} target="_blank">Public link</a></td>
                </tr>
              );
            })}

            </tbody>
          </table>
        ) : (
          this.state.loading ? (
            <p className="text-center py-5">Loading...</p>
          ) : (
            <p className="text-center py-5">No registry are created yet. Just click on "Create Gift Card Registry" button below to create one!</p>
          )
        )}

        <div className="text-center">
          <Link to="/dashboard/create-registry" className="btn btn-primary">Create Gift Card Registry</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default PageDashboard;
