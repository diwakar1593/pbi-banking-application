"use client";
import React from 'react'
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import 'react-toastify/dist/ReactToastify.css'
import { MainContextProvider } from '../context/MainContext'

const MainLayout = ({children}) => {
  return (
    <Provider store={store}>
      <MainContextProvider>
        <ToastContainer />
        <Navbar />
        {children}
      </MainContextProvider>
    </Provider>
  )
}

export default MainLayout
