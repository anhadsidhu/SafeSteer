import React, { Component } from 'react';
import { Link, redirect } from 'react-router-dom';
import userService from '../../../utils/userService';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    // TODO: implement in an elegant way
    //console.log(e.target.name)
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await userService.signup(this.state);
      //update user variable in state on successful login
      this.props.setCurrentUser(userService.getUser())


    } catch (err) {
      console.log(err)
      // Invalid user data (probably duplicate email)
      //this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div>
        <header className="header-footer">Sign Up </header>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div>
          <TextField
              error
              type="name"
               className="form-control"
                placeholder="Name"
                value={this.state.name}
                name="name"
              onChange={this.handleChange}
              defaultValue="Name"
              helperText=""
            />


            <TextField
              error
              type="email"
              className="form-control"
              placeholder="Email"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
              defaultValue="Email"
              helperText=""


            />


            <TextField
              error
              type="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
               name="password"
              onChange={this.handleChange}
              defaultValue="password"
              helperText=""
            />
            <TextField
              error
              type="password"
               className="form-control"
                placeholder="Confirm Password"
                value={this.state.passwordConf}
                name="passwordConf"
              onChange={this.handleChange}
              defaultValue="Password Re-Confirm"
              helperText=""


            />





          </div>
          <br />
          <button className="btn-signup">Sign Up</button>&nbsp;&nbsp;&nbsp;
          <Link to='/'>Cancel</Link>

        </Box>

      </div>
    );
  }
}

export default SignupForm;


