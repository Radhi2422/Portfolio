const Project=require("../models/projectModel");

exports.getProjectByTitle=async(req,res)=>{
// console.log("reached here")
try{
const { title } = req.params;

        const decodedTitle = decodeURIComponent(title);

        const project = await Project.find({
            title
        });

if(!project){

return res.status(404).json({
message:"Project not found"
});

}

res.status(200).json(project);

}
catch(err){

res.status(500).json({
message:err.message
});

}

}