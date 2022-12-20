const nodemailer = require('nodemailer');

const alfa = 'victorcesar2031@gmail.com';


function mail () {
    let transporter = nodemailer.createTransport({

        host: 'smtp.gmail.com',
        port:587,
        secure: false,
        auth:{
            user: 'victorcesar2031@gmail.com',
            pass: 'ikwsacjhbwcsbeil'
        }
    
    });
    
    transporter.sendMail({
    
      from: 'Dron <victorcesar2031@gmail.com>',
      to: alfa,
      subject: 'Olá',
      text: 'OLÁ, Dron',
      html: '<h1>Você é um gênio</h1>'
    
    }).then(message=>{
        console.log('email enviado');
    }).catch(err=>{
        console.log(err);
    });
    
}
setInterval(mail,10000);
