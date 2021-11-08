const { MongoClient } = require('mongodb');
require('dotenv').config();

async function getConnected() {
    // Connect to the database
    const client = new MongoClient(process.env.URI);
    try { await client.connect(); } catch (error) { console.error(error); }
    return client;
}
async function shutEmDown(client) {
    // disconnect from database
    // run this at the end of each function
    await client.close();
}
module.exports.createUser = async function createUser(newUser) {
    const client = await getConnected();
    const result = await client.db("AppUsers").collection("users")
        .insertOne(newUser);
    console.log(`New user was created with the following id: ${result.insertedId}`);

    shutEmDown(client)
}

module.exports.checkLogin = async function checkLogin(userIn) {
    const client = await getConnected();
    // check if user exists
    // return true if userIn is real and passwords match
    // return false if not 
    // prompt to signup if username is wrong, retry if password wrong
    collection.findOne({ _id: user_id })

    shutEmDown(client)
}
module.exports.getPosts = async function getPosts() {
    // return a list of all the posts
    // list of post objects
    const client = await getConnected();

    shutEmDown(client)
}
module.exports.addPost = async function addPost(newPost) {
    // create a new post and send it do mongo
    const client = await getConnected();

    shutEmDown(client)
}








