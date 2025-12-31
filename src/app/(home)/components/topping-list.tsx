'use client'
import React, { useEffect, useState } from 'react'
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

const ToppingList = ({ selectedToppings, handleCheckBoxCheck }: { selectedToppings: Topping[], handleCheckBoxCheck: (topping: Topping) => void }) => {


  const [toppings, setToppings] = useState<Topping[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const toppingResponse = await fetch(`${process.env.BACKEND_URL}/api/catalog/toppings`);

      const toppingsFetched = await toppingResponse.json();
      const toppings = toppingsFetched.docs
      setToppings(toppings);
    };
    fetchData();
  }, [])



  return <section className='mt-3'>
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