import React from 'react'
import Product from './Product'
const ProductList = ({ productTitle }) => {
  return (
    <div className='container mx-auto py-3 border-2 border-primary rounded-md my-10'>
        <div className="flex justify-between p-2">
          <h2 className='text-xl text-primary'>{productTitle}</h2>
          <p>View All</p>
        </div>
        <div className ="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
    </div>
  )
}

export default ProductList