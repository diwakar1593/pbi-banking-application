"use client";
import Loader from '@/src/components/Loader';
import { useMainContext } from '@/src/context/MainContext';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

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
           <section className='flex item-start'>
                <Sidebar breakPoint='lg'>
                        <Menu>
                            <SubMenu label="Charts">
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                            </SubMenu>
                            <MenuItem> Documentation </MenuItem>
                            <MenuItem> Calendar </MenuItem>
                        </Menu>
                    </Sidebar>
                    <main className='px-1 md:px-4'>    
                        {children}
                    </main>
           </section>
        </>
    )
}

export default RootTemplate