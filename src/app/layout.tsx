import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { ReactNode } from "react";
import '@/assets/styles/index.scss';

interface IRootLayout {
  readonly children: ReactNode;
}

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Aura",
  description: "Aura landing",
};

export default function RootLayout({
  children,
}: IRootLayout) {
  return (
    <html lang="ru">
      <body className={rubik.variable}>
        {children}
      </body>
    </html>
  );
}
