import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { useGlobalContext } from "../context/GlobalContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Payment = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const { cartItems, removeItemFromCart, addItemToCart } = useGlobalContext();

    const shippingCost = 5000;
    const discount = 0;
    let tax = 0;
    let subtotal = 0;

    if (cartItems.length > 0) {
        subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
        tax = subtotal * 0.18;
    }

    const total = subtotal + shippingCost + tax - discount;
    const totalInKobo = total * 100; // Paystack requires amount in Kobo

    const publicKey = "pk_test_0fe6b9f7f7e55a51fa421232e4588ccbccfbe397"; // Replace with your Paystack public key

    const componentProps = {
        email,
        amount: totalInKobo,
        publicKey,
        text: "Pay Now",
        onSuccess: (response) => alert(`Payment Successful! Reference: ${response.reference}`),
        onClose: () => alert("Payment Closed"),
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-UG', { style: 'currency', currency: 'UGX' }).format(amount);
    };

    return (
        <div className="flex flex-col items-center justify-center mx-20 bg-gray-100">
            <div className="bg-white p-8 w-full">
                <h2 className="text-3xl font-semibold text-center mb-6">Checkout</h2>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 container'>
                    <div>
                        <form className="w-full mx-auto grid grid-cols-2 gap-2">
                            <div className="mb-5 col-span-2">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    type="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@flowbite.com"
                                    required
                                />
                            </div>
                            <div className="col-span-2">
                                <PaystackButton {...componentProps} currency='UGX' className="bg-custom-pink hover:bg-white hover:text-custom-pink text-white py-3 rounded-md w-full mt-4 focus:outline-none focus:ring focus:ring-blue-200" />
                            </div>
                        </form>
                    </div>
                    <div className='bg-[#f9fafb] grow-0 rounded-lg container w-full p-6 order-first md:order-last'>
                        {cartItems.map((item) => (
                            <div key={item.id} className='grid grid-cols-2 gap-2'>
                                <div className='p-6 rounded-md bg-white'>
                                    <img src={item.image} alt={item.name} className='w-full bg-transparent h-full' />
                                </div>
                                <div className='flex flex-col items-start my-4 justify-start gap-4 ml-4'>
                                    <h5 className='tracking-tight leading-tight font-medium'>{item.name}</h5>
                                    <p className='tracking-tight leading-tight font-medium'>{formatCurrency(item.price)}</p>
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
                                            <p className='text-custom-pink'></p>
                                        </div>
                                        <hr className='rotate-90 w-4 text-gray-900' />
                                        <p className="text-custom-pink leading-tight font-medium cursor-pointer" onClick={() => removeItemFromCart(item.id, "all")}>Remove</p>
                                    </div>
                                </div>
                                <hr className='h-1 rounded-sm col-span-2 mx-2 my-4 bg-custom-pink' />
                            </div>
                        ))}
                        <div className='w-full'>
                            <div className='grid grid-cols-2 w-full gap-2 px-2 items-center justify-center'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-gray-600 text-sm'>Subtotal</p>
                                    <p className='text-gray-600 text-sm'>Discount</p>
                                    <p className='text-gray-600 text-sm'>Shipping</p>
                                    <p className='text-gray-600 text-sm'>Taxes</p>
                                </div>
                                <div className='flex flex-col gap-2 justify-end items-end'>
                                    <p className='text-gray-950 font-medium text-sm'>{formatCurrency(subtotal)}</p>
                                    <p className='text-gray-950 font-medium text-sm'>{formatCurrency(discount)}</p>
                                    <p className='text-gray-950 font-medium text-sm'>{formatCurrency(shippingCost)}</p>
                                    <p className='text-gray-950 font-medium text-sm'>{formatCurrency(tax)}</p>
                                </div>
                                <hr className='col-span-2 mt-4' />
                                <div>
                                    <h2 className='font-medium text-md'>Total</h2>
                                </div>
                                <div className='flex items-end justify-end'>
                                    <h2 className='font-semibold tracking-tight leading-tight text-md'><span className='text-custom-pink text-sm'>UGX </span> {formatCurrency(total)}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
