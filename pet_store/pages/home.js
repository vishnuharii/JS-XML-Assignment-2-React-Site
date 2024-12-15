import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axiosInstance from '../api/axiosInstance';
import './pages.css';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axiosInstance.get('/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="home">
            <h2>Available Products</h2>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
