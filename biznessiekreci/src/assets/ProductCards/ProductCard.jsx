import React from 'react';
import './ProductCard.css';

function ProductCard({id, name, category, subCategory, description, price, img, altPhoto}){
    return (
        <>
        <div className="card">
        <div className="card-body" id={id}>
        <img
          src={img}
          alt={altPhoto}
          className="card-image"
        />
        <div className="card-content">
          <h3 className="card-heading">{name}</h3>
          <p>
          {description}
          </p>
          <p className="card-price">{price} PLN</p>
        </div>
      </div>
      <hr className="card-divider" />
      <div className="card-footer">
        <button className="button button-solid">Buy now</button>
        <button className="button button-ghost">Add to cart</button>
      </div>
        </div>
        </>
    )
}

export default ProductCard;
