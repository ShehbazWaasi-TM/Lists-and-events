import React, { useEffect, useState } from 'react';
import productsdata from './products.json';

const Product = (props) => {
    // const [filterProducts, setFilterPRoducts] = useState([...productsdata]);
    

    

    const filteredData = productsdata.filter((el)=> {
        console.log(el)
        if (props.title === "" && props.category===""){
            // return setFilterPRoducts(el);
            return el
        }
        if(props.title!==""){
            return (el.title.toLowerCase().includes(props.title))
            // return setFilterPRoducts(el.title.toLowerCase().includes(props.title))
        }
        if(props.category!==""){
            return (el.category.toLowerCase().includes(props.category))
            // return setFilterPRoducts(el.category.toLowerCase().includes(props.category))
        }
        return filteredData
    })
    console.log(filteredData)
    //sortedtitle
    const sortedtitle =() =>{
        const sortproduct = [...filteredData].sort((a,b)=>(a.title<b.title?-1:1))
        console.log("sortedproduct " , sortproduct)

    }
    const submitevent = ()=>{
        filteredData.map((x)=>(console.log(x.title)))
    }      
  return (
    <>
        <table border={1} className="table-content">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>title
                    <button onClick={sortedtitle}>Sort title</button>
                    </th>
                    <th>category</th>
                    <th>price</th>
                    <th>rating</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((product)=>(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>{product.rating.rate},{product.rating.count}</td>
                    </tr>
                ))}

            </tbody>
        </table>
        <button className='btn' onClick={submitevent}>Submit</button>
    </>
  )
}

export default Product
