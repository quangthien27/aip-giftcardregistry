import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Register page content
class PageDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // axios.post(`${window.GCR.apiBase}/api/user/authorizeUser`, this.state.formFields).then(function(response) {
    //   if (200 === response.status) {
    //     if (response.data.success) {
    //       helpers.setUserLoggedIn(true);
    //       window.location.href = '/dashboard';
    //     } else {
    //       alert(response.data.message);
    //     }
    //   } else {
    //     alert('Something went wrong, please try again!');
    //   }
    // }).catch(function(error) {
    //   console.log(error);
    //
    //   alert('Something went wrong, please try again!');
    // });
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center mb-4">Dashboard</h1>

        <table className="table table-striped">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Event</th>
            <th scope="col">Greeting</th>
            <th scope="col">Card Design</th>
            <th scope="col">Closed date</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          </tbody>
        </table>

        <div className="text-right">
          <Link to="/dashboard/create-registry" className="btn btn-primary">Create Gift Card Registry</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default PageDashboard;
