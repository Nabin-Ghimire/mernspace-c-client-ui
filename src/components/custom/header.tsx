import { Phone, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { TenantData } from '@/lib/types'


const Header = async () => {
  let restaurants: TenantData[] = [];
  try {

    const tenantsResponse = await fetch(`${process.env.BACKEND_URL}/api/auth/tenants/dropdown`, {
      next: {
        revalidate: 3600, //1 hour
      }
    });
    if (!tenantsResponse.ok) throw new Error(`Failed: ${tenantsResponse.status}`);
    const response = await tenantsResponse.json();
    restaurants = response.tenants
  } catch (err) {
    console.error(err);
  }
  return (
    <header className='bg-white'>
      <nav className='container flex items-center justify-between py-5 '>
        <div className='flex items-center gap-4'>
          <svg
            width="93" height="23" viewBox="0 0 93 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.322 9.63C40.322 10.434 40.136 11.166 39.764 11.826C39.392 12.474 38.84 12.99 38.108 13.374C37.388 13.758 36.512 13.95 35.48 13.95H33.896V18H29.9V5.256H35.48C37.04 5.256 38.234 5.652 39.062 6.444C39.902 7.236 40.322 8.298 40.322 9.63ZM35.03 10.8C35.858 10.8 36.272 10.41 36.272 9.63C36.272 8.85 35.858 8.46 35.03 8.46H33.896V10.8H35.03ZM45.5855 5.256V18H41.5895V5.256H45.5855ZM51.8182 14.814H56.9302V18H47.3902V14.994L52.4302 8.424H47.3902V5.256H56.9302V8.262L51.8182 14.814ZM63.1561 14.814H68.2681V18H58.7281V14.994L63.7681 8.424H58.7281V5.256H68.2681V8.262L63.1561 14.814ZM78.238 16.074H73.99L73.36 18H69.166L73.828 5.256H78.436L83.08 18H78.868L78.238 16.074ZM77.266 13.068L76.114 9.522L74.962 13.068H77.266Z" fill="#484848" />
            <circle cx="11" cy="11" r="7.5" stroke="#F65F42" strokeWidth="7" />
          </svg>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {
                restaurants.map((restaurant) => {
                  return (
                    <SelectItem key={restaurant.id} value={restaurant.id.toString()}>
                      {restaurant.name}
                    </SelectItem>
                  )
                })
              }

              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

        </div>


        <div className='flex items-center gap-x-4'>
          <ul className='flex items-center font-medium space-x-4'>
            <li className='hover:text-primary'><Link href={'/'}>Menu</Link></li>
            <li className='hover:text-primary'><Link href={'/'}>Menu</Link></li>
          </ul>
          <div className='relative '>
            <Link href={'/cart'} className='hover:text-primary'> <ShoppingCart /> </Link>
            <span className='absolute -top-4 -right-5 h-6 w-6 flex items-center justify-center rounded-full bg-orange-600 font-bold text-white'>3</span>
          </div>
          <div className='flex items-center ml-10'>
            <Phone />
            <span>97798145343569</span>
          </div>
          <Button size={'sm'}>Logout</Button>
        </div>
      </nav>
    </header>
  )
}

export default Header