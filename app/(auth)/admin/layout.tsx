import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Dashboard | BeeSound | molaraiche",
  description:
    "BeeSound is an ecommerce websie developed by molaraiche (Mohamed Laraiche) using, next js tailwind typescript and lot of others techs",
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
