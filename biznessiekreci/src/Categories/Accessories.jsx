import React from 'react';
import ProductCard from "../assets/ProductCards/ProductCard";
import './Categories.css';

const accessoriesSubCategories = [
    { id: 1, name: "okularki" },
    { id: 2, name: "bransoletki" },
    { id: 3, name: "pierscionki" },
    { id: 4, name: "koguto pierscionki" },
    { id: 5, name: "chainy" },
    { id: 6, name: "kubki" },
    { id: 7, name: "figurki" },
    { id: 8, name: "przedmioty LEGENDARNE" }
];

const products = [
  {
      id: 1,
      name: "Okularki Aviator",
      categoryName: "Accessories",
      categoryId: 2,
      subCategoryId: 1,
      subCategoryName: "okularki",
      description: "Klasyczne okularki aviator z polaryzacyjnymi soczewkami.",
      price: 350,
      vat: 23,
      img: "https://example.com/okularki-aviator.jpg",
      altPhoto: "Okularki Aviator"
  },
  {
      id: 2,
      name: "Bransoletka Skórzana",
      categoryName: "Accessories",
      categoryId: 2,
      subCategoryId: 2,
      subCategoryName: "bransoletki",
      description: "Elegancka bransoletka wykonana ze skóry naturalnej.",
      price: 120,
      vat: 23,
      img: "https://example.com/bransoletka-skorzana.jpg",
      altPhoto: "Bransoletka Skórzana"
  },
  {
      id: 3,
      name: "Pierścionek Srebrny",
      categoryName: "Accessories",
      categoryId: 2,
      subCategoryId: 3,
      subCategoryName: "pierscionki",
      description: "Delikatny srebrny pierścionek z cyrkonią.",
      price: 200,
      vat: 23,
      img: "https://example.com/pierscionek-srebrny.jpg",
      altPhoto: "Pierścionek Srebrny"
  },
  {
      id: 4,
      name: "Kubek z Motywem Gwiezdnych Wojen",
      categoryName: "Accessories",
      categoryId: 2,
      subCategoryId: 6,
      subCategoryName: "kubki",
      description: "Kubek z nadrukiem Star Wars. Idealny dla fanów sagi.",
      price: 60,
      vat: 23,
      img: "https://example.com/kubek-starwars.jpg",
      altPhoto: "Kubek Star Wars"
  },
  {
      id: 5,
      name: "Łańcuszek Złoty",
      categoryName: "Accessories",
      categoryId: 2,
      subCategoryId: 5,
      subCategoryName: "chainy",
      description: "Stylowy złoty łańcuszek. Doskonały na każdą okazję.",
      price: 500,
      vat: 23,
      img: "https://example.com/lancuszek-zloty.jpg",
      altPhoto: "Łańcuszek Złoty"
  },
  {
      id: 6,
      name: "Figurka Kolekcjonerska Iron Man",
      categoryName: "Accessories",
      categoryId: 2,
      subCategoryId: 7,
      subCategoryName: "figurki",
      description: "Figurka Iron Mana z serii Avengers. Limitowana edycja.",
      price: 150,
      vat: 23,
      img: "https://example.com/figurka-ironman.jpg",
      altPhoto: "Figurka Iron Man"
  },
  {
      id: 7,
      name: "Pierścionek Koguto",
      categoryName: "Accessories",
      categoryId: 2,
      subCategoryId: 4,
      subCategoryName: "koguto pierscionki",
      description: "Pierścionek w kształcie koguta, unikatowy design.",
      price: 220,
      vat: 23,
      img: "https://example.com/pierscionek-koguto.jpg",
      altPhoto: "Pierścionek Koguto"
  },
  {
      id: 8,
      name: "Legendarny Amulet",
      categoryName: "Accessories",
      categoryId: 2,
      subCategoryId: 8,
      subCategoryName: "przedmioty LEGENDARNE",
      description: "Magiczny amulet o niezwykłych właściwościach.",
      price: 1000,
      vat: 23,
      img: "https://example.com/legendarny-amulet.jpg",
      altPhoto: "Legendarny Amulet"
  }
];


function CheckIfSubCategoryApplies({
    subCategoryId,
    pId, pName, pCategoryName, pCategoryId, pSubCategoryId, pSubCategoryName,
    pDescription, pPrice, pVat, pImg, pAltPhoto
}) {
    if (pSubCategoryId === subCategoryId) {
        return (
            <ProductCard 
                key={pId}
                id={pId}
                name={pName}
                categoryName={pCategoryName}
                categoryId={pCategoryId}
                subCategoryId={pSubCategoryId}
                subCategory={pSubCategoryName}
                description={pDescription}
                price={pPrice}
                vat={pVat}
                img={pImg}
                altPhoto={pAltPhoto}
                className="product-card"
            />
        );
    }
    return null;
}

function Accessories() {
    return (
        <>
            <h1>Accessories</h1>
            {accessoriesSubCategories.map((subCategory) => {
                const filteredProducts = products.filter(product => product.subCategoryId === subCategory.id);
                if (filteredProducts.length === 0) return null;

                return (
                    <div key={subCategory.id} className={`subcategory ${subCategory.name}`}>
                        <h2>{subCategory.name}</h2>
                        {filteredProducts.map(product => (
                            <CheckIfSubCategoryApplies 
                                key={product.id}
                                subCategoryId={subCategory.id}
                                pId={product.id}
                                pName={product.name}
                                pCategoryName={product.categoryName}
                                pCategoryId={product.categoryId}
                                pSubCategoryId={product.subCategoryId}
                                pSubCategoryName={product.subCategoryName}
                                pDescription={product.description}
                                pPrice={product.price}
                                pVat={product.vat}
                                pImg={product.img}
                                pAltPhoto={product.altPhoto}
                            />
                        ))}
                    </div>
                );
            })}
        </>
    );
}

export default Accessories;
