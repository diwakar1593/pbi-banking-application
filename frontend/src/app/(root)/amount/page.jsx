import HeaderName from '@/src/components/HeaderName'
import React from 'react'
import { CiSquarePlus } from 'react-icons/ci'
import AddAmountModel from '@/src/components/Amount/AddAmountModel'


const Amountpage = () => {
  return (
    <>
        <div className="container py-10">
            <HeaderName/>
            <div className='card w-1/3 border py-5 rounded flex items-center justify-between px-3'>
                <div className='flex flex-col'>
                    <h1 className='text-2xl font-bold '>Add Amount</h1>
                    <p>Total Amount : 150/- </p>
                </div>
                <AddAmountModel/>
            </div>
        </div>
    </>
  )
}

export default Amountpage