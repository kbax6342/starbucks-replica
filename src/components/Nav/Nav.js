import React , {useState} from 'react'
import starbucksLogo from '../../assets/logo.png'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'

import './Nav.css'

export default function Nav() {
  const [isActive, setActive] = useState(false)
  return (
    <>
     <div className='hidden md:flex justify-between shadow px-5'>
      <div className='flex  self-center h-[80px] '>
        <img src={starbucksLogo} />
        <ul className='flex self-center justify-between w-[250px] font-bold uppercase'>
          <li>
            Menu
          </li>
          <li>
            Rewards
          </li>
          <li>
            Gift Cards
          </li>
        </ul>
      </div>
      <div className='flex self-center  justify-between w-[300px] font-bold'>
        <div className='flex self-center'>
        
          <FaMapMarkerAlt className="mt-1 mr-2"/>
        
       
        Find a store
        </div>
        <button className='border rounded-full py-1 px-3 border-black'>Sign In</button>
        <button className='bg-black text-white py-1 px-3 rounded-full'>Join Now</button>
      </div>
    </div>
    <div  className='md:hidden'>
      <div className='flex justify-between align-center self-center'>
      <img src={starbucksLogo} />
      <GiHamburgerMenu  className='mt-6 mr-6 text-2xl' onClick={() => setActive(!isActive)}/>
      </div>
     
    
      {
        isActive ?
      
      <section  className='flex flex-col text-right  z-10 absolute bg-white back'>

      <ul className='flex flex-col font-bold uppercase pr-5 justify-end'>
          <li>
            Menu
          </li>
          <li>
            Rewards
          </li>
          <li>
            Gift Cards
          </li>
        </ul>
        <button className='border rounded-full py-1 px-3 border-black w-[100px] ml-auto mt-3'>Sign In</button>
        <button className='bg-black text-white py-1 px-3 rounded-full  w-[100px]  ml-auto my-3'>Join Now</button>
      </section>
    

      : <div></div> }
      </div>
    </>
   
  )
}
