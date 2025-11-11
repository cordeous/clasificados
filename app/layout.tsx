import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Aurora Market — Discover Independent Brands",
    template: "%s | Aurora Market",
  },
  description:
    "Aurora Market is a modern marketplace connecting design-forward shoppers with independent brands, curated drops, and sustainable essentials.",
  keywords: [
    "marketplace",
    "independent brands",
    "ecommerce",
    "sustainable products",
    "modern shopping",
  ],
  openGraph: {
    title: "Aurora Market — Discover Independent Brands",
    description:
      "Explore curated drops, verified makers, and design-first products with Aurora Market.",
    url: "https://aurora-market.example",
    siteName: "Aurora Market",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Selection of modern lifestyle products from independent brands",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Market — Discover Independent Brands",
    description:
      "Shop curated drops from verified independent makers with Aurora Market.",
    images: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
