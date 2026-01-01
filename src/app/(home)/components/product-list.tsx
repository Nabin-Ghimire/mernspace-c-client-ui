import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Category, Product } from '@/lib/types'
import React from 'react'
import ProductCard from './product-card'

const ProductList = async () => {

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

  const products: { data: Product[] } = await productResponse.json();
  console.log("categories", categories[0].hasTopping);
  console.log("products", products);

  return (

    <section>
      <div className="container py-12">
        <Tabs defaultValue={categories[1]._id}>
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

  )
}

export default ProductList
