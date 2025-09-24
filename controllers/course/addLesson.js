const { Types } = require("mongoose");
const uploadVideo = require("../../middleware/uploadCloudinary");
const course = require("../../models/course");

const addLession=async(req,res)=>{

    const { title,courseId, moduleId } = req.body;
    const file = req.file.path; // If using multer or any upload middleware
    try{
        const fileData = req.file;
        const cloudinaryUrl = fileData.path;
        const payload = {
            "title":title,
            "videoUrl": cloudinaryUrl,
            'durations':60

          };

        // get course
        
        let courseDetails= await course.findById({_id: new Types.ObjectId(courseId)})
        let modules= courseDetails.modules;
            for(let i=0;i<modules.length;i++){
                if(modules[i]._id==moduleId){
                    modules[i].lessons.push(payload);
                }
            }
            courseDetails.modules=modules;


         //   await courseDetails.save();

            res.status(200).json({
                "message":"lession added successfully",
                "courseDetails":courseDetails,
                "modules":modules,
                "payload":payload

            })

    }catch(error){
        res.status(500).json({
            "message":"Internal server error",
            "info":error.message
        })
    }

}

module.exports=addLession;