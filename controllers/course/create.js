const Course= require("../../models/course");


const createCourse= async(req,res)=>{
        try{
            let payload=req.body;

                let course= new Course({...payload});
                let newCourse = await course.save();
                if(!newCourse){
                    return res.status(400).json({
                        "message":"Error durin create course",
                        
                    })
                }

                res.status(201).json({
                    "message":"Course created",
                    "course ":newCourse
                })

        }catch(error){
            res.status(500).json({
                "message":"Internal server error",
                "info":error.message
            })
        }
}

module.exports=createCourse;