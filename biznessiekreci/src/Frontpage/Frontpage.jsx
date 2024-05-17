import { useState } from 'react';
import './Frontpage.css';

const products = [
  { "name": "Tytul1", "description": "Opis1" },
  { "name": "Tytul2", "description": "Opis2" },
  { "name": "Tytul3", "description": "Opis3" },
  { "name": "Tytul4", "description": "Opis4" }
];

function Product({ name, description }) {
  return (
    <div className='element'>   
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

function Frontpage() {
  return (
    <>
      <div className='containerSlide'>
        {products.map(product => (
          <Product
            key={product.name}
            name={product.name}
            description={product.description}
          />
        ))}
      </div>
      {/* <div className='container'>
      {products.map(product => (
          <Product
            name={product.name}
            description={product.description}
          />
        ))}
      </div> */}
    </>
  );
}

export default Frontpage;