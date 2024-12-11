import React, {useState, useEffect} from 'react';
import './Basket.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Basket = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);
    }, []);

    const updateQuantity = (id, delta) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map((item) =>
                item.id === id
                    ? {...item, quantity: Math.max(1, item.quantity + delta)}
                    : item
            );

            // Save the updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const removeItem = (id) => {
        const updatedItems = cartItems.filter((item) => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
        setCartItems(updatedItems);
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const tax = 50;
    const shipping = 29;

    const total = calculateSubtotal() + tax + shipping;

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <Navbar cartCount={cartCount}/>
            <div className="basket-container">
                <div className="shopping-cart">
                    <h2>Shopping Cart</h2>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.name}/>
                                <div className="item-details">
                                    <p>{item.name}</p>
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
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
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
