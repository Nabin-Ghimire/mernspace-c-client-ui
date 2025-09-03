import React from 'react'
import ToppingCard from './topping-card'

const toppings = [
  {
    id: '1', name: 'Chicken', image: '/chicke.jpg', price: 100, isAvailable: true
  },
  {
    id: '2', name: 'Jelapeno', image: '/jalt.jpg', price: 75, isAvailable: true
  },
  {
    id: '3', name: 'Cheese', image: '/cheese.jpg', price: 50, isAvailable: true
  }
]

const ToppingList = () => {
  return <section className='mt-6'>
    <h3>Extra toppings</h3>
    <div className='grid grid-cols-3 mt-2 gap-4'>
      {
        toppings.map((topping, id) => {
          return <ToppingCard topping={topping} key={id} />
        })
      }
    </div>
  </section>
}

export default ToppingList