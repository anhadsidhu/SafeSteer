import React, { Component } from 'react';
import UpdateForm from './UpdateStudentForm';
import './UpdatePage.css';

class UpdatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='UpdatePage'>
        <UpdateForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default UpdatePage;
