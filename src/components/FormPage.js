/*eslint-disable no-useless-constructor*/
import {Component} from 'react';

// Default form page
class FormPage extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * Input change handler
   * @param event
   */
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
