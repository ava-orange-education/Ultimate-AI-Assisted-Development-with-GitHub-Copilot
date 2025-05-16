// Prompt:
// Write React code to fetch and display products from an API. Include a loading spinner.

import React, { useState, useEffect } from 'react';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="product-grid">
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    {product.name}
                </div>
            ))}
        </div>
    );
}

export default ProductList;
