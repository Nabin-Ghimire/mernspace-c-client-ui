'use client'

import dynamic from 'next/dynamic';

const CartCounterWithoutSSR = dynamic(() => import('./cart-count'), { ssr: false });
export default CartCounterWithoutSSR;