//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

/* const objId = new ObjectID();
console.log(objId); */

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
      if (err) {
            return console.log('Unable to connect to MongoDB server');
      }
      console.log('Connected to MongoDB server');

      /* db.collection('Todos').find({ 
            _id: new ObjectID('5ab89f1fdee8f01d089031b2')
      }).toArray().then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs,undefined,2));
      }, (err) => {
            console.log('Unable to fetch todos', err);
      }); */

      /* db.collection('Todos').find().count().then((count) => {
            console.log('Todos count:', count);
      }, (err) => {
            console.log('Unable to fetch todos', err);
      }); */

      /* db.collection('Users').find({name: 'Yusuf'}).toArray().then((docs) => {
            console.log('Users');
            console.log(JSON.stringify(docs, undefined, 2));
      }, (err) => {
            console.log('Unable to fetch data', err);
      }); */

      db.collection('Users').find({name:'Yusuf'}).count().then((count) => {
            console.log('Number of users with name "Yusuf": ', count);
      }, (err) => {
            console.log('Unable to fetch users', err);
      });


      db.close();
});