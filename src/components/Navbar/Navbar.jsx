import React from 'react'
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="n-left">
                <div className="n-name">Aashutosh</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experices</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <button className='button'>Contact us</button>
            </div>
        </div>
    )
}
