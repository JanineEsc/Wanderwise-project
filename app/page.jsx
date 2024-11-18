import { Footer } from "./_components/Footer"
import { Header } from "./_components/header"
import { Listing_card } from "./_components/listing_card"
import { NavbarMobile } from "./_components/NavbarMobile"
import { SearchMobile } from "./_components/SearchMobile"

const LandingPage = () => {


  return (
    <main className="bg-timberwolf min-h-screen pb-24">
      <Header />
      <SearchMobile />
      <Listing_card />
      <Footer />
      <NavbarMobile />
    </main>
  )
}
export default LandingPage