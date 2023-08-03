'use strict';
Object.defineProperty(
  exports, '__esModule', {
    value: true
  } 
);

const dotenv_1 = require(
  'dotenv' 
);

const mongodb_1 = require(
  'mongodb' 
);
( 0, dotenv_1.config )();

const uri
  = process.env.MONGODB_URI
  || 'mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority';
const options = {};
let client;
let clientPromise;

if ( process.env.NODE_ENV === 'development' ) {
  const globalWithMongo = global;

  if ( !globalWithMongo._mongoClientPromise ) {
    client = new mongodb_1.MongoClient(
      uri,
      options
    );
    globalWithMongo._mongoClientPromise
      = client.connect();
  }
  clientPromise
    = globalWithMongo._mongoClientPromise;
} else {
  client = new mongodb_1.MongoClient(
    uri,
    options
  );
  clientPromise = client.connect();
}
exports.default = clientPromise;
