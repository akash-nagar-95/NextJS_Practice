import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Project",
  description: "Generated using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen `} >
          <Navbar className='fixed top-0 left-0 w-full z-50' />
          <main className='flex-grow overflow-y-auto '>{children}</main>
          <Footer className='fixed bottom-0 left-0 w-full z-50' />
        </body>
      </SessionWrapper>
    </html>
  );
}
