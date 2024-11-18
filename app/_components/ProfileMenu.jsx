'use client'

import { UserRound } from "lucide-react"
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const ProfilMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigateToProfile = () => {
    router.push("/profile");
    setIsOpen(false);
  };




  return (
    <div className="relative" ref={menuRef}>
      <div
        className="bg-BrunswickGreen rounded-full w-16 h-16 flex items-center justify-center cursor-pointer"
        onClick={toggleMenu}
      >
        <UserRound className="bg-BrunswickGreen rounded-full w-12 h-12 border-2 border-white" />
      </div>
      {isOpen && (
        <div className="absolute right-3 w-40 bg-white rounded-md shadow-lg z-10">
          <div className="w-full grid p-1 text-sm text-gray-700">
            <button className="font-bold text-left m-2"> Sign Out </button>
            <button className="font-bold text-left m-2" onClick={navigateToProfile}> Profile </button>
          </div>
        </div>
      )}
    </div>
  )
}