import { Search } from "lucide-react";

export const SearchMobile = () => {
  return (
    <button className="bg-BrunswickGreen flex items-center gap-8 w-3/4 p-2 rounded-md just">
      <Search />
      <span className="mr-2">Search...</span>
    </button>
    
  );
}