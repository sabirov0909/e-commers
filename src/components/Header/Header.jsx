import React from "react";
import "./header.css";
import {Link} from "react-router-dom";
import banner_phone from "../../images/Iphone Image.png";
import AirPods from '../../images/naushnik.png'
import PlayStation from '../../images/PlayStations.png'
import vision from '../../images/vision.png'
import mac from '../../images/MacBook.png'

const Header = () => {
    return (
        <>
            <div className="banner">
                <div className="banner-content">
                    <div className="banner-text">
                        <h1 className="banner-title">
                            Pro. Beyond.
                            <br/>
                            <span className="highlight">iPhone 14 Pro</span>
                        </h1>
                        <p className="banner-description">
                            Created to change everything for the better. For everyone.
                        </p>
                        <button className="banner-button">Shop Now</button>
                    </div>
                    <Link to={`category-product/2/Phones`}>
                        <div className="banner-image">
                            <img src={banner_phone} alt="iPhone 14 Pro"/>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="container">
                <div className="left-section">
                    <div className="card">
                        <Link to={`category-product/8/Headphones`}>
                            <img src={AirPods} alt=""/>
                        </Link>
                        <h2>Apple AirPods Max</h2>
                        <p>Computational audio. Listen, it's powerful.</p>
                    </div>
                    <div className="card">
                        <a href="https://www.apple.com/apple-vision-pro/">
                            <img src={vision} alt=""/>
                        </a>
                        <h2>Apple Vision Pro</h2>
                        <p>An immersive way to experience entertainment.</p>
                    </div>
                    <div className="card">
                        <a href="https://www.playstation.com/en-us/ps5/">
                            <img src={PlayStation} alt=""/>
                        </a>
                        <h2>PlayStation 5</h2>
                        <p>
                            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
                            redefine your PlayStation experience.
                        </p>
                    </div>
                </div>

                <div className="right-section">
                    <div className="card large">
                        <Link to={`category-product/10/Computers`}>
                            <img style={{width: '100%'}} src={mac} alt="MacBook Air"/>
                        </Link>


                        <h2>MacBook Air</h2>
                        <p>
                            The new 15-inch MacBook Air makes room for more of what you love
                            with a spacious Liquid Retina display.
                        </p>
                        <button className="shop-now">Shop Now</button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Header;
