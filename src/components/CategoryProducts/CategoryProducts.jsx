import React, {useEffect, useState} from 'react';
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";


const CategoryProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams()

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`http://localhost:1337/api/products?populate=*&filters[category][id]=${params.id}`);
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
        <>
            <Navbar/>
            <div className="products">
                <h3>Home > Catalog > {params.name}</h3>
                <div className="products-grids">
                    {products.data.map((product) => (
                        <div className="products-card" key={product.id}>
                            <img
                                src={
                                    product?.image
                                        ? `http://localhost:1337${product.image.url}`
                                        : 'placeholder.jpg'
                                }
                                alt={product?.name || 'Product'}
                                className="products-image"
                            />
                            <h3 className="products-title">{product?.name}</h3>
                            <p className="products-price">${product?.price}</p>
                            <Link to={`/product/${product.documentId}`}>
                                <button className="products-button">Buy Now</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default CategoryProducts;

