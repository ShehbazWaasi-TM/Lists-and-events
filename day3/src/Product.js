import React, { useEffect, useState } from 'react';
import productsdata from './products.json';
const Product = ({title='',category=''}) => {
    // const [filterProducts, setFilterPRoducts] = useState([...productsdata]))
    // const [toggle,setToggle] = useState(false)
    // const [sortdata,setSortdata] = useState()
 
    // // console.log("sortdata" , sortdata)
    // const [filteredRes, setFilteredRes] = useEffect()
    const filteredData = productsdata.filter((el)=> {
        if(title!==""){
            return (el.title.toLowerCase().includes(title))
        }
        if(category!==""){
            return (el.category.toLowerCase().includes(category))
        }
        return el;
    })
    // setFilteredRes(filteredData)
    const [tableData, setTableData] = useState(filteredData)
    console.log("filtereddata", filteredData)
    useEffect(()=>{
        setTableData(filteredData)
    },[])
    //sortedtitle
    const sortedtitle =() =>{
        // setToggle(true)
        const sortproduct = [...filteredData].sort((a,b)=>(a.title<b.title?-1:1))
        console.log("sortedproduct " , sortproduct)
        // setsortdata(sortproduct);
        setTableData(sortproduct);
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
                {tableData.map((product)=>(
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
