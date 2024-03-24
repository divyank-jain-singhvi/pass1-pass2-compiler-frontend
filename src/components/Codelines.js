import React, { useState } from 'react'
import './Mainframe.css'

export default function Inputcode() {
    const[lines,setlines]=useState("");

  return (
    <>
        <input type="text" name='lines' value={lines} placeholder='enter number of lines' onChange={(e)=>setlines(e.target.value)}/>
    </>
  )
}
