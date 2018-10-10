const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());

// Connect to mongoDB
mongoose.Promise = global.Promise;
const mongoURL = mongoose.connect('mongodb://13.236.71.75:27017/gift-card-registry', {
  useNewUrlParser: true
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Allow all cors
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Enable JSON request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Enable route for API
app.use('/api', require('./routes')(app, express));

// Endpoint for API status
app.get('/', (req, res) => {
  return res.end('Api is running');
});
