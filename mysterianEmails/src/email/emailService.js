const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = express.json();

const router = express.Router();
const Mailchimp = require('mailchimp-api-v3');

// move these to the env
const apiKey = "32b5ef564243ebc9dd2ee3c7e3f11809-us19";
const listId = "7d04d15484";

// create transporter as a global
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'mysterian.design@gmail.com',
        pass: 'DesignIt19'
    }
});

// options for mailchimp



router.get('/', (req, res, next)=>{
    console.log('i am working');
    return res.json({success: "I am working"});
});

// send the email
router.route('/')
    .post(bodyParser, (req, res, next)=>{
        console.log('getting email')
        console.log(req.body, 'params');
        const {email} = req.body;
        console.log(email, 'email')

        // email options for nodemailer
        const mailOptions = {
          from: "mysterian.design@gmail.com",
          to: email,
          subject: "Thanks for subscribing",
          text: "Thanks for subscribing to the mysterian news letter",
        };
        // mailchimp setup
        const mailchimp = new Mailchimp(apiKey);
        // send the data to mailchimp
        mailchimp.post(`lists/${listId}`, {
            members: [{
                email_address: email,
                status: 'subscribed'
            }]
        }).catch(err=>{
            console.log(err, 'ERROR OCCURED');
        })

        
       
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