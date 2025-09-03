'use client';
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

type Topping = {
  id: string,
  name: string,
  price: number,
  image: string,
  isAvailable: boolean
}
type ToppingCardProps = {
  topping: Topping
}

const ToppingCard = ({ topping }: ToppingCardProps) => {
  const [selected, setSelected] = React.useState('1')
  const isCurrentSelected = selected == topping.id
  return <Button
    onClick={() => setSelected(topping.id)}
    variant={'outline'}
    className={isCurrentSelected ? 'flex flex-col h-42 border-primary' : 'flex flex-col h-42'}
  >
    <Image src={topping.image} width={80} height={80} alt={topping.name} />
    <h4>{topping.name}</h4>
    <p>रु. {topping.price}</p>
  </Button>
}

export default ToppingCard