import React, { useEffect, useState } from 'react';
import './Mainframe.css'
import axios from 'axios';

export default function Mainframe() {
// for fetch data from api
  const [output,setoutput]=useState([])
  const getoutput = async () =>{
    const response=await axios.get('http://localhost:8000/api/')
    console.log(response.data)
  }

  useEffect(()=>{
    getoutput();
  })


  return (
    <>
    <div className='d-flex lables'>
      <div className='editor'>
        <label className='mx-2' htmlFor="">Editer</label>
        <input placeholder='enter number of lines' type="number"/>
     </div>
     <div className='d-flex lables'>
        <label htmlFor="">Terminal</label>
        <button type="button" className="btn btn-success run">Run</button>
    </div>
    </div>
    <div className='d-flex justify-content-between m-auto blocks'>
      <div className='d-flex'>
       
      <textarea className='code-block my-3 mx-3 text-white'></textarea>
      
        <textarea className='code-output my-3 text-white' readOnly></textarea>
      </div>

        <div className='info ml-2 bg-dark'></div>
    </div>
        
    </>
  )
}
