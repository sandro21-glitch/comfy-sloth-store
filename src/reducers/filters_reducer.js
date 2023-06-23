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

export const filters_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    // console.log(maxPrice);
    return {
      ...state,
      allProducts: action.payload,
      filteredProducts: action.payload,
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, listView: false };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, listView: true };
  }
  // SORT_PRODUCTS
  if (action.type === UPDATE_SORT) {
    const { sort, filteredProducts } = state;
    let tempProducts = [];
    if (sort === "price-lowest") {
      tempProducts = filteredProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProducts = filteredProducts.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = filteredProducts.sort(function (a, b) {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filteredProducts: tempProducts };
  }
  // update sort
  if (action.type === SORT_PRODUCTS) {
    return { ...state, sort: action.payload };
  }
  // filtering
  if (action.type === FILTER_PRODUCTS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  // update filters
  if (action.type === UPDATE_FILTERS) {
    let { allProducts } = state;
    const {
      text,
      company,
      category,
      color,
      min_price,
      max_price,
      price,
      shipping,
    } = state.filters;
    let tempProducts = [...allProducts];
    // filter by text
    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().startsWith(text)
      );
    }
    // filter by category
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    // filter by company
    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }
    // filter by price
    tempProducts = tempProducts.filter((product) => product.price <= price);

    // filter by shipping
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }
    // filter by colors
    if (color !== "all") {
      tempProducts = tempProducts.filter((product) =>
        product.colors.find((c) => c == color)
      );
    }
    return { ...state, filteredProducts: tempProducts };
  }

  // clear filters
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        min_price: 0,
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
