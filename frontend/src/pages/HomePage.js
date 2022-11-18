import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

 function HomePage() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.idCode}>
            <Link to={`/products/${product.idCode}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.idCode}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>R{product.price}</strong>
              </p>
              <button>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomePage;