import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import ProductCard from "./components/product-card";
import { Category, Product } from "@/lib/types";

const products = [
  {
    id: '1',
    name: 'Hot Pizza',
    description: 'This is Hot',
    image: '/pizza.png',
    price: 500

  },
  {
    id: '2',
    name: 'Margarit Pizza',
    description: 'This is very delicious',
    image: '/pizza.png',
    price: 700

  },
  {
    id: '3',
    name: 'Chicken Pizza',
    description: 'This is Chicken',
    image: '/pizza.png',
    price: 300

  },
  {
    id: '4',
    name: 'Mushroom Pizza',
    description: 'This is mushroom',
    image: '/pizza.png',
    price: 200

  },
  {
    id: '5',
    name: 'Seasoned Pizza',
    description: 'This is Seasoned',
    image: '/pizza.png',
    price: 750

  },
  {
    id: '6',
    name: 'Mutton Pizza',
    description: 'This is Mutton',
    image: '/pizza.png',
    price: 800

  }
]


export default async function Home() {

  //todo:do concurrent request -> use "Promise.all()"

  const categoryResponse = await fetch(`${process.env.BACKEND_URL}/api/catalog/categories`, {
    next: {
      revalidate: 3600, //1 hour
    }
  })

  if (!categoryResponse.ok) throw new Error('Failed to fetch categories')

  const categories: Category[] = await categoryResponse.json();
  //todo: add pagination
  const productResponse = await fetch(
    //add dynamic tenantId
    `${process.env.BACKEND_URL}/api/catalog/products?perPage=100&tenantId=5`, {
    next: {
      revalidate: 3600, //1 hour
    }
  })
  if (!productResponse.ok) throw new Error('Failed to fetch products')

  console.log('productResponse', productResponse)
  const products: { data: Product[] } = await productResponse.json();
  console.log('Product', products)
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

      <section>
        <div className="container py-12">
          <Tabs defaultValue={categories[2]._id}>
            <TabsList>

              {
                categories.map((category) => { return (<TabsTrigger key={category._id} value={category._id} className="text-md">{category.name}</TabsTrigger>) }
                )
              }

              {/* <TabsTrigger value="beverages" className="text-md">Beverages</TabsTrigger> */}
            </TabsList>

            {
              categories.map((category) => {
                return (
                  <TabsContent key={category._id} value={category._id}>
                    <div className="grid grid-cols-4 gap-6 mt-6">
                      {
                        products.data.data.filter((product) => product.category._id === category._id).map((product) => (<ProductCard product={product} key={product._id} />))
                      }
                    </div>
                  </TabsContent>
                )
              })
            }
            {/*            
            <TabsContent value="beverages"> <div className="grid grid-cols-4 gap-6 mt-6">
              {
                products.map((product) => (<ProductCard product={product} key={product.id} />))
              }
            </div></TabsContent> */}
          </Tabs>
        </div>
      </section>
    </>
  );
}
