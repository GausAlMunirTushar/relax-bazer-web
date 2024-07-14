import React from 'react'
import Image from 'next/image'
import { FaPlus } from "react-icons/fa6";

const Product = () => {
  return (
    <div className='w-60 border-2 border-gray-300 rounded-lg p-3'>
        <div className='flex justify-center'>
            <Image src="/images/product/cumin-powder.png" alt="Product Image" height={211} width={85}/>
        </div>
        <div>
            <p className='text-2xl font-semibold'>Cumin Powder</p>
            <p className='text-xl font-semibold'>(জিরা গুড়া)</p>
        </div>
        <p className='bg-primary inline-block px-8 text-white rounded-xl my-2'>1 Kg</p>
        <div className="flex justify-between items-center">
            <div className="flex text-xl text-primary ">
              <p>৳</p>
              <p>70.00</p>
            </div>
            <div className='bg-primary text-white rounded-xl p-2'><FaPlus/></div>
        </div>
    </div>
  )
}

export default Product