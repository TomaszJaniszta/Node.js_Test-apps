const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_CONNECTION;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(async err => {
    const collection = client.db("mydatabase").collection("users");
    const users = await collection.find().toArray()
    console.table(users);

    const insertResult = await collection.insertOne({
        firstName: 'James',
        lastName: 'Bond',
        isActive: true
    });
    console.log(insertResult);

    const insertWithIdResult = await collection.insertOne({
        firstName: 'John',
        lastName: 'Bean',
        isActive: false,
        _id: new ObjectId("507f191e810c19729de860eb")
    });
    console.log(insertWithIdResult);


    const updateResult = await collection.updateMany({}, { $set: { firstNAme: 'Marek' } });
    console.log(updateResult);


    const findResult = await collection.find({ isActive: true }).toArray();
    console.table(findResult);


    const deleteResult = await collection.deleteMany({ isActive: false });
    console.log(deleteResult);

    client.close();
});
