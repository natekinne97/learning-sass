require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = express.json();
const {API_KEY, LIST_ID, EMAIL, EMAIL_PASSWORD} = require('../config');
const router = express.Router();
const Mailchimp = require('mailchimp-api-v3');

// create transporter as a global
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: EMAIL,
        pass: EMAIL_PASSWORD
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
        
        const {email} = req.body;
        

        // email options for nodemailer
        const mailOptions = {
          from: EMAIL,
          to: email,
          subject: "Thanks for subscribing",
          text: "Thanks for subscribing to the mysterian news letter",
        };
        // mailchimp setup
        const mailchimp = new Mailchimp(API_KEY);
        // send the data to mailchimp
        mailchimp.post(`lists/${LIST_ID}`, {
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