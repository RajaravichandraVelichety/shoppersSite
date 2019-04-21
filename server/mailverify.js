var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rryecomm@gmail.com',
    pass: 'Test@12345'
  }
});

var mailOptions = {
  from: 'rryecomm@gmail.com',
  to: 'ykavadap@emich.edu',
  subject: 'hello',
  html: '<h1>Welcome</h1><p>NAMASTAY AKKAI!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 