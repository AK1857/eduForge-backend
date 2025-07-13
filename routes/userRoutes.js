const express= require("express");
const  register= require("../controllers/user/register");
const list=require("../controllers/user/list");
const UserDetails = require("../controllers/user/details");
const UpdateUser = require("../controllers/user/update");


const router= express.Router();

    router.post('/register',register);
    router.get('/list',list);
    router.get('/details/:id',UserDetails)
    router.put('/update',UpdateUser);
    

module.exports= router