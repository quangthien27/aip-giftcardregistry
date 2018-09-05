import React, {Component} from 'react';
import axios from 'axios';

class PageTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleIncreaseClick = () => {
    axios.post('http://localhost:5000/api/tick/increaseTick').then(response => {
      this.setState({
        count: response.data.data.tick.count
      });
    }).catch(function(error) {
      console.log(error);
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center mb-4">This is a test page</h1>

        <button className="btn btn-success" onClick={this.handleIncreaseClick}>Increase Tick <span className="badge badge-secondary">{this.state.count}</span></button>
      </React.Fragment>
    );
  }
}

export default PageTest;
