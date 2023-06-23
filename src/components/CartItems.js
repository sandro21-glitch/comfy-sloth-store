import React from "react";
import CartProductInfo from "../components/CartProductInfo";
import CartItemHeader from "../components/CartItemHeader";
import CartOrder from "./CartOrder";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
const CartItems = () => {
  const { clearCartItems } = useCartContext();

  return (
    <article>
      <CartItemHeader />
      <hr className="mt-2 mb-10 hidden md:block" />
      <CartProductInfo />
      <hr className="my-10" />
      {/* cart buttons */}
      <div className="w-full flex items-center justify-between">
        <Link to='/products' className="bg-darkBrown tracking-wider text-white px-2 py-1 rounded-md">
          Continue Shopping
        </Link>
        <button className="bg-black tracking-wider text-white px-2 py-1 rounded-md" onClick={clearCartItems}>
          Clear Shopping Cart
        </button>
      </div>
      <CartOrder />
    </article>
  );
};

export default CartItems;
