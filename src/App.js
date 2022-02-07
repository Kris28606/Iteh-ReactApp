import "./App.css";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const stilSlike={height:230, width:180};
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products] = useState([
    {
      id: 1,
      title: "Cat Dry Clean Spray",
      description:
        "Pet Head Cat Dry Clean Spray je sprej za suvo pranje mačaka - 450ml",
      amount: 0,
      img: <img src="https://www.apetit.rs/proizvodi/3683/cat-dry-clean-spray.jpg" style={stilSlike}></img> ,
      priceTag: "1.809,00 RSD"
    },
    {
      id: 2,
      title: "Puppy Fun",
      description: "Pet Head Puppy Fun, šampon za štence - 450ml",
      amount: 0,
      img: <img src="https://www.apetit.rs/proizvodi/3686/puppy-fun.jpg"style={stilSlike}></img>,
      priceTag: "1.950,00 RSD"
    },
    {
      id: 3,
      title: "Oatmeal Paw Butter",
      description:
        "Pet Head Oatmeal Paw Butter, krema za negu šapa pasa - 59ml",
      amount: 0,
      img: <img src="https://www.apetit.rs/proizvodi/3688/oatmeal-paw-butter.jpg"style={stilSlike}></img>,
      priceTag: "1.400,00 RSD"
    },
    {
      id: 4,
      title: "Dogs Luv it",
      description:
        "Pet Head Dogs Luv it, suvi šampon za pse - komad ",
      amount: 0,
      img: <img src="https://www.apetit.rs/proizvodi/4088/dogs%20luv%20it.jpg"style={stilSlike}></img>,
      priceTag: "2.790,00 RSD"
    },
    {
      id: 5,
      title: "Pup n Fluff",
      description:
        "Pet Head Pup n Fluff, hipoalergijske maramice za pse - 25 kom",
      amount: 0,
      img: <img src="https://www.apetit.rs/proizvodi/3690/pet-head-pup-n-fluff-hipoalergijske-maramice-za-pse.jpg"style={stilSlike}></img>,
      priceTag: "590,00 RSD"
    },
    {
      id: 6,
      title: "Purrfectly clean",
      description:
        "Pet Head Purrfectly clean, higijenske maramice za mačke - 25 kom",
      amount: 0,
      img:<img src="https://www.apetit.rs/proizvodi/3689/pet-head-purrfectly-clean-higijenske-maramice-za-ma%C4%8Dke.jpg"style={stilSlike}></img>,
      priceTag: "590,00 RSD"
    },
    {
      id: 7,
      title: "Life's an itch",
      description:
        "Pet Head Life's an itch, šampon za ublažavanje iritacije kože sa mirisom lubenice - 475ml",
      amount: 0,
      img: <img src="https://www.apetit.rs/proizvodi/1761/Pet-Head-Life-s-an-itch-Sampon-za-pse-ublazava-iritaciju-koze-475ml.jpg"style={stilSlike}></img>,
      priceTag: "1.809,00 RSD"
    },
    {
      id: 8,
      title: "Furtastic",
      description:
        "Pet Head Furtastic, kondicioner za pse sa kovrdžavom i dugom dlakom - 475ml",
      amount: 0,
      img: <img src="https://www.apetit.rs/proizvodi/1773/Pet-Head-Furtastic-Kondicioner-za-pse-sa-kovrdzavom-i-dugom-dlakom-475ml.jpg"style={stilSlike}></img>,
      priceTag: "1.809,00 RSD"
    }
    
  ]);
  function filterCart() {
    let newProducts = products.filter((prod) => prod.amount > 0);
    setCartProducts(newProducts);
  }
  function addProduct(title, id) {
    console.log("Dodat je proizvod: " + title);
    setCartNum(cartNum + 1);
    products.forEach((prod) => {
      if (prod.id === id) {
        prod.amount++;
      }
      console.log(prod.amount);
    });
    filterCart();
  }

  function removeProduct(title, id) {
    
    cartProducts.forEach((prod)=> {
      if(prod.id===id) {
        if(prod.amount>0) {
          setCartNum(cartNum-1);
          prod.amount--;
          if(prod.amount==0) {
            filterCart();
          }
        }
        else {
          filterCart();
        }
      }
    })
  }

  return (
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum}></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Products products={products} onAdd={addProduct} onRemove={removeProduct} />}
        />
        <Route path="/cart" element={<Cart products={cartProducts} onRemove={removeProduct} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
