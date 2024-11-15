import { SearchCalendar } from "./_components/SearchCalender"
import { SearchCategory } from "./_components/SearchCategory"
import { SearchDate } from "./_components/SearchDate"
import { SearchDestination } from "./_components/SearchDestination"
import { SearchGuest } from "./_components/SearchGuest"
import { SearchPrice } from "./_components/SearchPrice"

const searchPage = () => {
  return (
    <div className="bg-timberwolf min-h-screen">
      <SearchDestination />
      <SearchGuest />
      <SearchCategory />
      <SearchPrice />
      <SearchDate />
      <SearchCalendar />
    </div>
  )
}
export default searchPage