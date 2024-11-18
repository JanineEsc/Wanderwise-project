"use client";
import React, { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [listingId , setListingId] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [contextCategories, setContextCategories] = useState([]);
  const [price, setPrice] = useState(0);
  const [guestContext, setGuestContext] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const [days, setDays] = useState(0);
  const [sum, setSum] = useState(0);
  const [listingContext, setListingContext] = useState([]);

  return (
    <BookingContext.Provider
      value={{
        listingId,
        setListingId,
        checkInDate,
        setCheckInDate,
        checkOutDate,
        setCheckOutDate,
        contextCategories,
        setContextCategories,
        price,
        setPrice,
        days,
        setDays,
        sum,
        setSum,
        listingContext,
        setListingContext,
        searchTitle,
        setSearchTitle,
        guestContext,
        setGuestContext,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};