"use client";

import { BookingContext } from "@/components/bookingContext";
import { useContext, useEffect, useState } from "react";

export const SearchDestination = () => {
  const { listingContext, setSearchTitle, searchTitle } = useContext(BookingContext);
  const [inputValue, setInputValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    if (inputValue) {
      const results = listingContext.filter((listing) =>
        listing.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [inputValue, listingContext]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleResultClick = (title) => {
    // sets input value of destination to the clicked result
    setInputValue(title);
    // sets the search title context to the clicked result to be used in the search button
    setSearchTitle(title);
    console.log(searchTitle)
    //For some reason the filtered results are not being cleared after a result is clicked
    setFilteredResults([]);
  };

  return (
    <div className="relative flex justify-center items-center text-black">
      <input
        type="text"
        placeholder="Destination"
        value={inputValue}
        onChange={handleInputChange}
        className="border-2 text-timberwolf bg-fernGreen m-2 p-2 rounded-lg w-auto placeholder:text-timberwolf"
      />
      {filteredResults.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <ul>
            {filteredResults.map((listing) => (
              <li
                key={listing.id}
                onClick={() => handleResultClick(listing.title)}
                className="p-2 hover:bg-gray-200 cursor-pointer"
              >
                {listing.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};