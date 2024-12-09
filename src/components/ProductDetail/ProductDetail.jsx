import React, {useState} from 'react';
import './ProductDetail.css';
import imagee from '../../images/Image.png';
import Screen from '../../icons/Screensize.png'
import A16 from '../../icons/Vector.png'
import Number from '../../icons/smartphone-rotate-2-svgrepo-com 2.png'
import camer from '../../icons/smartphone-rotate-2-svgrepo-com 2 (1).png'
import camera from '../../icons/Vector (1).png'
import battery from '../../icons/smartphone-rotate-2-svgrepo-com 2 (2).png'
import Free_Delivery from '../../icons/delivery-truck-svgrepo-com (1) 1.png'
import In_StockToday from '../../icons/shop-2-svgrepo-com 2.png'
import Guaranteed from '../../icons/verify.png'
import Reviews from "../Reviews/Reviews";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const ProductDetail = () => {
    const [selectedColor, setSelectedColor] = useState('purple');
    const [selectedStorage, setSelectedStorage] = useState('1TB');
    const [cartItems, setCartItems] = useState(0);
    const [wishlistItems, setWishlistItems] = useState(0);

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleStorageChange = (storage) => {
        setSelectedStorage(storage);
    };

    const addToCart = () => {
        setCartItems(cartItems + 1);
        alert('Product added to cart!');
    };

    const addToWishlist = () => {
        setWishlistItems(wishlistItems + 1);
        alert('Product added to wishlist!');
    };

    return (
        <>
            <Navbar />
            <br/>
            <br/>
            <div className="product-detail">
                <div className="breadcrumbs">
                    Home &gt; Catalog &gt; Smartphones &gt; Apple &gt; iPhone 14 Pro Max
                </div>

                <div className="main-info">
                    <div className="product-image">
                        <img
                            src={imagee}
                            alt="Apple iPhone 14 Pro Max"
                        />
                    </div>

                    <div className="product-info">
                        <h1>Apple iPhone 14 Pro Max</h1>
                        <div className="product-price">
                            <span className="current-price">$1399</span>
                            <span className="original-price">$1499</span>
                        </div>

                        <div className="options">
                            <div className="color-options">
                                <span>Select color:</span>
                                <div className="colors">
                                    {['purple', 'black', 'gold', 'silver'].map((color) => (
                                        <div
                                            key={color}
                                            className={`color ${color} ${selectedColor === color ? 'selected' : ''}`}
                                            onClick={() => handleColorChange(color)}
                                        ></div>
                                    ))}
                                </div>
                            </div>

                            <div className="storage-options">
                                <span>Select storage:</span>
                                <br/>
                                <br/>
                                <div className="storages">
                                    {['128GB', '256GB', '512GB', '1TB'].map((storage) => (
                                        <button
                                            key={storage}
                                            className={selectedStorage === storage ? 'selected' : ''}
                                            onClick={() => handleStorageChange(storage)}
                                        >
                                            {storage}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="specs">
                            <div className="spec-item">
                                <span><img src={Screen} alt=""/> Screen size:</span> <strong>6.7"</strong>
                            </div>
                            <div className="spec-item">
                                <span><img src={A16} alt=""/>️ CPU:</span> <strong>Apple A16 Bionic</strong>
                            </div>
                            <div className="spec-item">
                                <span><img src={Number} alt=""/>️ Number of Cores:</span> <strong>6</strong>
                            </div>
                            <div className="spec-item">
                                <span><img src={camera} alt=""/>️ Main Camera:</span> <strong>48-12-12 MP</strong>
                            </div>
                            <div className="spec-item">
                                <span><img src={camer} alt=""/>️ Front Camera:</span> <strong>12 MP</strong>
                            </div>
                            <div className="spec-item">
                                <span><img src={battery} alt=""/>️ Battery Capacity:</span> <strong>4323 mAh</strong>
                            </div>
                        </div>

                        <div className="actions">
                            <button className="wishlist" onClick={addToWishlist}>
                                Add to Wishlist ({wishlistItems})
                            </button>
                            <button className="cart" onClick={addToCart}>
                                Add to Cart ({cartItems})
                            </button>
                        </div>

                        <div className="delivery-info">
                            <div className="delivery-item">
                                <img src={Free_Delivery} alt="Free Delivery" className="icon"/>
                                <div className="text">
                                    <h4>Free Delivery</h4>
                                    <p>1-2 days</p>
                                </div>
                            </div>
                            <div className="delivery-item">
                                <img src={In_StockToday} alt="In Stock" className="icon"/>
                                <div className="text">
                                    <h4>In Stock</h4>
                                    <p>Today</p>
                                </div>
                            </div>
                            <div className="delivery-item">
                                <img src={Guaranteed} alt="Guaranteed" className="icon"/>
                                <div className="text">
                                    <h4>Guaranteed</h4>
                                    <p>1 year</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="details">
                    <h2>Details</h2>
                    <p>
                        Just as a book is judged by its cover, the first thing you notice when you pick up a modern
                        smartphone is the display. Nothing surprising, because advanced technologies allow you to
                        practically level the display frames and cutouts for the front camera and speaker, leaving no
                        room
                        for bold design solutions. And how good that in such realities Apple everything is fine with
                        displays. Both critics and mass consumers always praise the quality of the picture provided by
                        the
                        products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion,
                        caused real admiration for many.
                    </p>
                    <div className="info">
                        <h3>Screen</h3>
                        <div className="info-item">
                            <span>Screen diagonal</span>
                            <span>6.7"</span>
                        </div>
                        <div className="info-item">
                            <span>The screen resolution</span>
                            <span>2796x1290</span>
                        </div>
                        <div className="info-item">
                            <span>The screen refresh rate</span>
                            <span>120 Hz</span>
                        </div>
                        <div className="info-item">
                            <span>The pixel density</span>
                            <span>460 ppi</span>
                        </div>
                        <div className="info-item">
                            <span>Screen type</span>
                            <span>OLED</span>
                        </div>
                        <div className="info-item">
                            <span>Additionally</span>
                            <span>Dynamic Island, HDR display, True Tone</span>
                        </div>

                        <div className="CPU">
                            <span>CPU</span>
                        </div>
                        <div className='info-item'>
                            <h5>CPU</h5>
                            <h6>A16 Bionic</h6>
                        </div>
                        <div className="info-item">
                            <span>Number of cores</span>
                            <span>6</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>Product Reviews</h1>
                    <Reviews/>
                </div>
            </div>
            <br/>
            <br/>
            <Footer />
        </>
    );
};

export default ProductDetail;