"use client";

import { Footer } from "@/app/_components/Footer";
import { NavbarMobile } from "@/app/_components/NavbarMobile";
import { Logo } from "@/app/searchPage/_components/Logo";
import { BookingContext } from "@/components/bookingContext";
import getDocumentWithId from "@/db/getDocumentWithId";
import { amenitiesIcons } from "@/utils/amenitiesIcons";
import { useContext, useEffect, useState } from "react";
import { DetailListingCard } from "../_components/detailListingCard";
import { RefreshCcw } from "lucide-react";
import { DetailBookingInfo } from "../_components/detailBookingInfo";
import Link from "next/link";
import { SmallProfileMenu } from "@/app/_components/smallProfileMenu";
import { ProfilMenu } from "@/app/_components/ProfileMenu";
import { Header } from "@/app/_components/header";
import { SearchMobile } from "@/app/_components/SearchMobile";

const DetailPage = () => {
  const { listingId, setListingId } = useContext(BookingContext);
  const [listing, setListing] = useState(null);

  // Get the listing ID from the URL
  useEffect(() => {
    const urlPath = window.location.pathname;
    console.log(window.location.pathname);
    const urlId = urlPath.split("/")[2];
    setListingId(urlId);
    console.log(urlId + " - URL ID");
  }, [setListingId]);

  // Use the listing ID to fetch the document from Firestore
  useEffect(() => {
    // console.log(listingId + " - Context ID");

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

  const owner = listing.owner[0];


  return (
    <main className="bg-timberwolf min-h-screen text-black flex flex-col pb-28">
      <Header />
      <SearchMobile />
      <div className="grid grid-cols-2 mt-2 grid-rows-[auto,auto,auto,auto,auto,auto,auto,auto,] gap-3 md:gap-0">
        <div className="col-span-2 flex justify-center px-5 md:col-span-1 md:px-0 md:ml-10 md:flex md:justify-end">
          <DetailListingCard listing={listing} />
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col gap-3 justify-evenly md:mr-10 lg:w-2/3">
          <div className="col-span-2 flex justify-center md:justify-start">
          <p className="px-6">{listing.description}</p>
        </div>
        <hr className="bg-black w-11/12 md:w-11/12 mx-auto h-0.5 col-span-2 xl:w-9/12" />
        <div className="col-span-2 w-11/12 gap-3 flex flex-wrap justify-center items-center space-x-4 md:justify-start md:pl-4">
          {listing.amenities.map((amenity) => (
            amenitiesIcons[amenity] && (
              <div key={amenity} className="flex flex-col items-center space-x-2 text-xs">
                {amenitiesIcons[amenity]}
                <span>{amenity}</span>
              </div>
            )
          ))}
        </div>
        <div className="col-span-2 flex justify-center border-2 border-BrunswickGreen shadow-xl mx-auto w-1/2 h-20 items-center rounded-lg">
          <p className="col-span-2 flex justify-center px-5">
            {listing.cancellation_policy}
          </p>
        </div>
        </div>
        <div className="col-span-2 flex flex-col justify-center w-11/12 md:w-2/3 xl:w-2/4 2xl:w-6/12 mx-auto border-2 border-BrunswickGreen shadow-xl h-auto items-center rounded-lg gap-1">
          <img src="/owner.png" alt="owner profile image" className="w-40 h-40 rounded-full mt-2 border-4" />
          <div>
            <p>{owner.name}</p>
            <p className="text-xs">Email: {owner.contact}</p>
            <p className="text-xs">Phonen: {owner.phone}</p>
          </div>
        </div>
        <div className="col-span-2 w-11/12 md:w-2/3 xl:w-2/4 2xl:w-6/12 mx-auto">
          <img src="/gMaps.png" alt="Google Maps" className="mx-auto" />
        </div >
        <div className="col-span-2">
          <DetailBookingInfo listing={listing} />
        </div>
        <div className="col-span-2 flex mx-auto justify-center p-3 items-center w-11/12 md:w-2/3 xl:w-2/4 2xl:w-6/12">
          <Link className="w-full" href="/pay">
            <button className="bg-BrunswickGreen w-full text-timberwolf px-4 py-2 rounded-2xl">Book Here</button>
          </Link>
        </div>
      </div>
      <Footer />
      <NavbarMobile />
    </main>
  );
};
export default DetailPage;
