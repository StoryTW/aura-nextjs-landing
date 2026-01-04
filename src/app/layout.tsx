import type { Metadata, Viewport } from "next";
import { Nunito, Rubik } from "next/font/google";
import { ReactNode } from "react";
import clsx from "clsx";
import '@/assets/styles/index.scss';
import Footer from "@/layout/Footer/Footer";

interface IRootLayout {
  readonly children: ReactNode;
}

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "cyrillic"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Aura",
  description: "Aura landing",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  colorScheme: 'dark',
  themeColor: '#070C0F',
};

export default function RootLayout({
  children,
}: IRootLayout) {
  return (
    <html lang="ru">
      <body className={clsx('body', rubik.variable, nunito.variable)}>
        {children}

        <Footer />
      </body>
    </html>
  );
}
