import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <nav id='navbar'>
            <div id="left-links">
                <div><Link to='/'>Home</Link></div>
                <div><Link to='/anime'>Animes</Link></div>
                <div><Link to='/favorito'>Favorito</Link></div>
                <div><Link to='/notes'>Notes</Link></div>
            </div>

            <div id="right-links">
                <div><Link to='/login'>Login</Link></div>
            </div>
        </nav>
    )
}

export default NavBar