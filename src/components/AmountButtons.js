import React from "react";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <>
      {/* count */}
      <div className="w-[100px] grid grid-cols-3 place-items-center gap-5 mb-5">
        <button className="text-3xl font-bold" onClick={() => decrease()}>
          -
        </button>
        <h2 className="mb-0 font-bold">{amount}</h2>
        <button className="text-3xl font-bold" type="button" onClick={() => increase()}>
          +
        </button>
      </div>
    </>
  );
};

export default AmountButtons;
