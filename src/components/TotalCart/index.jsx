//@ts-check
import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

function TotalCart() {
    const context = useContext(ShoppingCartContext)

    const checkout = () => {
      const orderToAdd =  {
        date: new Date().toLocaleDateString(),
        products: context.setOrder(context.cartProducts),
        total:  context.total
      }

      context.setOrder([...context.order, orderToAdd])
      context.setCount(0)
      context.setCartProducts([])
    }

    return (
   
    <div className='flex flex-col items-center absolute bottom-0 w-full p-6 bg-white'>
    <span className='text-1xl'>Total</span>
    <span className='text-5xl'>${context.total}</span>

    <button className='bg-black text-white w-full p-4 rounded mt-4' onClick={() => checkout() }>Checkout</button>
 </div>
  )
}

export default TotalCart