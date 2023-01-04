

// Código en Typescript para conectarse a MongoDB

import * as mongodb from 'mongodb';
 
const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';
 
mongodb.MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
  if (error) throw error;

  console.log('Connected successfully to server');

  const db = client.db(dbName);

  client.close();
});