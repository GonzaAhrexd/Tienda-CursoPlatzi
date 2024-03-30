import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
function OrderCard(props) {
    const { id, title, imageURL, price, quantity } = props

    const [isHovered, setIsHovered] = useState(false)
    return (

        <div className="flex justify-between mb-2">
            <div className='flex items-center gap-2'>
                <figure className='w-16 h-16'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageURL} alt={title} />
                </figure>

                <div className='flex flex-col justify-center gap-2' onMouseMove={() => { setIsHovered(true) }} onMouseOut={() => { setIsHovered(false) }}>

                    {isHovered ? (
                        <>
                            <p className='text-base font-light'>{quantity}x ${price} </p>
                            <p className='text-base font-light text-red-400'>Total: ${price * quantity} </p>
                        </>
                    ) : (
                        <>
                            <p className='font-light text-2xl'>${price * quantity} </p>
                            <p className='text-sm font-light'> {title} </p>
                        </>
                    )}


                </div>
                        
                        <div className='flex flex-row'>
                            <button>+</button>
                            <input className='h-5 w-6 border-2 border-solid border-zinc-700	' type="number" name="" id="" value={quantity} />
                            <button>-</button>
                        </div>

            </div>

            <XMarkIcon className='h-6 w-6 text-black cursor-pointer'
                onClick={() => { console.log("clicked") }} >

            </XMarkIcon>
        </div>
    )
}

export default OrderCard
