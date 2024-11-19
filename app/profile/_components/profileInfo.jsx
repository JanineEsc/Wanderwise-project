
'use client'

import { auth, db } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, setDoc, where } from "firebase/firestore";
import { Check, RefreshCcw, Settings } from "lucide-react";
import { useEffect, useState } from "react";


export const ProfileInfo = () => {
  const [user, setUser] = useState(null);
  const [userDocRef, setUserDocRef] = useState(null);
  const [editBio, setEditBio] = useState(false)
  const [newBio, setNewBio] = useState("")




  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        console.log("User detected:", currentUser);
        try {
          // Query Firestore for the user document with matching UID
          const q = query(collection(db, 'users'), where('uid', '==', currentUser.uid));
          const querySnapshot = await getDocs(q);
          console.log(querySnapshot);
          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();
            console.log(userData)
            setUserDocRef(userDoc.ref);
            setUser(userData);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          throw new Error("Error getting document: " + error);
        }
      } else {
        console.log("No user detected");
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleBio = async () => {
    if (newBio && userDocRef) {
      await setDoc(userDocRef, { bio: newBio }, { merge: true });
      setUser({ ...user, bio: newBio });
      setEditBio(false);
    }
  };

  if (!user) {
    return (
      <div>
        Loading...
        <RefreshCcw className="animate-spin  h-8 w-8" />
      </div>
    );
  }

  return (
    <div className="">
      <div className="bg-BrunswickGreen w-11/12 text-timberwolf flex flex-col gap-1 p-6 rounded-xl h-auto mx-auto md:w-2/3 lg:w-2/4 xl:w-1/3 text-xs shadow:xl ">
        <div className="m-2 flex justify-between">
          <p className="font-bold">Name: </p>
          <p> {user.firstname} {user.lastname}</p>
        </div>
        <hr className="w-11/12 md:w-full mx-auto h-0.5 col-span-2 m-3" />
        <div className="w-full mx-auto ">
          <div className="flex m-2 justify-between">
            <p className="font-bold">Bio</p>
            {editBio ? (
              <Check
                className="text-timberwolf bg-inherit p-1 rounded-full cursor-pointer w-8 h-8"
                onClick={handleBio}
              />
            ) : (
              <Settings
                className="text-timberwolf bg-inherit rounded-full p-2 cursor-pointer w-8 h-8"
                onClick={() => setEditBio(true)}
              />
            )}

          </div>
        </div>
        {editBio ? (
          <div className="flex items-center m-2 w-11/12 mx-auto ">
            <textarea
              type="text"
              value={newBio}
              onChange={(e) => setNewBio(e.target.value)}
              className="bg-fernGreen text-timberwolf p-1 w-full rounded"
            />
          </div>
        ) : (
          <p className="text-timberwolf m-2">{user.bio}</p>
        )}
        <hr className="w-11/12 md:w-full mx-auto h-0.5 col-span-2 m-3" />

        <div className="m-2 flex justify-between">
          <p className="font-bold">Location: </p>
          <p>{user.location}</p>
        </div>
        <hr className="w-11/12 md:w-full mx-auto h-0.5 col-span-2 m-3" />
        <div className="m-2 flex justify-between">
          <p className="font-bold">Email: </p>
          <p>{user.email}</p>
        </div>

        <hr className="w-11/12 md:w-full mx-auto h-0.5 col-span-2 m-3" />
        <div className="m-2 flex justify-between">
          <p className="font-bold">Phone:</p>
          <p>{user.phonenumber}</p>
        </div>
          <hr className="w-11/12 md:w-full mx-auto h-0.5 col-span-2 m-3" />
      </div>
    </div >


  )
}