'use client'


import { NavbarMobile } from "@/app/_components/NavbarMobile"
import { Logo } from "@/app/searchPage/_components/Logo"
import { BookingContext } from "@/components/bookingContext"
import getDocumentWithId from "@/db/getDocumentWithId"
import { set } from "date-fns"
import { RefreshCcw, Star } from "lucide-react"
import { useContext, useEffect, useState } from "react"


const DetailPage = () => {
  const { listingId, setListingId } = useContext(BookingContext)
  const [listing, setListing] = useState(null)


  // Get the listing ID from the URL
  useEffect(() => {
    const urlPath = window.location.pathname
    console.log(window.location.pathname)
    const urlId = urlPath.split("/")[2]
    setListingId(urlId);
    console.log(urlId + " - URL ID");
  }, [setListingId])

  // Use the listing ID to fetch the document from Firestore
  useEffect(() => {
    // console.log(listingId + " - Context ID");

    const fetchListing = async () => {
      try {
        const result = await getDocumentWithId("listings", listingId);
        console.log(result)
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
    return <div>
      Loading...
      <RefreshCcw className="animate-spin  h-8 w-8" />
    </div>;
  }

  return (
    <main className="bg-timberwolf min-h-screen text-black">
      <Logo />
      <div className="flex flex-col lg:flex-row justify-center p-5">
        <img
          src={listing.images[0].url}
          alt="Listing Image"
          className="w-full lg:w-1/2 max-w-md h-auto object-cover rounded-xl"
        />
        <div className="flex flex-col justify-between lg:ml-5 lg:w-1/2">
          <div className="flex justify-between items-center text-xs mt-5 lg:mt-0">
            <p>{listing.price} Sek/Night</p>
            <div className="flex space-x-2 md:hidden">
              <Star className="h-4 w-4 fill-iconColor" />
              <p>{listing.rating} Stars</p>
              <p className="font-bold underline">{listing.reviews} Reviews</p>
            </div>
          </div>
          <div className="text-xs mt-3 lg:mt-5">
            <p>{listing.title}</p>
            <p className="mt-3">{listing.description}</p>
          </div>
        </div>
      </div>
      <hr className=" bg-BrunswickGreen m-4 h-0.5 border-none" />
      <div className=" border border-BrunswickGreen rounded p-4 m-4">
        <p className="text-xs p-4">{listing.cancellation_policy}</p>
      </div>
      <NavbarMobile />
    </main>
  )
}
export default DetailPage