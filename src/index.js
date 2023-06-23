import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductContext from "./context/ProductContext";
import FiltersContext from "./context/FiltersContext";
import CartContext from "./context/CartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductContext>
      <FiltersContext>
        <CartContext>
          <App />
        </CartContext>
      </FiltersContext>
    </ProductContext>
  </React.StrictMode>
);
