import React from 'react'

const User = (props) => {
    console.log(props.data)
    // const contacts = data.map((contact)=>{
    //     <td></td>
    // })
  return (
    <>
    <table className='content-table' border={1}>
        <thead>
        <tr>
            <th>Serial no</th>
            <th>Name (firstname and lastname)</th>
            <th>Email</th>
            <th>Address</th>
        </tr>
        </thead>
        <tbody>
            {props.data.map((contact)=>(
                <tr key={contact.id}>
                    <td>{contact.id}</td>
                    <td>{contact.username}</td>
                    <td>{contact.email}</td>
                    <td>{contact.address.number},{contact.address.street}</td>
                </tr>             
            )    
            )}
        </tbody>
    </table>
    </>
  )
}

export default User
