import "./globals.css";
import { Providers } from "@/components/providers/HeroUIProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "SkillSphere - Learn from the Best, Anywhere",
  description:
    "SkillSphere brings world-class education to your fingertips. Join over 2 million students today.",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Toaster position="top-center" />
        <Providers>
          <SmoothScroll>{children}</SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}