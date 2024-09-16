import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DoctorsList({doctorsList , heading ="Popular Doctors"}) {
    
   
  return (
    <div className='mb-10 px-10' >
      <h2 className='font-bold text-xl' >{heading}</h2>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-4 ' >
        {
            doctorsList?.length > 0 ? doctorsList.map((doctor , index)=> (
                <div key={index} className='border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-sm transition-all ease-in-out ' >
                <Image  className='h-[200px] w-full object-cover rounded-lg' src={doctor?.img}  alt='img' width={500} height={200}  />
                <div className='mt-3 flex flex-col items-baseline ' >
                    <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary ' >{doctor.title}</h2>
                    <h2 className='font-bold' >{doctor.name}</h2>
                    <h2 className='text-primary text-sm' >{doctor.experience}</h2>
                    <h2 className="text-gray-500 text-sm">{doctor.address}</h2>
                    <Link href={`/details/${doctor.id}`} className='w-full' >
                    <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full 
                    text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white transition-all ease-in-out
                    ' >Book Now</h2>
                    </Link>
                </div>
                </div>
            ))
            : 
            // skelton Effect
            [1,2,3,4,5,6].map((item , index)=> (
              <div  key={index} className='bg-slate-200 h-[220px] w-full animate-pulse' ></div>
            ))
        }
      </div>
    </div>
  )
}

export default DoctorsList
