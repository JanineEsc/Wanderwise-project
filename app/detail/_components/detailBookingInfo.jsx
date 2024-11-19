
"use client";

import { BookingContext } from "@/components/bookingContext";
import { ChevronDown } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { format, differenceInDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export const DetailBookingInfo = ({ listing }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const {
    totalPrice,
    setTotalPrice,
    days,
    setDays,
    checkInDate,
    checkOutDate,
    setCheckInDate,
    setCheckOutDate,
    guestContext,
    setGuestContext,
    price,
    setPrice,
  } = useContext(BookingContext);

  useEffect(() => {
    if (!checkInDate || !checkOutDate || !listing) return;

    const numberOfDays = differenceInDays(checkOutDate, checkInDate);
    const totalCost = listing.price * numberOfDays * (adults + children * 0.5);
    setPrice(listing.price);
    setDays(numberOfDays);
    setTotalPrice(totalCost);
  }, [checkInDate, checkOutDate, listing, adults, children]);


  useEffect(() => {
    setGuestContext({ adults, children });
  }, [adults, children, setGuestContext]);

  const incrementAdults = () => {
    setAdults((prev) => prev + 1);
  };
  const decrementAdults = () => {
    setAdults((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const incrementChildren = () => {
    setChildren((prev) => prev + 1);
  };
  const decrementChildren = () => {
    setChildren((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleCheckIn = () => setIsCheckInOpen(!isCheckInOpen);
  const toggleCheckOut = () => setIsCheckOutOpen(!isCheckOutOpen);

  return (
    <div className="bg-timberwolf border-darkGreen border-2 rounded-xl mt-3 text-xs p-1 px-2 w-11/12 md:w-2/3 xl:w-2/4 2xl:w-6/12 mx-auto">
      <div className="flex flex-col gap-3 items-center justify-between">
        <p className="text-xl text-black">
          {"Price per night " + listing.price + " Euro"}
        </p>
        <p
          className=" text-black font-bold cursor-pointer border-BrunswickGreen border-2 w-2/3 text-sm flex justify-between px-2"
          onClick={toggleDropdown}
        >
          Guests <ChevronDown />
        </p>
        {isDropdownOpen && (
          <div className="flex flex-col justify-between items-center mt-2">
            <div className="flex justify-between items-center w-2/3">
              <p className="mr-2 text-black">Adults</p>
              <div className="flex items-center">
                <button
                  onClick={decrementAdults}
                  className="px-2 py-1 text-black bg-gray-300 rounded"
                >
                  -
                </button>
                <p className="mx-2 text-black">{adults}</p>
                <button
                  onClick={incrementAdults}
                  className="px-2 py-1 text-black bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center w-2/3 mt-2">
              <p className="mr-2 text-black">Children</p>
              <div className="flex items-center">
                <button
                  onClick={decrementChildren}
                  className="px-2 py-1 text-black bg-gray-300 rounded"
                >
                  -
                </button>
                <p className="mx-2 text-black">{children}</p>
                <button
                  onClick={incrementChildren}
                  className="px-2 py-1 text-black bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center gap-3  mt-3 w-full">
        <div
          className="flex flex-col items-center cursor-pointer border-BrunswickGreen border-2 w-1/2 relative"
          onClick={toggleCheckIn}
        >
          <p className="mr-2 text-black flex justify-center items-center">
            {checkInDate ? format(checkInDate, "dd/MM/yyyy") : "Check-in Date"}{" "}
            <ChevronDown />
          </p>
          {isCheckInOpen && (
            <div className="absolute top-full left-0 w-full z-10">
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                inline
              />
            </div>
          )}
        </div>
        <div
          className="flex flex-col items-center cursor-pointer border-BrunswickGreen border-2 w-1/2 relative"
          onClick={toggleCheckOut}
        >
          <p className="mr-2 text-black flex justify-center items-center">
            {checkOutDate
              ? format(checkOutDate, "dd/MM/yyyy")
              : "Check-out Date"}{" "}
            <ChevronDown />
          </p>
          {isCheckOutOpen && (
            <div className="absolute top-full right-full w-full z-10 md:right-0">
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                inline
              />
            </div>
          )}
        </div>
      </div>
      <hr className="bg-BrunswickGreen mt-4 mb-4 opacity-100" />
      <div className="flex  justify-between">
        <p className="text-sm text-black">
          {listing.price} x {days} Days
        </p>
        <p className="text-sm text-black">{totalPrice} Euro</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-black">Cleaning Fee</p>
        <p className="text-sm text-black">{listing.cleaning_fee} Euro</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-black">WanderWise Fee</p>
        <p className="text-sm text-black">1 Euro</p>
      </div>
      <hr className="bg-BrunswickGreen mt-4 mb-4 opacity-100" />
      <div className="flex justify-between mb-3">
        <p className="text-sm text-black">Total</p>
        <p className="text-sm text-black">
          {totalPrice + listing.cleaning_fee + 1} Euro
        </p>
      </div>
    </div>
  );
};