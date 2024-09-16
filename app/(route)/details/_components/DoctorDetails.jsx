import { Button } from '@/components/ui/button'
import { GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import BookAppointment from './BookAppointment'

function DoctorDetails({doctor}) {
    const socialMedia = [
        {
            id : 1 ,
            icon : '/linkedin.svg' ,
            url : "",
            width : 30,
            height : 30
        } ,
        {
            id : 2 ,
            icon : '/youtube.svg' ,
            url : "",
            width : 30,
            height : 30
        } ,
        {
            id : 3 ,
            icon : '/x.svg' ,
            url : "",
            width : 25,
            height : 25
        } ,
        {
            id : 4 ,
            icon : '/facebook.svg' ,
            url : "",
            width : 30,
            height : 30
        } ,
    ]
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-3  border-[1px] p-5 mt-5 rounded-lg ' >
          {/* Doctor Image  */}
          <div  className=''>
                <Image  src={doctor.img} width={200} height={200} alt='doctor-img' className='rounded-lg h-[280px] w-full object-cover ' />
          </div>
          {/* Doctor Info  */}
          <div className='col-span-2 mt-5 md:px-10 flex flex-col gap-3 items-baseline ' >
                <h2  className='font-bold text-2xl ' >{doctor?.name}</h2>
                <h2 className='flex gap-2 text-gray-500 text-md' >
                    <GraduationCap/>
                    <span>{doctor?.experience} of Experience </span>
                </h2>
                <h2 className='text-md flex gap-2 text-gray-500' >
                    <MapPin />
                    <span>{doctor.address}</span>
                </h2>
                <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary ' >{doctor.title}</h2>
          

                <div className='flex gap-2 cursor-pointer ' >
                    {
                        socialMedia.map((item , index)=>
                        (
                            <Image   src={item.icon}  alt='img-social' key={index} width={item.width} height={item.height}  />
                        ))
                    }
                </div>
                
                <BookAppointment  doctor={doctor} />
          </div>
          {/* About Doctor  */}
        
      </div>
      <div className='p-3 border-[1px] rounded-lg mt-5' >
            <h2 className='font-bold text-[20px]' >About Me</h2>
            <p className='text-gray-500 tracking-wide mt-2' >{doctor.about}</p>
          </div>
      </>
  )
}

export default DoctorDetails
