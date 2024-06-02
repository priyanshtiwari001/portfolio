import type { Metadata } from "next";
import { azeretMono } from "@/utils/font";
import "./globals.css";
import { AuroraBackground } from "@/components/ui/aurora-background";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={azeretMono.className}>
        <AuroraBackground>
          {children}
        </AuroraBackground>
      </body> 
    </html>
  );
}
