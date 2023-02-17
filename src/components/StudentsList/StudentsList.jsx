import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import "./StudentsList.css"


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






export default function StudentsList(props) {
    const [isRedirected, setIsRedirected] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.isRedirected) {
            setIsRedirected(true);
        } else {
            setIsRedirected(false);
        }
    }, [location.state]);

    return (


        <TableContainer component={Paper}>
            <header className="header-footer">Student's List</header>

            <hr />
            <Table sx={{ minWidth: 650 }} aria-label="customized table">

                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Driver's License&nbsp;</TableCell>
                        <TableCell align="right">Class&nbsp;</TableCell>
                        <TableCell align="right">Cellphone&nbsp;</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.students.map((student) => (
                        <TableRow
                            key={student.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Link to={`/students/${student._id}`} >
                                    {student.firstName}
                                </Link>

                            </TableCell>
                            <TableCell align="right" >{student.lastName}</TableCell>
                            <TableCell align="right">{student.driversLicense}</TableCell>
                            <TableCell align="right">{student.class}</TableCell>
                            <TableCell align="right">{student.cellphone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}




