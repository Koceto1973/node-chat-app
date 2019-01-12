const path = require('path');  // built in module without npm install
const express = require('express');

const publicPath = path.join(__dirname, '../public'); // public path normalized
const port = process.env.PORT || 3000;  // heroku compatible port setting
var app = express();

app.use(express.static(publicPath)); // static asset in by middleware

app.listen(port, () => {
  console.log(`Server is up and running on port ${port} !`);
});
