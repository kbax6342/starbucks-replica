import React from 'react'
import heroImage from '../../assets/star2.jpg'
export default function Hero1() {
    return (
        <div className='bg-[#d4e9e2] flex flex-col md:flex-row md:container mx-auto mt-10 starbucks'>
             <div className='md:w-[50%]'>
                <img src={heroImage} />
            </div>
            <div className='w-[50%] flex flex-col self-center py-4'>
                <h1 className='xl:text-6xl font-bold text-[#1e3932]  text-3xl mb-3 xl:px-2'>Pistachio your way</h1>
                <p className='text-[#1e3932] weight w-[75%] mx-auto mb-8'>Our creamy Pistachio Frappuccino® blended beverage satisfies all your winter cravings.</p>
                <button className='border rounded-full py-1 px-3 border-[#1e3932] w-[120px] mx-auto text-[#1e3932] font-bold'>
                    Order Now
                </button>
            </div>
           
        </div>
    )
}
