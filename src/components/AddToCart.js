import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import AmountButtons from "../components/AmountButtons";
const AddToCart = ({ singleProduct, mainColor, id, stock }) => {
  const { addProductCart } = useCartContext();
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <div className="mt-5">
      <AmountButtons increase={increase} decrease={decrease} amount={amount} />
      {/* add to cart btn */}
      <Link
        to="/cart"
        className="btn px-3 py-1 rounded-md uppercase text-sm whitespace-nowrap"
        type="button"
        onClick={() => addProductCart(id, amount, mainColor, singleProduct)}
      >
        add to cart
      </Link>
    </div>
  );
};

export default AddToCart;
