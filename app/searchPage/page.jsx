'use client'

import { NavbarMobile } from "../_components/NavbarMobile"
import { ProfilMenu } from "../_components/ProfileMenu"
import { Logo } from "./_components/Logo"
import { SearchButton } from "./_components/SearchButton"
import { SearchCalendar } from "./_components/SearchCalender"
import { SearchCategory } from "./_components/SearchCategory"
import { SearchDate } from "./_components/SearchDate"
import { SearchDestination } from "./_components/SearchDestination"
import { SearchGuest } from "./_components/SearchGuest"
import { SearchPrice } from "./_components/SearchPrice"

const searchPage = () => {
  return (
    <div className="bg-timberwolf h-screen">
      <div className="absolute top-0 right-0">
        <ProfilMenu />
      </div>
      <Logo />
      <div className="w-full h-auto flex justify-center">
        <div className="w-2/3 md:w-1/3 flex flex-col justify-start">
          <SearchDestination />
          <SearchGuest />
          <SearchCategory />
          <SearchPrice />
          <SearchDate />
          <SearchCalendar />
          <div className="w-full flex items-center justify-center mt-2 ">
            <SearchButton />
          </div>
        </div>
      </div>
      <NavbarMobile />


    </div>
  )
}
export default searchPage