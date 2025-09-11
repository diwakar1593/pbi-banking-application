"use client";
import Loader from '@/src/components/Loader';
import { useMainContext } from '@/src/context/MainContext';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const RootTemplate = ({children}) => {

    const {user} = useMainContext()
    const [loading,setLoading] = useState(true)

    const router = useRouter()

    useEffect(() => {
        if(!user){
        router.push("/login")
        } else {
            setLoading(false)
        }
    },[user])
    
    if(loading){
        return <div className='min-h-screen flex items-center justify-center'>
            <Loader/>
        </div>
    }
  return (
    <>
        {children}
    </>
  )
}

export default RootTemplate