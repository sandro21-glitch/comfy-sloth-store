import React from "react";
import { useProductsContext } from "../context/ProductContext";
import FeaturedProducts from "./FeaturedProducts";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";
const Featured = () => {
  const { featured, loading, error } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <section className="section bg-veryLightGrey text-center">
      <div className="text-center flex flex-col items-center mb-10">
        <h2 className="font-bold">Featured Products</h2>
        {/* line */}
        <div className="w-[6rem] h-[.225rem] bg-darkBrown"></div>
      </div>
      <ul className="grid gap-5 md:grid-cols-3 section-center">
        {featured.slice(0, 3).map((product) => {
          return <FeaturedProducts key={product.id} {...product} />;
        })}
      </ul>
      {/* all products */}
      <Link
        to="products"
        className="btn text-sm px-3 py-2 rounded-md mt-10 shadow-md"
      >
        All Products
      </Link>
    </section>
  );
};

export default Featured;
