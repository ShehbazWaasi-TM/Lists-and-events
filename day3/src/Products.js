import React from 'react'
import Product from "./Product"
import productsdata from './products.json'

const Products = () => {
  return (
    <div className='products'>
      <Product products={productsdata}/>
    </div>
  )
}

export default Products
