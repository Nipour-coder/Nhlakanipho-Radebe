import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nhlakanipho Radebe | Computer Systems Engineering & Embedded Systems",
  description:
    "Portfolio of Nhlakanipho Radebe — Final Year Computer Systems Engineering student & Embedded Systems Developer focused on IoT, networking, and systems integration.",
  keywords: [
    "Nhlakanipho Radebe",
    "Computer Systems Engineering",
    "Embedded Systems",
    "ESP32",
    "IoT",
    "Networking",
    "Tshwane University of Technology",
  ],
  openGraph: {
    title: "Nhlakanipho Radebe | Embedded Systems & IoT Developer",
    description:
      "Final Year Computer Systems Engineering student & Embedded Systems Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} dark`}
    >
      <body className="bg-charcoal text-ink antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
