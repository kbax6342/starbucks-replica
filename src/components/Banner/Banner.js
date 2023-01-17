import React from 'react'
import './Banner.css'

export default function Banner() {
  return (
    <div className='md:container mx-auto bg-[#d4e9e2]  flex flex-col self-center starbucks z-0'>
      <h1 className='mt-8 font-bold text-[#1e3932] text-2xl'>
        Start fresh with Starbucks Rewards
      </h1>
      <h1 className='mt-5 weight text-[#1e3932] '>
        Join today to earn your way to free coffee and treats*
      </h1>
    </div>
  )
}
