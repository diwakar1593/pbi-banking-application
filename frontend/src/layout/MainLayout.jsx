import React from 'react'
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MainContextProvider } from '../context/MainContext'

const MainLayout = ({children}) => {
  return (
    <>
      <MainContextProvider>
        <ToastContainer />
        <Navbar />
        {children}
      </MainContextProvider>
    </>
  )
}

export default MainLayout
