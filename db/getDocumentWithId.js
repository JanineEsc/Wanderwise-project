import { db } from "@/firebase/config"
import { doc, getDoc } from "firebase/firestore"


export default async function getDocumentWithId(collectionName, docId) {
  const docRef = doc(db, collectionName, docId); 
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
};