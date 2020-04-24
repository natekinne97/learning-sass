const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = express.json();
const {EMAIL, EMAIL_PASSWORD} = require('../config');
const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: EMAIL_PASSWORD,
  },
});
// for sending info request
router.route('/')
    .post(bodyParser, (req, res, next)=>{
        const {
            email, company, name, phone, location, subject, message
                } = req.body;

        const messageBody = {
          email,
          company,
          name,
          phone,
          location,
          subject,
          message,
        };
        let keys = Object.keys(messageBody);
       
        for(const field of keys)
                if(!messageBody[field]) return res.status(400).json({
                    error: `Missing field: ${messageBody[field]}`
                })

        // email options for nodemailer
        const mailOptions = {
          from: "mysterian.design@gmail.com",
          to: "mysterian.design@gmail.com",
          subject: subject,
          text: `${message}
                Company: ${company}
                Name: ${name}
                Phone: ${phone}
                Email: ${email}
                Location: ${location}
                `,
        };

        transporter.sendMail(mailOptions, (err, info)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    error: "Unable to send email"
                })
            }else{
                return res.status(200).json({
                    success: ""
                })
            }
        });
    }); 

module.exports = router;