import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
import { useFilterContext } from "../context/FiltersContext";

const GridSettings = () => {
  const { setActiveGrid, setActiveList, listView } = useFilterContext();
  return (
    <div className="flex items-center gap-2">
      <button
        className={`p-2 ${
          listView ? "bg-white  text-black" : "bg-black text-white"
        } border border-lightBlue rounded-md`}
        onClick={() => setActiveGrid()}
      >
        <BsFillGridFill />
      </button>
      <button
        className={`p-2 ${
          listView ? "bg-black text-white" : "bg-white text-black"
        }  border border-lightBlue rounded-md`}
        onClick={() => setActiveList()}
      >
        <ImMenu />
      </button>
    </div>
  );
};

export default GridSettings;
