import ProductCard from "../assets/ProductCards/ProductCard";

//id, name, category, subCategory, description, price, img, altPhoto
const products = [
    {
        "id": 1,
        "name": "Bluza Junkerstein",
        "category": "Clothes",
        "subCategory": "Bluzy",
        "description": "Bardzo fajna bluza. Kolorystyka i wzor zaprojektowany przez JUNKA. Smierdzi jak nowa. Smrod Brud i zaraza",
        "price": 450,
        "img": "https://media.istockphoto.com/id/653111390/pl/zdj%C4%99cie/brudna-bluza.jpg?s=1024x1024&w=is&k=20&c=ce-DmEDl7MYcx7oh3u0YVMl3SND0A6lfsZHelMU2_d8=",
        "altPhoto": "Bluza Trascher"

    },
    {
        "id": 2,
        "name": "Koszulka ZSP",
        "category": "Clothes",
        "subCategory": "Koszulki",
        "description": "Czarna koszulka z logiem Zwizaku Strzelectwa Polskiego. Roman ukradl ja z funkcjonariusza strazy granicznej podczas przechodzenia przez Polsko Ukrainska grancie.",
        "price": 230,
        "img": "https://www.urodzenipatrioci.pl/3406-home_bosky/koszulka-orzel-ak.jpg",
        "altPhoto": "KoszulkaZSP"

    },
]

function Clothes() {
	
    return (
      <>
      <h1>Clothes</h1>
        {products.map(products=>(
            <ProductCard 
                id={products.id}
                name={products.name}
                category={products.category}
                subCategory={products.subCategory}
                description={products.description}
                price={products.price}
                img={products.img}
                altPhoto={products.altPhoto}
            />
        ))}
      </>
    )
}

export default Clothes