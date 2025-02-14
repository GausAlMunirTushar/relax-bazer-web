import React from 'react'
import Product from './Product'
const ProductList = ({ productTitle }) => {
  return (
    <div className='container md:mx-auto sm:py-3 md:border-2 border-primary rounded-md my-5'>
        <div className="flex justify-between p-2 font-bold">
          <h2 className='text-xl text-primary'>{productTitle}</h2>
          <p>View All</p>
        </div>
        <div className ="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
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