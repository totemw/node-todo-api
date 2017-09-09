const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Cannot connect to the server');
    }
    console.log('Connect successfully');
    //deleteMany, deleteOne, findOneAndDelete
    db.collection('Todos').deleteOne({text : "running"}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log("Unable to delete the item", err);
    });

    db.collection('Todos').findOneAndDelete({text : "have breakfast"}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log("Unable to delete the item", err);
    });

    db.close();
});