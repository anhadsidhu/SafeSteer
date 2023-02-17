
import React, { Component, useCallback, useEffect, useState } from 'react';
import { Link, redirect, Navigate } from 'react-router-dom';
import studentService from '../../utils/studentService';
import { useParams, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import styles from './UpdatePage.module.css';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';


const UpdatePageForm = () => {
  const [student, setStudent] = useState({
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
  });
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`useEffect called`);
    const fetchStudent = async () => {
        const rec = await studentService.show(id);
        setStudent(rec);
    }
    fetchStudent();
  }, [])

  const handleChange = useCallback((e) => {
    console.log(`handleChange name = ${e.target.name}, value = ${e.target.value}`);
    let newStudent = {
        ...student,
    };
    newStudent[e.target.name] = e.target.value;

    console.log(`handleChange newRecipe = ${JSON.stringify(newStudent)}`);
    setStudent(newStudent);

  }, [student, setStudent]);

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const data = await studentService.update(id, student);
    //   this.props.updateStudentState(data)
      //update user variable in state on successful login
    //   this.setState({ redirect: true});
    navigate(`/students/${id}`);

    } catch (err) {
    //   this.props.updateMessage(err.message);
      // Invalid user data (probably duplicate email)
      //this.props.updateMessage(err.message);
    }
  }

  const isFormInvalid = useCallback(() => {
    return !(student.firstName &&
      student.lastName &&
      student.address &&
      student.date &&
      student.cellphone &&
      student.driversLicense &&
      student.class &&
      student.expires &&
      student.email &&
      student.dateOfBirth &&
      student.restrictions);
  }, [student]);

  return (
      <div>
        <header className="header-footer">Update Student Information</header>
        <hr />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, py: 5, pl: 10, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit= {async (e) => await handleSave(e)}
        >
          <div>


            <TextField
              type="text"
              className="form-control"
              placeholder="First Name"
              value={student.firstName}
              name="firstName"
              onChange={handleChange}
              label="First Name"
            />

            <TextField
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={student.lastName}
              name="lastName"
              onChange={handleChange}
              label="Last Name"
            />

            <TextField
              type="text"
              className="form-control"
              placeholder="Address"
              value={student.address}
              name="address"
              onChange={handleChange}
              label="Address"
            />

            <TextField
              type="date"
              className="form-control"
              placeholder="Date"
              value={student.date}
              name="date"
              onChange={handleChange}
              label="Date"
            />

            <TextField
              type="text"
              className="form-control"
              placeholder="Cellphone"
              value={student.cellphone}
              name="cellphone"
              onChange={handleChange}
              label="Cellphone"
            />

            <TextField
              type="text"
              className="form-control"
              placeholder="Drivers License"
              value={student.driversLicense}
              name="driversLicense"
              onChange={handleChange}
              label="Driver's License"
            />

            <TextField
              type="text"
              className="form-control"
              placeholder="Class"
              value={student.class}
              name="class"
              onChange={handleChange}
              label="Class"
            />

            <TextField
              type="date"
              className="form-control"
              placeholder="Expires"
              value={student.expires}
              name="expires"
              onChange={handleChange}
              label="Expires"
            />

            <TextField
              type="text"
              className="form-control"
              placeholder="Email"
              value={student.email}
              name="email"
              onChange={handleChange}
              label="Email"
            />

            <TextField
              type="date"
              className="form-control"
              placeholder="Date of Birth"
              value={student.dateOfBirth}
              name="dateOfBirth"
              onChange={handleChange}
              label="Date of Birth"
            />

            <TextField
              type="text"
              className="form-control"
              placeholder="Restrictions"
              value={student.restrictions}
              name="restrictions"
              onChange={handleChange}
              label="Restrictions"
            />

            <button className="btn-update-submit" disabled={isFormInvalid()}>
              Update
            </button>
            &nbsp;&nbsp;
            <button className="btn-update-cancel"><Link to={`/students/`}>Cancel</Link></button>
          </div>
        </Box>
      </div>
    );

}


export default UpdatePageForm
