import React, { Component } from 'react';
import { Link, redirect } from 'react-router-dom';
import studentService from '../../../utils/studentService';
import './CreateStudentForm.css';
import userService from '../../../utils/userService';

class CreateForm extends Component {
    constructor(props){
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
        } catch (err) {
            this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.firstName && this.state.lastName && this.state.address && this.state.date && this.state.cellphone && this.state.driversLicense
            && this.state.class && this.state.expires && this.state.email && this.state.dateOfBirth && this.state.restrictions);
    }

    render() {
        return (
            <div>
                <header className="header-footer">Add Student</header>
                <br />
                <form className="form-horizontal" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                        <label>First Name :</label>
                            <input type="text" className="form-control" placeholder="First Name" value={this.state.firstName} name="firstName" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                        <label>Last Name :</label>
                            <input type="text" className="form-control" placeholder="Last Name" value={this.state.lastName} name="lastName" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                        <label>Address :</label>
                            <input type="text" className="form-control" placeholder="Address" value={this.state.address} name="address" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                        <label>Date :</label>
                            <input type="date" className="form-control" placeholder="Date" value={this.state.date} name="date" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                        <label>Cellphone :</label>
                            <input type="text" className="form-control" placeholder="Cellphone" value={this.state.cellphone} name="cellphone" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                        <label>Drivers License :</label>
                            <input type="text" className="form-control" placeholder="Drivers License" value={this.state.driversLicense} name="driversLicense" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                        <label>Class :</label>
                            <input type="text" className="form-control" placeholder="Class" value={this.state.class} name="class" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                        <label>Expires :</label>
                            <input type="date" className="form-control" placeholder="Expires" value={this.state.expires} name="expires" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                        <label>Email : </label>
                            <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                        <label>Date of Birth :</label>
                            <input type="date" className="form-control" placeholder="Date of Birth" value={this.state.dateOfBirth} name="dateOfBirth" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                        <label>Restrictions :</label>
                            <input type="text" className="form-control" placeholder="Restrictions" value={this.state.restrictions} name="restrictions" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-default" disabled={this.isFormInvalid()}>Submit</button>&nbsp;&nbsp;
                            <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateForm;
