'use client'

import { BookingContext } from "@/components/bookingContext"
import getDocumentWithId from "@/db/getDocumentWithId"
import { useContext, useEffect, useState } from "react"
import { DetailListingCard } from "../detail/_components/detailListingCard"
import { RefreshCcw } from "lucide-react";
import { Logo } from "../searchPage/_components/Logo"
import { amenitiesIcons } from "@/utils/amenitiesIcons";
import { format } from "date-fns"
import Link from "next/link"
import { NavbarMobile } from "../_components/NavbarMobile"

const PayPage = () => {
  const [listing, setListing] = useState(null)
  const { listingId, setListingId, checkOutDate, checkInDate, totalPrice } = useContext(BookingContext);


  // Use the listing ID to fetch the document from Firestore
  useEffect(() => {
    console.log(listingId + " - Context ID");
    const fetchListing = async () => {
      try {
        const result = await getDocumentWithId("listings", listingId);
        console.log(result);
        if (result) {
          setListing(result);
        } else {
          setError("No such document!");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    if (listingId) {
      fetchListing();
    }
  }, [listingId]);

  if (!listing) {
    return (
      <div>
        Loading...
        <RefreshCcw className="animate-spin  h-8 w-8" />
      </div>
    );
  }

  const handleCircleClick = () => {
    console.log("Circle clicked!");
  };


  return (
    <main className="bg-timberwolf absolute min-h-screen text-black pb-20">
      <Logo />
      <div className="grid grid-cols-2 mt-2 grid-rows-[auto,auto,auto,auto,auto,auto,auto,auto,] gap-3">
        <div className="col-span-2 flex justify-center px-5" >
          <DetailListingCard listing={listing} />
        </div>
        <div className="col-span-2 border-2 border-BrunswickGreen shadow-xl rounded-xl text-xs w-10/12 mx-auto">
          <div className="flex">
            <p className="m-4">
              Booked:  {checkInDate ? format(new Date(checkInDate), 'dd/MM/yyyy') : 'N/A'} - {checkOutDate ? format(new Date(checkOutDate), 'dd/MM/yyyy') : 'N/A'}
            </p>
          </div>
          <div className="w-11/12 flex flex-col gap-5 p-2 mx-auto">
            {listing.amenities.map((amenity) => (
              amenitiesIcons[amenity] && (
                <div key={amenity} className="flex flex-row items-center gap-5 space-x-2 text-xs">
                  {amenitiesIcons[amenity]}
                  <span>{amenity}</span>
                </div>
              )
            ))}
          </div>
        </div>
        <div className="col-span-2 text-center">
          <p className="font-bold font-xxl p-5">Credit Card Details</p>
        </div>
        <div className="col-span-2 flex justify-center gap-4 border-2 border-BrunswickGreen shadow-xl rounded-xl w-10/12 mx-auto">
          <div className="text-sm p-2">
            <p>Payment</p>
            <p>Method</p>
          </div>
          <div className="flex gap-3 p-3">
            <img src="/mastercard.png" alt="mastercard" className='w-10 h-7' />
            <img src="/visa.png" alt="visa card" className='w-10 h-7' />
            <img src="/amex.png" alt="amex card" className='w-10 h-7' />
          </div>
        </div>
        <div className="col-span-2 justify-center text-sm gap-4 border-2 border-BrunswickGreen shadow-xl rounded-xl w-10/12 mx-auto">
          <p className="m-4">Debit Card</p>
          <div className="flex  border-BrunswickGreen border-2 px-3 py-2 mx-4 mt-4 rounded-xl shadow-2xl">
            <img src="/mastercard.png" alt="mastercard" className='w-10 h-7' />
            <p className="text-xs p-1"> Master Bank**** **** 1234</p>
            <div className="w-6 h-6 bg-timberwolf border-2 border-blue-500 rounded-full flex items-center justify-center">
              <div
                className="w-3 h-3 bg-blue-500 rounded-full cursor-pointer"
                onClick={handleCircleClick}
              ></div>
            </div>
          </div>
          <div className="flex gap-3 border-BrunswickGreen border-2 px-3 py-2 mx-4 mt-4 rounded-xl shadow-2xl">
            <img src="/visa.png" alt="visa card" className='w-10 h-7' />
            <p className="text-xs p-1"> Visa Bank**** **** 1234</p>
            <div className="w-6 h-6 bg-timberwolf border-2 border-blue-500 rounded-full flex items-center justify-center">
            </div>
          </div>
          <div className="m-4">
            <p> + Add New Card </p>
          </div>
        </div>
        <div className="col-span-2 justify-center text-sm border-2 border-BrunswickGreen shadow-xl rounded-xl w-10/12 mx-auto">
          <p className="m-4">Payment Details</p>
          <div className="flex justify-between w-full">
            <p className="m-4">Order</p>
            <p className="m-4">Euro {totalPrice}</p>
          </div>
          <hr className="bg-BrunswickGreen w-11/12 md:w-3/4 mx-auto h-0.5 col-span-2" />
          <div className="flex justify-between w-full">
            <p className="m-4">Total</p>
            <p className="m-4">Euro {totalPrice}</p>
          </div>
        </div>
        <div className="col-span-2 flex justify-center gap-4 border shadow-xl rounded-xl w-10/12 mx-auto">
        <Link className="w-full" href='/pay/paySuccess'>
            <button className="bg-BrunswickGreen w-full text-timberwolf px-4 py-2 rounded-2xl">Pay</button>
          </Link>
        </div>
      </div>
      <NavbarMobile />
    </main>
  )

}
export default PayPage