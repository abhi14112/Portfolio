import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className='first'>
            <span className='firstname'>Abhishek </span>
            <span className='lastname'>Kumar</span>
        </div>
        <div className='second'>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Skills</a></li>
                <li><a>Projects</a></li>
            </ul>
        </div>
    </div>
  )
}
export default Navbar