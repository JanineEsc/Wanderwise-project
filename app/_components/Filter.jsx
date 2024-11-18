import { SearchButton } from "../searchPage/_components/SearchButton"
import { SearchCalendar } from "../searchPage/_components/SearchCalender"
import { SearchCategory } from "../searchPage/_components/SearchCategory"
import { SearchDestination } from "../searchPage/_components/SearchDestination"
import { SearchGuest } from "../searchPage/_components/SearchGuest"
import { SearchPrice } from "../searchPage/_components/SearchPrice"

export const Filter = () => {



  return (
    <div className="grid grid-cols-2 grid-rows-[0.2fr,0.2fr,0.2fr,1fr] border-2 border-BrunswickGreen shadow-xl bg-timberwolf w-1/2 mr-10 mt-2 rounded-lg absolute top-36">
      <p className="col-span-2 p-3 text-center text-lg font-bold text-black">Where are we headed?</p>
      <SearchDestination />
      <SearchCategory />
      <SearchGuest />
      <SearchPrice />
      <div className=" col-span-2">
        <SearchCalendar />
      </div>
      <div className="col-span-2 flex justify-end items-end w-full p-5">
        <SearchButton />
      </div>
    </div>
  )
}