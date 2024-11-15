'use client'

import axios from "axios";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export const Listing_card = () => {
  const [listings, setListings] = useState([]);
  
  const getListings = async () => {
    try {
      const response = await axios.get("api/listings");

      const listings = response.data;
      setListings(listings);
      console.log(listings)
      

    } catch (err) {
      console.log(err);
    }
  } 

  useEffect(() => {
    getListings();
    return

  }, [])

  
  return (
    <div className="grid gap-2 ">
      {listings.slice(0,3).map((listing) => (
        <div key={listing.id} className="w-80 h-52 mx-auto p-4 text-black m-4 gap-3">
          <img src={listing.images[0].url} alt="house image" className=" w-full h-full object-cover rounded-md shadow-sm mt-2" />
          <div className="">
            <div className="flex items-center justify-between">
              <p>{listing.price}</p>
              <div className="flex">
                <Star className="h-5 w-5" />
                <p>{listing.rating}</p>
              </div>
            </div>
            <div>
              <p>{listing.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
              

          
          