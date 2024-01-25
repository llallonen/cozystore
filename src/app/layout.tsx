import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Nav/Navbar";
import Footer from "./Footer";
import SessionProvider from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cozystore",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col">
      <SessionProvider>
        <Navbar />
        <main className="max-w-4xl min-w-[300px] flex-1 m-auto p-4">{children}</main>
        <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
