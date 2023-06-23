import React, { useState } from "react";
import { navList } from "../constants/Constants";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import CartButtons from "./CartButtons";

const Navbar = () => {
  const [active, setIsActive] = useState(false);

  return (
    <header className="h-[5rem] grid place-items-center">
      <nav className="section-center flex items-center justify-between">
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="logo" className="w-[170px] h-auto" />
        </Link>
        <ul className="hidden md:flex items-center space-x-5">
          {navList.map((list) => {
            return (
              <li
                key={list.id}
                className="text-xl font-thin text-veryLightBlue hover:translate-x-3
                 md:hover:translate-x-0 transition-all md:transition-none ease-in duration-200
                 relative after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[.1rem] after:transition-all after:duration-200 after:ease-in after:bg-lightBrown
                 "
              >
                <Link to={list.path}>{list.page}</Link>
              </li>
            );
          })}
        </ul>
        <ul
          className="block md:hidden cursor-pointer"
          onClick={() => setIsActive(true)}
        >
          <RxHamburgerMenu className="text-darkBrown text-3xl" />
        </ul>
        <div
          className={`block md:hidden fixed z-[99] left-0 top-0 bottom-0 w-full h-full
        bg-white ${
          active ? "-translate-x-0" : "-translate-x-full"
        } transition-transform ease-linear duration-200`}
        >
          <Sidebar setIsActive={setIsActive} />
        </div>
        <div className="hidden md:block">
          <CartButtons />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
