import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "수리온 통합 정비 AI 어시스턴트",
  description: "해병대 수리온 계열 항공기 통합 정비 지능형 AI 어시스턴트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${sourceSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
