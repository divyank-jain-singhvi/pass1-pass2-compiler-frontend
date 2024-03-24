import React, { useState } from 'react'
import './Mainframe.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function Inputcode() {
    
    const[codes,setcodes]=useState("");
    const[line,setline]=useState("");
    const[outputs,setoutputs]=useState("");
    let history = useNavigate();
    const SendCode = async () => {
        let codeBlock = {
            'code': codes,
            'lines': line,
            'output': outputs,
        };
    setoutputs("hello");
    console.log(codeBlock)
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
    };
    
  return (
    <>
    <div className='d-flex flex-column'>
        <div className='d-flex terminal-block'>
        <label className='mx-2' htmlFor="">Editer</label>
        <input type="text" name='line' value={line} placeholder='' onChange={(e)=>setline(e.target.value)}/>
        <button type="button" className="btn btn-success run" onClick={SendCode}>Run</button>
        </div>
        
        <textarea type="text" className='code-block my-3 mx-3 text-white m-0 p-0' name='codes' value={codes} placeholder='' onChange={(e)=>setcodes(e.target.value)}/>
        </div>
    </>
  )
}
