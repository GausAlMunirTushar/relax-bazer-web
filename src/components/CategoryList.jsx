import React from 'react'
import ProductCategory from './ProductCategory'

const CategoryList = ({ categoryTitle }) => {
  return (
    <div className='container mx-auto py-3 border-2 border-primary rounded-md my-5'>
        <div className="flex justify-between p-2 font-bold">
          <h2 className='text-xl text-primary'>{categoryTitle}</h2>
          <p>View All</p>
        </div>
        <div className ="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
          <ProductCategory/>
        </div>
    </div>
  )
}

export default CategoryList