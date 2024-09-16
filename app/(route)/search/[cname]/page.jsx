"use client"
import DoctorsList from '@/app/_components/DoctorsList'
import axiosClient from '@/app/_components/GelobalApi'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

function Search({ params }) {
  // const [doctorsList, setDoctorsList] = useState([])

  const {data} = useQuery("doctorsList" , ()=> 
    axiosClient.get("/doctors").then((res) => res.data.filter((item) => item.title === params.cname)) 
  )
  // useEffect(() => {
  //   getDoctors()


  // }, [])

  // const getDoctors = async () => {
  //   const res = await axiosClient.get("/doctors").then((res) => res.data.filter((item) => item.title === params.cname));
  //   setDoctorsList(res)
  // }

  return (
    <div className='mt-4' >
      <DoctorsList doctorsList={data}  heading={params.cname} />
    </div>
  )
}

export default Search;
