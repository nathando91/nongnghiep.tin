import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trang Trại Ruồi Lính Đen & Vịt | Huế",
  description: "Trang trại nuôi ruồi lính đen và vịt tại Huế. Liên hệ: 0989205010",
  keywords: "ruồi lính đen, black soldier fly, trang trại vịt, nông nghiệp bền vững, Huế, Vinh Thanh, Phú Vang",
  authors: { name: "Trang Trại Huế" },
  creator: "Trang Trại Huế",
  publisher: "Trang Trại Huế",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Trang Trại Ruồi Lính Đen & Vịt | Huế",
    description: "Trang trại nuôi ruồi lính đen và vịt tại Huế. Liên hệ: 0989205010",
    url: "https://trangtrai.com",
    siteName: "Trang Trại Huế",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://trangtrai.com/images/hero-bg.jpg",
        width: 1920,
        height: 1080,
        alt: "Trang Trại Huế",
      },
    ],
  },
  robots: "index, follow",
  manifest: "/manifest.json",
  twitter: {
    card: "summary_large_image",
    title: "Trang Trại Ruồi Lính Đen & Vịt | Huế",
    description: "Trang trại nuôi ruồi lính đen và vịt tại Huế. Liên hệ: 0989205010",
    images: [
      {
        url: "https://trangtrai.com/images/hero-bg.jpg",
        width: 1920,
        height: 1080,
        alt: "Trang Trại Huế",
      },
    ],
  },
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "256x256", type: "image/x-icon" },
    { rel: "icon", url: "/images/logo-192.png", sizes: "192x192" },
    { rel: "icon", url: "/images/logo-512.png", sizes: "512x512" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
