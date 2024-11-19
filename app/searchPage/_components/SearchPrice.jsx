'use client'

import { BookingContext } from "@/components/bookingContext";
import { useContext, useState } from "react";

export const SearchPrice = () => {
  const { price, setPrice } = useContext(BookingContext);
  const [showSlider, setShowSlider] = useState(false);

  const handleSliderChange = (event) => {
    setPrice(event.target.value);
    // console.log(price)
  };

  const handleInputClick = () => {
    setShowSlider(!showSlider);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <input 
        type="text"
        value={`Price: ${price}`} 
        readOnly
        onClick={handleInputClick}
        className="border-2 text-timberwolf bg-fernGreen m-2 p-2 rounded-lg w-full placeholder:text-timberwolf"
      />
      {showSlider && (
        <input 
          type="range"
          min="0"
          max="1000"
          value={price}
          onChange={handleSliderChange}
          className="w-auto appearance-none h-2 bg-fernGreen rounded-lg cursor-pointer"
          style={{
            accentColor: 'gray', // Green thumb color
          }}
        />
      )}
    </div>
  );
};