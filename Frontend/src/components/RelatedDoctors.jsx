import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors =({docId,speciality})=> {
    const {doctors}=useContext(AppContext)
    const [relDoc,setRelDoc]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        if(doctors.length && speciality)
        {
            const doctorsData=doctors.filter((doc)=>doc.speciality===speciality && doc._id !==docId)
            setRelDoc(doctorsData)
        }
    },[doctors,speciality,docId])
  return (
    <div className='flex flex-col gap-4 items-center text-gray-800 my-16 md:mx-10'>
        <h1 className='text-3xl font-medium'>Similar speciality Doctors</h1>
        <p className='font-light sm:w-1/3 text-center text-sm'>Simply browse through the extensive list of trusted doctors.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {relDoc.slice(0,5).map((item,index)=>(
                <div onClick={()=>{navigate(`/appointments/${item._id}`);scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-[#1D2129]' src={item.image} alt="" />
                    <div className='p-4 bg-gray-50 text-gray-700'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-lg font-medium'>{item.name}</p>
                        <p className='text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button className='bg-[#1D2129] rounded-full text-white px-12 py-3 mt-10 hover:scale-110 transition-all'>More</button>
    </div>
  )
}

export default RelatedDoctors