let CourseModel = require("../model/course.model.js"); 
let getCourseDetails = (req,res)=>{
    CourseModel.find({},(err,result)=>{
        if(!err){
            res.json(result);
        }
    })
}


let storeCourseDetails = (req,res)=>{
    let course = new CourseModel({
        _id:req.body.cid,
        cname:req.body.cname,
        description:req.body.description,
        amount:req.body.amount
    });
    course.save((err,result)=>{
        if(!err){
            res.send("Record stored successfully")
        }else{
            res.send("Record didn't store");
        }
    })
}

let deleteCourseById = (req,res)=>{
    let cid = req.params.cid;
    CourseModel.deleteOne({_id:cid},(err,result)=>{
        if(!err){
            if(result.deletedCount>0){
                res.send("Record deleted successfully"+result);
            }else{
                res.send("Record does not exist") 
            }            
        }else{
            res.send("Error generated "+err);
        }
    })
}

let updateCoursePrice = (req,res)=>{
    let cid = req.body.cid;
    let updatedAmount = req.body.amount;
    CourseModel.updateMany({_id:cid},{$set:{amount:updatedAmount}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                res.send("Record updated successfully")
            }else{
                res.send("Record is not available")
            }
            
        }else{
            res.send("Error generated "+err);
        }
    })
}

module.exports={getCourseDetails, storeCourseDetails, deleteCourseById, updateCoursePrice}