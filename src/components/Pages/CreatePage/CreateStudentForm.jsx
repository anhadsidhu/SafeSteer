import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import studentService from '../../../utils/studentService';
import './CreateStudentForm.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class CreateForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            date: '',
            cellphone: '',
            driversLicense: '',
            class: '',
            expires: '',
            email: '',
            dateOfBirth: '',
            restrictions: '',
            // user: '',
            // initialLoader: 1,
        };
    }

    // handleOnLoad(){
    //     if(this.state.initialLoader === 1){
    //         this.setState({user: this.props.getCurrentUser(), initialLoader: 2})
    //     }
    // }


    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        });
    }



    handleSubmit = async (e) => {
        e.preventDefault();
        try {


            const data = await studentService.create(this.state);
            this.props.updateStudentState(data)
            this.setState({ redirect: true });
        } catch (err) {
            this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.firstName && this.state.lastName && this.state.address && this.state.date && this.state.cellphone && this.state.driversLicense
            && this.state.class && this.state.expires && this.state.email && this.state.dateOfBirth && this.state.restrictions);
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to="/students" />;
        }
        return (
            <div>
                <header className="header-footer">Enter Student Information</header>

                <hr />
                <Box display="flex"
                    flexDirection="column"
                    alignItems="center"
                    component="form"

                    sx={{
                        '& .MuiTextField-root': { m: 1, py: 5, pl: 10, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={this.handleSubmit}
                >
                    <div>

                        <TextField

                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            value={this.state.firstName}
                            name="firstName"
                            onChange={this.handleChange}
                            label="First Name"

                        />

                        <TextField
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            name="lastName"
                            onChange={this.handleChange}
                            label="Last Name"
                        />

                        <TextField
                            type="text"
                            className="form-control"
                            placeholder="Address"
                            value={this.state.address}
                            name="address"
                            onChange={this.handleChange}
                            label="Address"
                        />

                        <TextField
                            type="date"
                            className="form-control"
                            placeholder="Date"
                            value={this.state.date}
                            name="date"
                            onChange={this.handleChange}
                            label="Date"
                        />

                        <TextField
                            type="text"
                            className="form-control"
                            placeholder="Cellphone"
                            value={this.state.cellphone}
                            name="cellphone"
                            onChange={this.handleChange}
                            label="Cellphone"
                        />

                        <TextField
                            type="text"
                            className="form-control"
                            placeholder="Drivers License"
                            value={this.state.driversLicense}
                            name="driversLicense"
                            onChange={this.handleChange}
                            label="Drivers License"
                        />

                        <TextField
                            type="text"
                            className="form-control"
                            placeholder="Class"
                            value={this.state.class}
                            name="class"
                            onChange={this.handleChange}
                            label="Class"
                        />

                        <TextField
                            type="date"
                            className="form-control"
                            placeholder="Expires"
                            value={this.state.expires}
                            name="expires"
                            onChange={this.handleChange}
                            label="Expires"
                        />

                        <TextField
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            value={this.state.email}
                            name="email"
                            onChange={this.handleChange}
                            label="Email"
                        />

                        <TextField
                            type="date"
                            className="form-control"
                            placeholder="Date of Birth"
                            value={this.state.dateOfBirth}
                            name="dateOfBirth"
                            onChange={this.handleChange}
                            label="Date of Birth"
                        />

                        <TextField
                            type="text"
                            className="form-control"
                            placeholder="Restrictions"
                            value={this.state.restrictions}
                            name="restrictions"
                            onChange={this.handleChange}
                            label="Restrictions"
                        />

                        <button className="btn-create" disabled={this.isFormInvalid()}>Submit</button>&nbsp;&nbsp;
                        {/* <Link to='/'>Cancel</Link> */}
                    </div>
                </Box>




            </div>
        );
    }
}

export default CreateForm;

