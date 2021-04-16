let mongoClient = require("mongodb").MongoClient
const fs = require('fs');
let url = "mongodb://localhost:27017"

let recordsArr=[];

let arr = fs.readFileSync("call.json");

if(JSON.parse(arr.length) !==0){
    const ob = JSON.parse(arr);
    if(ob.length!= 0){
       
        
        for(let i=0; i<ob.length; i++){
            recordsArr.push(ob[i]);
            //console.log()          
            
        
    }
}
}

mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=>{
    
    if(!err1){
            let db = client.db("meanstack");
            db.collection("Call").insertMany(recordsArr,(err2,result)=>{
                if(!err2){
                    console.log("Records Inserted "+result.insertedCount);
                }else{
                    console.log(err2.message);
                }
                client.close();
            });
    }
        
    });


