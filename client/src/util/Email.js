import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: 'uSW28PbCJKTorqHyo',
})

export const sendMail = (templateid, templateParams) => {
  
  
  
  emailjs.send('service_cs9n4ea', templateid, templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
};