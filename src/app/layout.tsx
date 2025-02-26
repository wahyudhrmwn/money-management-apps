import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { TransactionProvider } from "@/context/TransactionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoneyWise - Manajemen Keuangan",
  description: "Aplikasi manajemen keuangan pribadi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <TransactionProvider>
          <Navbar />
          {children}
        </TransactionProvider>
      </body>
    </html>
  );
}
