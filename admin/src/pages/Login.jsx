import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Navigate, redirect, useNavigate } from 'react-router-dom'
import DashBoard from './Admin/DashBoard'


function Login() {
    const [state,setstate]=useState('Admin')
    const {setAToken,backendUrl}=useContext(AdminContext)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

    const onSubmitHandler =async (event) =>{
        event.preventDefault()
        try{
            if(state === 'Admin'){
                const {data}=await axios.post(backendUrl + '/api/admin/login',{email,password})
                console.log(data);
                if(data.success)
                {
                    localStorage.setItem('aToken',data.token)
                    setAToken(data.token)
                    console.log(atoken)
                    navigate("/admin-dashboard")
                }
                else{
                    toast.error(data.message)
                }
            
            }
            else
            {
                
            }

        }
        catch(error){

        }
    }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-sm shadow-lg'>
            <p className='text-2xl font-semibold m-auto'><span className='text-[#1D2129]'>{state}</span> Login</p>
            <div className='w-full'>
                <p>Email</p>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
            </div>
            <div className='w-full'>
                <p>Password</p>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
            </div>
            <button className='bg-[#1D2129] text-white w-full py-2 rounded-md text-base'>Login</button>
            {
                state ==='Admin'
                ?<p>Doctor Login? <span className='text-[#1D2129] cursor-pointer underline' onClick={()=>setstate('Doctor')}>Click here</span></p>
                :<p>Admin Login? <span className='text-[#1D2129] cursor-pointer underline' onClick={()=>setstate('Admin')}>Click here</span></p>
            }
        </div>
    </form>
  )
}

export default Login