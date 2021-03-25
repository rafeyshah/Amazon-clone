import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
function Header() {
    return (
        <nav className="header">
            <Link to='/login'>
                {/* Logo on left */}
                <img 
                    className="header__logo"
                    src= "http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt="Amazon"
                />
            </Link>

            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className= "header__searchInput" />
            </div>
            
            {/* 3 links */}
            {/* Basket Icon with number */}
            
        </nav>
    )
}

export default Header
