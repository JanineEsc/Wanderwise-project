'use client'

import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Toaster.success("Signed in successfully!");
    } catch (error) {
      toast.error("Error signing in: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-black grid grid-cols-2 grid-rows-[0.5fr,2fr,0.5fr]  h-screen">
      <div className="col-span-2 flex justify-center items-center">
        <img src="/logo.png" alt="logo" className="md:w-1/4" />
      </div>
      <div className="col-span-2 flex justify-center items-center relative" >
        <img src="/SignIn.png" alt="login" className="absolute z-0 w-full h-full object-cover" />
        <form className="relative  py-3 flex flex-col gap-3 px-10 mx-5  z-10 bg-opacity-75 text-timberwolf bg-BrunswickGreen rounded-2xl" onSubmit={handleSubmit}>
          <h1 className="text-2xl text-center">Sign In</h1>
          <label htmlFor="email"> Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-1 rounded-xl text-black"
            required
          />
          <label htmlFor="password"> Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-1 rounded-xl text-black"
            required
          />
          <button type="submit" className="bg-fernGreen rounded-xl text-white p-1 hover:border-2 hover:border-timberwolf" disabled={loading}>
            {loading ? "Signing in..." : "Log In"}
          </button>
          <p className="py-1 text-timberwolf text-center">Not a member? Create an account <Link className="underline" href='/sign-up'>here</Link></p>
        </form>
      </div>
    </div>
  );
};