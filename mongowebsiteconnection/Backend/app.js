let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let url = "mongodb://localhost:27017/meanstack";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors());

//Database connection without warning
const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,mongooseDbOption);   //ready to connect 

//connect the data
mongoose.connection

//link to router module
var Course = require("./router/course.router.js");

//http://localhost:9090/product/allProductDetails
//http://localhost:9090/product/retrieveProductById/102
//http://localhost:9090/product/storeProductDetails
//http://localhost:9090/product/deleteProductById/101
//http://localhost:9090/product/updateProductPrice

// {
//     "cid": 2,
//     "cname": "Java",
//     "description": "programming language",
//     "amount": 2000
//   }

app.use("/course",Course)
//app.use()

app.listen(9090,()=>console.log("Server running on port number 9090"));