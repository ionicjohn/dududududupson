import { useState } from 'react'
import './Frontpage.css'
//Produkty bedą zczytywane z bazy danych gdy beda w niej dane
const products = [{
  "name": "Tytul1",
  "description": "Opis1"
},
{
  "name": "Tytul2",
  "description": "Opis2"
},
{
  "name": "Tytul3",
  "description": "Opis3"
}
]

function Product({ id, name, description, price }) {
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
      <div className='container'>
      {products.map(product => (
        <Product
          name={product.name}
          description={product.description}
        />
      ))}
      </div>
    </>
  )
}

export default Frontpage