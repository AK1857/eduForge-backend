const express= require("express");
const connectDB= require("./config/database_connecton");
const dotenv=require('dotenv');
// import routes
const userRoutes= require("./routes/userRoutes");




dotenv.config();
connectDB();
const app= express();
app.use(express.json());

// Use Routes
app.use('/api/user',userRoutes);

app.listen(8000,()=>{
    console.log(">>> server run on port ",8000)
})