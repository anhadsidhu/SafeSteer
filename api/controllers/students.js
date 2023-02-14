const Student = require('../models/student');
const User = require('../models/user');
// import userService from '../../src/utils/userService';
// const { render } = require('../server');


// function index(req, res){
//     Student.find({}, function(err, data){
//         if (err) res.status(404)
//         res.status(200).json(data)
//     })
// }




// async function create(req, res) {
//     const student = new Student(req.body);
//     console.log(student)
//     student.save(function (err) {
//         const user = User.find({email: req.body.user.email})
//         console.log(user)
//         user.student.push(student)
//         user.save(function (err) {
//             if (err) res.status(404)
//         res.status(200).json(student)
//         })

//     });
// }

// function newStudent(req, res) {
//     const defaultStudent = new Student();
//     const dt = defaultStudent.departs;
//     const departsDate = dt.toISOString().slice(0,16)
//     res.render('students/new', { departsDate, title: "Add New Student" });
// }

// function deleteStudent(req, res) {
//     Student.findByIdAndDelete(req.params.id)
//         .then(docs => {
//             console.log("Deleted : ", docs);
//             res.redirect('/students')
//         .catch(err => console.log(err))
//         })
// }

// // function show(req, res) {
// //     Flight.findById(req.params.id)
// //         .then((flights) => {
// //             flights.destination.sort((a, b) => a.arrival - b.arrival)
// //             Ticket.find({ flight: flights._id })
// //                 .then((tickets) => {
// //                     res.render('flights/show', { ticket: tickets, flight: flights, title: 'Flight Detail' })
// //                 })
// //                 .catch((err) => console.log(err))
// //         })
// // }

// function show(req, res) {
//     Student.findById(req.params.id, function(err, student) {

// 			res.render('students/show', {
// 				student: student, title: 'Student Detail'
// 			});

// 	});
// }

// function update(req, res) {
//     for (let key in req.body) {
//       if (req.body[key] === '') delete req.body[key]
//     }
//     Student.findByIdAndUpdate(req.params.id, req.body, function(err, student) {
//       res.redirect(`/students/${student._id}`)
//     })
//   }

// function edit(req, res) {
//     Student.findById(req.params.id, function(err, student) {
//       res.render('students/edit', {
//         student,
//         err,
//         title: 'Edit Student',
//       })
//     })
//   }


/*====================================================================*/

async function index(req, res) {
    Student.find({}, function (err, data) {
        if (err) res.status(404)
        res.status(200).json(data)
    })
}


// function newStudent(req, res) {
//     res.render('students/add', {
//     firstName: req.query.firstName,
//     lastName: req.query.lastName,
//     address: req.query.address,
//     date: req.query.date,
//     cellphone: req.query.cellphone,
//     driversLicense: req.query.driversLicense,
//     class: req.query.class,
//     expires: req.query.expires,
//     email: req.query.email,
//     dateOfBirth: req.query.dateOfBirth,
//     restrictions: req.query.restrictions,
//      title: 'Add Student',
//    });
//  };

// async function create(req, res) {
//     const currentUser = await User.find({email: req.body.user.email})
//     console.log(currentUser)
//     req.body.user = currentUser._id
//     const student = new Student(req.body);
//     await student.save();
//     res.json(student)
// }

function create(req, res) {
    const student = new Student(req.body)
    student.save(function (err) {
        if (err) {
            throw err
        }
        res.json(student)
    })
}

// async function create (req, res) {
//     let user = await User.findOne({user: req.user._id});
//     user.student.push(req.body)
//     user.save(function(err){
//         if(err) {
//         console.log(err);
//         return res.json({err});
//         };
//         return res.json(user);
//     })
// }



function show(req, res) {
    Student.findById(req.params.id, function (err, data) {
        if (err) res.status(404)
        res.status(200).json(data)
    })
}


// async function show (req, res) {
//     let student = await Student.findOne({'recipeEntries._id': req.params.id});
//     let entry = recipes.recipeEntries.id(req.params.id);
//     return res.json(entry);
// }

// async function deleteStudent (req, res) {
//     let student = await Student.findOne({'student._id': req.params.id});
//     student.id(req.params.id).remove();
//     student.save(function(err){
//         return res.json(student)
//     })
// }

// async function update (req, res) {
//     let student = await Student.findOne({'student._id': req.params.id});
//     for (let key in req.body) {
//         student[key] = req.body[key];
//     };
//     try{
//         await student.save();
//     } catch (err) {
//         console.log(err);
//     }
//     return res.json(student);
// }


module.exports = {
    // new: newStudent,
    create,
    index,
    // new:newStudent,
    show,
    // delete:deleteStudent,
    // update,
    // edit

};



