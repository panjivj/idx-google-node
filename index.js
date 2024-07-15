const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT=process.env.PORT || 3000
SERVICE_NAME=process.env.SERVICE_NAME || 'service-undefined'
SERVICE_VERSION=process.env.SERVICE_VERSION || 'version-undefined'

app.get('/', (req, res) => {
  res.json({ message: 'Service UP',detail:{
    PORT,
    SERVICE_NAME,
    SERVICE_VERSION
  } });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

