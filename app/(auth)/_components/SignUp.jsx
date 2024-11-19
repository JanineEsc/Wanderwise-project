"use client";
import { auth, db } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Trees } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userUid = userCredential.user.uid;
      // Add a new document in DB collection "users" with the user's UID as the document ID
      await setDoc(doc(db, "users", userUid), {
        uid: userUid,
        firstname,
        lastname,
        email,
        phonenumber,
        location,
      });

      toast.success("Signed in successfully!");
    } catch (error) {
      toast.error("Error signing in: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-black grid grid-cols-2 grid-rows-[1fr,2fr,0.5fr] h-screen bg-timberwolf">
      <Trees size={100} className="absolute top-5 left-1/2 transform -translate-x-1/2  text-white lg:hidden" />
      <p className="absolute top-12 left-1/2 transform -translate-x-1/2 ml-20 text-white text-xl font-bold lg:hidden">Wander</p>
      <p className="absolute top-20 left-1/2 transform -translate-x-1/2 ml-20 text-white text-xl font-bold lg:hidden">Wise</p>
      <div className=" col-span-2 flex items-center justify-center overflow-hidden h-full">
        <img src="/registerImg.jpg" alt="backpackers img" className="w-full h-full object-cover lg:hidden" />
        <img src="/logo.png" alt="logo" className="hidden lg:block lg:max-w-xs" />
      </div>
      <div className="col-span-2 flex items-start justify-center lg:flex lg:items-center  lg:px-20">
        <img src="/registerImg.jpg" alt="logo" className="hidden lg:left-0 lg:flex lg:justify-start lg:max-w-2xl object-cover lg:h-full" />
        <form
          className="py-3 flex flex-col gap-3 px-10 mx-5 lg:mx-0 z-10 -mt-20  lg:mt-0 text-timberwolf bg-BrunswickGreen rounded-2xl lg:w-1/2 lg:h-full lg:rounded-none"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl text-center">Please fill in the form</h1>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="border p-1 rounded-xl text-black"
            required
          />
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="border p-1 rounded-xl text-black"
            required
          />
          <label htmlFor="phonenumber">Phone Number:</label>
          <input
            type="tel"
            id="phonenumber"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            className="border p-1 rounded-xl text-black"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-1 rounded-xl text-black"
            required
          />
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation (e.target.value)}
            className="border p-1 rounded-xl text-black"
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-1 rounded-xl text-black"
            required
          />
          <button type="submit" className="bg-fernGreen rounded-xl text-white p-1 hover:border-2 hover:border-timberwolf" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
          <p className="py-1 text-timberwolf text-center">Already a member? Log in <Link className="underline" href='/sign-in'>here</Link></p>
        </form>
      </div>
      <div className=" flex col-span-2 items-center justify-center text-white">

      </div>
    </div>
  );
};