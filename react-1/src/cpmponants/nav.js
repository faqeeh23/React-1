import { Link } from 'react-router-dom'
import React, { use, useEffect } from 'react'
import "../style/nav.css"

export default function Nav() {
    const [theme, setTheme] = React.useState('light')
    useEffect(() => {
        document.body.className = theme 
        }
    , [theme])
    return (
        <div className="nav">
            <h1>Store</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>
                    <button
                        className='btn_theme' 
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        {theme === 'light' ? 'Dark' : 'Light'}
                    </button>
                </li>
            </ul>
        </div>
    )
} 