const express= require("express");
const connectDB= require("./config/database_connecton");
const dotenv=require('dotenv');
// import routes
const userRoutes= require("./routes/userRoutes");
const courseRoutes= require("./routes/courseRoutes")
const uploadRoutes = require('./routes/uploadRoutes');
const streamRoutes = require('./routes/streamRoutes');


dotenv.config();
connectDB();
const app= express();
app.use(express.json());
app.use('/uploads', express.static('uploads'));
// Use Routes
app.use('/api/user',userRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/upload',uploadRoutes)

app.use('/api/stream', streamRoutes);

app.listen(8000,()=>{
    console.log(">>> server run on port ",8000)
})