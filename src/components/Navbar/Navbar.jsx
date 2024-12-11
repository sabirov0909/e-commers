import React, {useState} from 'react';
import './navbar.css';
import logo from '../../images/Logo.png';
import icon from '../../icons/User.png';
import icons from '../../icons/Cart.png';
import icons_i from '../../icons/Favorites.png';
import phone from '../../icons/Phones.png';
import computers from '../../icons/Computers.png';
import smart from '../../icons/smart.png';
import camera from '../../icons/Cameras.png';
import gaming from '../../icons/Gaming.png';
import Headphones from '../../icons/Headphones.png';
import {Link} from 'react-router-dom';

const Navbar = ({cartCount, user}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="navbar">
            <div className="navbar-top">
                <div className="logo">
                    <Link to='/'>
                        <img src={logo} alt="Logo"/>
                    </Link>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search"/>
                    <i className="fas fa-search search-icon"></i>
                </div>
                <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact Us</a>
                    <a href="#blog">Blog</a>
                </nav>

                <div className="navbar-icons">
                    <Link to="/cart">
                        <div className="cart-icon-container">
                            <img src={icons} alt="Cart" className="cart-icon"/>
                            {cartCount > 0 && (
                                <div className="cart-count">{cartCount}</div>
                            )}
                        </div>
                    </Link>

                    {user ? (
                        <p className="user-greeting">Welcome, {user.username}</p>
                    ) : (
                        <Link to="/login">
                            <img src={icon} alt="User"/>
                        </Link>
                    )}
                </div>

                <div className="burger-menu" onClick={toggleMenu}>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
            </div>

            <div className={`navbar-bottom ${isMenuOpen ? 'open' : ''}`}>
                <Link to={`/category-product/${2}/Phones`}>
                    <a href="#phones">
                        <img src={phone} alt="Phones"/> Phones |
                    </a>
                </Link>
                <Link to={`/category-product/${10}/Computers`}>
                    <a href="#computers">
                        <img src={computers} alt="Computers"/> Computers |
                    </a>
                </Link>
                <Link to={`/category-product/${4}/Smart Watches`}>
                    <a href="#smartwatches">
                        <img src={smart} alt="Smart Watches"/> Smart Watches |
                    </a>
                </Link>
                <Link to={`/category-product/${6}/Cameras`}>
                    <a href="#cameras">
                        <img src={camera} alt="Cameras"/> Cameras |
                    </a>
                </Link>
                <Link to={`/category-product/${8}/Headphones`}>
                    <a href="#headphones">
                        <img src={Headphones} alt="Headphones"/> Headphones |
                    </a>
                </Link>
                <Link to={`/category-product/${12}/Gaming`}>
                    <a href="#gaming">
                        <img src={gaming} alt="Gaming"/> Gaming |
                    </a>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
