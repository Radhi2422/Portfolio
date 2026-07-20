const express=require('express');
const router=express.Router();


const projectController =require("../controllers/projectController");

//GET /api/problems
//GET /api/problems/:id
console.log("Hii")
router.get("/projects/:title", projectController.getProjectByTitle);

router.post("/contact", projectController.contactmail);

module.exports=router;