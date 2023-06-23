import React from "react";
import Hero from "../components/Hero";
import CartItems from "../components/CartItems";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <Hero location={"/cart"} />
      <section className="section section-center">
        {cart.length < 1 ? (
          <div className="min-h-[45vh] text-center">
            <h1 className="font-bold normal-case">Your cart is empty</h1>
            <Link to="/products" className="btn px-3 py-1 rounded-md">
              Fill it
            </Link>
          </div>
        ) : (
          <CartItems />
        )}
      </section>
    </main>
  );
};

export default Cart;
