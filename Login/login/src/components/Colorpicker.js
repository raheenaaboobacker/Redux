import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changecolor } from '../reducer/color'
function Colorpicker() {
    const dispatch=useDispatch()
    const [colr,setColr]=useState()
    
    
  return (
    <div><input type="color" value={colr} onChange={(e)=>{setColr(e.target.value);console.log(colr);}}></input>
    <button onClick={()=>{dispatch(changecolor({color:colr}))}}>select
        </button></div>
  )
}

export default Colorpicker