const { MongoClient } = require('mongodb');
require('dotenv').config();


async function main() {

    let uri = process.env.URI;
    
    const client = new MongoClient(uri);

    try {
        await client.connect();

        await listUsers(client);

        /*await createListing(client, {
            name: "Chapps",
            password: "abc"
        })*/

        await listDatabases(client);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }

    
}

main().catch(console.error);


async function createUser(client, newUser) {
    const result = await client.db("AppUsers").collection("users")
    .insertOne(newUser);

    console.log(`New user was created with the following id: ${result.insertedId}`);
}

async function listUsers(client) {
    await client.db("AppUsers").collection("users").forEach(db => {
        console.log(`${db.username}`)
    })
}

async function listDatabases(client) {
    const dblist = await client.db().admin().listDatabases();

    console.log("DB:");
    dblist.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}