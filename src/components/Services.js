import React from "react";
import { services } from "../constants/Constants";
const Services = () => {
  return (
    <section className="section bg-veryLighrBrown">
      <div className="section-center md:grid md:grid-cols-2">
        <h3 className="text-veryDarkBrown font-bold mb-5 md:mb-0">
          Custom Furniture <br /> Built Only For You
        </h3>
        <p className="text-veryDarkBrown md:mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </p>
      </div>
      <div className="section-center grid md:grid-cols-3 gap-7 md:translate-y-1/2">
        {services.map((service) => {
            const {id,icon,name,para} = service
          return <div key={id} className="bg-lightBrown text-center flex items-center flex-col py-10 px-5 rounded-sm">
                <div className="w-14 h-14 rounded-full flex-center bg-veryLighrBrown text-2xl mb-5">
                   {icon}
                </div>
                <h4 className="font-bold">{name}</h4>
                <p className="mb-0">{para}</p>
          </div>;
        })}
      </div>
    </section>
  );
};

export default Services;
