const mongodbClient = require("mongodb").MongoClient;
const mongodbConnection= "mongodb://127.0.0.1:27017"
mongodbClient.connect(mongodbConnection)
.then(()=>{
    console.log("Connect with mongoDb Server")
}).catch( error=>{
    console.log(error)
})

