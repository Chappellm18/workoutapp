const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.URI;

let client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


let isConnected = client.connect();

module.exports = {
    client, isConnected
}


