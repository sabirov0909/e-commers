import React, {useEffect, useState} from 'react';
import './products.css';
import axios from 'axios';
import {Link} from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:1337/api/products?populate=*');
            setProducts(response.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!products?.data || products.data.length === 0) {
        return <p>No products available or failed to load products.</p>;
    }

    return (
        <div className="products">
            <div className="products-grids">
                {products.data.slice(0, 4).map((product) => (
                    <div className="products-card" key={product.id}>
                        <img
                            src={
                                product.image.url
                                    ? `http://localhost:1337${product.image.url}`
                                    : 'placeholder.jpg'
                            }
                            alt={product?.name || "Product"}
                            className="products-image"
                        />
                        <h3 className="products-title">{product?.name}</h3>
                        <p className="products-price">${product?.price}</p>
                        <Link to={`/product/${product.documentId}`}>
                            <button className="product_button">Buy Now</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default Products;
