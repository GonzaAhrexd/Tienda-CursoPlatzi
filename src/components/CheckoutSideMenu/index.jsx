import React from 'react'
import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext)
  return (
   
      <aside className= {`${context.isCartOpen ? 'flex' : 'hidden'} product_detail flex flex-col fixed right-0 border border-black rounded bg-white`}>
      <div className='flex justify-between items-center p-6'>
      <h2 className='font-medium text-xl'>My Order</h2>
      <XMarkIcon className='h-6 w-6 cursor-pointer' onClick={() => context.closeCart()}/>
      </div>
     
   

    </aside>
  
  )
}

export default CheckoutSideMenu