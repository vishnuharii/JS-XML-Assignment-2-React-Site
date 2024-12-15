import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard'; // Importing ProductCard component
import axiosInstance from '../api/axiosInstance'; // Importing Axios instance for API requests
import './pages.css'; // Importing the CSS file for styling

const Home = () => {
  // State for storing products fetched from the API
  const [products, setProducts] = useState([]);

  // useEffect hook to fetch products from the API when the component mounts
  useEffect(() => {
    // Make an API request to get products data
    axiosInstance.get('/products')
      .then(response => {
        // Set the fetched products to state
        setProducts(response.data);
      })
      .catch(error => {
        // Log any error if the API request fails
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="home">
      <h2>Available Products</h2>
      {/* Displaying the list of products using ProductCard component */}
      <div className="product-list">
        {products.length > 0 ? (
          // If products are available, map over them and render a ProductCard for each product
          products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          // If no products are available, show a loading or empty message
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
