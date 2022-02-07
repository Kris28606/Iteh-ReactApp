import React from 'react';


function OneProduct({ product, onAdd, inCart , onRemove}) {
  
 
  return (
    <div className={inCart === 1 ? "card" : "card-cart"} >
      <img
        className={inCart === 1 ? "card-img" : "card-img-cart"}
        
      />
      <div className="card-body">
          <p className="card-image">{product.img}</p>
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
      </div>
      {inCart === 1 ? (
        <>
          <button
            className="btn"
            onClick={() => onAdd(product.title, product.id)}
          >
            DODAJ U KORPU
          </button>
          
        </>
      ) : (
        <div className="card-body">
        <h4>Količina: {product.amount}</h4>
        <button
            className="btn"
            onClick={() => onRemove(product.title, product.id)}
          > OBRISI </button>
        </div>
      )}
    </div>
  );
}

export default OneProduct;