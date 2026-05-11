import { Inter, Outfit, Material_Symbols_Outlined } from "next/font/google";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/HeroUIProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const materialSymbols = Material_Symbols_Outlined({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SkillSphere | Upgrade Your Skills Today",
  description: "Learn from Industry Experts and join a community of over 2 million learners worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <head>
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased selection:bg-primary/20 selection:text-primary`}>
        <Providers>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
