import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProductList from "./components/product-list";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// const products = [
//   {
//     id: '1',
//     name: 'Hot Pizza',
//     description: 'This is Hot',
//     image: '/pizza.png',
//     price: 500

//   },
//   {
//     id: '2',
//     name: 'Margarit Pizza',
//     description: 'This is very delicious',
//     image: '/pizza.png',
//     price: 700

//   },
//   {
//     id: '3',
//     name: 'Chicken Pizza',
//     description: 'This is Chicken',
//     image: '/pizza.png',
//     price: 300

//   },
//   {
//     id: '4',
//     name: 'Mushroom Pizza',
//     description: 'This is mushroom',
//     image: '/pizza.png',
//     price: 200

//   },
//   {
//     id: '5',
//     name: 'Seasoned Pizza',
//     description: 'This is Seasoned',
//     image: '/pizza.png',
//     price: 750

//   },
//   {
//     id: '6',
//     name: 'Mutton Pizza',
//     description: 'This is Mutton',
//     image: '/pizza.png',
//     price: 800

//   }
// ]


export default async function Home() {

  //todo:do concurrent request -> use "Promise.all()"



  return (
    <>
      <section className="bg-white">
        <div className="container flex items-center justify-between">
          <div>
            <h1 className="text-7xl font-black py-24 font-sans leading-2">
              Super Delicious Pizza in <br /> <br /><br /><br /> <br /><br /><br /><br /> <br />
              <span className="text-primary">Only 45 Minutes</span>
            </h1>
            <p className="text-2xl mt-8 max-w-lg leading-snug">
              Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
            </p>
            <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">Get your pizza now</Button>
          </div>
          <div>
            <Image alt='pizza-main' src={'/pizza.png'} width={400} height={400} />
          </div>
        </div>
      </section>
      <Suspense fallback={
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>

      }>
        <ProductList />
      </Suspense>

    </>
  );
}
