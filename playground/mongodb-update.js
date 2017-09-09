const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Cannot connect to the server');
    }
    console.log('Connect successfully');

    db.collection('Todos').findOneAndUpdate({_id : new ObjectID('59b3ddefc9e372bc54bb9172')},
        {
            $set: {
                completed : true
            }
        }, {returnOriginal : false}).then((result) => {
        console.log(result);
    });

    db.close();
});