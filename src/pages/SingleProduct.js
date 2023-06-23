import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/ProductContext";
import { single_product_url as url } from "../constants/Constants";
import SingleProductImages from "../components/SingleProductImages";
import SingleProductInfo from "../components/SingleProductInfo";

import Loading from "../components/Loading";
import Error from "../components/Error";
import { Link } from "react-router-dom";
const SingleProduct = () => {
  const { id } = useParams();
  const {
    getSingleProduct,
    singleProduct,
    singleProductLoading,
    singleProductError,
  } = useProductsContext();
  useEffect(() => {
    getSingleProduct(`${url}${id}`);
  }, [id]);

  if (singleProductLoading) {
    return <Loading />;
  }
  if (singleProductError) {
    return <Error />;
  }

  const { name, images } = singleProduct;
  return (
    <main>
      <Hero name={name} location={"/products"} />
      <div className="section section-center">
        <Link
          to="/products"
          className="uppercase btn mb-7 p-2 rounded-md text-sm"
        >
          Back to prodcuts
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* product images */}
          <article>
            <SingleProductImages images={images} />
          </article>
          {/* product info */}
          <article className="flex flex-col justify-center">
            <SingleProductInfo singleProduct={singleProduct} />
          </article>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
