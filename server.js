const mongodbClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017"
const client = new mongodbClient(url);
 const dbname = 'Zomato';

async function Main() {
   await client.connect();
   
    console.log("databaseconnect ")
    const db = client.db(dbname)
    const collection = await db.collection('users').find({id:10}).toArray();
    console.log(collection);
}
Main()

