import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import PageLoader from "./Components/PageLoader";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "UC Champion - Universitas Ciputra Student Competition Platform",
    template: "%s | UC Champion"
  },
  description: "UC Champion is the official competition platform by Universitas Ciputra Student Council. Join exciting competitions including Short Movie, Digital Poster, and Essay Writing contests for students across Indonesia.",
  keywords: ["UC Champion", "Universitas Ciputra", "student competition", "lomba mahasiswa", "short movie competition", "digital poster competition", "essay competition", "lomba film pendek", "lomba poster digital", "UKM PMK", "kompetisi mahasiswa Indonesia"],
  authors: [{ name: "UC Champion - Student Council Universitas Ciputra" }],
  creator: "Student Council Universitas Ciputra",
  publisher: "UC Champion",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.ucchampion.com",
    title: "UC Champion - Universitas Ciputra Student Competition Platform",
    description: "Join exciting student competitions at UC Champion - Short Movie, Digital Poster, and Essay Writing contests for Indonesian students.",
    siteName: "UC Champion",
    images: [
      {
        url: "/Asset/Logo/LOGO.webp",
        width: 1200,
        height: 630,
        alt: "UC Champion Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UC Champion - Student Competition Platform",
    description: "Join exciting student competitions at UC Champion - Short Movie, Digital Poster, and Essay Writing contests.",
    images: ["/Asset/Logo/LOGO.webp"],
  },
  icons: {
    icon: "/Asset/Logo/LOGO.webp",
    shortcut: "/Asset/Logo/LOGO.webp",
    apple: "/Asset/Logo/LOGO.webp",
  },
  metadataBase: new URL('https://www.ucchampion.com'),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageLoader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
