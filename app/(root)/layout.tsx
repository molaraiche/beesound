import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/shared/NavBar";
import "../globals.css";
import Footer from "@/components/shared/Footer";
import TopNavBar from "@/components/shared/TopNavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BeeSound | molaraiche",
  description:
    "BeeSound is an ecommerce website developed by molaraiche (Mohamed Laraiche) using Next.js, Tailwind, TypeScript, and other technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased bg-dark-white`}>
        <TopNavBar />
        <main>
          <NavBar />
          {children}
          <ToastContainer position='bottom-right' />
          <Footer />
        </main>
      </body>
    </html>
  );
}
