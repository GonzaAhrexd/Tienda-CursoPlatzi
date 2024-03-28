import React from 'react'

function Card() {
  return (
    <div className='bg-white border-teal-800  cursor-pointer w-56 h-60 rounded-lg'>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60  rounded-lg text-black text-xs m-2 px-3 py-0.5 '>Electronics</span>
            <img className="w-full h-full object-cover rounded-lg"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmqKBtNIqMXPO4alyKcYrNZXBI36fN-Wq3ncWFX3H1ksj7PdiuX0dQg105riRJibq_nKs"    alt="Headphone" />
            <div className="absolute top-0 right-0 flex justify-center font-bold items-center mr-1 mt-1 bg-white w-6 h-6 rounded-full p1">+</div>
       
        </figure>

        <p className='flex justify-between '>
            <span className='text-sm font-light'>Headphones</span>
            <span  className='text-lg font-medium'>Price</span>
        </p>

    </div>
  )
}

export default Card