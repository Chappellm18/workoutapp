// requires
const express = require('express')
const usersController = require('./controllers/users');
const postsController = require('./controllers/posts');
require('dotenv').config();
const path = require('path');
// Create the app
const app = express()
// other consts
const port = process.env.PORT ?? 3000;


app // app uses here
  .use(express.static(path.join(__dirname, '..', '/docs/'))) // Tells the server what folders to look at for built front end
  .use(express.json()) // read the body in and parses into json -> goes to varible called body?
  .use('/users', usersController) // use the controller for users
  .use('/posts', postsController) // use the controller for posts
  .use((err, req, res, next) => {
    res.status(err.code || 500).send(err);
  })

app // app getters
  .get('*', (req, res) => res.sendFile(path.join(__dirname, '../docs/index.html'))) // serves up the front end vue
  .get('/:user_id', (req, res, next) => { res.send(req.params.user_id) })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})








// auth router attaches /login, /logout, and /callback routes to the baseURL
//app.use(auth(config));

// req.isAuthenticated is provided from the auth router
/*app.get('/', (req, res) => {
  //res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  res.sendFile(dirName + '/index.html');
});*/

/*pp.get('*', (req, res, next) => {
  console.log('a request came in');
  next();
});*/

/*
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});
app.get('/logout', requiresAuth(), (req, res) => {
  res.send('Bye');
});*/

/*const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'UeCCWisLGBWq4wKneHuDYw1trHNDurfL',
  issuerBaseURL: 'https://dev-fy741j28.us.auth0.com'
};
*/