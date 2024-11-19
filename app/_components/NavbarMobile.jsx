'use client';

import { House, Search, UserRoundPen } from "lucide-react";
import { useRouter } from "next/navigation";


export const NavbarMobile = () => {

  const router = useRouter()

  const handleSearhClick = () => {
    router.push('/searchPage')
  }
  const handleProfileClick = () => {
    router.push('/profile')
  }

  const handleHomeClick = () => {
    router.push('/')
  }

  return (
    <div className="flex fixed bottom-0 w-full bg-fernGreen justify-around text-white p-4 md:hidden cursor-pointer">
        <House className="h-8 w-8" onClick={handleHomeClick}/>
        <Search className="h-8 w-8" onClick={handleSearhClick} />
        <UserRoundPen className="h-8 w-8"  onClick={handleProfileClick} />
    </div>
  )
}