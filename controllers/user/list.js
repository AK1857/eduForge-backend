const user= require("../../models/user")

const Listusers=async(req,res)=>{
    try{
       
            res.status(200).json({
                "message":"List user successfully",
            })
        
    }catch(error){

        res.status(500).json({
            "message":"Internal serer error",
            "info":error.message
        })

    }
}

module.exports=Listusers;