import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from "next/font/google";

const quickSand = Quicksand({});
export const metadata: Metadata = {
  title: "Autenticacion Webdecero",
  description: "Web site created using create-react-app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quickSand.className} bg-primary`}>{children}</body>
    </html>
  );
}
