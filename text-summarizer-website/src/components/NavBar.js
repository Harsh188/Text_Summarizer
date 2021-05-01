import './NavBar.css'

import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function NavBar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <=960){
            setButton(false)
        }else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);
    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Summarizer<i class="fab fa-connectdevelop"></i>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default NavBar;