import React, { useContext, useEffect, useReducer } from "react";
import { filters_reducer } from "../reducers/filters_reducer";
import {
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_SORT,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  CLEAR_FILTERS,
} from ".././Actions";
import { useProductsContext } from "./ProductContext";
const Filters = React.createContext();

const initialState = {
  allProducts: [],
  filteredProducts: [],
  listView: false,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FiltersContext = ({ children }) => {
  const [state, dispatch] = useReducer(filters_reducer, initialState);
  const { products } = useProductsContext();

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: UPDATE_FILTERS });
    dispatch({ type: UPDATE_SORT });
  }, [state.allProducts, state.sort, state.filters]);

  const setActiveGrid = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setActiveList = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  const sortProducts = (e) => {
    const value = e.target.value;
    dispatch({ type: SORT_PRODUCTS, payload: value });
  };

  const filterProducts = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    if (name === "price") {
      value = e.target.value;
    }
    if (name === "price") {
      value = Number(value);
    }
    if(name === 'color') {
      value = e.target.dataset.id
    }

    dispatch({ type: FILTER_PRODUCTS, payload: { value, name } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <Filters.Provider
      value={{
        ...state,
        setActiveGrid,
        setActiveList,
        sortProducts,
        filterProducts,
        clearFilters,
      }}
    >
      {children}
    </Filters.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(Filters);
};

export default FiltersContext;
