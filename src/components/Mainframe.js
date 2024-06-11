
import './Mainframe.css'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
export default function Mainframe() {

    const[codes,setcodes]=useState("");
    const[outputs,setoutputs]=useState("Terminal");
    let history = useNavigate();
    const SendCode = async () => {
    let codeBlock = {
        'code': codes,
        'output': 'Terminal',
    };
        await axios({
            method: 'post',
            url: 'http://localhost:8000/api/',
            data: codeBlock,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response.data);
            history.push('/');
        }).catch((error) => {
            console.error("Error:", error);
        });
        const response=await axios.get('http://localhost:8000/api/')
        console.log(response.data)
        setoutputs(response.data)
    };


    const assembly =() => {
        console.log('assembly')
    }

    // const getoutput = async () =>{
    //     const response=await axios.get('http://localhost:8000/api/')
    //     setoutputs(response.data)
    //   }
    //   useEffect(()=>{
    //     getoutput();
    //   })


  return (
    <>
        <div className="d-flex">
        <div className='info ml-2 bg-dark'>
        <button type="button" className="btn btn-success run mx-3" onClick={assembly}>Assembly</button>
        </div>
        <div className='p-2'>
                <div className="mx-2 py-2">
                <button type="button" className="btn btn-success run" onClick={SendCode}>Run</button>
                </div>
                <div className="d-flex">
                <textarea className="bg-dark mx-2 text-white rounded output px-3 py-3" name="code" onChange={(e)=>setcodes(e.target.value)} placeholder='' value={codes} required></textarea>
                <textarea className="bg-dark mx-2 text-white rounded output px-3 py-3" name="output" value={outputs[Object.keys(outputs).length-1].output} readOnly></textarea>
                </div>
        </div>
      </div>
    </>
  )
}
