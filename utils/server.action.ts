import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { productType } from "@/types/types";

export async function getAllCollection(): Promise<productType[]> {
  const querySnapshot = await getDocs(collection(db, "products"));
  const data: productType[] = [];

  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() } as productType);
  });

  return data;
}

export async function getProductById(id: string): Promise<productType | null> {
  try {
    const productRef = doc(db, "products", id);
    const productDoc = await getDoc(productRef);

    if (productDoc.exists()) {
      return { id: productDoc.id, ...productDoc.data() } as productType;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export const addProduct = async (productData: productType) => {
  try {
    const docRef = await addDoc(collection(db, "products"), productData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateProduct = async (id: string, productData: productType) => {
  try {
    const productRef = doc(db, "products", id); // Reference to the specific document
    await updateDoc(productRef, {
      ...productData, // Updating with new data
    });
    console.log("Product updated successfully with ID:", id);
  } catch (error) {
    console.error("Error updating product:", error);
  }
};
export const deleteProduct = async (productId: string) => {
  try {
    const productRef = doc(db, "products", productId);
    await deleteDoc(productRef);
    console.log(`Product with ID ${productId} deleted successfully`);
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

export const getCollectionProducts = async (): Promise<productType[]> => {
  const q = query(
    collection(db, "products"),
    where("type", "==", "Collection")
  );
  const querySnapshot = await getDocs(q);
  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as productType[];
  return products;
};
export const getArrivalsProducts = async (): Promise<productType[]> => {
  const q = query(collection(db, "products"), where("type", "==", "Arrivals"));
  const querySnapshot = await getDocs(q);
  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as productType[];
  return products;
};
export const getGamersProducts = async (): Promise<productType[]> => {
  const q = query(collection(db, "products"), where("type", "==", "Gamers"));
  const querySnapshot = await getDocs(q);
  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as productType[];
  return products;
};
export const getDiscountsProducts = async (): Promise<productType[]> => {
  const q = query(collection(db, "products"), where("type", "==", "Discount"));
  const querySnapshot = await getDocs(q);
  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as productType[];
  return products;
};
