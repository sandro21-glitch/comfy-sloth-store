import React, { useEffect, useState } from "react";
import { formatPrice } from "../utils/helpers";
import AddToCart from "../components/AddToCart";
import StarRating from "../components/StarRating";
import { BsCheck } from "react-icons/bs";
const SingleProductInfo = ({ singleProduct }) => {
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id,
    company,
    colors,
  } = singleProduct;
  const [mainColor, setMainColor] = useState(null);
  useEffect(() => {
    if (colors && colors.length > 0) {
      setMainColor(colors[0]);
    }
  }, [colors]);
  return (
    <>
      <h2 className="font-bold">{name}</h2>
      <div className="flex items-center gap-2 mb-2">
        <StarRating rating={stars} />
        <p className="text-veryLightBlue mb-0">({reviews} customer reviews)</p>
      </div>
      <h5 className="font-bold text-darkBrown text-lg md:text-2xl">
        {formatPrice(price)}
      </h5>
      <p className="leading-7">{description}</p>
      {/* available */}
      <p className="w-[200px] grid grid-cols-2 capitalize">
        <span className="text-darkBlue font-bold">Available : </span>
        {stock > 1 ? "In Stock" : "Out Of Stock"}
      </p>
      {/* SKU  */}
      <p className="w-[200px] grid grid-cols-2 capitalize">
        <span className="text-darkBlue font-bold">SKU : </span>
        {id}
      </p>
      {/* Brand   */}
      <p className="w-[200px] grid grid-cols-2 capitalize">
        <span className="text-darkBlue font-bold">Brand : </span>
        {company}
      </p>
      <hr />
      {stock < 1 ? null : (
        <div className="grid grid-cols-2 w-[200px] mt-[1rem]">
          <span className="text-darkBlue font-bold">Colors :</span>
          <div className="flex items-center gap-2">
            {colors?.map((color, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  style={{ backgroundColor: color }}
                  className="w-5 h-5 rounded-full cursor-pointer flex items-center justify-center"
                  onClick={() => setMainColor(color)}
                >
                  {mainColor === color ? (
                    <BsCheck className="text-white" />
                  ) : null}
                </button>
              );
            })}
          </div>
          {/* count product */}
          <div>
            <AddToCart
              stock={stock}
              id={id}
              mainColor={mainColor}
              singleProduct={singleProduct}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProductInfo;
