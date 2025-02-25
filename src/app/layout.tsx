import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/react"

const fontSans = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "A9 Logística",
  keywords:
    "A9 Agência de Cargas, logística, transporte de cargas, frete, Várzea Grande, Mato Grosso, transporte seguro, eficiência em logística",
  description:
    "A9 logística oferece soluções completas em logística e transporte de cargas. Localizada em Várzea Grande, MT, garantimos agilidade e segurança em cada entrega.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/a905ico.png" />
      </head>
      <body className={cn("font-sans", fontSans.variable)}>
        <Analytics/>
          <div className=" bg-[#003F85] z-50 overflow-clip fixed">
            <NavBar />
            <div className="w-screen bg-[#FF7600] h-2"></div>
          </div>
          <main>{children}</main>
      </body>
    </html>
  );
}
