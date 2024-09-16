import axiosClient from '@/app/_components/GelobalApi'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

function Suggestions() {
  // const [doctorsList, setDoctorsList] = useState([])

  // useEffect(() => {
  //   getDoctors()


  // }, [])

  // const getDoctors = async () => {
  //   const res = await axiosClient.get("/doctors").then((res) => setDoctorsList(res.data) );
  // }
   const {data} = useQuery("doctorsList" , ()=> 
    axiosClient.get("/doctors").then((res)=> res.data )
  )
  return (
    <div className='p-4 border-[1px] mt-5 md:ml-5  ' >
        <h2 className='font-bold mb-3' >Suggestions</h2>
       {
        data?.map((doctor , index)=> (
          <Link key={index} href={`/details/${doctor.id}`} className='cursor-pointer
           hover:bg-slate-100 rounded-lg flex items-center gap-3  ' >
            <Image  src={doctor.img} width={65} height={65} alt='img' className='w-[65px] h-[65px] rounded-full object-cover'  />
       
            <div className='mt-3 flex flex-col gap-1 items-baseline'>
            <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary ' >{doctor.title}</h2>
              <h2 className='font-medium text-sm ' >{doctor.name}</h2>
              <h2 className='text-primary text-sm ' >{doctor?.experience}</h2>
            </div>
        </Link>
        ))
       }
      
    </div>
  )
}

export default Suggestions ;
