"use client";
import React from 'react'
import Logo from './reuseable/Logo'
import Link from 'next/link'
import { useMainContext } from '../context/MainContext'

const Navbar = () => {

    const {user, LogoutHandler} = useMainContext()
    
  return (
    <>
        <header className="w-full border-b rounded-b-md">
            <nav className=" w-[98%] lg:w-[80%] mx-auto py-3 flex items-center justify-between">
                <Logo/>

                <ul className="flex items-center justify-center gap-x-2">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/about'}>About</Link>
                    </li>
                    {user ? <>
                        <li>
                            <button onClick={LogoutHandler} className='bg-blue-600 text-white px-4 py-1 cursor-pointer font-medium rounded'>Logout</button>
                        </li>
                    </>: <li>
                        <Link href={'/login'}>Login</Link>
                    </li>}
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Navbar
