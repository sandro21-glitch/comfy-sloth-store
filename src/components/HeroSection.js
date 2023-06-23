import React from "react";
import primaryImage from "../images/hero-bcg-primary.jpeg";
import secondaryImage from "../images/hero-bcg-secondary.jpeg";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="section section-center min-h-[60vh] md:min-h-screen grid md:grid-cols-2 gap-[8rem] place-items-center ">
      <article className="">
        <h1 className="font-bold mb-5 tracking-wide">
          Design Your <br /> Comfort Zone
        </h1>
        <p className="mb-7 md:text-lg text-veryLightBlue md:max-w-[30rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link to='products' className="btn px-4 py-2 text-sm md:text-lg hover:opacity-75 hover:text-black rounded-md transition-all ease-in duration-100">
          SHOP NOW
        </Link>
      </article>
      <article className="md:block hidden relative w-full">
        <img
          src={primaryImage}
          alt="priamry"
          className="w-auto h-[550px] rounded-lg relative block object-cover"
        />
        <img
          src={secondaryImage}
          alt="secondary"
          className="w-[250px] absolute -left-1/4 bottom-0 rounded-lg"
        />
      </article>
    </section>
  );
};

export default HeroSection;
