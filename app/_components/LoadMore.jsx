import React from 'react'

function LoadMore({setLimit , limit}) {
  return (
    <div className={` ${limit == 8 ? "hidden" : ""} text-center mx-auto w-20 p-2 text-md rounded-lg m-9 bg-blue-400 text-white `}  onClick={()=> setLimit(prev => prev +4)} >
    <button   >more...</button>
     </div>
  )
}

export default LoadMore
