import { cookies } from "next/headers";
import BoardClient from "@/components/BoardClient";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

const BoardPage = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const username = cookieStore.get("username")?.value;
  const uid = cookieStore.get("uid")?.value;

  if (!token || !username || !uid) {
    return <div>No user data found in cookies.</div>;
  }

  const docRef = doc(db, "users", uid);
  const userDoc = await getDoc(docRef);

  if (!userDoc.exists()) {
    return <div>No user data found in Firestore.</div>;
  }

  return <BoardClient username={username} />;
};

export default BoardPage;
