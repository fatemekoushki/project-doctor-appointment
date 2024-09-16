"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Cookies from 'universal-cookie'
import { useQuery } from 'react-query'




function Header() {
    const cookie =  new Cookies()
    
    const token = cookie.get("loginToken")

  const menu = [
    {
      name: "Home",
      id: 1,
      path: "/"
    },
    {
      name: "Explore",
      id: 2,
      path: "/explore"
    },
    {
      name: "Concat Us",
      id: 3,
      path: "/concat"
    }
  ]
  
  return (
    <div className='flex items-center justify-between p-4 shadow-sm' >
      <div className='flex items-center gap-10' >
        <Image src="/logo.svg" width={180} height={80} alt='img' />
        <ul className='md:flex gap-8 hidden ' >
          {menu.map((item , index) => (
            <Link key={index} href={item.path} >
              <li  key={item.id} className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out' >{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
          {
            token? 
            (
              <Popover >
              <PopoverTrigger> <h5 className='bg-primary p-1.5 px-5 rounded-lg text-slate-50' >my</h5>   </PopoverTrigger>
                <PopoverContent className="w-44" >
                  <ul className='flex flex-col  gap-2' >
                    <Link href={"/mybooking"} > <li  className='cursor-pointer hover:bg-slate-100 p-2 rounded-md '  >My booking</li> </Link>
                    <Link href={''} > <li  className='cursor-pointer hover:bg-slate-100 p-2 rounded-md '  >Logout</li> </Link>
      
                  </ul>
                </PopoverContent>
      
              </Popover>
            )
            :
            (
             
                    <Link href={"/auth/register"} > <li  className='cursor-pointer hover:bg-slate-100 p-2 rounded-md '  >Sing Up</li> </Link>
      
                 
            )
          }
       
       
      
      
    </div>
  )
}

export default Header
