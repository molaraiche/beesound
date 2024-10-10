import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Dashboard | BeeSound | molaraiche",
  description:
    "BeeSound is the one of the world’s largest online shops that providing over 1500 headphones for its costumers from over 80 countries",
};

export default function InnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
