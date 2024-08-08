import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { BASEHOST } from '../use'
import { sendMail } from '../util/Email'
import { toast } from 'react-toastify'

const Forgotpassword = () => {

    const formik = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email().required()
        }),
        onSubmit: async (values, formikHelpers) => {
            // const res = await axios.post(BASEHOST + "/forgot-password", {
            //     email: values.email
            // },
            //     {
            //         headers: {
            //             "Content-Type": "application/json",

            //         }
            //     })


            // console.log(res, res.data, res.status)

            let customizedurl = new URL("resetpassword", "http://localhost:5173/")
            customizedurl.searchParams.set("t", "hjhghjg")
            sendMail('service_do7asl9', 'template_v1navwb', {
                to_name: values.email,
                url: customizedurl,
                send_to: values.email
            })

            toast.success("link sent to email")


            formik.resetForm()

        },
    })

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-pink-200'>
            <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>

                <form className='flex flex-col gap-2' onSubmit={formik.handleSubmit}>
                    <label htmlFor="" className='block my-2 text-md  text-gray-700'>Email</label>

                    {formik.touched.email && formik.errors.email && (
                        <p className='text-sm tracking-tight leading-tight text-balance text-red-600'>{formik.errors.email}</p>
                    )}

                    <input type="email" onChange={formik.handleChange} name='email' defaultValue={formik.values.email} onBlur={formik.handleBlur} disabled={formik.isSubmitting} required placeholder='m@example.com' className='border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-pink-500' />

                    <button type="submit" className='w-full rounded-md bg-custom-pink  hover:bg-white hover:border-custom-pink focus:text-white px-2 py-3 text-white my-2'>reset password</button>
                </form>
            </div>
        </div>
    )
}

export default Forgotpassword
