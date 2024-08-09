import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: '9Nb8ekAzudfnLyZ6P',
})

export const sendMail = (serviceID, templateID, variables) => {
  emailjs.send(serviceID, templateID, variables)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((error) => {
      console.log('FAILED...', error);
    });
};

