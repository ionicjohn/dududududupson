import React from 'react';
import ProductCard from "../assets/ProductCards/ProductCard";
import './Categories.css';

const foodSubCategories = [
    { id: 1, name: "kawa" },
    { id: 2, name: "energetyki" },
    { id: 3, name: "alkohol" }
];

const products = [
  {
      id: 1,
      name: "Kawa Arabica",
      categoryName: "Food",
      categoryId: 3,
      subCategoryId: 1,
      subCategoryName: "kawa",
      description: "Wykwintna kawa arabica, z delikatnym smakiem i intensywnym aromatem.",
      price: 25,
      vat: 8,
      img: "https://example.com/kawa-arabica.jpg",
      altPhoto: "Kawa Arabica"
  },
  {
      id: 2,
      name: "Energetyk Red Bull",
      categoryName: "Food",
      categoryId: 3,
      subCategoryId: 2,
      subCategoryName: "energetyki",
      description: "Puszka pełna energii - idealna na długie godziny pracy.",
      price: 8,
      vat: 8,
      img: "https://example.com/energetyk-redbull.jpg",
      altPhoto: "Energetyk Red Bull"
  },
  {
      id: 3,
      name: "Wódka Żubrówka",
      categoryName: "Food",
      categoryId: 3,
      subCategoryId: 3,
      subCategoryName: "alkohol",
      description: "Czysta wódka z dodatkiem naturalnej trawy żubrowej. Doskonała na imprezy.",
      price: 30,
      vat: 23,
      img: "https://example.com/wodka-zubrowka.jpg",
      altPhoto: "Wódka Żubrówka"
  },
  {
      id: 4,
      name: "Herbata Zielona",
      categoryName: "Food",
      categoryId: 3,
      subCategoryId: 1,
      subCategoryName: "kawa",
      description: "Zdrowa i orzeźwiająca herbata zielona. Pełna antyoksydantów.",
      price: 15,
      vat: 8,
      img: "https://example.com/herbata-zielona.jpg",
      altPhoto: "Herbata Zielona"
  },
  {
      id: 5,
      name: "Red Bull Sugarfree",
      categoryName: "Food",
      categoryId: 3,
      subCategoryId: 2,
      subCategoryName: "energetyki",
      description: "Bezkaloryczny energetyk Red Bull. Daje skrzydeł, nie dodaje kilogramów.",
      price: 10,
      vat: 8,
      img: "https://example.com/redbull-sugarfree.jpg",
      altPhoto: "Red Bull Sugarfree"
  },
  {
      id: 6,
      name: "Whisky Jack Daniel's",
      categoryName: "Food",
      categoryId: 3,
      subCategoryId: 3,
      subCategoryName: "alkohol",
      description: "Legendarna whisky Jack Daniel's - symbol wykwintnego smaku.",
      price: 80,
      vat: 23,
      img: "https://example.com/whisky-jackdaniels.jpg",
      altPhoto: "Whisky Jack Daniel's"
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

function Food() {
    return (
        <>
            <h1>Food</h1>
            {foodSubCategories.map((subCategory) => {
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

export default Food;
