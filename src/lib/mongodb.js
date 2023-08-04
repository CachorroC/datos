import { config } from 'dotenv';
import { MongoClient } from 'mongodb';
config();

const uri = process.env.MONGODB_URI
    || 'mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority';
const options = {};
let client;
let clientPromise;

if ( process.env.NODE_ENV === 'development' ) {
  const globalWithMongo = global;

  if ( !globalWithMongo._mongoClientPromise ) {
    client = new MongoClient(
      uri, options 
    );
    globalWithMongo._mongoClientPromise
            = client.connect();
  }
  clientPromise
        = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(
    uri, options 
  );
  clientPromise = client.connect();
}

export default clientPromise;
