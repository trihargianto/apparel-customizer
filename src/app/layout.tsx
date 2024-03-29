import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { CanvasProvider } from "@/contexts/CanvasContext";
import { ObjectProvider } from "@/contexts/ObjectContext";
import { ApparelProvider } from "@/contexts/ApparelContext";

import Navbar from "@/components/02-molecules/Navbar";

import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apparel Customizer",
  description: "Design your apparel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ApparelProvider>
          <ObjectProvider>
            <CanvasProvider>
              <Navbar />

              {children}
            </CanvasProvider>
          </ObjectProvider>
        </ApparelProvider>
      </body>
    </html>
  );
}
