import { useRouter } from "next/navigation";

export const SearchButton = () => {
  const router = useRouter();

  const handleSearch = () => {
    // Navigate to the home page
    router.push("/");
  };

  return (
    <button className="bg-BrunswickGreen p-1 rounded-md w-1/5" onClick={handleSearch}>
      <p className="text-center text-timberwolf">Search</p>
    </button>
  );
};