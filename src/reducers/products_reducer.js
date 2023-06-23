import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../Actions";
export const reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const tempFeatured = [...action.payload].filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      loading: false,
      error: false,
      products: action.payload,
      featured: tempFeatured,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, loading: false, error: true };
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, singleProductLoading: true, singleProductError: false };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      singleProductLoading: false,
      singleProductError: false,
      singleProduct: action.payload,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return { ...state, singleProductLoading: false, singleProductError: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
