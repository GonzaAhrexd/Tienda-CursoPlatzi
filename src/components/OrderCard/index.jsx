//  @ts-check
import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useContext } from 'react'
import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'

function OrderCard(props) {
    
    const context = useContext(ShoppingCartContext)
    const { id, title, imageURL, price } = props
    let { quantity } = props

    const incrementQuantity = (event, id) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
      
      context.cartProducts.find(product => product.id === id).quantity++
    }

    const decrementQuantity = (event, id, quantity) => {
        if(quantity <= 1){
            deleteItem(id)
        }

        event.stopPropagation()
        context.setCount(context.count - 1)
        context.cartProducts.find(product => product.id === id).quantity--
    }

    const deleteItem = (id) => {
        const newCart = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(newCart)
    }

    return (

        <div className="flex justify-between mb-2">
            <div className='flex items-center gap-2'>
                <figure className='w-16 h-16'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageURL} alt={title} />
                </figure>

                <div className='flex flex-col justify-center gap-2' >
                            <p className='font-light text-2xl'>${price * quantity} </p>
                            <p className='text-sm font-light'> {title} </p>

                </div>
                        
                        <div className='flex flex-row text-center justify-center items-center'>
                            <PlusIcon className='h-5 cursor-pointer' onClick={(event) => { (incrementQuantity(event, id))}} ></PlusIcon>
                            <span className='bg-teal-200 w-6 rounded-md m-2'> {quantity} </span>
                            <MinusIcon className='h-5 cursor-pointer' onClick={(event) => { (decrementQuantity(event, id, quantity))}} ></MinusIcon>
                        </div>

            </div>

            <TrashIcon className='h-6 w-6 text-black cursor-pointer'
                onClick={() => { deleteItem(id) }} >

            </TrashIcon>
        </div>
    )
}

export default OrderCard
