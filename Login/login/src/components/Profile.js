import React from 'react'
import { useSelector } from 'react-redux'
function Profile() {
    const user=useSelector((state)=>state.user.value)
    const color=useSelector((state)=>state.color.value)
  return (
    <div style={{color:color.color}}>
        <p>
            Profile Page
        </p>
        <p>Name:{user.name}</p>
        <p>age:{user.age}</p>
        <p>email:{user.email}</p>
    </div>
  )
}

export default Profile