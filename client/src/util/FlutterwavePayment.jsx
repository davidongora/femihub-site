import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

export default function Flutterwave({ amount, email, phone, name }) {
  

  return (
    <div >
      <button
      type='submit'
        className='bg-custom-pink hover:bg-white hover:text-custom-pink text-white py-3 rounded-md w-full mt-4 focus:outline-none focus:ring focus:ring-blue-200'
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => { },
          });
        }}
      >
        Pay Now
      </button>
    </div>
  );
}