import React, { useEffect, useState } from 'react';
import './Mainframe.css'
import axios from 'axios';
import Inputcode from './Inputcode';

export default function Mainframe() {
// for fetch data from api
  const [outputs,setoutputs]=useState([]);
  const [result,setresult]=useState("");

  const getoutput = async () =>{
    const response=await axios.get('http://localhost:8000/api/')
    console.log(response.data)
    setoutputs(response.data)
    // console.log(output)

  }

  useEffect(()=>{
    getoutput();
  })



  return (
    <>
    <div className='d-flex lables'>
      <div className='editor'>
     </div>
     <div className='d-flex lables'>
        
    </div>
    </div>
    <div className='d-flex justify-content-between m-auto blocks'>
      <div className='d-flex'>
       
      {/* <textarea className='code-block my-3 mx-3 text-white'></textarea> */}
      <Inputcode/>
      <div className='font'>
      <label htmlFor="">Terminal</label>
      <textarea className='code-output my-3 text-white' value={outputs[Object.keys(outputs).length-1].output} readOnly></textarea>
      </div>
        {/* outputs[ Object.keys(outputs).length-1].output */}
      </div>
        <div className='info ml-2 bg-dark'></div>
    </div>
        
    </>
  )
}
