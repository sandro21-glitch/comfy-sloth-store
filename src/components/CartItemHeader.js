import React from "react";

const CartItemHeader = () => {
  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-[316px,1fr,1fr,1fr,auto] text-center">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span className="w-5 h-5"></span>
      </div>
    </div>
  );
};

export default CartItemHeader;
