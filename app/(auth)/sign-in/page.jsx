import { NavbarMobile } from '@/app/_components/NavbarMobile';
import React from 'react';
import { LogIn } from '../_components/LogIn';
import { Footer } from '@/app/_components/Footer';

const SignIn = () => {
  return (
    <main className='bg-timberwolf min-h-screen w-full'>
      <LogIn />
      <NavbarMobile />
      <Footer />
    </main>
  );
};

export default SignIn;