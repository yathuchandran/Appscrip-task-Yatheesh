import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import { Metadata } from 'next';
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Fashion Store | Trendy Clothes & Accessories',
  description: 'Discover the latest trends in fashion at our online store. Shop for men\'s, women\'s, and kids\' clothing, shoes, accessories, and more. Enjoy fast shipping and easy returns.',
  keywords: 'clothing, accessories, fashion, online store, men\'s fashion, women\'s fashion, kids fashion, shoes, bags, jewelry, trendy apparel',

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main> 
        <Footer />
      </body>
    </html>
  );
}