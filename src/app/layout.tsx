import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Router, { RouterItem } from "./router";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parallax Example",
  description: "Parallax Example",
};

const router: RouterItem[] = [
  {
    title: "Callback",
    href: "/callback",
  },
  {
    title: "Destroy",
    href: "/destroy",
  },
  {
    title: "Input Element",
    href: "/input-element",
  },
  {
    title: "Interactive",
    href: "/interactive",
  },
  {
    title: "Relative",
    href: "/relative",
  },
  {
    title: "Selector",
    href: "/selector",
  },
  {
    title: "SeparateAxisData",
    href: "/separate-axis-data",
  },
];

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
        <nav>
          <h2 className="text-2xl font-bold border-b pb-2 mb-2">Parallax Example</h2>
          <Router router={router}></Router>
        </nav>
        {children}
      </body>
    </html>
  );
}
