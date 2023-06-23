import React from "react";
import { navList } from "../constants/Constants";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import CartButtons from "./CartButtons";
const Sidebar = ({ setIsActive }) => {
  return (
    <li className="flex flex-col items-center">
      <div className="section-center">
        <div className="h-[5rem] flex justify-between w-full">
          <div className="w-full flex items-center justify-between">
            <div>
              <img src={logo} alt="logo" className="w-[170px] h-auto" />
            </div>
            <button
              onClick={() => setIsActive(false)}
              className="hover:opacity-75"
            >
              <IoMdClose className="text-darkBrown text-4xl" />
            </button>
          </div>
        </div>
        <ul className="w-full flex flex-col items-start justify-start space-y-5 my-5">
          {navList.map((list) => {
            return (
              <li
                key={list.id}
                onClick={()=>setIsActive(false)}
                className="text-xl text-veryLightBlue hover:translate-x-3 transition-all ease-in duration-200"
              >
                <Link to={list.path}>{list.page}</Link>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </div>
    </li>
  );
};

export default Sidebar;
