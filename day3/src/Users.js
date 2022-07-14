import React from 'react'
import data from "./users.json"

const Users = () => {
    console.log(data)
    let names = data.map(item => item.username)
    console.log(names)
  return (
    <>
    <ol>
        {names.map((name,index)=>
            <li>{name}</li>
        )}
    </ol>
    </>
  )
}

export default Users
