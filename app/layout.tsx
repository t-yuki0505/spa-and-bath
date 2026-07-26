import type { Metadata, Viewport } from "next";
import "@fontsource-variable/noto-sans-jp";
import "@fontsource-variable/noto-serif-jp";
import "./globals.css";
import { siteUrl } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ホテル・温浴施設向けUFB設備｜炭酸ガス削減・開業・改装｜UFB DUAL®",
  description:
    "ホテル・旅館、温浴施設、ジム、プール、レジャー施設の新規開業・改装・設備更新へ。給水本管から施設全体へUFB水を届けるUFB DUAL®と、従来方式比で炭酸ガス使用量40％以上削減を目指す人工炭酸泉設備をご提案します。",
  applicationName: "UFB TECH株式会社",
  authors: [{ name: "UFB TECH株式会社", url: "https://ufbtech-co.jp/" }],
  creator: "UFB TECH株式会社",
  publisher: "UFB TECH株式会社",
  category: "ホテル・温浴施設向け水設備",
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
    "ホテル 水設備",
    "旅館 水設備",
    "ジム シャワー設備",
    "プール 配管設備",
    "レジャー施設 水設備",
    "施設 開業 設備",
    "施設 改装 設備",
    "施設 水 課題解決",
    "全館UFB",
    "人工炭酸泉装置",
    "バイオフィルム対策",
    "炭酸ガス削減",
    "炭酸ガス コスト削減",
    "UFB TECH株式会社",
  ],
  openGraph: {
    url: siteUrl,
    type: "website",
    locale: "ja_JP",
    siteName: "UFB TECH株式会社",
    title: "ホテル・温浴施設向けUFB設備｜炭酸ガス削減・開業・改装",
    description:
      "ホテル・旅館、温浴施設、ジム、プールなどの新規開業・改装へ。全館UFBと炭酸ガス削減を目指す人工炭酸泉設備をご提案します。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ホテル・温浴施設向け UFB DUAL®" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ホテル・温浴施設向けUFB設備｜UFB DUAL®",
    description: "新規開業・改装時の全館UFBと、炭酸ガス使用量40％以上削減を目指す人工炭酸泉設備をご提案します。",
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
