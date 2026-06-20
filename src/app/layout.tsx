import type { Metadata } from "next";
import { Outfit, Reenie_Beanie } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const reenieBeanie = Reenie_Beanie({
  weight: "400",
  variable: "--font-reenie",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Assurebit | Digital Solutions & Digital Transformation",
  description: "Full-Stack Web Development & Digital Transformation Partner delivering scalable digital solutions.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${reenieBeanie.variable} antialiased selection:bg-primary/30`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
