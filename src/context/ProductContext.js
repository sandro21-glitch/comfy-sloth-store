import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../Actions";
import { reducer } from "../reducers/products_reducer";
import { products_url } from "../constants/Constants";
const Products = React.createContext();
const initialState = {
  loading: false,
  error: false,
  products: [],
  featured: [],
  singleProduct: {},
  singleProductLoading: false,
  singleProductError: false,
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(products_url);
      const { data } = response;
      // console.log(response);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      const { data } = response;
      // console.log(response);
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Products.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </Products.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(Products);
};

export default ProductContext;
