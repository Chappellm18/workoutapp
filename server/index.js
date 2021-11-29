const express = require('express');
const path = require('path');
require('dotenv').config();

console.log('Test ' + process.env.BEST_CLASS);

const usersController = require('./controllers/users');
const postsController = require('./controllers/posts');

const app = express()
const port = process.env.PORT || 3100;

app
  .use('/', express.static(path.join(__dirname, '../docs')))

  /*
      Access-Control-Allow-Origin: https://foo.example
      Access-Control-Allow-Methods: POST, GET, OPTIONS
      Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
  */

  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.header('Access-Control-Allow-Headers', 'Origin,Content-Type,X-Requested-With,Accept,Authorization');
    next();
  })

  .use(express.json())
  .use('/users', usersController)
  .use('/posts', postsController)

app
  .get('*', (req, res) => res.sendFile(path.join(__dirname, '../docs/index.html')))

app
  .use((err, req, res, next) => {
    // Besides for sending the error to the client. It is helpful to write it to the terminal/console.
    // More information can be serialized to the console than can be serialized to JSON for transfer over the wire.
    // Eventually you may want to add logic to prevent sensitive information from being sent to the client and to reformat the error message to make it more user friendly
    console.error(err);
    res.status(err.code || 500).send(err);
  })

app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});