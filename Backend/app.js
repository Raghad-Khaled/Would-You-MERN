const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const questionRoutes = require('./routes/questionRoutes');
const cors = require('cors');
var bodyParser = require('body-parser');
require('dotenv/config');


// express app
const app = express();
// https://stackabuse.com/handling-cors-with-node-js/
app.use(cors());


// connect to mongodb & listen for requests
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(5000))
  .catch(err => console.log(err));

//app.use(express.urlencoded({ extended: true }));  
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(morgan('dev'));

// users routes
app.use('/user', userRoutes);
app.use('/question', questionRoutes);

// app.use((req, res) => {
//     console.log("hiiii")
//     res.send('here we go')
// });
