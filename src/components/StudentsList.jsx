import { Link } from 'react-router-dom';

export default function StudentsList(props){
    return(
        <table>
            <thead>
                <tr>
                    <th>First Name</th>

                    <th>Last Name</th>

                    <th>Driver's License</th>

                    <th>Class</th>

                    <th>Cellphone</th>
                </tr>
            </thead>
            <tbody>
                {props.students.map(student =>
                <tr key={student._id}>
                    <td>
                        <Link to={`/student/${student._id}`}>
                            {student.firstName}
                        </Link>
                    </td>

                    <td>{student.lastName}</td>

                    <td>{student.driversLicense}</td>

                    <td>{student.class}</td>

                    <td>{student.cellphone}</td>
                    
                </tr>)}
            </tbody>
        </table>
    )
}

