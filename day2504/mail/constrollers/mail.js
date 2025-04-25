const nodemailer = require("nodemailer")

exports.mail = (req,res)=>{
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{  
        user:"testrohan74@gmail.com" ,
        pass:"voht zhkw sjbr wbqk"  
    }
})
const mailDetails={
from :"testrohan74@gmail.com",
to: "rohanhakke1@gmail.com",
subject: "test mail",
text : "done"
}
transporter.sendMail(   mailDetails,(error,result)=>{
if(error) {return error}
res.send("send" , mailDetails)
})
}



// const nodemailer = require("nodemailer");

// exports.mail = (req, res) => {
//   // Set up transporter with correct email service
//   const transporter = nodemailer.createTransport({
//     service: "gmail", // Use the correct email service (e.g., "gmail" for Gmail)
//     auth: {
//       user: "testrohan74@gmail.com", // Use environment variables for security
//       pass: "voht zhkw sjbr wbqk",
//     },
//   });

//   const mailDetails = {
//     from: "testrohan74@gmail.com", 
//     to: "rohanhakke1@gmail.com", // Recipient email
//     subject: "Test Mail",
//     text: "Mail sent successfully",
//   };

//   // Send mail
//   transporter.sendMail(mailDetails, (error, result) => {
//     if (error) {
//       console.error("Error sending mail:", error);
    
//     }
//     console.log("Mail sent successfully");
  
//   });
// };
