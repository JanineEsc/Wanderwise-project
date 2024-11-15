'use client';

import { useRouter } from "next/navigation"

export const Logo = () => {

  const router = useRouter()

  const handleLogoClick = () => {
    router.push('/')
  }

  return (
    <div className="bg-timberwolf grid justify-center items-center">
      <img src="/logo.png" alt="logo" className="mt-2 cursor-pointer" onClick={handleLogoClick}/>
    </div>
  )
}