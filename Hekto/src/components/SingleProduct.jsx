import React from 'react'
import  Chair  from "/images/chair.svg";


export default function SingleProduct() {
  return (
    
    <div className='border bg-[#F6F7FB]'>

      <img src={Chair} className='w-full mx-auto'/>
      <div className='border bg-white text-2xl flex items-center flex-col'>
        <p className='font-semibold text-secondary text-3xl my-3'>Chair</p>
        <p>$100</p>
      </div>
    </div>
  
  )
}
