import React from 'react'
import {NavLink} from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
function NavBar() {
  const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'  
  return (
    <nav className='flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light bg-teal-300	'>
        <ul className='flex items-center gap-3'>
            <li className='font-semibold text-lg'>
            <NavLink to='/' > 
            Shoppy</NavLink>
            </li>
            <li>
            <NavLink to='/' className={({isActive}) => isActive ? activeStyle : undefined}>All</NavLink>
            </li>
            <li>
            <NavLink to='/clothes' className={({isActive}) => isActive ? activeStyle : undefined}>Clothes</NavLink>
            </li>
            <li>
            <NavLink to='/electronics' className={({isActive}) => isActive ? activeStyle : undefined}>Electronics</NavLink>
            </li>
            <li>
            <NavLink to='/furnitures' className={({isActive}) => isActive ? activeStyle : undefined}>Furniture</NavLink>
            </li>
            <li>
            <NavLink to='/toys' className={({isActive}) => isActive ? activeStyle : undefined}>Toys</NavLink>
            </li>
            <li>
            <NavLink to='/others' className={({isActive}) => isActive ? activeStyle : undefined}>Others</NavLink>
            </li>
        </ul>
        <ul className='flex items-center gap-3'>
            <li className='text-black/60'>
            gonzalo@platzi.com
            </li>
            <li>
            <NavLink to='/my-account' className={({isActive}) => isActive ? activeStyle : undefined}>My Account</NavLink>
            <NavLink to='/my-orders' className={({isActive}) => isActive ? activeStyle : undefined}>My orders</NavLink>
            </li>
            <li>
            <NavLink to='/sign-in' className={({isActive}) => isActive ? activeStyle : undefined}>Sign In</NavLink>
            </li>
            <li className='flex flex-row flex space-x-4 items-end'>
                 <ShoppingCartIcon className='h-6 w-6 text-black-500'/> {context.count}
            </li>

</ul>
    </nav>
  )
  }

export default NavBar