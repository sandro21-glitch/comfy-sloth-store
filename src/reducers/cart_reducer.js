import {
  ADD_CART,
  COUNT_CART_TOTALS,
  CLEAR_CART_ITEMS,
  CART_BUTTONS,
  REMOVE_PRODUCT,
} from "../Actions";
export const cart_reducer = (state, action) => {
  if (action.type === ADD_CART) {
    let { cart } = state;
    let { id, amount, mainColor, singleProduct } = action.payload;
    // console.log(id, amount, mainColor);
    let cartProduct = cart.find((product) => product.id === id + mainColor);
    if (cartProduct) {
      const tempProduct = cart.map((prod) => {
        if (prod.id === id + mainColor) {
          let newAmount = prod.amount + amount;
          if (newAmount > prod.max) {
            newAmount = prod.max;
          }
          return { ...prod, amount: newAmount };
        }
        return prod;
      });
      return { ...state, cart: tempProduct };
    } else {
      let newProduct = {
        id: id + mainColor,
        name: singleProduct.name,
        mainColor,
        amount,
        image: singleProduct.images[0].url,
        price: singleProduct.price,
        max: singleProduct.stock,
      };
      return { ...state, cart: [...cart, newProduct] };
    }
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { cart } = state;
    const count = cart.reduce((acc, cur) => {
      return acc + cur.amount;
    }, 0);
    const total = cart.reduce((acc, cur) => {
      if (cur.amount > cur.max) {
        acc += cur.price * cur.max;
      } else {
        acc += cur.price * cur.amount;
      }
      return acc;
    }, state.fee);

    return {
      ...state,
      itemsCount: count,
      totalPrice: total,
      subTotal: total - state.fee,
    };
  }
  if (action.type === CART_BUTTONS) {
    const { id, name } = action.action;
    const { cart } = state;
    const tempProduct = cart.map((item) => {
      if (item.id === id) {
        if (name === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (name === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });

    return { ...state, cart: tempProduct };
  }

  if (action.type === CLEAR_CART_ITEMS) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE_PRODUCT) {
    const { cart } = state;
    let newProduct = cart.filter((product) => product.id !== action.payload);
    return { ...state, cart: newProduct };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
