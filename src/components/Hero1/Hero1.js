import React from 'react'
import heroImage from '../../assets/star1.png'
export default function Hero1() {
    return (
        <div className='bg-[#3d7170] flex flex-col-reverse md:flex-row md:container mx-auto mt-10 starbucks'>
            <div className='h-[300px] md:w-[50%] flex flex-col self-center py-2 wrap mt-4 md:mt-0' >
                <h1 className=' xl:text-6xl font-bold text-white text-3xl mb-3 xl:px-2'>New year, cool new brew</h1>
                <p className=' lg:text-2xl text-lg  text-white weight w-[75%] mx-auto mb-8'>Introducing Pistachio Cream Cold Brew—bold, smooth coffee topped with pistachio cream cold foam.</p>
                <button className='border rounded-full py-1 px-3 border-white w-[120px] mx-auto text-white font-bold '>
                    Try it now
                </button>
            </div>
            <div className='md:w-[50%] '>
                <img src={heroImage} className=""/>
            </div>
        </div>
    )
}
