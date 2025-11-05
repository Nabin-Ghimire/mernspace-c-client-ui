'use client'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useAppSelector } from '@/lib/store/hooks'

const CartCounter = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems)


  return (
    <>
      <div className='relative '>
        <Link href={'/cart'} className='hover:text-primary'> <ShoppingCart /> </Link>
        <span className='absolute -top-4 -right-5 h-6 w-6 flex items-center justify-center rounded-full bg-orange-600 font-bold text-white'>{cartItems.length}</span>
      </div>
    </>
  )
}

export default CartCounter
