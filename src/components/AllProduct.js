import React from "react";
import { useProductsContext } from "../context/ProductContext";
import Loading from "./Loading";
import Error from "./Error";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import GridControl from "./GridControl";
import { useFilterContext } from "../context/FiltersContext";
import { AiOutlineSearch } from "react-icons/ai";

const AllProduct = () => {
  const { loading, error } = useProductsContext();
  const { filteredProducts } = useFilterContext();
  const { listView } = useFilterContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  if (filteredProducts.length < 1) {
    return <h5 className="text-darkBlue font-bold">Sorry, no products matched your search.</h5>
  }

  return (
    <div>
      <GridControl products={filteredProducts} />
      <article
        className={`grid  ${
          listView
            ? "items-center gap-10"
            : "grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5"
        } `}
      >
        {filteredProducts.map((product) => {
          const { id, price, image, name, description } = product;
          return (
            <div
            key={id}
            className={`grid ${
              listView
              ? "md:grid-cols-1 lg:grid-cols-[auto,1fr] gap-5"
              : "grid-cols-1"
            }`}
            >
              <div className="relative group mb-2">
                {/* hover overlay && search */}
                <div
                  className={`rounded-md ${
                    listView ? "hidden" : "block"
                  } absolute left-0 top-0 w-full h-full group-hover:bg-transparentBlack transition-all ease-in duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100`}
                >
                  <Link
                    to={`/singleProduct/${id}`}
                    className="p-2 bg-darkBrown rounded-full  cursor-pointer"
                  >
                    <AiOutlineSearch className="text-white text-xl font-bold" />
                  </Link>
                </div>
                {/* hover overlay && search */}
                <img
                  src={image}
                  alt="product image"
                  className={`${
                    listView ? "w-[300px] h-[200px]" : "w-full h-[175px]"
                  } block object-cover bg-center rounded-md`}
                />
              </div>
              <div
                className={` ${
                  listView
                    ? "flex flex-col justify-center"
                    : "flex justify-between items-center"
                } w-full`}
              >
                <h5
                  className={`tracking-widest mb-0 ${
                    listView ? "font-bold text-[1.5rem]" : "font-normal"
                  }`}
                >
                  {name}
                </h5>
                <p
                  className={`text-darkBrown mb-0 ${
                    listView ? "font-bold mb-2" : "font-normal"
                  }`}
                >
                  {formatPrice(price)}
                </p>
                {listView && <p>{description.substring(1, 150)} ...</p>}
                {listView && (
                  <Link
                    to={`/singleProduct/${id}`}
                    className="btn text-[.5rem] w-16 p-1 rounded-md text-center"
                  >
                    Details
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default AllProduct;
