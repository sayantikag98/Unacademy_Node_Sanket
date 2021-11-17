// Reference: https://www.bacancytechnology.com/blog/send-email-using-nodemailer

// Change in gmail account settings to send an email from your gmail account using nodemailer
// Now open the link https://myaccount.google.com/lesssecureapps to Allow less secure apps: ON. 


const mailSendFunc = (receiverMail, subject, text, html, attachments) => {
    require('dotenv').config(); // loading the config file
    const nodemailer = require("nodemailer"); // loading nodemailer package
    
    
    // SMTP or simple mail transfer protocol is used to send emails over the internet
    // this transport object also uses smtp 
    
    // Transport object
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",  // ip address or hostname connecting to (default localhost)
        port: 465, // if secure is false then port default is 587 otherwise it is 465
        secure: true,
        auth: {
            user: process.env.EMAIL_USERNAME,  // authentication data
            pass: process.env.EMAIL_PASSWORD
        }
    });
    
    const mailOptions = {
        from:"sayantikaghosh98@gmail.com",  // sender mail address
        to: receiverMail,  // receiver mail address can be comma separated or an array if multiple email addresses is sent to
        subject,  // subject of the mail   
    };

    if(text){
        mailOptions.text = text; // for plain text content
    }
    if(html){
        mailOptions.html = html; // for html content
    }
    if(attachments.length > 0){
        mailOptions.attachments = attachments; // for sending attachments
    }
    
    /* 
    sendmail() is a method of the transport object which takes in two arguments - first is the 
    mailoptions object created above and the other is the callback function which will be 
    called if either the mail is sent successfully or it gives an error.
    */ 
    transport.sendMail(mailOptions, (err, data) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("Message delivered");
            console.log(data);
        }
    });
};

module.exports = mailSendFunc;

