import React from 'react'
import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
function ProductDetail() {
  const context = useContext(ShoppingCartContext)
  return (
   
      <aside className= {`${context.isProductDetailOpen ? 'flex' : 'hidden'} product_detail flex flex-col fixed right-0 border border-black rounded bg-white`}>
      <div className='flex justify-between items-center p-6'>
      <h2 className='font-medium text-xl'>Details</h2>
      <XMarkIcon className='h-6 w-6 cursor-pointer' onClick={() => context.closeProductDetail()}/>
      </div>

      <div className='flex flex-col align-middle items-center'>
        <div className='text-5xl m-2'>{context.ProductDetail.data?.title}</div>
        <figure className='relative mb-2 w-full h-4/5 px-6 mt-5'>
          <img 
           className="w-full h-full object-cover rounded-lg"
           src={context.ProductDetail.data?.images[0].replace(/[\[\]"']/g, '')} 
           alt={context.ProductDetail.data?.title}/>
        </figure>
        <div className='flex flex-col p-2 items-center '>
         <span className='text-1xl'>{context.ProductDetail.data?.description} </span>
         <span className='text-4xl'>${context.ProductDetail.data?.price}</span>
        
        </div>
       
        </div>
      
       


    </aside>
  
  )
}

export default ProductDetail