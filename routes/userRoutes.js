const express= require("express");
const  register= require("../controllers/user/register");
const list=require("../controllers/user/list");


const router= express.Router();

    router.post('/register',register);
    router.get('/list',list);

module.exports= router