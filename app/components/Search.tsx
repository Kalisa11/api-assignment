"use client";

import { useCityStore } from "@/src/utils/store";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  const [input, setInput] = useState("");
  const setCity = useCityStore((state) => state.setCity);

  function searchCity() {
    input !== "" && setCity(input);
  }
  return (
    <div className="relative flex justify-between max-w-[500px] items-center w-full m-auto pt-4 text-white z-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchCity();
        }}
        className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl "
      >
        <div>
          <input
            type="text"
            placeholder="Search City"
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none text-white focus:outline-none text-2xl"
          />
        </div>
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
