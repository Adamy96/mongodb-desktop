// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log(`Unable to connect to MongoDB server: ${err}`);
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Users').deleteMany({name: 'Adamy'}).then((result) => {
  //   console.log(result);
  // }).catch((e) => {
  //   console.log(e);
  // });

  // deleteOne
  // db.collection('Users').deleteOne({name: 'Adamy'}).then((result) => {
  //   console.log(result);
  // }).catch((e) => {
  //   console.log(e);
  // });

  // findOneAndDelete
  // db.collection('Users').findOneAndDelete({name: 'Adamy'}).then((result) => {
  //   console.log(result);
  // }).catch((e) => {
  //   console.log(e);
  // });

  // db.collection('Users').deleteMany({name: 'Adamy2'}).then((result) => {
  //   console.log(result);
  // }).catch((e) => {
  //   console.log(e);
  // });
  //
  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID("5b9317e4b5fab30e50edb811")
  // }).then((result) => {
  //   console.log(result);
  // }).catch((e) => {
  //   console.log(e);
  // });


  // Deletando o usuário Matz através do ID utilizando .findOneAndDelete


  client.close();
});
// });
