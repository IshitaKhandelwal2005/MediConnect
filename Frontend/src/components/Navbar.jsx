import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'
const Navbar=()=> {
    const navigate=useNavigate();
    const [token,setToken]=useState(true)
    const [showMenu,setShowMenu]=useState(false)
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={()=>{navigate('/')}} className='w-44 cursor-pointer' src={assets.logo} alt="logo" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-[#002000] w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 bg-[#002000] w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-[#002000] w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-[#002000] w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center'>
            {
                token?
                <div className='flex items-center gap-2 cursor-pointer group relative'>
                   <img className='w-6 sm:w-10 rounded-full' src={assets.profile_pic} alt="profile" /> 
                   <img src={assets.dropdown_icon} alt="dropdown" />
                   <div className='absolute top-0 right-0 pt-16 text-base font-medium z-20 hidden group-hover:block'>
                    <div className='text-gray-600 min-w-48 rounded bg-stone-100 flex flex-col gap-4 p-4'>
                        <p className='hover:text-black' onClick={()=>navigate('/my-profile')}>My Profile</p>
                        <p className='hover:text-black' onClick={()=>navigate('/my-appointments')}>My Appointments</p>
                        <p className='hover:text-black' onClick={()=>setToken(false)}>Logout</p>
                    </div>
                   </div>
                </div>
                :<button onClick={()=>navigate('/login')} className='bg-[#002000] text-white rounded-full px-5 py-3'>Create Account</button>
            }
            <img onClick={()=>setShowMenu(true)} className='w-10 md:hidden px-2 sm:mx-2' src={assets.menu_icon} alt="" />
            
            <div className={`${showMenu ? 'fixed w-full':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <div className='flex items-center justify-between px-5 py-6'>
                    <img className='w-36' src={assets.logo} alt="" />
                    <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <NavLink onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'> Home</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>All Doctors</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar