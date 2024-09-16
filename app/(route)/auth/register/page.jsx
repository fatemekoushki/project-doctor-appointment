"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import regiterSvg from "../../../../public/register.svg" ;
import axiosClient from '@/app/_components/GelobalApi';
import { useFormik } from 'formik';
import { registerSchema } from '../(validations)/validations';
import { useRouter } from 'next/navigation';
import { VALID_LOADERS } from 'next/dist/shared/lib/image-config';
import Cookies from 'universal-cookie';
import { useMutation, useQueryClient } from 'react-query';
function Register() {
  const router = useRouter()
  const cookies = new Cookies(null, { path: '/' });

  const sendData = async (values) => {  
    const response = await axiosClient.post("/users" , {data : values})
    return response
    }

    const mutation = useMutation(sendData, {  
      onSuccess: () => {  
        
           //example
             cookies.set('loginToken', 'userlogin')
               router.push("/")
      
              alert("register success")
           
      },  
      onError: (error) => {  
        console.error('Error sending data:', error);  
      },  
    }); 

  //   const {mutate : postRegister} = useMutation((values)=>{
  //       return axiosClient.post("/users" , {data : values})
        
       
  //   },
  // {
  //   onSuccess : ()=> {
  //     const user = JSON.stringify(values)
  //     //     //example
  //        cookies.set('loginToken', 'userlogin')
  //       localStorage.setItem("user" , user)
  //        router.push("/")

  //        alert("register success")
  //   }
  // })
 
  const form = useFormik({
    initialValues : {
      name : "",
      email : "" ,
      password : ""
    } ,
      onSubmit: (values, { setSubmitting }) => {  
        mutation.mutate(values);  
        const user = JSON.stringify(values)
        localStorage.setItem("user" , user)

        setSubmitting(false);  
      } ,
    validationSchema : registerSchema 

  })

 
  return (
    <div className='h-screen grid grid-cols-2 ' >
      <div className='mt-5' >
        <Image width={700} height={700}  src={regiterSvg} />
      </div>
      <form  onSubmit={form.handleSubmit}  className='flex flex-col   mt-20 items-center  text-center w-auto gap-4 p-5 rounded-lg' > 
      <input onChange={form.handleChange} value={form.values.name} onBlur={form.handleBlur}    name='name' type="text"  placeholder='Name...' className='border-[2px] rounded border-primary py-2 px-5 w-4/6 '  />
        {form.errors.name && form.errors.name}
        
        <input onChange={form.handleChange} value={form.values.email} onBlur={form.handleBlur}  name='email' type="text"  placeholder='Email...' className='border-[2px] rounded border-primary py-2 px-5 w-4/6 '  />
         {form.errors.email && form.errors.email}
        <input   onChange={form.handleChange} value={form.values.password} onBlur={form.handleBlur}  name="password" type="password"  id=""  placeholder='Password...'  className='border-[2px] rounded py-2 px-5 w-4/6 border-primary' />
          {form.errors.password && form.errors.password }
        <Button type="submit" > Submit</Button>
      </form>
    </div>
  )
}

export default Register
