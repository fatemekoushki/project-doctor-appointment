"use client"
import axiosClient from '../../../_components/GelobalApi';
import React, { useEffect, useState } from 'react'
import DoctorDetails from '../_components/DoctorDetails';
import Suggestions from '../_components/DoctorSuggestions';
import { useQuery, useQueryClient } from 'react-query';

function Details ({params}) {
 
  const queryClient = useQueryClient()
  const {data} = useQuery("doctor" , ()=> 
    axiosClient.get(`/doctors/${params.id}`).then((res)=> res.data
 ), {
  initialData : ()=> {
    const doctors = queryClient.getQueryData(['doctorsList'])
    const doctor = doctors?.find((doctor) => doctor.id === +params.id )
    return doctor

  }
 }
  )
  return (
    <div className='p-5 md:px-20' >
      <h2 className='font-bold text-[22px] ' > Details</h2>
      <div className='grid grid-cols-1 lg:grid-cols-4' >
        {/* Doctor Details  */}
      <div className=' col-span-3 ' >
         
      {  data &&  <DoctorDetails  doctor={data} />}
      </div>
      {/* Doctor Suggestions  */}
      <div className='' >
            <Suggestions />
      </div>
      </div>
    </div>
  )
}

export default Details  ;
