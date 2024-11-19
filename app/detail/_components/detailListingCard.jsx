import { Star } from "lucide-react"

export const DetailListingCard = ({ listing }) => {


  return (
    <div className="">
      <img
        src={listing.images[0].url}
        alt="Listing Image"
        className="w-full max-w-md h-auto object-cover shadow-xl  rounded-xl"
      />
      <div className="flex justify-between m-3 text-xs">
        <div>
          <p>{listing.price}Sek/Night</p>
          <p className="text-sm">{listing.title}</p>
        </div>
        <div className="flex">
          <Star className="h-5 w-5 fill-iconColor" />
          <p className="p-1 font-bold">{listing.rating}</p>
          <p className="p-1 underline font-bold">{listing.reviews} Reviews</p>
        </div>
      </div>
    </div>
  )
}