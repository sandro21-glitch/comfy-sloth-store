import React from "react";
import SearchForm from "../components/SearchForm";
import Categories from "../components/Categories";
import Companies from "../components/Companies";
import { getUniqueValues } from ".././utils/helpers";
import { useFilterContext } from "../context/FiltersContext";
import { formatPrice } from "../utils/helpers";
import { BsCheck } from "react-icons/bs";
const Filters = () => {
  const {
    allProducts,
    filterProducts,
    clearFilters,
    filters: { price, shipping, max_price, min_price, color: singleColor },
  } = useFilterContext();
  const categories = getUniqueValues(allProducts, "category");
  const companies = getUniqueValues(allProducts, "company");
  const colors = getUniqueValues(allProducts, "colors");
  return (
    <article className="relative">
      <div className="md:sticky md:top-[1rem]">
        <SearchForm />
        <Categories categories={categories} />
        <Companies companies={companies} />
        {/* colors */}
        <div className="flex items-center gap-2 mb-5">
          {colors.map((color, index) => {
            if (color === "all") {
              return (
                <button
                  key={index}
                  name="color"
                  type="button"
                  data-id={color}
                  className={`capitalize ${
                    singleColor === color
                      ? "border-b border-lightBlue"
                      : "border-b border-transparent"
                  }`}
                  onClick={filterProducts}
                >
                  all
                </button>
              );
            }
            return (
              <button
                key={index}
                name="color"
                type="button"
                data-id={color}
                style={{ backgroundColor: color }}
                className={`w-4 h-4 rounded-full flex items-center justify-center ${
                  singleColor === color ? "opacity-100" : "opacity-50"
                }`}
                onClick={filterProducts}
              >{color === singleColor ? <BsCheck className="text-white font-bold text-lg " /> : ''}</button>
            );
          })}
        </div>
        {/* price filter */}
        <div className="form-control">
          <h5 className="font-bold mb-1 tracking-wider">price</h5>
          <p className="mb-0">{formatPrice(price)}</p>
          <input
            type="range"
            name="price"
            min={min_price}
            max={max_price}
            value={price}
            onChange={filterProducts}
          />
        </div>
        {/* shipping filter */}
        <div className="flex items-center gap-10 mb-5">
          <label htmlFor="shipping" className="capitalize">
            free shipping
          </label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={filterProducts}
          />
        </div>
        {/* clear filters */}
        <button
          name="clear"
          onClick={clearFilters}
          type="button"
          className="text-sm text-white tracking-widest px-5 py-1 bg-darkRed block rounded-md"
        >
          Clear Filters
        </button>
      </div>
    </article>
  );
};

export default Filters;
