import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import GrainEffect from "@/components/visualEffects/grain-effect";
import Cursor from "@/components/cursor/cursor";
import {ReactNode} from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

//Fonts
const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
// const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const OswaldFont = localFont({ src:"../public/assets/fonts/Oswald-VariableFont_wght.ttf", variable: "--font-oswald" });

const PixelFont = localFont({
    src: "../public/assets/fonts/pixel-font-7.ttf",
    variable: "--font-pixel",
});

//Metadata
export const metadata: Metadata = {
    title: "LOAY FAYEZ",
    description: "Loay Fayez official portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={cn(
                MainFont.className,
                OswaldFont.variable,
                PixelFont.variable
            )}
        >
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
        </body>
        </html>
    );
}