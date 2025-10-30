'use client'
import React, { startTransition, useEffect, useState } from 'react'
import ToppingCard from './topping-card'
import { Topping } from '@/lib/types';

// const toppings = [
//   {
//     id: '1', name: 'Chicken', image: '/chicke.jpg', price: 100, isAvailable: true
//   },
//   {
//     id: '2', name: 'Jelapeno', image: '/jalt.jpg', price: 75, isAvailable: true
//   },
//   {
//     id: '3', name: 'Cheese', image: '/cheese.jpg', price: 50, isAvailable: true
//   }
// ]

const ToppingList = () => {


  const [toppings, setToppings] = useState<Topping[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const toppingResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/catalog/toppings?5`);

      const toppingsFetched = await toppingResponse.json();
      const toppings = toppingsFetched.docs
      setToppings(toppings);
      console.log(toppings)
    };
    fetchData();
  }, [])

  const [selectedToppings, setSelectedToppings] = React.useState<Topping[]>([])

  const handleCheckBoxCheck = (topping: Topping) => {
    const isAlreadyExists = selectedToppings.some((element: Topping) => element._id === topping._id);

    startTransition(() => {
      if (isAlreadyExists) {
        setSelectedToppings((prev) => prev.filter((elem: Topping) => elem._id !== topping._id))
      }
      else {
        setSelectedToppings((prev) => [...prev, topping]);
      }
    })

  }

  return <section className='mt-6'>
    <h3>Extra toppings</h3>
    <div className='grid grid-cols-3 mt-2 gap-4'>
      {
        toppings.map((topping) => {
          return (<ToppingCard
            topping={topping}
            key={topping._id}
            selectedToppings={selectedToppings}
            handleCheckBoxCheck={handleCheckBoxCheck}
          />
          );
        })
      }
    </div>
  </section>
}

export default ToppingList