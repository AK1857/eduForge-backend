const express= require("express");
const createFile = require("../controllers/files/create");

const fileRoutes= express.Router();

fileRoutes.post('/createFile',createFile);

module.exports= fileRoutes;