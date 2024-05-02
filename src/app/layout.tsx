import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export declare interface Window {
  Aliplayer: any;
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://g.alicdn.com/de/prismplayer/2.15.2/skins/default/aliplayer-min.css"
        />
        <script
          type="text/javascript"
          src="https://g.alicdn.com/de/prismplayer/2.15.2/aliplayer-min.js"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
