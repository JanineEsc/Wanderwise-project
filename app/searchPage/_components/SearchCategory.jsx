'use client'

import { BookingContext } from "@/components/bookingContext";
import { set } from "date-fns";
import { useContext, useState, useEffect } from "react";

export const SearchCategory = () => {
  const { listingContext, contextCategories, setContextCategories } = useContext(BookingContext);
  const [inputValue, setInputValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleResultClick = (category) => {
    setInputValue(category);
    setFilteredResults([]);
    setContextCategories(uniqueCategories)
    console.log(contextCategories); // Debug log
  };

  useEffect(() => {
    if (inputValue) {
      const results = listingContext.filter((listing) =>
        listing.categories && listing.categories.some((cat) =>
          cat.toLowerCase().includes(inputValue.toLowerCase())
        ),
      );
      setFilteredResults(results);
      console.log("Filtered Results:", results); // Debug log
    } else {
      setFilteredResults([]);
    }
  }, [inputValue, listingContext]);

  const uniqueCategories = new Set();
  filteredResults.forEach(listing => {
    listing.categories.forEach(category => {
      if (category.toLowerCase().includes(inputValue.toLowerCase())) {
        uniqueCategories.add(category);
      }
    });
  });



  return (
    <div className="flex flex-col justify-center items-center">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Category"
        className="border-2 text-timberwolf bg-fernGreen m-2 p-2 rounded-lg w-full placeholder:text-timberwolf"
      />
      {filteredResults.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 text-black">
          <ul>
            {[...uniqueCategories].map((category) => (
              <li
                key={category}
                onClick={() => handleResultClick(category)}
                className="p-2 hover:bg-gray-200 cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}