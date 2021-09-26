/// --------------------------------------------- \\\
/// --------------- Using Express --------------- \\\
/// --------------------------------------------- \\\

const express = require('express')
const app = express()
const port = 3000
const { auth } = require('express-openid-connect')
require('dotenv').config()

app
    .use(
        auth({
            issuerBaseURL: process.env.ISSUER_BASE_URL,
            baseURL: process.env.BASE_URL,
            clientID: process.env.CLIENT_ID,
            secret: process.env.SECRET,
            idpLogout: true,
        }))
    .get('/', (req, res) => {
        res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
    })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})