import React from 'react'
import User from './User'
import data from "./users.json"

const Users = () => {
    console.log(data)
    let names = data.map(item => item.username)
    console.log(names)
  return (
    <div>
    <ol key={data.id}>
        {names.map((name,index)=>
            <li>{name}</li>
        )}
    </ol>
    <User data={data}/>
    </div>
  )
}

export default Users
