import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/common/header/Header";
import Footer from "@/common/Footer";
import localFont from "next/font/local";

const vazirsans = localFont({
  src: [
    {
      path: "../../public/fonts/Vazir.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazir-Bold.woff",
      weight: "700",
      style: "nomral",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirsans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
