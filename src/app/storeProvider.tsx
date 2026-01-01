'use client'

import { useRef, useEffect } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store/store'
import { setInitialCartItems } from '@/lib/store/features/cart/cartSlice'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  useEffect(() => {
    try {
      const cartItems = localStorage.getItem('cartItems')
      if (!cartItems) return

      const parsedItems = JSON.parse(cartItems)

      // Ensure serializable value
      if (Array.isArray(parsedItems)) {
        storeRef.current?.dispatch(setInitialCartItems(parsedItems))
      }
    } catch (err) {
      console.error('Failed to parse cart items from localStorage', err)
    }
  }, [])

  return <Provider store={storeRef.current}>{children}</Provider>
}
