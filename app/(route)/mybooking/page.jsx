"use client"
import React, { use, useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingList from './_components/BookingList'
import axiosClient from '@/app/_components/GelobalApi';
import { useQuery } from 'react-query';

const user = localStorage.getItem("user") ;
const User = JSON.parse(user)

function MyBooking() {
  // const [bookingList , setBookingList] = useState([]);
  //   console.log(bookingList)
  //   useEffect( ()=> {
  //     User && getUserBooking()
  //   } , [user])
  //   const getUserBooking = async ()=> {
  //    await axiosClient.get(`/bookAppointment?${User?.email}`).then((res)=> setBookingList(res.data) )
  //   };
  const {data} = useQuery("bookAppointment" , ()=> 
    axiosClient.get(`/bookAppointment?${User?.email}`).then((res)=> res.data )
  )

    // Used To filter User Booking 
    const filterUserBooking = (type)=> {
      const result = data?.filter(item =>  
        type == "upcoming" ? new Date(item.data.date) >= new Date() : new Date(item.data.date) <= new Date()
      )
      console.log(result)
      return result

    }
  

  return (
    <div  className='px-4 sm:px-10  mt-10'>
      <h2 className='font-bold text-2xl' >My Booking</h2>
    <Tabs defaultValue="upcoming" className="w-full mt-5">
        <TabsList className="w-full justify-start" >
         <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
         <TabsTrigger value="expired">Expired</TabsTrigger>
         </TabsList>
         <TabsContent value="upcoming">
                <BookingList   bookingList={filterUserBooking("upcoming")} expired={false} />
         </TabsContent>
         <TabsContent value="expired">
                <BookingList  bookingList={filterUserBooking("expired")} expired={true} />
         </TabsContent>
    </Tabs>

    </div>
  )
}

export default MyBooking

