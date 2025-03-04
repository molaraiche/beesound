import { Inter } from "next/font/google";
import "./styles.css";

export const metadata = {
  title: "Auth - BeeSound | molaraiche",
  description:
    "BeeSound is the one of the world’s largest online shops that providing over 1500 headphones for its costumers from over 80 countries",
};
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
