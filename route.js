const http = require("http");

const MongoClient = require('mongodb').MongoClient;
const url =  "mongodb://127.0.0.1:27017"


const server= http.createServer((req,res)=>{
    if(req.url==="/"){
    res.writeHead(200,"ok", {'content-type':'text/html'});
    res.write("<h1>Home page</h1>");
    res.end()}
    else if(req.url==="/contact"){

       res.writeHead(200, "ok",{"content-type":'application/json'})

       MongoClient.connect(url).then(clientobj=>{

        let databse = clientobj.db("Zomato");

        databse.collection("users").find({}).toArray()
        
        .then(document =>{
            res.end(json.toStringfy(document))
        })
       })
    }

}

)

server.listen(6060,()=>{
    console.log("server is running port:6060")
});
