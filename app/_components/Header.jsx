"use client"
// import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import Cookies from 'js-cookie'
import { useQuery } from 'react-query'
import { HiMenuAlt2 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";



function Header() {
  const [menuNav, setMenuNav] = useState(false);
    
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const userInf= Cookies.get("tokenLogin");
    if (userInf) {
      const user   = JSON.parse(userInf);
      setUserInfo(user);
    }
  }, []);
    const logout = ()=> {
      Cookies.remove("loginToken")
      window.location.href= "/"
    }
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
    <div className=' flex  items-center justify-between  p-4 shadow-sm' >
      <div className='flex items-center  gap-10' >
        <Image src="/logo.svg" width={180} height={80} alt='img' />
        <ul className={  `transition-all duration-300 absolute md:static  flex md:flex-row gap-8 flex-col z-20 w-full text-center bg-white ${menuNav? "top-[100px]" : "top-[-450px]"} `}  >
          {menu.map((item , index) => (
            <Link key={index} href={item.path} >
              <li  key={item.id} className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out md:last:pb-0 last:pb-3' >{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='flex flex-row justify-center items-center gap-2' >
          {
            userInfo? 
            (
              <Popover >
              <PopoverTrigger> <h5 className='bg-primary p-1.5 px-5 rounded-lg text-slate-50' >my panel</h5>   </PopoverTrigger>
                <PopoverContent className="w-44" >
                  <ul className='flex flex-col  gap-2' >
                    <Link href={"/mybooking"} > <li  className='cursor-pointer hover:bg-slate-100 p-2 rounded-md '  >My booking</li> </Link>
                    <Link href={''} onClick={logout} > <li  className='cursor-pointer hover:bg-slate-100 p-2 rounded-md '  >Logout</li> </Link>
      
                  </ul>
                </PopoverContent>
      
              </Popover>
            )
            :
            (
             
                    <Link href={"/register"} > <p   className='bg-primary p-1.5 px-5 rounded-lg text-slate-50'  >Sing Up</p> </Link>
      
                 
            )
          }
       <div  className='md:hidden'  >
        {
          menuNav ? (
            <CgClose  size={32} onClick={()=>setMenuNav(!menuNav) } />
          ) : (
            <HiMenuAlt2 size={32} onClick={()=>setMenuNav(!menuNav) } />
          )
        }
       </div>
       </div>
      
    </div>
  )
}

export default Header
