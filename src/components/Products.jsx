
import React from "react";
import OneProduct from "./OneProduct.jsx";

const Products = ({ products, onAdd }) => {
  

  return (
    <div className="main">
    <div className="headingMain">
        <h1>PREMIUM PET COSMETICS</h1>
        <h3>VAŠ LJUBIMAC - NAŠA LJUBAV </h3>
    </div>
    <div className="all-products">
      {products.map((prod) => (
        <OneProduct product={prod} key={prod.id} onAdd={onAdd} inCart={1} />
      ))}
      
    </div>
    </div>
  );
};

export default Products;