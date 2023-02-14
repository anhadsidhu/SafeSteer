const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
require ('dotenv').config();

require('./api/config/database')

const usersRouter = require('./api/routes/users')
const studentsRouter = require('./api/routes/students')


const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
//app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

/**
 * put api routes here
 */
app.use('/api/users', usersRouter)
app.use('/api/students', studentsRouter)

//create a puppies  route and controller to fetch the list of puppies from the database

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
