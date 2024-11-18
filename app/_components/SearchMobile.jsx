'use client'

import { Search, Settings2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Filter } from "./Filter";

export const SearchMobile = () => {
  const [filterIsOpen, setFilterIsOpen] = useState(false)
  const filterRef = useRef(null);


  const handleSettingClick = () => {
    setFilterIsOpen(!filterIsOpen)
  }

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setFilterIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center items-center mt-1 w-full gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="bg-BrunswickGreen placeholder-timberwolf flex items-center gap-8 py-2 w-1/2 px-3 rounded-3xl"
        >
        </input>
        <Settings2
          onClick={handleSettingClick}
          className="text-BrunswickGreen w-8 h-8 cursor-pointer"
        />
      </div>
      <div className="flex justify-center items-center mt-1 w-full gap-2" ref={filterRef}>
        {filterIsOpen && (
          <Filter />
        )}
      </div>
    </div>
  );
}