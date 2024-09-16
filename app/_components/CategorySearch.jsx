"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import img1 from "../../public/assets/doctors.png";
import img2 from "../../public/assets/teeth.png";
import img3 from "../../public/assets/brain.png";
import img4 from "../../public/assets/eye.png";
import img5 from "../../public/assets/heartDoctor.png"
import img6 from "../../public/assets/orthopedic.png"
import img7 from "../../public/assets/ear.png" ;
import img8 from "../../public/assets/psychotropic.png"
import axiosClient from './GelobalApi'
import Link from 'next/link'





const images = [
  { id : 1 , url : img1 , name : " general doctor"} ,
  { id : 2 ,url : img2 , name : "Dentist"},
  { id : 3 ,url : img3 , name : "neurologist" },
  { id : 4 ,url : img4  ,name : "Eye speclist"},
  { id : 5 , url : img5 , name : "cardiologist" },
  { id : 6 ,url : img6 , name : "orthopedic"},
  { id : 7 , url : img7 , name : "otology"},
  { id : 8 , url : img8 , name : "psychotropic"}

]
function CategorySearch() {

  // const [cateGoryList , setCategoryList]= useState([])
  // useEffect(()=> {
  //       getCategory()
  // } , [])
  // console.log(cateGoryList)
  
  // const getCategory = ()=> {
  //   axiosClient.get("/category").then((res=> setCategoryList(res.data)))
  // }
 
  return (
    <div className='mb-2 items-center flex flex-col gap-2 text-center px-5 ' >
        <h2 className='font-bold text-4xl  tracking-wide ' >
            Search <span className='text-primary' >  Doctors</span>
        </h2>
        <h2 className='text-gray-500 text-xl' >search Your Doctor and Book Appointment in One click </h2>
        <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search..." />
      <Button type="submit">
        <Search className='w-4 h-4 mr-2' />
        Search
      </Button>
    </div>
    <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center ' >
      {
        images.length > 0 ? images.map((item , index)=>index <6 && (
          <Link  key={index} href ={`/search/${item.name}`}  className='flex flex-col gap-2 text-center items-center p-5 hover:scale-110 transition-all ease-in-out mt-5  ' >
             <Image src={item.url}  placeholder="blur"  width={50} height={50} alt='img'  className='bg-primary rounded-lg' />
             <label htmlFor="">{item.name}</label>
          
          </Link>
      
        ))
        :
        [1,2,3,4,5,6].map((item , index)=> (
          <div className='bg-slate-200 m-2 w-[100px] h-[100px] rounded-lg animate-pulse  ' ></div>
        ))
      }
    </div>
  
    </div>
  )
}

export default CategorySearch ;