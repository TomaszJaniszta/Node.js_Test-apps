require('dotenv').config();
const express = require('express');
const app = express();

const TaskCollectionName = 'tasks';

const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(process.env.MONGODB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true});

client.connect(async err => {
    if (err) {
        console.log(err);
        return;
    }

    app.get('/tasks', async (req, res) => {
        const tasksCollection = client.db(process.env.MONGODB_DBNAME).collection(TaskCollectionName);
        const tasks = await tasksCollection.find().toArray();

        const mappedTasks = tasks.map(task => { 
            return { 
                name: task.name, 
                isCompleted: task.isCompleted, 
                createdAt: task.createdAt 
            };
        });

        res.send(mappedTasks);
    });
});

app.get('/heartbeat', (req, res) => {
    res.send(new Date());
});

app.listen(process.env.PORT, () => console.log('server started'));
