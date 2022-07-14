import React from 'react'


const Product = (props) => {
    console.log(props.products)
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
                {props.products.map((product)=>(
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
