import React from 'react';
import ProductCard from "../assets/ProductCards/ProductCard";
import './Categories.css';

const clothesSubCategories = [
    { id: 1, name: "buty" },
    { id: 2, name: "bluzy" },
    { id: 3, name: "koszulki" },
    { id: 4, name: "rekawiczki" },
    { id: 5, name: "majtki" },
    { id: 6, name: "klapki" },
    { id: 7, name: "skarpetki" },
    { id: 8, name: "czapki" }
];

// id, name, category, subCategoryId, subCategory, description, price, VATpercent, img, altPhoto
const products = [
    {
        id: 1,
        name: "Bluza Junkerstein",
        categoryName: "Ubrania",
        categoryId: 1,
        subCategoryId: 2,
        subCategoryName: "Bluzy",
        description: "Bardzo fajna bluza. Kolorystyka i wzór zaprojektowany przez JUNKA. Śmierdzi jak nowa. Smród, brud i zaraza.",
        price: 450,
        vat: 23,
        img: "https://media.istockphoto.com/id/653111390/pl/zdj%C4%99cie/brudna-bluza.jpg?s=1024x1024&w=is&k=20&c=ce-DmEDl7MYcx7oh3u0YVMl3SND0A6lfsZHelMU2_d8=",
        altPhoto: "Bluza Trascher"
    },
    {
        id: 2,
        name: "Koszulka ZSP",
        categoryName: "Ubrania",
        categoryId: 1,
        subCategoryId: 3,
        subCategoryName: "Koszulki",
        description: "Czarna koszulka z logiem Związku Strzelectwa Polskiego. Roman ukradł ją z funkcjonariusza straży granicznej podczas przechodzenia przez polsko-ukraińską granicę.",
        price: 230,
        vat: 23,
        img: "https://www.urodzenipatrioci.pl/3406-home_bosky/koszulka-orzel-ak.jpg",
        altPhoto: "KoszulkaZSP"
    },
    {
        id: 3,
        name: "Czapka Beanie",
        categoryName: "Ubrania",
        categoryId: 1,
        subCategoryId: 8,
        subCategoryName: "Czapki",
        description: "Ciepła czapka beanie idealna na zimę. Wykonana z wełny merynosa.",
        price: 150,
        vat: 23,
        img: "https://us-tuna-sounds-images.voicemod.net/45d4f79c-5113-4c1c-8494-8043b6a87835-1711490523446.png",
        altPhoto: "Czapka Beanie"
    },
    {
        id: 4,
        name: "Koszulka Patriotyczna",
        categoryName: "Ubrania",
        categoryId: 1,
        subCategoryId: 3,
        subCategoryName: "Koszulki",
        description: "Biała koszulka z nadrukiem orła w koronie. Idealna na patriotyczne wydarzenia.",
        price: 200,
        vat: 23,
        img: "https://i1.sndcdn.com/artworks-mgqpcY6QjBWozqzy-U0813Q-t500x500.jpg",
        altPhoto: "Koszulka Patriotyczna"
    },
    {
        id: 5,
        name: "Bluza z Kapturem",
        categoryName: "Ubrania",
        categoryId: 1,
        subCategoryId: 2,
        subCategoryName: "Bluzy",
        description: "Szara bluza z kapturem. Wygodna i ciepła, idealna na chłodne dni.",
        price: 300,
        vat: 23,
        img: "https://preview.redd.it/dmh4hz7r0hd51.jpg?width=508&format=pjpg&auto=webp&s=d928154280faa026baa8731be4bb39bb6b93c731",
        altPhoto: "Bluza z Kapturem"
    },
    {
        id: 6,
        name: "Koszulka Sportowa",
        categoryName: "Ubrania",
        categoryId: 1,
        subCategoryId: 3,
        subCategoryName: "Koszulki",
        description: "Koszulka sportowa wykonana z oddychającego materiału. Idealna na treningi.",
        price: 180,
        vat: 23,
        img: "https://ih1.redbubble.net/image.4611158023.8619/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
        altPhoto: "Koszulka Sportowa"
    },
    {
        id: 7,
        name: "Czapka z Daszkiem",
        categoryName: "Ubrania",
        categoryId: 1,
        subCategoryId: 8,
        subCategoryName: "Czapki",
        description: "Czarna czapka z daszkiem z regulowanym zapięciem. Stylowa i praktyczna.",
        price: 120,
        vat: 23,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvDudNfPH2BZQQfYNF3888guW4nBOwE2LfSC6d3pzEdw&s",
        altPhoto: "Czapka z Daszkiem"
    },
    {
        id: 8,
        name: "Koszulka Sportowa",
        categoryName: "Ubrania",
        categoryId: 1,
        subCategoryId: 3,
        subCategoryName: "Koszulki",
        description: "Koszulka sportowa wykonana z oddychającego materiału. Idealna na treningi.",
        price: 180,
        vat: 23,
        img: "https://ih1.redbubble.net/image.4611158023.8619/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
        altPhoto: "Koszulka Sportowa"
    },
    {
        id: 9,
        name: "Koszulka Sportowa",
        categoryName: "Ubrania",
        categoryId: 1,
        subCategoryId: 3,
        subCategoryName: "Koszulki",
        description: "Koszulka sportowa wykonana z oddychającego materiału. Idealna na treningi.",
        price: 180,
        vat: 23,
        img: "https://ih1.redbubble.net/image.4611158023.8619/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
        altPhoto: "Koszulka Sportowa"
    },
    {
        id: 10,
        name: "Koszulka Sportowa",
        categoryName: "Ubrania",
        categoryId: 1,
        subCategoryId: 3,
        subCategoryName: "Koszulki",
        description: "Koszulka sportowa wykonana z oddychającego materiału. Idealna na treningi.",
        price: 180,
        vat: 23,
        img: "https://ih1.redbubble.net/image.4611158023.8619/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
        altPhoto: "Koszulka Sportowa"
    },
    {
        id: 11,
        name: "Koszulka Sportowa",
        categoryName: "Ubrania",
        categoryId: 1,
        subCategoryId: 3,
        subCategoryName: "Koszulki",
        description: "Koszulka sportowa wykonana z oddychającego materiału. Idealna na treningi.",
        price: 180,
        vat: 23,
        img: "https://ih1.redbubble.net/image.4611158023.8619/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
        altPhoto: "Koszulka Sportowa"
    },
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

function Clothes() {
    return (
        <>
            <h1>Clothes</h1>
            {clothesSubCategories.map((subCategory) => {
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

export default Clothes;