import { ProfilMenu } from "./ProfileMenu"

export const Header = () => {
  return (
    <div className="justify-between items-center w-full hidden sm:flex pt-4 text-timberwolf">
      <img src="/logo.png" alt="Wanderwise Logo" />
      <img className="w-64" src="/bigLogo.png" alt="Wanderwise full Logo" />
      <ProfilMenu />
    </div>
  )
}