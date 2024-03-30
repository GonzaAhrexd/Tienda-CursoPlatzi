//@ts-check
import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

function TotalCart() {
    const context = useContext(ShoppingCartContext)
    return (
   
    <div className='flex flex-col items-center absolute bottom-0 w-full p-6 bg-white'>
    <span className='text-1xl'>Total</span>
    <span className='text-5xl'>${context.total}</span>
 </div>
  )
}

export default TotalCart