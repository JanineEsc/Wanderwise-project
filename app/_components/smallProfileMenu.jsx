'use client'

import { auth } from "@/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { UserRound } from "lucide-react"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const SmallProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const menuRef = useRef(null);
  const router = useRouter();

  console.log(user);
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };




  return (
    <div className="absolute m-4 right-0 sm:hidden" ref={menuRef}>
      {user ? (
        <div className="flex items-end space-x-2">
          <div
            className="bg-BrunswickGreen rounded-full w-18 h-18  items-center justify-center flex cursor-pointer"
            onClick={toggleMenu}
          >
            <UserRound className="bg-BrunswickGreen rounded-full w-10 h-10 border-2 border-white" />
          </div>
          {isOpen && (
            <div className="absolute right-3 top-16 border-2 border-BrunswickGreen w-40 bg-white rounded-md shadow-lg z-10">
              <div className="w-full grid p-1 text-sm text-gray-700">
                <button className="font-bold text-left m-2" onClick={handleLogout}> Sign Out </button>
                <button className="font-bold text-left m-2" onClick={navigateToProfile}> Profile </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link href="/sign-in">
          <button className="p-2 bg-BrunswickGreen text-white rounded-lg">
            Log In
          </button>
        </Link>
      )}
    </div>
  );
};