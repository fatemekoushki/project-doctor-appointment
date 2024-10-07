"use client"
import React from 'react';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../../../../components/ui/command"
import Image from 'next/image';
import img1 from "../../../../public/assets/doctors.png";
import img2 from "../../../../public/assets/teeth.png";
import img3 from "../../../../public/assets/brain.png";
import img4 from "../../../../public/assets/eye.png";
import img5 from "../../../../public/assets/heartDoctor.png"
import img6 from "../../../../public/assets/orthopedic.png"
import img7 from "../../../../public/assets/ear.svg" ;
import img8 from "../../../../public/assets/psychotropic.png";
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
const images = [
    { id : 1 , url : img1 , name : "generalDoctor"} ,
    { id : 2 ,url : img2 , name : "Dentist"},
    { id : 3 ,url : img3 , name : "neurologist" },
    { id : 4 ,url : img4  ,name : "eyeDoctor"},
    { id : 5 , url : img5 , name : "cardiologist" },
    { id : 6 ,url : img6 , name : "orthopedic"},
    { id : 7 , url : img7 , name : "otology"},
    { id : 8 , url : img8 , name : "psychotropic"}
  
  ]
function CategoryList() {
  const params = usePathname() ;
  const category = params.split("/")[2]
  return (
    <div  className='h-screen  mt-5  flex flex-col' >
     <Command  >
  <CommandInput placeholder="Type a command or search..." />
  <CommandList className="overflow-visible" >
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">

      {
        images&&images.map((item , index)=> (
      <CommandItem  key={index} >
        <Link href={`/search/${item.name}`} className={`
         p-2 flex gap-2 text-[14px] text-blue-600 items-center rounded-md cursor-pointer w-full
         ${category == item.name && 'bg-blue-100'}
         `}
       
           >
        <Image  src={item?.url}  width={35} height={35} alt='icon' className='bg-primary object-cover '  />
        <label>{item.name}</label>
        </Link>
      </CommandItem>
          
        ))
      }
  
    </CommandGroup>
    <CommandSeparator />
   
  </CommandList>
</Command>
    </div>
  )
}

export default CategoryList
