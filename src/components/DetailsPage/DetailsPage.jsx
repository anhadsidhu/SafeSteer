import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, } from 'react';
import studentService from '../../utils/studentService';
import styles from './DetailsPage.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';





const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function DetailsPage(props) {
    const [student, setStudent] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await studentService.show(id);
            setStudent(data);
        };
        fetchData();
    }, [id]);


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async () => {
        await studentService.delete(id);
        const data = await studentService.list();
        props.updateStudentState(data)
        console.log('navigate students route')
        navigate("/students")

    };

    const handleUpdate = async () => {
        console.log('update')
        const updatestudent = await studentService.update(id);
        console.log(updatestudent)
        navigate(`/students/${student._id}/update`);
    };

    return (
        <>
            <div className={styles.list}>
                <div className={styles.Grid}>

                    <br />

                    <h3>
                        {student.firstName} {student.lastName}
                    </h3>

                    <hr />
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="customized table">

                            <TableBody>

                                <TableRow
                                    key={student._id}
                                    sx={{ '&:last-child td, &:last-child th': { verticalborder: 0 } }}
                                >
                                    <TableCell align="right">First Name: {student.firstName}</TableCell>
                                    <TableCell align="right">Last Name: {student.lastName}</TableCell>
                                    <TableCell align="right">Date of Birth: {student.dateOfBirth}</TableCell>
                                    <TableCell align="right">Address: {student.address}</TableCell>
                                    <TableCell align="right">Cellphone: {student.cellphone}</TableCell>
                                    <TableCell align="right">Date Student Joined : {student.date}</TableCell>
                                </TableRow>

                            </TableBody>


                            <TableBody>

                                <TableRow
                                    key={student._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >


                                    <TableCell align="right"> Email : {student.email}</TableCell>
                                    <TableCell align="right">Driver's License : {student.driversLicense}</TableCell>
                                    <TableCell align="right"> Class : {student.class}</TableCell>
                                    <TableCell align="right"> Expires : {student.expires}</TableCell>
                                    <TableCell align="right"> Restrictions : {student.restrictions}</TableCell>
                                    <TableCell align="right"><Button variant="outlined" onClick={handleClickOpen}>
                                        Printable Information
                                    </Button></TableCell>
                                </TableRow>

                            </TableBody>

                        </Table>
                    </TableContainer>

                    <br />


                    <div className="button-container-details">

                        <button className="btn-update-student" onClick={handleUpdate} > Update</button>&nbsp;&nbsp;

                        <button className="btn-delete-student" onClick={handleDelete}> Delete</button>&nbsp;&nbsp;
                    </div>
                    {/* <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="customized table">

                            <TableBody>

                                <TableRow
                                    key={student._id}
                                    sx={{ '&:last-child td, &:last-child th': { verticalborder: 0 } }}
                                >
                                    <TableCell align="right">First Name: {student.firstName}</TableCell>
                                    <TableCell align="right">Last Name: {student.lastName}</TableCell>
                                    <TableCell align="right">Date of Birth: {student.dateOfBirth}</TableCell>
                                    <TableCell align="right">Address: {student.address}</TableCell>
                                    <TableCell align="right">Cellphone: {student.cellphone}</TableCell>
                                    <TableCell align="right">Date Student Joined : {student.date}</TableCell>
                                </TableRow>

                            </TableBody>


                            <TableBody>

                                <TableRow
                                    key={student._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >


                                    <TableCell align="right"> Email : {student.email}</TableCell>
                                    <TableCell align="right">Driver's License : {student.driversLicense}</TableCell>
                                    <TableCell align="right"> Class : {student.class}</TableCell>
                                    <TableCell align="right"> Expires : {student.expires}</TableCell>
                                    <TableCell align="right"> Restrictions : {student.restrictions}</TableCell>
                                    <TableCell align="right"><Button variant="outlined" onClick={handleClickOpen}>
                                        Update
                                    </Button></TableCell>
                                </TableRow>

                            </TableBody>

                        </Table>
                    </TableContainer> */}






                </div>
            </div>

            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }} style={{ backgroundColor: "orange" }} >
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon to='/students' />

                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Student's Information
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem text>
                        First Name: {student.firstName}
                    </ListItem>

                    <Divider />
                    <ListItem text>
                        Last Name: {student.lastName}
                    </ListItem>

                    <Divider />
                    <ListItem text>
                        Date of Birth: {student.dateOfBirth}
                    </ListItem>

                    <Divider />
                    <ListItem text>
                        Address: {student.address}
                    </ListItem>

                    <Divider />
                    <ListItem text>
                        Cellphone: {student.cellphone}
                    </ListItem>

                    <Divider />
                    <ListItem text>
                        Date Student Joined : {student.date}
                    </ListItem>

                    <Divider />
                    <ListItem text>
                        Email : {student.email}
                    </ListItem>

                    <Divider />
                    <ListItem text>
                        Driver's License : {student.driversLicense}
                    </ListItem>

                    <Divider />
                    <ListItem text>
                        Class : {student.class}
                    </ListItem>

                    <Divider />
                    <ListItem text>
                        Expires : {student.expires}
                    </ListItem>

                    <Divider />
                    <ListItem text>
                        Restrictions : {student.restrictions}
                    </ListItem>
                </List>

            </Dialog>
        </>
    );
}

















