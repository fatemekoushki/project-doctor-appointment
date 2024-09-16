"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorsList from "./_components/DoctorsList";
import axiosClient from "./_components/GelobalApi";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function Home() {
  const {data} = useQuery("doctorsList" , ()=> 
    axiosClient.get("/doctors").then((res)=> res.data )
  )
  // const [doctorsList , setDoctorsList]  =useState(data?.data)

console.log(data)

 
  // useEffect(()=> {
  //     getDoctors()
  // } , [])

  // const getDoctors = async ()=> {
  //     await axiosClient.get("/doctors").then((res)=> setDoctorsList(res.data) )
  // }
  return (
   
   <div>
    <Hero />
    <CategorySearch />
    <DoctorsList  doctorsList={data} />
   
   </div>
  
  );
}
