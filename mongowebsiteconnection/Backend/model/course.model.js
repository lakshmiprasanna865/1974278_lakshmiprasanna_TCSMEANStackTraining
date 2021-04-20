let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let CourseSchema = mongoose.Schema({
    _id:Number,
    cname:String,
    description:String,
    amount:Number
})
let CourseModel = mongoose.model("",CourseSchema,"Course");

module.exports = CourseModel;