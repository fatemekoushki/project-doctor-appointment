"use client"
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorsList from "./_components/DoctorsList";
import axiosClient from "./_components/GelobalApi";
import { useQuery } from "react-query";
import { useState } from "react";
import LoadeMore from "./_components/LoadMore"
import axios from "axios";
export default function Home() {
   const [limit , setLimit] = useState(4)
   const { data, isFetching } = useQuery(['items', limit], async () => {  
    try {  
        const res = await axiosClient.get(`/doctors?_limit=${limit}&_page=1`);  
        return res.data;  
    } catch (error) {  
        console.error("Error fetching data:", error);  
        return null
    }  
}, { keepPreviousData: true });  
  
  

  return (
   
   <div>
    
    <Hero />
    <CategorySearch />
    <DoctorsList  doctorsList={data} isFetching={isFetching}     />
    <LoadeMore setLimit={setLimit}  limit={limit}  />
   
      
   </div>
  
  );
}
