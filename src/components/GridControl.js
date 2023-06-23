import React from "react";
import GridSettings from "./GridSettings";
import SortProducts from "./SortProducts";

const GridControl = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-[auto,auto,1fr,auto] md:gap-5 items-center mb-10">
      <GridSettings products={products} />
      <p className="mb-0">{products.length} Products Found</p>
      <hr />
      <SortProducts />
    </div>
  );
};

export default GridControl;
