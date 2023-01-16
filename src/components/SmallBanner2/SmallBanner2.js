import React from 'react'
import heroImage from '../../assets/star4.jpg'
export default function Hero1() {
    return (
        <div className='bg-[#96b2e1]  flex flex-col md:flex-row flex md:container mx-auto my-10 starbucks '>
              <div className='md:w-[50%]'>
                <img src={heroImage} />
            </div>
            <div className='w-[50%] flex flex-col self-center  py-4'>
                <h1 className='font-bold text-[#1e3932] text-2xl mb-3'>Gratitude by the cup</h1>
                <p className='text-[#1e3932] weight w-[75%] mx-auto mb-8'>Share your appreciation for the people in your life with a gift card.</p>
                <button className='border rounded-full py-1 px-3 border-[#1e3932] w-[200px] mx-auto text-[#1e3932] font-bold'>
                Send an eGift
                </button>
            </div>
           
        </div>
    )
}
