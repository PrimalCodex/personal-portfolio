import type {Metadata} from "next";
import {Cabin, Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }

  function gtag(...args: any[]): void;
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cabin.className}>
      <head>
        <meta name="description" content="Nedim Kevro - Frontend Developer Portfolio"/>
        <meta property="og:title" content="Nedim Kevro | Frontend Developer"/>
        <meta property="og:description" content="Specializing in clean, scalable React apps."/>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8VCZ0RRCN4"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8VCZ0RRCN4');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiasing min-h-screen`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} // Replace with your GA ID
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA ID
        `}
        </Script>
        <div>{children}</div>
      </body>
    </html>
  );
}
