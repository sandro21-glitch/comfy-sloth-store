import React, { useContext, useReducer, useState, useEffect } from "react";
import { cart_reducer } from "../reducers/cart_reducer";
import {
  ADD_CART,
  COUNT_CART_TOTALS,
  CLEAR_CART_ITEMS,
  CART_BUTTONS,
  REMOVE_PRODUCT,
} from "../Actions";
import { formatPrice } from "../utils/helpers";
const CartProducts = React.createContext();

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};
const initialState = {
  cart: getLocalStorage(),
  totalPrice: 0,
  fee: 534,
  itemsCount: 0,
  subTotal: 0,
};
const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState);

  const clearCartItems = () => {
    dispatch({ type: CLEAR_CART_ITEMS });
  };

  const addProductCart = (id, amount, mainColor, singleProduct) => {
    dispatch({
      type: ADD_CART,
      payload: { id, amount, mainColor, singleProduct },
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cart]);

  const cartButtons = (id, name) => {
    dispatch({ type: CART_BUTTONS, action: { id, name } });
  };

  const removeProduct = (id) => {
    dispatch({ type: REMOVE_PRODUCT, payload: id });
  };
  return (
    <CartProducts.Provider
      value={{
        ...state,
        addProductCart,
        clearCartItems,
        cartButtons,
        removeProduct,
      }}
    >
      {children}
    </CartProducts.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartProducts);
};

export default CartContext;
