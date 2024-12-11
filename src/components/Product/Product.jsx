import React, {useState, useEffect} from "react";
import "./product.css";
import axios from "axios";
import {Link} from "react-router-dom";


const Product = () => {
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
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!products || products.length === 0) {
        return <p>No products available or failed to load products.</p>;
    }

    return (
        <div className="product">
            <h1>Products</h1>
            <div className="product_grid">
                {products.data.slice(0, 8).map((product) => (
                    <div className="product_card" key={product.id}>
                        <img
                            src={
                                product.image.url
                                    ? `http://localhost:1337${product.image.url}`
                                    : "placeholder.jpg"
                            }
                            alt={product?.name || "Product"}
                            className="product_image"
                        />
                        <h3 className="product_title">{product?.name}</h3>
                        <p className="product_price">${product?.price}</p>
                        <Link to={`/product/${product.documentId}`}>
                            <button className="product_button">Buy Now</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
