import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { productType } from "@/types/types";

export async function getAllDocuments(): Promise<productType[]> {
  const querySnapshot = await getDocs(collection(db, "collectionName")); // Replace with your collection name
  const data: productType[] = [];

  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() } as productType);
  });

  return data;
}
