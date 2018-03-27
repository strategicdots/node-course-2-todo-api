const {
      MongoClient,
      ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
      if (err) {
            return console.log('Unable to connect to MongoDB server');
      }
      console.log('Connected to MongoDB server');


      /* db.collection('Todos').findOneAndUpdate({
            _id: new ObjectID('5ab9f1fb0ae12e46d3204623')
      }, {
            $set: {
                  completed: true
            }
      }, {
            returnOriginal: false
      }).then((result) => {
            console.log(result);
      }, (err) => {
            console.log('Error:', err);
      }); */

      db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('5ab8a36c926ae5033c1ebdde')
      }, {
            $set: {
                  name: 'Rafiu',
                  location: 'Abuja'
            },
            $inc: {age: 1 }
      }, {
            returnOriginal: false
      }).then((result) => {
            console.log(result)
      }, (err) => {
            console.log('Error:', err);
      });

      db.close();
});