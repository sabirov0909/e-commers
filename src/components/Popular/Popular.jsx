import React from "react";
import "./popular.css";
import popular_product from "../../images/image 39.png";
import huawei from "../../images/image 12.png";
import Ipad_Pro from "../../images/image 64.png";
import Samsung_Galaxy from "../../images/image 41.png";
import Macbook_Pro from "../../images/MacBook.png";
import {Link} from "react-router-dom";

const Popular = () => {
    return (
        <div className="popular-container">
            <div className="scrollable-grid">
                <div className="product-card">
                    <div className="image-containers">
                        <img
                            src={popular_product}
                            alt="Background"
                            className="background-image"
                        />
                        <img
                            src={huawei}
                            alt="Foreground"
                            className="foreground-image"
                        />

                    </div>
                    <div className="product-info">
                        <h3>Huawei Watch</h3>
                        <p>
                            Experience elegance and technology combined in one amazing
                            smartwatch.
                        </p>
                    </div>
                    <Link to={`category-product/4/Smart%20Watches`}>
                        <button>Shop Now</button>
                    </Link>
                </div>

                <div className="product-card">
                    <div className="image-container">
                        <img
                            src={Ipad_Pro}
                            alt="iPad Pro"
                            className="product-image"
                        />

                    </div>
                    <div className="product-info">
                        <h3>iPad Pro</h3>
                        <p>
                            The ultimate device for productivity and entertainment, featuring
                            a stunning Retina display.
                        </p>
                    </div>
                    <a href="https://www.apple.com/uz/ipad-pro/">
                        <button>Shop Now</button>
                    </a>
                </div>

                <div className="product-card">
                    <div className="image-container">
                        <img
                            src={Samsung_Galaxy}
                            alt="Samsung Galaxy"
                            className="product-image"
                        />

                    </div>
                    <div className="product-info">
                        <h3>Samsung Galaxy</h3>
                        <p>
                            Unfold the future with cutting-edge design and amazing
                            multitasking capabilities.
                        </p>
                    </div>
                    <a href="https://www.samsung.com/uz_ru/smartphones/">
                        <button>Shop Now</button>
                    </a>
                </div>

                <div className="product-card">
                    <div className="image-container">
                        <img src={Macbook_Pro} alt="MacBook Air"/>
                    </div>
                    <div className="product-info">
                        <h3>MacBook Pro</h3>
                        <p>
                            Power and elegance come together in the most advanced MacBook Pro
                            yet.
                        </p>
                    </div>
                    <Link to={`category-product/10/Computers`}>
                        <button>Shop Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
        ;
};

export default Popular;
