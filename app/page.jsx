
import { Listing_card } from "./_components/listing_card"
import { NavbarMobile } from "./_components/NavbarMobile"
import { SearchMobile } from "./_components/SearchMobile"

const LandingPage = () => {
  return (
    <main className="bg-timberwolf h-screen pt-3">
      <div className="flex items-center justify-center">
       <SearchMobile />
      </div>
      <Listing_card />
      <NavbarMobile />
    </main>
  )
}
export default LandingPage