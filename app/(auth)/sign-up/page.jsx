import { NavbarMobile } from "@/app/_components/NavbarMobile"
import { SignUp } from "../_components/SignUp"
import { Footer } from "@/app/_components/Footer"

const SignUpPage = () => {
  return (
    <main className='bg-timberwolf min-h-screen w-full'>
      <SignUp/>
      <NavbarMobile />
      <Footer />
    </main>
  )
}

export default SignUpPage