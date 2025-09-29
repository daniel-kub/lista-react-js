import "./App.css";
import { useState } from "react";
import { Product } from "./Product";

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [newProduct, setNewProduct] = useState("");

  const handleChange = (event) => {
    setNewProduct(event.target.value);
  };

  const addProduct = () => {
    if (newProduct.trim() === "") return;
    const product = {
      id: shoppingList.length === 0 ? 1 : shoppingList[shoppingList.length - 1].id + 1,
      productName: newProduct,
      bought: false,
    };
    setShoppingList([...shoppingList, product]);
    setNewProduct(""); // czyści input
  };

  const deleteProduct = (id) => {
    setShoppingList(shoppingList.filter((product) => product.id !== id));
  };

  const toggleBought = (id) => {
    setShoppingList(
      shoppingList.map((product) =>
        product.id === id ? { ...product, bought: !product.bought } : product
      )
    );
  };

  return (
    <>
      <div className="addProduct">
        <input
          value={newProduct}
          onChange={handleChange}
          placeholder="Dodaj produkt..."
        />
        <button onClick={addProduct}>Dodaj produkt</button>
      </div>
      <div className="list">
        {shoppingList.map((product) => (
          <Product
            key={product.id}
            productName={product.productName}
            id={product.id}
            deleteProduct={deleteProduct}
            toggleBought={toggleBought}
            bought={product.bought}
          />
        ))}
      </div>
    </>
  );
}

export default App;
