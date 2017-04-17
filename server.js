/*jshint esversion: 6 */
var express = require('express');

// Create our app
var app = express();

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    req.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
