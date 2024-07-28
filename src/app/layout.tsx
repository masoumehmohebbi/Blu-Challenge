import type { Metadata } from "next";
import "./globals.css";
import Header from "@/common/header/Header";
import Footer from "@/common/footer/Footer";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

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
  title: "ثبت تسهیلات بانکی",
  description: "تسهیلات بانکی بلوبانک",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirsans.className}>
        <Toaster />
        <div className="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
