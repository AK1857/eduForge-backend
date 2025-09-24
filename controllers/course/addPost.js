// Design an API route in Express.js to create a new blog post. Each post has:

// title

// content

// authorId (ref to user)

// tags (array of strings)

// The data should be saved in MongoDB.



const AddPost= async(req,res)=>{

    try{
        let {title,content ,authorId}= req.body();
        let tags= req.body.tags;
        let obj={title:title,
                content:content,
             authorId:authorId,
            tags:tags}
             

       let responst= await posts.insterOnd(obj)

       if(!responst){
       return res.status(200).json({
            "message":"Error duriing insert dataa",
        })
       }

       res.status(201).json({
        "message":"post  insert ",
    })

    }catch(error){
        res.status(500).json({
            "messaag":"error",
            "info":error.messaag
        })
    }

}