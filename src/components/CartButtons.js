import React from "react";
import { BsCartFill } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
const CartButtons = () => {
  const { itemsCount } = useCartContext();
  return (
    <div className="flex-center space-x-7">
      <Link
        to="/cart"
        className="text-2xl flex items-center text-darkBlue relative"
      >
        Cart
        <BsCartFill className="text-3xl ml-2" />
        <span className="absolute -right-1 -top-1 p-1 bg-darkBrown w-5 h-5 rounded-full flex items-center justify-center text-white text-sm">
          {itemsCount}
        </span>
      </Link>
      <button className="text-2xl flex items-center text-darkBlue">
        Login
        <AiOutlineUserAdd className="text-3xl ml-2" />
      </button>
    </div>
  );
};

export default CartButtons;
