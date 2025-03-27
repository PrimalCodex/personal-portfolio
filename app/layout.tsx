import type {Metadata} from "next";
import {Cabin, Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cabin = Cabin({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" className={cabin.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiasing bg-white min-h-screen`}
      >
        <div className="max-w-screen-xl bg-gray-100 mx-auto px-4 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
