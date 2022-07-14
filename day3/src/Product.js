import React from 'react';
import productsdata from './products.json';

const Product = (props) => {
    // console.log(props.products)
    const filteredData = productsdata.filter((el)=> {
        console.log(el)
        if (props.title === "" && props.category===""){
            return el;
        }
        if(props.title!==""){
            return (el.title.toLowerCase().includes(props.title))
        }
        if(props.category!==""){
            return el.category.toLowerCase().includes(props.category)
        }
        return filteredData
    })
  return (
    <>
        <table border={1} className="table-content">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>title</th>
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
    </>
  )
}

export default Product
