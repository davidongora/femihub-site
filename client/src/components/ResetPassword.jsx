import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { BASEHOST } from '../use'
import { sendMail } from '../util/Email'
import { toast } from 'react-toastify'
import { Eye } from 'lucide-react'
import { EyeClosedIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { Router, useNavigate, useSearchParams } from 'react-router-dom'

const ResetPassword = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const router = useNavigate()

    console.log(searchParams.get("t"))

    const [showPassword, setShowPassword] = useState(false)

    const formik = useFormik({
        initialValues: {
            newPassword: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object().shape({
            newPassword: Yup.string().min(6).max(10).required(),
            confirmPassword: Yup.string().oneOf([Yup.ref('newPassword')], 'Passwords must match').required()
        }),
        onSubmit: async (values, formikHelpers) => {
            const res = await axios.post(BASEHOST + "/reset-password", {

                token: searchParams.get("t"),
                newPassword: values.newPassword

            },
            {
                headers: {
                        "Content-Type": "application/json",

                }
            })



            if (res.status === 200) {
                toast.success("password successfully changed")
                formik.resetForm()
                router("/login")
            }else{
                toast.error("an error occurred")

            }

        },
    })


    function handleshowpassword() {
        setShowPassword(!showPassword)
    }



    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-pink-200'>
            <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>

                <form className='flex flex-col gap-2' onSubmit={formik.handleSubmit}>
                    <div className='flex flex-col justify-start gap-2'>
                        <label htmlFor="" className='block my-2 text-md  text-gray-700'>New Password</label>

                        {formik.touched.newPassword && formik.errors.newPassword && (
                            <p className='text-sm tracking-tight leading-tight text-balance text-red-600'>{formik.errors.newPassword}</p>
                        )}

                        <div className='relative'>
                            <input type={showPassword ? "text" : "password"} autoComplete="off" onChange={formik.handleChange} name='newPassword' defaultValue={formik.values.newPassword} onBlur={formik.handleBlur} disabled={formik.isSubmitting} required placeholder='******' className='border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-pink-500' />
                            {showPassword ? (<Eye className=' w-6 h-6 absolute right-5 inset-y-0 top-2 hover:cursor-pointer' onClick={handleshowpassword} />) : (
                                <EyeClosedIcon className='w-6 h-6 absolute right-5 inset-y-0 top-3 hover:cursor-pointer' onClick={handleshowpassword} />

                            )}
                        </div>
                    </div>
                    <div className='flex flex-col justify-start gap-2'>
                        <label htmlFor="" className='block my-2 text-md  text-gray-700'>Confirm Password</label>

                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                            <p className='text-sm tracking-tight leading-tight text-balance text-red-600'>{formik.errors.confirmPassword}</p>
                        )}

                        <div className='relative'>
                            <input type={showPassword ? "text" : "password"} autoComplete="off" onChange={formik.handleChange} name='confirmPassword' defaultValue={formik.values.confirmPassword} onBlur={formik.handleBlur} disabled={formik.isSubmitting} required placeholder='******' className='border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-pink-500' />
                            {showPassword ? (<Eye className=' w-6 h-6 absolute right-5 inset-y-0 top-2 hover:cursor-pointer' onClick={handleshowpassword} />) : (
                                <EyeClosedIcon className='w-6 h-6 absolute right-5 inset-y-0 top-3 hover:cursor-pointer' onClick={handleshowpassword} />

                            )}
                        </div>
                    </div>

                    <button type="submit" className='w-full rounded-md bg-custom-pink hover:text-custom-pink transition-all duration-300 hover:border  hover:bg-white hover:border-custom-pink  px-2 py-3 text-white my-2'>reset password</button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
