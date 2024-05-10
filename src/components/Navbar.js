import React from 'react'
import { Link } from 'react-router-dom'
import panda from '../assets/pandas.png'
import './mainframe.css'
export default function Navbar() {
  return (
    <>
           <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active text-white panda-text" aria-current="page" to="/">Code Panda<img className='panda-image' src={panda} alt="" /></Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    </>
  )
}