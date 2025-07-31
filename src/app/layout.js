import { Geist, Geist_Mono } from "next/font/google";
import { Gilda_Display } from "next/font/google"; // Gilda import করা হলো
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingClient from "./loadingClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gilda = Gilda_Display({
  variable: "--font-gilda", // variable হিসেবে রাখলাম যাতে প্রয়োজনমতো ব্যবহার করা যায়
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Ocean Residence",
  description: "A new standard in luxury hospitality and comfort — Ocean Residence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${gilda.variable} antialiased`}>
        <LoadingClient>
        <Navbar />
        {/* <Header/> */}
        {children}
        <Footer />
        </LoadingClient>
      </body>
    </html>
  );
}
