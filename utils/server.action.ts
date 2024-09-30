import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { productType } from "@/types/types";

// Function to get all documents from the "collection" in Firestore
export async function getAllCollection(): Promise<productType[]> {
  const querySnapshot = await getDocs(collection(db, "collection")); // Replace with your collection name
  const data: productType[] = [];

  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() } as productType);
  });

  return data;
}

// Function to get a single product by ID
export async function getProductById(id: string): Promise<productType | null> {
  try {
    const productRef = doc(db, "collection", id); // Replace "collection" with your collection name
    const productDoc = await getDoc(productRef);

    if (productDoc.exists()) {
      return { id: productDoc.id, ...productDoc.data() } as productType;
    } else {
      return null; // If the document does not exist
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
