const Student = require('../models/student');
const User = require('../models/user');
// import userService from '../../src/utils/userService';
// const { render } = require('../server');


async function index(req, res) {
    Student.find({}, function (err, data) {
        if (err) res.status(404)
        res.status(200).json(data)
    })
}



function create(req, res) {
    const student = new Student(req.body)
    student.save(function (err) {
        if (err) {
            throw err
        }
        res.json(student)
    })
}



function show(req, res) {
    Student.findById(req.params.id, function (err, data) {
        if (err) res.status(404)
        res.status(200).json(data)
    })
}



function deleteStudent(req, res) {
    Student.findByIdAndDelete(req.params.id, function(err, student){
        if(err) console.log(err)
        res.status(200).json(student)
    })
}



async function update(req, res) {
    try {
      const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });

      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      return res.json(student);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Server error" });
    }
  }




module.exports = {
    create,
    index,
    show,
    delete:deleteStudent,
    update,
};



