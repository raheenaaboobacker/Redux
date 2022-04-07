import React from 'react'
import { useDispatch } from 'react-redux'
import { login,logout } from '../reducer/user'
function Login() {
    const dispatch=useDispatch()
  return (
    <div><button onClick={()=>{dispatch(login({name:"sneha",age:"24",email:"sneha@gmail.com"}))}}>click
        </button>
        <button onClick={()=>{dispatch(logout())}}>logout
            </button></div>
  )
}

export default Login