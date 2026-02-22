
const mongodbClient2 = require("mongodb").mongodbClient;
const express = require("express");

const connectingString = "mongodb:127.0.0.1:127017"

const app = express();

// route create
app.get('/', (req, res,next) => {
    res.send("<h1>Api Home</h1>");
     res.end();
});


app.get('/product',(req,res,next)=>{
    mongodbClient2.connect(connectingString).then(clientobj=>{
        var database = clientobj.db('Zomato');
        database.collection('users').find({}).toArray().then(document=>{const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

const connectionString = "mongodb://127.0.0.1:27017";const client = new MongoClient(connectionString);

// Home route
app.get("/", (req, res) => {
    res.send("<h1>API Home</h1>");
});

// Product route
app.get("/product", async (req, res) => {
    try {
        await client.connect();

        const db = client.db("Zomato");
        const documents = await db.collection("users").find({}).toArray();

        res.send(documents);
    } catch (err) {
        res.status(500).send("Database error");
    }
});

// Server start
app.listen(6060, () => {
    console.log("Server started at http://127.0.0.1:6060");
});

             res.send(database)
              res.end();
        })
       
    })

})
// server start
app.listen(6060, () => {
    console.log('Server started at http://127.0.0.1:6060');
});
