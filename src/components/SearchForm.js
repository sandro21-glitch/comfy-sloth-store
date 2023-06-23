import React from "react";
import { useFilterContext } from "../context/FiltersContext";

const SearchForm = () => {
  const {
    filterProducts,
    filters: { text },
  } = useFilterContext();
  return (
    <form onSubmit={(e) => e.preventDefault()} className="mb-5">
      <input
        type="text"
        placeholder="Search"
        className="bg-veryLightGrey p-2 rounded-md tracking-wider"
        name="text"
        value={text}
        onChange={(e) => filterProducts(e)}
      />
    </form>
  );
};

export default SearchForm;
