/// --------------------------------------------- \\\
/// --------------- Using Express --------------- \\\
/// --------------------------------------------- \\\
const express = require('express')
const app = express()
//const { auth, requiresAuth } = require('express-openid-connect')
const port = 3000
const path = require('path');
const usersController = require('./controllers/users');

const dirName = path.join(__dirname, '..', '/docs');
app.use(express.static(dirName));


app.use('/users', usersController);


app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../docs/index.html')))

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