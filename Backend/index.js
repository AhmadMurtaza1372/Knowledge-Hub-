const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Register = require('./controllers/Register');
const handleLogin = require('./controllers/Login');
const authJwt = require('./middlewares/auth');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;
const url = process.env.MONGO_URL_DEV;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Database Connected on ${url}`)
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(error => console.error(error));

app.post('/api/signup', Register);
app.post('/api/login', handleLogin);
app.get('/api/card/modal', authJwt, (req, res) => {
 
});
