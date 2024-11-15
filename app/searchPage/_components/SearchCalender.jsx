'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SearchButton } from './SearchButton'; 

export const SearchCalendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="flex justify-center items-center mt-2 bg-gray-100">
      <div className="grid items-center gap-4">
        <DatePicker
          selected={startDate}
          onChange={(dates) => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
          }}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          className="bg-white p-4 rounded-md shadow-md"
        />
        <SearchButton />
      </div>
    </div>
  );
};
        
        
