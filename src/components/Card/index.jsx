//@ts-check
import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
function Card( data) {
 const context = useContext(ShoppingCartContext)
 
 //Destructuring object
 const { id, title, price, images } = data.data
 let imageToUse = images[0].replace(/[\[\]"']/g, '')

 const manageProductDetail = (data) => {
     context.setProductDetail(data)
     context.openProductDetail()
    //  console.log(context.ProductDetail)
 }   
    // Evaluating if the product is already in the cart
    const repeatedProduct = (productToAdd) => {
        const repeated = context.cartProducts.find(product => product.id === productToAdd.id)
        return repeated
    }
    //Add a product to cart
     const addToCart = (event, id, title, price, images ) => {
          event.stopPropagation()
          context.setCount(context.count + 1)
          class Product{
                constructor(id, title, price, image, quantity){
                    this.id = id;
                    this.title = title;
                    this.price = price;
                    this.image = image;
                    this.quantity = 1;
                }
          }
          const productToAdd = new Product(id, title, price, images, 1)
          console.log(productToAdd)

          if(!repeatedProduct(productToAdd)) {
               
              context.setCartProducts([...context.cartProducts, productToAdd])
          }else{
            context.cartProducts.find(product => product.id === productToAdd.id).quantity++
          }
          
          //Agregar un nuevo producto al carrito actual
          context.openCart()
          }
        

  return (
 

       <div className='bg-white border-teal-800  cursor-pointer w-56 h-60 rounded-lg'
       >
        
          
        {/* {console.log(data.data?.images[0].replace(/[\[\]]/g, ''))} */}
       <figure className='relative mb-2 w-full h-4/5'  onClick={() => manageProductDetail(data)}>
       <span className='absolute bottom-0 left-0 bg-white/60  rounded-lg text-black text-xs m-2 px-3 py-0.5 '>{data.data?.category.name}</span>
       <img className="w-full h-full object-cover rounded-lg"
       src={imageToUse} 

       alt={data.data.title} />
       <PlusCircleIcon className="absolute top-0 right-0 flex justify-center font-bold items-center mr-1 mt-1 bg-white w-6 h-6 rounded-full p1"
       onClick={(event) => addToCart(event, id, title, price, imageToUse)}> </PlusCircleIcon>
       
       </figure>
       
       <p className='flex justify-between '>
       <span className='text-sm font-light'>{title}</span>
       <span  className='text-lg font-medium'>${price}</span>
       </p> 
       
       


       
    
       </div>
  )
}

export default Card