import React from 'react';
import './productCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
