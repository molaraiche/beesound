import { cookies } from "next/headers";
import BoardClient from "@/components/BoardClient"; 

const BoardPage = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const username = cookieStore.get("username")?.value;

  if (!token || !username) {
    return <div>No user data found in cookies.</div>;
  }

  return <BoardClient username={username} />;
};

export default BoardPage;
