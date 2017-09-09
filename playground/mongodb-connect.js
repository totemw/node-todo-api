const {MongoClient, ObjectID} = require('mongodb');
//let obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Cannot connect to the server');
    }
    console.log('Connect successfully');

    db.collection('Todos').insertOne({
        name : 'totem',
        text : 'my database'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert Todos', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection.find().count().then((count) => {  //return a promise
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log("Unable to fetch Todos ", err);
    });
    db.close();
});