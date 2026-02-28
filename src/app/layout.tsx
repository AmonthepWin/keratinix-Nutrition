import type { Metadata } from "next";
import { Space_Grotesk, Noto_Serif, Cinzel } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  style: ['normal', 'italic'],
  weight: ['400', '700'],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keratinix | Mystical Alchemy Compendium",
  description: "A chronicle of beauty as seen through the lens of ancient wisdom and modern atoms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${spaceGrotesk.variable} ${notoSerif.variable} ${cinzel.variable} font-display antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
