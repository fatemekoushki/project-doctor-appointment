"use client";
import { Button } from "../../../../components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import registerSvg from "../../../../public/register.svg";
import axiosClient from "../../../_components/GelobalApi";
import { useFormik } from "formik";
import { registerSchema } from "../(validations)/validations";
import Cookies from "js-cookie";
import { useMutation, useQueryClient } from "react-query";
function Register() {
  // const sendData = async (values) => {
  //   const response = await axiosClient.post("/users", values);
  //   return response;
  // };

  // const mutation = useMutation(sendData, {
  //   onSuccess: () => {

  //   },
  //   onError: (error) => {
  //     console.error("Error sending data:", error);
  //   },
  // });

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
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      const user = JSON.stringify(values);
      Cookies.set("tokenLogin", user);
      window.location.href = "/";
      alert("register success");
      setSubmitting(false);
    },
    validationSchema: registerSchema,
  });

  return (
    <div className="h-screen  flex flex-col md:flex-row ">
      <form
        onSubmit={form.handleSubmit}
        className="flex flex-col  flex-1 mt-20 items-center  text-center min-w-[200px] gap-4 p-5 rounded-lg"
      >
        <input
          onChange={form.handleChange}
          value={form.values.name}
          onBlur={form.handleBlur}
          name="name"
          type="text"
          placeholder="Name..."
          className="border-[2px] rounded border-primary py-2 px-5 w-4/6 "
        />
        {form.errors.name && form.errors.name}

        <input
          onChange={form.handleChange}
          value={form.values.email}
          onBlur={form.handleBlur}
          name="email"
          type="text"
          placeholder="Email..."
          className="border-[2px] rounded border-primary py-2 px-5 w-4/6 "
        />
        {form.errors.email && form.errors.email}
        <input
          onChange={form.handleChange}
          value={form.values.password}
          onBlur={form.handleBlur}
          name="password"
          type="password"
          id=""
          placeholder="Password..."
          className="border-[2px] rounded py-2 px-5 w-4/6 border-primary"
        />
        {form.errors.password && form.errors.password}
        <Button type="submit"> Submit</Button>
      </form>
      <div className="flex-1 ">
        <Image width={700} height={700} src={registerSvg} />
      </div>
    </div>
  );
}

export default Register;
