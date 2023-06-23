import React from "react";
import { FaTrash } from "react-icons/fa";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useCartContext } from "../context/CartContext";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
const CartProductInfo = () => {
  const { cart, cartButtons, removeProduct } = useCartContext();

  const increase = (id) => {
    cartButtons(id, "inc");
  };
  const decrease = (id) => {
    cartButtons(id, "dec");
  };


  return (
    <div className="grid grid-cols-[200px,1fr,auto] md:grid-cols-[1fr,1fr,1fr,1fr,auto] gap-5  items-center ">
      {cart.map((product) => {
        const { id, name, price, image, amount, mainColor } = product;
        return (
          <React.Fragment key={id}>
            {/* product info */}
            <div className="grid grid-cols-[100px,200px] grid-rows-[75px] items-center text-left gap-5">
              <img
                src={image}
                alt={name}
                className="rounded-md w-full h-full block object-cover"
              />
              <div>
                <h5 className="mb-0 font-bold">{name}</h5>
                <p className="mb-0 capitalize text-lightBlue">
                  color :{" "}
                  <span
                    className={`w-3 h-3 inline-block rounded-lg`}
                    style={{ backgroundColor: mainColor }}
                  ></span>
                </p>
                <h5 className="mb-0 font-bold text-lightBrown block md:hidden">
                  {formatPrice(price)}
                </h5>
              </div>
            </div>
            {/* product price */}
            <h5 className="mb-0 text-center text-lightBrown hidden md:block">
              {formatPrice(price)}
            </h5>
            {/* count buttons */}
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-3 place-items-center items-center justify-end w-[75px] md:w-[100px]">
                <button
                  className="font-bold text-2xl"
                  type="button"
                  name="dec"
                  onClick={() => decrease(id)}
                >
                  <BiMinus />
                </button>
                <h2 className="mb-0 font-bold text-2xl">{amount}</h2>
                <button
                  className="font-bold text-2xl"
                  type="button"
                  name="inc"
                  onClick={() => increase(id)}
                >
                  <BiPlus />
                </button>
              </div>
            </div>
            {/* subtotal price */}
            <h5 className="mb-0 text-center text-lightBlue hidden md:block">
              {formatPrice(price * amount)}
            </h5>
            {/* remove */}
            <button
              className="bg-darkRed w-[1.5rem] h-[1.5rem] flex items-center justify-center rounded-md"
              onClick={() => removeProduct(id)}
            >
              <FaTrash className="text-white text-xs" />
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CartProductInfo;
