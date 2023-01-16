import React from 'react'
import heroImage from '../../assets/star3.png'
export default function Hero1() {
    return (
        <div className='bg-[#3d7170] flex flex-col-reverse md:flex-row md:container mx-auto mt-10 starbucks   '>
            <div className='w-[50%] flex flex-col self-center py-4'>
                <h1 className='font-bold text-white text-2xl mb-3'>Taste of the globe</h1>
                <p className='text-white weight w-[75%] mx-auto mb-8'>Exceptional coffees unite in Starbucks Tribute Blend® showcasing four of our favorite origins.</p>
                <button className='border rounded-full py-1 px-3 border-white w-[120px] mx-auto text-white font-bold'>
                   Order now
                </button>
            </div>
            <div className='md:w-[50%]'>
                <img src={heroImage} />
            </div>
        </div>
    )
}
