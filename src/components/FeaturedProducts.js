import React from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import {formatPrice} from '../utils/helpers'
import { Link } from "react-router-dom";
const FeaturedProducts = ({ id, name, price, image }) => {
  return (
    <li>
      <div className="relative group">
        <img
          src={image}
          alt={name}
          className="w-full h-[220px] object-cover mb-2 rounded-md "
        />
        {/* hover overlay && search */}
        <div className="rounded-md absolute left-0 top-0 w-full h-full group-hover:bg-transparentBlack transition-all ease-in duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Link to={`/singleProduct/${id}`} className="p-2 bg-darkBrown rounded-full  cursor-pointer">
            <AiOutlineSearch className="text-white text-xl font-bold" />
          </Link>
        </div>
      </div>
      <footer className="flex items-center justify-between">
        <h5 className="tracking-widest">{name}</h5>
        <p className="text-darkBrown">{formatPrice(price)}</p>
      </footer>
    </li>
  );
};

export default FeaturedProducts;
