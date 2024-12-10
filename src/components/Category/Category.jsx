import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './category.css';
import {Link} from "react-router-dom";

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:1337/api/categories?populate=*');
            setCategories(response.data);
            setLoading(false);
        } catch (err) {
            setError('Не удалось загрузить категории');
            setLoading(false);
        }
    };

    if (loading) return <div>Загрузка категорий...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="category-container">
            <h2 className="category-title">Browse By Category</h2>
            <div className="category-grid">
                {categories && categories?.data.map((category) => (
                    <Link to={`/category-product/${category.id}/${category.name}`}>
                        <div className="category-card" key={category.id}>
                            <img src={`http://localhost:1337/${category.photo.url}`} alt={category.name}/>
                            <h3>{category.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Category;
