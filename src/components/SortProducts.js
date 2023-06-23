import React from "react";
import { useFilterContext } from "../context/FiltersContext";

const SortProducts = () => {
  const { sortProducts, sort } = useFilterContext();
  return (
    <>
      <form>
        <label htmlFor="sort" className="mr-3 text-[1rem]">
          Sort By
        </label>
        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={sortProducts}
          className="text-[1rem]"
        >
          <option value="price-lowest">Price (Lowest)</option>
          <option value="price-highest">Price (Highest)</option>
          <option value="name-a">Name (A - Z)</option>
          <option value="name-z">Name (Z - A)</option>
        </select>
      </form>
    </>
  );
};

export default SortProducts;
