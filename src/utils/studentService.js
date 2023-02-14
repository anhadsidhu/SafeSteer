import tokenService from './tokenService';
// const BASE_URL = 'http://localhost:3001/api/students';


// async function getAllStudents() {
//     const response = await fetch('http://localhost:3001/api/students')

//     const data = await response.json()
//     return data
// }

async function getAllStudents() {
    return fetch('http://localhost:3001/api/students', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
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
                'Content-type': 'application/json'
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

// async function update(student){
//     return fetch(BASE_URL + 'update', {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + tokenService.getToken()
//     },
//     body: JSON.stringify()
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to update student');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('Student updated', student);
//     })
//     .catch(error => {
//       console.error('Error updating student', error);
//     });
// };


// async function deleteStudent(BASE_URL){
//     try {
//         const response = await fetch(BASE_URL + 'delete', {
//           method: 'DELETE',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + tokenService.getToken()
//           }
//         });
//         const data = await response.json();
//         console.log(data);
//       } catch (error) {
//         console.error(error);
//     }
// }


/*================================================================*/

// function index() {
//     return fetch(BASE_URL, {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json',
//             'Authorization': 'Bearer ' + tokenService.getToken()
//           }
//     }).then(res => res.json());
// }

// function createRecipeBook(user) {
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//         'Authorization': 'Bearer ' + tokenService.getToken()
//       },
//       body: JSON.stringify(user)
//     };
//     return fetch(BASE_URL, options).then(res => res.json());
// }

// function createEntry(entry) {
//   const options = {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//         'Authorization': 'Bearer ' + tokenService.getToken()
//       },
//       body: JSON.stringify(entry)
//   };
//   return fetch(BASE_URL, options).then(res => res.json());
// }

// function getEntry(entryId) {
//   return fetch(`${ENTRY_URL}${entryId}`, {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json',
//             'Authorization': 'Bearer ' + tokenService.getToken()
//           }
//   }).then(res => res.json());
// }

// function deleteEntry(entry) {
//   console.log('recipe service entry: ' + entry)
//   console.log('recipe service entry id: ' + entry._id)
//   const options = {
//       method: 'DELETE',
//       headers: {
//         'Content-type': 'application/json',
//         'Authorization': 'Bearer ' + tokenService.getToken()
//       },
//       body: JSON.stringify(entry)
//   };
//   return fetch(`${ENTRY_URL}${entry._id}`, options).then(res => res.json());
// }

// function updateEntry(entry){
//   console.log('recipe service entry: ' + entry)
//   console.log('recipe service entry id: ' + entry.entryId)
//   const options = {
//     method: 'PUT',
//     headers: {
//       'Content-type': 'application/json',
//       'Authorization': 'Bearer ' + tokenService.getToken()
//     },
//     body: JSON.stringify(entry)
//   };
//   return fetch(`${ENTRY_URL}${entry.entryId}`, options).then(res => res.json());
// }






export default {
    list: getAllStudents,
    create,
    show
    //    update,
    //    delete:deleteStudent,
};
