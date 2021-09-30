/// --------------------------------------------- \\\
/// --------------- Using Express --------------- \\\
/// --------------------------------------------- \\\
const express = require('express')
const app = express()
const { Router } = require('express')
const path = require('path')
const { auth, requiresAuth } = require('express-openid-connect')
const port = 3000

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'UeCCWisLGBWq4wKneHuDYw1trHNDurfL',
  issuerBaseURL: 'https://dev-fy741j28.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  //res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  res.sendFile('C:\Users\Mitch\Desktop\WebPro\workoutapp\workoutapp\public\index.html');
});

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});
app.get('/logout', requiresAuth(), (req, res) => {
    res.send('Bye');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})