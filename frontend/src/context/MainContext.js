"use client";
import { toast } from "react-toastify";
import { axiosClient } from "../utils/AxiosClient";
import Loader from "../components/Loader";

// const { createContext, useContext, useState, useEffect } = require( "react" );
import { createContext, useContext, useState, useEffect } from 'react'

const mainContext = createContext({user:{}, fetchUserProfile(){}})

export const useMainContext = () => useContext(mainContext)

export const MainContextProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // to fetch user profile
    const fetchUserProfile = async() => {
        try {
            const token = localStorage.getItem("token") || ''
            if(!token) return
            const response = await axiosClient.get('/auth/profile',{
                headers:{
                    'Authorization':'Bearer ' + localStorage.getItem("token")
                }
            })
            const data = await response.data
            console.log(data)
            setUser(data)

        } catch (error) {
            toast.error(error.response.data.msg || error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUserProfile()
    },[])

    if(loading){
        return <div className="min-h-screen flex itmes-center justify-center w-full"><Loader/></div>
    }    

    return <mainContext.Provider value={{user, fetchUserProfile}}>
        {children}
    </mainContext.Provider>
}