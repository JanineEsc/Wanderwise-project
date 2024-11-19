'use client'

import { BookingContext } from "@/components/bookingContext";
import { ChevronDown } from "lucide-react";
import { useState, useContext, useRef, useEffect } from "react";


export const SearchGuest = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const { guestContext, setGuestContext } = useContext(BookingContext);
  const dropdownRef = useRef(null);

  const handleInputFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setGuestContext({ adults, children });
  }, [adults, children, setGuestContext]);

  useEffect(() => {
    console.log('guestContext:', guestContext);
  }, [guestContext]);

  const incrementAdults = () => {
    setAdults((prevAdults) => prevAdults + 1);
  };

  const decrementAdults = () => {
    setAdults((prevAdults) => (prevAdults > 1 ? prevAdults - 1 : prevAdults));
  };

  const incrementChildren = () => {
    setChildren((prevChildren) => prevChildren + 1);
  };

  const decrementChildren = () => {
    setChildren((prevChildren) => (prevChildren > 0 ? prevChildren - 1 : prevChildren));
  };

  return (
    <div className="relative flex flex-col justify-center text-sm items-center text-black" ref={dropdownRef}>
      <div className="flex items-center border-2 text-timberwolf bg-fernGreen m-2 p-2 rounded-lg w-full">
        <input
          type="text"
          placeholder={`Guests: ${adults} adults ${children} children`}
          className="bg-fernGreen placeholder:text-timberwolf flex-grow w-full focus:outline-none"
          onFocus={handleInputFocus}
          readOnly
        />
        <ChevronDown className="text-timberwolf cursor-pointer" />
      </div>
      {isDropdownOpen && (
        <div className="absolute top-full mt-2 bg-white border rounded-lg shadow-lg p-4 z-10">
          <div className="flex justify-between items-center mb-2">
            <span>Adults</span>
            <div className="flex items-center">
              <button onClick={decrementAdults} className="px-2 py-1 bg-gray-200 rounded">-</button>
              <span className="mx-2">{adults}</span>
              <button onClick={incrementAdults} className="px-2 py-1 bg-gray-200 rounded">+</button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>Children</span>
            <div className="flex items-center">
              <button onClick={decrementChildren} className="px-2 py-1 bg-gray-200 rounded">-</button>
              <span className="mx-2">{children}</span>
              <button onClick={incrementChildren} className="px-2 py-1 bg-gray-200 rounded">+</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};