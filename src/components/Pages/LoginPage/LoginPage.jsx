import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../../utils/userService';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



class LoginPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pw: ''
    };
  }


  handleChange = (e) => {
    // TODO: implement in an elegant way
    //console.log(e.target.name)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await userService.login(this.state);
      //update user variable in state on successful login
      this.props.setCurrentUser(userService.getUser())


    } catch (err) {
      console.log(err)
      // Invalid user data (probably duplicate email)
      //this.props.updateMessage(err.message);
    }
  }

  render() {
    return (
      <div className="LoginPage">
        <header className="header-footer-login">Log In</header>

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
              value={this.state.pw}
              name="pw"
              onChange={this.handleChange}
              defaultValue="password"
              helperText=""
            />


          </div>
          <br />
          <button className="btn-login">Log In</button>&nbsp;&nbsp;&nbsp;
          <Link to='/'>Cancel</Link>
        </Box>



      </div>
    );
  }
}

export default LoginPage;

