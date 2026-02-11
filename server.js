const mongodbClient = require("mongodb").MongoClient;
mongodbClient.connect("mongodb://127.0.0.1:27017")
.then(()=>{
    console.log("Connect with mongoDb Server")
}).catch( error=>{
    console.log(error)
})

