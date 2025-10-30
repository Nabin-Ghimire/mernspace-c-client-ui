'use client'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import { increment } from '@/lib/store/features/cart/cartSlice'

const CartCounter = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.cart.value)

  const handleIncrement = () => {
    dispatch(increment());
  }
  return (
    <>
      <div className='relative '>
        <Link href={'/cart'} className='hover:text-primary'> <ShoppingCart /> </Link>
        <span className='absolute -top-4 -right-5 h-6 w-6 flex items-center justify-center rounded-full bg-orange-600 font-bold text-white'>{value}</span>
      </div>
      <Button onClick={handleIncrement}>Increment</Button>
    </>
  )
}

export default CartCounter
