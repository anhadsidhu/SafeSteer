
const User = require('../models/user');
const jwt = require('jsonwebtoken');
// const Student = require('../models/student')

//const SECRET = process.env.SECRET;
const SECRET = 'SEIRocks'

module.exports = {
  signup,
  login
};

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();

    // const studentBook = await createStudentBook(user)

    // TODO: Send back a JWT instead of the user
    const token = createJWT(user);
    res.json({ token, user});
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res){
  try {
      const user = await User.findOne({email : req.body.email});
      if(!user){
          return res.status(401).json({err : 'User Not found! '});
      }
      user.comparePassword(req.body.pw, (err, isMatch) => {
          if(isMatch){
              const token = createJWT(user);
              res.json({token})
          }
          else {
              return res.status(401).json({err: 'bad password'});
          }
      });
    } catch (err) {
      // Probably a duplicate email
      res.status(400).json(err);
    }
}

function createJWT(user) {
    return jwt.sign(
      {user}, // data payload
      SECRET,
      {expiresIn: '24h'}
    );
  }

  // async function createStudentBook(newUser) {
  //   let newStudentBook = await new Student();
  //   newStudentBook.user = (newUser.id);
  //   newStudentBook.save(function(err){
  //     if(err) {
  //     console.log(err);
  //     return ({err});
  //     };
  //     return (newStudentBook);
  // })
  // }
