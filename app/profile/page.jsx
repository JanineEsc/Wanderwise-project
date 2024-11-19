import { NavbarMobile } from "../_components/NavbarMobile"
import { ProfilMenu } from "../_components/ProfileMenu"
import { Logo } from "../searchPage/_components/Logo"
import { ProfileImage } from "./_components/profileImage"
import { ProfileInfo } from "./_components/profileInfo"


const ProfilePage = () => {
  return (
    <div className="bg bg-timberwolf min-h-screen text-black">
      <div className="absolute top-2 right-4 text-timberwolf"> 
        <ProfilMenu />
      </div>
      <Logo />
      <ProfileImage />
      <ProfileInfo />
      <NavbarMobile />
   

    </div>
  )
}
export default ProfilePage