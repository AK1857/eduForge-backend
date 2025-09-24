const fs= require("fs");


const createFile=((req,res)=>{

    let fileBody=req.body.fileContent;
fs.writeFile("newfile.txt",fileBody,(err)=>{
    res.status(200).json({
        "message":err.message
    })
});

res.status(200).json({
    "message":"file created"
})

})

module.exports= createFile;