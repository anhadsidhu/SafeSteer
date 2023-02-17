import tokenService from './tokenService';
// const BASE_URL = 'http://localhost:3001/api/students';


// async function getAllStudents() {
//     const response = await fetch('http://localhost:3001/api/students')

//     const data = await response.json()
//     return data
// }

async function getAllStudents() {
    const response = await fetch('http://localhost:3001/api/students', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    })
    return await response.json();
}


async function create(student) {
    try {
        const response = await fetch('http://localhost:3001/api/students/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tokenService.getToken()
            },
            body: JSON.stringify(student)
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

async function show(id) {
    try {
        const response = await fetch(`http://localhost:3001/api/students/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + tokenService.getToken()
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}




async function update(id, data) {
    try {
        const response = await fetch(`http://localhost:3001/api/students/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(data)
      });
      const res = await response.json()
      return res;
    } catch (error) {
        console.error(error);
    }
  }




async function deleteStudent(id){
    try {
        const response = await fetch(`http://localhost:3001/api/students/${id}` , {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
          }
        });
        const data = await response.json();
        return data
      } catch (error) {
        console.error(error);
    }
}



export default {
    list: getAllStudents,
    create,
    show,
    update,
    delete:deleteStudent,
};
