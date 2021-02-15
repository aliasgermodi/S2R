const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/studentDB', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (err) => {
if (!err) { console.log('Successfully Connected in MongoDB') }
else { console.log('Syntax Error: ' + err) }
});

// The destination file for the Book Schema
require('./student.model');