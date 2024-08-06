import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: '9Nb8ekAzudfnLyZ6P',
})

export const sendMail = (templateid, templateParams) => {
  
  
  
  emailjs.send('service_do7asl9', templateid, templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
};