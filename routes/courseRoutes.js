const express= require("express");
const createCourse = require("../controllers/course/create");
const addModule = require("../controllers/course/addModule");
const addLession = require("../controllers/course/addLesson");
const uploadVideo = require("../middleware/uploadCloudinary");



const router= express.Router();

    router.post('/create',createCourse);
    router.put('/addModule/:courseId',addModule)
    router.put('/addLession/',uploadVideo.single('video') ,addLession)
    

    

module.exports= router