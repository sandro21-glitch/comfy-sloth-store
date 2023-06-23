import React from "react";
import { Link } from "react-router-dom";
const Hero = ({ name, location }) => {
  return (
    <div className="bg-veryLighrBrown section">
      <article className="section-center">
        <h3 className="text-veryDarkBrown font-bold italic">
          <Link
            to="/"
            className="text-lightBrown font-bold mr-4 cursor-pointer hover:text-veryDarkBrown transition-colors ease-in duration-150"
          >
            Home
          </Link>
          /
          <Link
            to={location}
            className={`capitalize ${
              name
                ? "text-lightBrown hover:text-veryDarkBrown transition-colors ease-in duration-150"
                : ""
            }`}
          >
            {" "}
            {location.replace(/^./, "")}
          </Link>
          {name && <span> / {name}</span>}
        </h3>
      </article>
    </div>
  );
};

export default Hero;
