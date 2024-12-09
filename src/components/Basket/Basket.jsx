import React, { useState } from 'react';
import './Basket.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Basket = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Apple iPhone 14 Pro Max 128Gb Deep Purple',
            price: 1399,
            quantity: 1,
            sku: '#25139526913984',
            image: 'https://ir.ozone.ru/s3/multimedia-u/6559856946.jpg',
        },
        {
            id: 2,
            name: 'AirPods Max Silver',
            price: 549,
            quantity: 1,
            sku: '#53459358345',
            image: 'https://360views.hum3d.com/original/Apple/463_Apple_AirPods_Max_Silver/Apple_AirPods_Max_Silver_360_1080_200-1.jpg',
        },
        {
            id: 3,
            name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium',
            price: 399,
            quantity: 1,
            sku: '#63632324',
            image: 'https://avatars.mds.yandex.net/i?id=f314e13688675c9c7a805155dec7c224df23fcaf-12540073-images-thumbs&n=13',
        },
    ]);

    const updateQuantity = (id, delta) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const tax = 50;
    const shipping = 29;

    const total = calculateSubtotal() + tax + shipping;

    // Рассчитываем количество товаров в корзине
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <Navbar cartCount={cartCount} />
            <div className="basket-container">
                <div className="shopping-cart">
                    <h2>Shopping Cart</h2>
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name}/>
                            <div className="item-details">
                                <p>{item.name}</p>
                                <span>{item.sku}</span>
                            </div>
                            <div className="item-quantity">
                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                            </div>
                            <p className="item-price">${item.price * item.quantity}</p>
                            <button
                                className="remove-item"
                                onClick={() => removeItem(item.id)}
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>

                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="promo-code">
                        <label htmlFor="promo-code">Discount code / Promo code</label>
                        <input type="text" id="promo-code" placeholder="Code"/>
                    </div>
                    <div className="summary-details">
                        <p>
                            Subtotal: <span>${calculateSubtotal()}</span>
                        </p>
                        <p>
                            Estimated Tax: <span>${tax}</span>
                        </p>
                        <p>
                            Estimated Shipping & Handling: <span>${shipping}</span>
                        </p>
                        <p className="total">
                            Total: <span>${total}</span>
                        </p>
                    </div>
                    <button className="checkout-button">Checkout</button>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Basket;
