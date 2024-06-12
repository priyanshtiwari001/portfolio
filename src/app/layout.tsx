import type { Metadata } from "next";
import { azeretMono } from "@/utils/font";
import "./globals.css";
import { AuroraBackground } from "@/components/ui/aurora-background";



export const metadata: Metadata = {
  title: "Home",
  description: "Home page of the project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={azeretMono.className}>
        <div className="  bg-[url('/bg.png')] bg-no-repeat bg-zinc-900">
          {children}
        </div>
      </body> 
    </html>
  );
}
