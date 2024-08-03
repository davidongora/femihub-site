import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { useGlobalContext } from "../context/GlobalContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";


const Payment = () => {
    // State to manage user input
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const { cartItems, removeItemFromCart, addItemToCart, user, clearCart } =
    useGlobalContext();

    // Example Order Summary Data
    const orderItems = [
        { id: 1, name: 'Product 1', quantity: 2, price: 2500 },
        { id: 2, name: 'Product 2', quantity: 1, price: 1500 },
    ];

    const shippingCost = 0;
    const discount = 0;
    const tax = 0;



    console.log(cartItems)
    let subtotal=0
    if(cartItems.length > 0){
        subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

    }
    // Calculate total amount
    const total = subtotal + shippingCost - discount;
    const totalInKobo = total * 100; // Paystack requires amount in Kobo

    const publicKey = "pk_test_0fe6b9f7f7e55a51fa421232e4588ccbccfbe397"; // Replace with your Paystack public key

    // Paystack button configuration
    const componentProps = {
        email,
        amount: totalInKobo,
        publicKey,
        text: "Pay Now",
        onSuccess: (response) => alert(`Payment Successful! Reference: ${response.reference}`),
        onClose: () => alert("Payment Closed"),
    };

    return (
        <div className="flex flex-col items-center justify-center mx-20 bg-gray-100">
            <div className="bg-white p-8 w-full ">
                <h2 className="text-3xl font-semibold text-center mb-6">Checkout</h2>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2  container'>
                    <div>



                        <form className="w-full mx-auto grid grid-cols-2 gap-2">
                            <div className="mb-5 col-span-2">
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                            </div>
                            <div className="col-span-2">
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name on card</label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="col-span-2">
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card  Number</label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="col-span-2">
                                <div className='grid grid-cols-3 gap-2'>
                                    <div className='col-span-2'>
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expiration date (MM/yy)</label>
                                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div className='col-span-1'>
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CVC</label>
                                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                </div>


                            </div>

                            <div className="col-span-2">
                                <div className='grid grid-cols-3 gap-2'>
                                    <div className="col-span-1">
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div className="col-span-1">
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State/Province</label>
                                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div className="col-span-1">
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postal Code</label>
                                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                </div>

                            </div>
                            <div className="col-span-2">
                                <PaystackButton {...componentProps} currency='ksh' className="bg-custom-pink hover:bg-white hover:text-custom-pink text-white py-3 rounded-md w-full mt-4 focus:outline-none focus:ring focus:ring-blue-200" />

                            </div>


                        </form>

                    </div>
                    <div className='bg-[#f9fafb] grow-0 rounded-lg container w-full p-6 order-first md:order-last'>
                    {cartItems.map((item) => (
                        <div className='grid grid-cols-2 gap-2'>
                            <div className='p-6 rounded-md bg-white'>

                                <img src={item.image} alt={item.name} className='w-full bg-transparent h-full' />

                            </div>

                            <div className='flex flex-col items-start my-4 justify-start gap-4 ml-4 '>
                                <h5 className='tracking-tight leading-tight font-medium'>Micro Backpack</h5>
                                <p className='tracking-tight leading-tight font-medium'>USh {item.price}</p>

                                <div className='mt-2 flex items-center justify-start gap-4 flex-row'>
                                    <div className='flex justify-between items-center my-2 text-base font-medium text-gray-900'>
                                        <div className='flex gap-4 items-center'>
                                            <button
                                                className='border border-gray-300 p-0.5 rounded'
                                                onClick={() => removeItemFromCart(item.id)}
                                            >
                                                <RemoveIcon />
                                            </button>
                                            <h6>{item.qty}</h6>
                                            <button
                                                className='border border-gray-300 p-0.5 rounded'
                                                onClick={() => addItemToCart(item)}
                                            >
                                                <AddIcon />
                                            </button>
                                        </div>
                                        <p className='text-custom-pink'>
                                            
                                        </p>
                                    </div>

                                    <hr className='rotate-90 w-4 text-gray-900' />
                                    <p className="text-custom-pink leading-tight font-medium  cursor-pointer" onClick={()=>{
                                        removeItemFromCart(item.id, "all")
                                    }}>Remove</p>

                                </div>

                            </div>

                            <hr className='h-1  rounded-sm col-span-2 mx-2 my-4 bg-custom-pink' />
                        </div>
                    ))}
                        

                        <div className='w-full'>

                            <div className='grid grid-cols-2 w-full gap-2 px-2 items-center justify-center'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-gray-600 text-sm'>Subtotal</p>
                                    <p className='text-gray-600 text-sm'>Discount <span className='bg-white p-2 text-gray-600 rounded-full ml-2 uppercase'>cheapstake</span></p>
                                    <p className='text-gray-600 text-sm'>Shipping </p>
                                    <p className='text-gray-600 text-sm'>Taxes</p>


                                </div>

                                <div className='flex flex-col gap-2 justify-end items-end '>
                                    <p className='text-gray-950 font-medium text-sm'>{subtotal}</p>

                                    <p className='text-gray-950 font-medium text-sm'>{discount}</p>
                                    <p className='text-gray-950 font-medium text-sm'>{shippingCost}</p>

                                    <p className='text-gray-950 font-medium text-sm'>{tax}</p>
                                </div>

                                <hr className='col-span-2 mt-4' />

                                <div>
                                    <h2 className='font-medium text-md'>Total</h2>
                                </div>
                                <div className='flex items-end justify-end'>
                                    <h2 className='font-semibold tracking-tight leading-tight text-md'><span className='text-custom-pink text-sm'>USH </span> {total}</h2>
                                </div>



                            </div>

                        </div>
                    </div>
                </div>



                {/* Order Summary */}
                {/* <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Order Summary</h3>
          {orderItems.map(item => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price / 100).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <span className="font-medium">Subtotal</span>
            <span>${(subtotal / 100).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Shipping</span>
            <span>${(shippingCost / 100).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Discount</span>
            <span>-${(discount / 100).toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-6 text-lg font-semibold">
            <span>Total</span>
            <span>${(total / 100).toFixed(2)}</span>
          </div>
        </div> */}

                {/* Payment Details Form */}
                {/* <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            placeholder="Enter your name"
          />
        </div> */}

                {/* <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            placeholder="Enter your email"
          />
        </div> */}

                {/* Paystack Button */}
            </div>
        </div>
    );
};

export default Payment;
