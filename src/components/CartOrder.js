import React from "react";
import { useCartContext } from "../context/CartContext";
import { formatPrice } from "../utils/helpers";

const CartOrder = () => {
  const { totalPrice, fee, subTotal } = useCartContext();
  return (
    <section className="mt-10 flex justify-center md:justify-end">
      <div>
        <article className="border border-[#bcccdc] rounded-md px-10 py-5">
          <h5 className="grid grid-cols-[200px,1fr] font-bold tracking-wider">
            Subtotal : <span>{formatPrice(subTotal)}</span>
          </h5>
          <p className="grid grid-cols-[200px,1fr] tracking-wider">
            Shipping Fee : <span>{formatPrice(fee)}</span>
          </p>
          <hr className="mt-5 mb-7" />
          <h4 className="grid grid-cols-[200px,1fr] font-bold tracking-wider">
            Order Total :<span>{formatPrice(totalPrice)}</span>
          </h4>
        </article>
        <button
          type="button"
          className="btn rounded-md p-1 w-full mt-5 font-bold"
        >
          Login
        </button>
      </div>
    </section>
  );
};

export default CartOrder;
