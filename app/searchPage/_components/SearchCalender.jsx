'use client';

import { BookingContext } from '@/components/bookingContext';
import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export const SearchCalendar = () => {
  const { checkInDate, setCheckInDate, checkOutDate, setCheckOutDate } = useContext(BookingContext);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setCheckInDate(start);
    setCheckOutDate(end);
  };

  useEffect(() => {
    console.log('Check-in Date:', checkInDate);
    console.log('Check-out Date:', checkOutDate);
  }, [checkInDate, checkOutDate]);

  return (
    <div className="flex justify-center items-center mt-2 bg-timberwolf">
      <div className="grid items-center gap-4">
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          className="bg-white p-4 rounded-md shadow-md"
        />
      </div>
    </div>
  );
};