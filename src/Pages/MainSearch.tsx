import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainSearch = () => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      navigate(`/books/${query}`);
    }
  };

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === "Enter") {
      // Trigger the search function
      handleSearch();
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="text-[6rem] font-extrabold textGradient">
        Book Wanderer
      </div>
      <p className="text-3xl text-[#7b09d2] font-extrabold text-center">
        Search the world's most comprehensive index of full-text books.
      </p>
      <div className="flex  w-full justify-center  mt-10">
        <input
          type="text"
          className="border-2 text-[#7b09d2] p-2 border-[#7b09d2] w-[80%] "
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className="bg-[#7b09d2] text-white p-2" onClick={handleSearch}>
          Search
        </button>
      </div>
      <button  className="text-3xl active:scale-90 text-[#7b09d2] mt-5 font-extrabold text-center">
        My Library
      </button>
    </div>
  );
};

export default MainSearch;
