let express = require("express");
let router = express.Router();  //router reference.
let CourseController = require("../controller/course.controller");

router.get("/allCourseDetails",CourseController.getCourseDetails);
router.post("/storeCourseDetails",CourseController.storeCourseDetails);
router.delete("/deleteCourseById/:cid",CourseController.deleteCourseById);
router.put("/updateCoursePrice",CourseController.updateCoursePrice);

module.exports=router;