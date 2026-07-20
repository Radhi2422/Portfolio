const Project=require("../models/projectModel");
const nodemailer=require('nodemailer')
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
next(err);
// res.status(500).json({
// message:err.message
// });

}

}


exports.contactmail=async (req, res) => {
    try{
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.APP_PASSWORD,
        },
    });

    await transporter.sendMail({
        from: email,
        to: process.env.EMAIL,
        subject,
        html: `
            <h2>New Contact</h2>

            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Subject:</b> ${subject}</p>
            <p>${message}</p>
        `,
    });

    res.json({
        success: true,
    });
}catch(err){
    next(err);
}

};
