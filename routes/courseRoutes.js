const express= require("express");
const createCourse = require("../controllers/course/create");
const addModule = require("../controllers/course/addModule");



const router= express.Router();

    router.post('/create',createCourse);
    router.put('/addModule/:courseId',addModule)
    

    

module.exports= router