import React, {useState, useEffect} from "react";
import "./product.css";
import axios from "axios";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:1337/api/products');
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
            <nav className="product_links">
                <a href="#NewArrival">New Arrival</a>
                <a href="#Bestseller">Bestseller</a>
                <a href="#FeaturedProducts">Featured Products</a>
            </nav>
            <div className="product_grid">
                {products.data.map((product) => (
                    <div className="product_card" key={product.id}>
                        <img
                            src={
                                product.attributes?.image?.data?.attributes?.url
                                    ? `http://localhost:1337${product.attributes.image.data.attributes.url}`
                                    : "placeholder.jpg"
                            }
                            alt={product?.name || "Product"}
                            className="product_image"
                        />
                        <h3 className="product_title">{product?.name}</h3>
                        <p className="product_price">${product?.price}</p>
                        <button className="product_button">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
