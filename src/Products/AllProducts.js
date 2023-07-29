import React, { useState, useEffect } from "react";
import './Prod.css'

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          {/* <p>{product.category}</p> */}
          <p>Price: ${product.price}</p>
          {/* <p>Description: {product.description}</p> */}
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
