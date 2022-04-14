import React, { useState, useEffect } from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        console.log(product)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Products 
                        key={product.id} 
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Products>)
                }
            </div>
            <div className="card-container">
                <h3>Card:</h3>
            </div>
        </div>
    );
};

export default Shop;