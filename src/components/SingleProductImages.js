import React, { useEffect, useState } from "react";

const SingleProductImages = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(0);

  const handleMainImage = (index) => {
    setMainImage(index);
  };

  return (
    <>
      {/* main image */}
      <img
        src={images[mainImage]?.url}
        alt="main image"
        className="mb-5 w-full h-[300px] md:h-[600px] lg:h-[500px] bg-center block object-cover rounded-lg"
      />
      {/* other images */}
      <div className=" grid grid-cols-5 gap-2">
        {images.map((img, index) => {
          return (
            <img
              key={index}
              src={img.url}
              alt="main image"
              className={`w-full h-[50px] md:h-[100px] rounded-md cursor-pointer object-cover ${
                index === mainImage
                  ? "border-2 border-darkBrown"
                  : "border-none"
              }`}
              onClick={() => handleMainImage(index)}
            />
          );
        })}
      </div>
    </>
  );
};

export default SingleProductImages;
