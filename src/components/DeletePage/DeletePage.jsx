import React, { Component } from 'react';
import DeleteForm from './DeleteForm';
// import './SignupPage.css';

class DeletePage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='CreatePage'>
        <DeleteForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default DeletePage;
