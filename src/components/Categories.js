import React, { useEffect, useState } from "react";
import { useFilterContext } from "../context/FiltersContext";

const Categories = ({ categories }) => {
  const {
    filterProducts,
    filters: { category:categorie },
  } = useFilterContext();
  return (
    <div className="mb-5">
      <h5 className="mb-1 text-darkBlue font-bold tracking-wider">Category</h5>
      <div className="flex flex-col items-start gap-[.2rem]">
        {categories.map((category, index) => {
          return (
            <button
              name="category"
              key={index}
              className={`capitalize text-lightBlue ${
                categorie === category ? "border-b border-lightBlue" : "border-b border-transparent"
              }`}
              onClick={(e) => filterProducts(e)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
