"use client";
import Loader from '@/src/components/Loader';
import { useMainContext } from '@/src/context/MainContext';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { setIsToggle, SidebarSlicePath } from '@/src/redux/slice/sidebarSlice';
import Link from 'next/link';

const RootTemplate = ({children}) => {

    const {user} = useMainContext()
    const [loading,setLoading] = useState(true)

    const router = useRouter()
    const isToggle = useSelector(SidebarSlicePath);
    const dispatch = useDispatch();

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

    const CustomMenu = ({link, text}) => {
        const pathname = usePathname();
        return <>
            <MenuItem component={<Link href={link} />}> {text} </MenuItem>
        </>
    }

    return (
        <>
           <section className='flex item-start'>
                <Sidebar breakPoint='lg' toggled={isToggle} onBackdropClick={() => dispatch(setIsToggle())}>
                        <Menu className='!bg-white !min-h-screen lg:!min-h-[90vh] px-3 py-10'>
                            <CustomMenu link={'/'} text={'Home'}/>
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