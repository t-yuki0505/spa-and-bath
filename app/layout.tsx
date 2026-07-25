import type { Metadata, Viewport } from "next";
import "@fontsource-variable/noto-sans-jp";
import "@fontsource-variable/noto-serif-jp";
import "./globals.css";
import { siteUrl } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "温浴施設向け UFB DUAL®｜全館UFB・人工炭酸泉設備｜UFB TECH株式会社",
  description:
    "温浴施設向けUFB DUAL®。給水本管への設置で全館へUFB水を供給し、バイオフィルム対策を支援。人工炭酸泉装置では従来方式比で炭酸ガス使用量40％以上削減を目指します。UFB TECH株式会社。",
  applicationName: "UFB TECH株式会社",
  authors: [{ name: "UFB TECH株式会社", url: "https://ufbtech-co.jp/" }],
  creator: "UFB TECH株式会社",
  publisher: "UFB TECH株式会社",
  category: "温浴施設向け設備",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "UFB DUAL",
    "UFBDUAL",
    "温浴施設",
    "全館UFB",
    "人工炭酸泉装置",
    "バイオフィルム対策",
    "炭酸ガス削減",
    "UFB TECH株式会社",
  ],
  openGraph: {
    url: siteUrl,
    type: "website",
    locale: "ja_JP",
    siteName: "UFB TECH株式会社",
    title: "温浴施設向け UFB DUAL®｜全館UFB・人工炭酸泉設備",
    description:
      "衛生管理と炭酸泉コストに答えを。給水本管から施設全体へUFB水を届ける設備をご提案します。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "温浴施設向け UFB DUAL®" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "温浴施設向け UFB DUAL®｜UFB TECH株式会社",
    description: "全館UFBと人工炭酸泉設備で、温浴施設の水環境と運営コストを改善へ。",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#082B45",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
