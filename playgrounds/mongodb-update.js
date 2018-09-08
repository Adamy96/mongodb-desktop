// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log(`Unable to connect to MongoDB server: ${err}`);
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // Procurar por "mongodb update operators"
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5b932c7d782df82ad45462f1")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // }).catch((e) => {
  //   console.log(e);
  // });


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b9317f2b5fab30e50edb815")
  }, {
    $set: {
      name: 'Adamy'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  }).catch((e) => {
    console.log(e);
  });



  client.close();
});
// });
