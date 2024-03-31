import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
           <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    </>
  )
}