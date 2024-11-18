'use client'

import { BookingContext } from "@/components/bookingContext";
import axios from "axios";
import { set } from "date-fns";
import { Star } from "lucide-react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export const Listing_card = () => {
  const { listingContext, setListingContext } = useContext(BookingContext);
  const [listings, setListings] = useState([]);

  const getListings = async () => {
    try {
      const response = await axios.get("api/listings");

      const listings = response.data;
      setListings(listings);
      setListingContext(listings);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    console.log(listingContext);
  }, [listingContext]);

  useEffect(() => {
    getListings();
    return

  }, [])


  return (
    <div className="grid max-w-72 mx-auto grid-cols-1 gap-2 pt-10 md:grid-cols-2 md:max-w-xl lg:grid-cols-3 lg:max-w-3xl xl:grid-cols-4 xl:max-w-5xl">
      {listings.map((listing) => (
        <div key={listing.id} className="w-full h-full mx-auto text-black">
          <div className="w-full">
            <Link href={`/detail/${listing.id}`}>
              <img
                src={listing.images[0].url}
                alt="house image"
                className="w-80 h-48 object-cover rounded-md shadow-lg border-2 border-gray-400"
              />
            </Link>         
             </div>
          <div className="w-full flex text-sm">
            <div className="w-1/2 flex flex-col font-semibold pt-1">
              <p>{listing.price} Euro/night</p>
              <p>{listing.title}</p>
            </div>
            <div className="w-1/2">
              <div className="flex justify-center pt-1 h-full text-xs">
                <Star className="h-5 w-5 fill-iconColor" />
                <p className="font-semibold">{listing.rating}</p>
                <p className="ml-1 underline font-bold">{listing.reviews} Reviews</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}