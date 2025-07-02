const express= require("express");


const app= express();

app.get('/',(req,res)=>{

    res.status(200).json({
        "Message":"get successfuly"
    })
})

app.listen(8000,()=>{
    console.log(">>> server run on port ",8000)
})