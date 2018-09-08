// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log(`Unable to connect to MongoDB server: ${err}`);
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID("5b917b54d0115727bc566714")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }).catch((e) => {
  //   console.log(`Unable to find, error: ${e}`);
  // });
  //
  // client.close();

  db.collection('Users').find({name: 'Adamy'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }).catch((e) => {
    console.log(`Unable to find. Error: ${e}`);
  });

  client.close();
});
// });
