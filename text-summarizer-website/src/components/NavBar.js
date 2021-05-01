import './NavBar.css'
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(){

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>
                        Summarizer<i class="fab fa-connectdevelop"></i>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default NavBar;