// DATABASE = 'mongodb+srv://anhad96:hardeep96@cluster0.cwgy8ab.mongodb.net/safesteer?retryWrites=true&w=majority'
const mongoose = require('mongoose');



// mongoose.connect(process.env.DATABASE, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect('mongodb://localhost:27017/safesteer', {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
