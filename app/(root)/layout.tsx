import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/shared/NavBar";
import "../globals.css";
import Footer from "@/components/shared/Footer";
import TopNavBar from "@/components/shared/TopNavBar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BeeSound | molaraiche",
  description:
    "BeeSound is an ecommerce websie developed by molaraiche (Mohamed Laraiche) using, next js tailwind typescript and lot of others techs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased`}>
        <TopNavBar />
        <main>
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
