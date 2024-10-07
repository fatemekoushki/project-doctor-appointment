"use client"
import DoctorsList from '../../../_components/DoctorsList'
import axiosClient from '../../../_components/GelobalApi'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

function Search({ params }) {
  // const [doctorsList, setDoctorsList] = useState([])

  const {data} = useQuery("doctorsList" , ()=> 
    axiosClient.get("/doctors").then((res) => res.data.filter((item) => item.title === params.cname)) 
  )
 

  return (
    <div className='mt-4 h-full ' >
      <DoctorsList doctorsList={data}  heading={params.cname} />
    </div>
  )
}

export default Search;
