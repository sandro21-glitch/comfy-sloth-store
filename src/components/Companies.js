import React from "react";
import { useFilterContext } from "../context/FiltersContext";

const Companies = ({ companies }) => {
  const {
    filterProducts,
    filters: { company },
  } = useFilterContext();
  return (
    <div className="mb-5">
      <h5 className="mb-1 text-darkBlue font-bold tracking-wider">company</h5>
      <select
        onChange={(e) => filterProducts(e)}
        className=" bg-veryLightGrey"
        name="company"
        id="company"
        value={company}
      >
        {companies.map((company, index) => {
          return (
            <option value={company} key={index}>
              {company}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Companies;
