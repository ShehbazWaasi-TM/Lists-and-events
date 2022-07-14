import React, { useState } from 'react'
import Product from "./Product"
// import productsdata from './products.json'

const Products = () => {
    const [inputtitle , setinputtitle] = useState("");
    const [inputcategory, setcategory] = useState("");
    const inputtitlehandler = (e) => {
        console.log(e.target.value)
        let lowercase = e.target.value.toLowerCase();
        setinputtitle(lowercase)
    }
    const inputcategoryhandler = (e) => {
        console.log(e.target.value)
        let lowercase = e.target.value.toLowerCase();
        setcategory(lowercase)
    }
  return (
    <div className='products'>
          <div className="search">
            <input type="search" name="" id=""  placeholder='search by title' onChange={inputtitlehandler}/>
            <input type="search" name="" id=""  placeholder='search by category' onChange={inputcategoryhandler}/>
          </div>
      <Product title={inputtitle} category={inputcategory}/>
    </div>
  )
}

export default Products
