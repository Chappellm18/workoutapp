const Users = require("./users");
const { ObjectId } = require('bson');
const { client } = require('./database');

const collection = client.db(process.env.MONGO_DB).collection('posts');
module.exports.collection = collection;



const addOwnerPipeline = [
    {
        "$lookup": {
            from: "users",
            localField: 'user_handle',
            foreignField: 'handle',
            as: 'user',
        }
    },
    { $unwind: "$user" },
    { $project: { "owner.password": 0 } }
];

module.exports.GetAll = function GetAll() {
    return collection.aggregate(addOwnerPipeline).toArray();
}

module.exports.GetWall = function GetWall(handle) {
    return collection.aggregate(addOwnerPipeline).match({ user_handle: handle }).toArray();
}

module.exports.react = function react(post_id, reaction) {
    if (reaction == "like") {
        // increase the likes by 1
        return collection.findOneAndUpdate({ _id: ObjectId(post_id) }, { $inc: { likes: 1 } });
    } else if (reaction == "dislike") {
        // increase the dislikes by 1
        return collection.findOneAndUpdate({ _id: ObjectId(post_id) }, { $inc: { dislikes: 1 } });
    } else {
        // error statement
    }

}


module.exports.GetFeed = async function (handle) {
    //  The "MongoDB" way to do things. (Should test with a large `following` array)
    const user = await Users.collection.findOne({ handle });
    const targets = user.following.filter(x => x.isApproved).map(x => x.handle).concat(handle)
    const query = collection.aggregate([
        { $match: { user_handle: { $in: targets } } },
    ].concat(addOwnerPipeline));
    return query.toArray();
}


module.exports.Get = function Get(post_id) { return collection.findOne({ _id: new ObjectId(post_id) }); }

module.exports.Add = async function Add(post) {
    if (!post.user_handle) {
        throw { code: 422, msg: "Post must have an Owner" }
    }
    post.time = Date();
    post.likes = 0;
    post.dislikes = 0;
    const response = await collection.insertOne(post);

    post.id = response.insertedId;

    return { ...post };
}
module.exports.Update = async function Update(post_id, post) {
    const results = await collection.findOneAndUpdate(
        { _id: new ObjectId(post_id) },
        { $set: post },
        { returnDocument: 'after' }
    );

    return results.value;
}
module.exports.Delete = async function Delete(post_id) {
    const results = await collection.findOneAndDelete({ _id: new ObjectId(post_id) })

    return results.value;
}

module.exports.Search = q => collection.find({ caption: new RegExp(q, "i") }).toArray();

module.exports.Seed = async () => {
    for (const x of list) {
        await this.Add(x)
    }
}