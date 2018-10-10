/*eslint-disable no-useless-constructor*/

import {Component} from 'react';

// Register page content
class FormPage extends Component {
  constructor(props) {
    super(props);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const formFields = {...this.state.formFields};

    formFields[name] = value;

    this.setState({formFields: formFields});
  };
}

export default FormPage;
