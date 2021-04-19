let app = require("express")();
let mongoClient = require("mongodb").MongoClient
let http = require("http").Server(app);
let io = require("socket.io")(http);

let url = "mongodb://localhost:27017"

var n1, m1;
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

io.on("connection",(socket)=>{
    //console.log("Client connected to the application....");
    socket.on("Name",(msg)=>{
        console.log(msg);
        n1 = msg;
    })
    socket.on("Message",(msg)=>{

        m1 = msg;
        console.log(msg);
        mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=>{
    
            if(!err1){
                let db = client.db("meanstack");
                db.collection("chartlog").insertOne({Name:n1,Message:m1},(err2,result)=>{
                    if(!err2){
                        console.log(result.insertedCount);
                    }else{
                        console.log(err2.message);
                    }
                    client.close();
                });
            }
            
        });
    })
})




http.listen(9090,()=>console.log('server running on port number 9090'));