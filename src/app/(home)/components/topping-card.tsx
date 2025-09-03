'use client';
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export type Topping = {
  id: string;
  name: string;
  price: number;
  image: string;
  isAvailable: boolean
}
type PropType = {
  topping: Topping;
  selectedToppings: Topping[];
  handleCheckBoxCheck: (topping: Topping) => void

}

const ToppingCard = ({ topping, selectedToppings, handleCheckBoxCheck }: PropType) => {
  const isCurrentSelected = selectedToppings.some((element) => element.id === topping.id)
  return <Button
    onClick={() => handleCheckBoxCheck(topping)}
    variant={'outline'}
    className={isCurrentSelected ? 'flex flex-col h-42 border-primary' : 'flex flex-col h-42'}
  >
    <Image src={topping.image} width={80} height={80} alt={topping.name} />
    <h4>{topping.name}</h4>
    <p>रु. {topping.price}</p>
  </Button>
}

export default ToppingCard