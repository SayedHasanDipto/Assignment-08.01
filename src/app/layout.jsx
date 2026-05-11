import "./globals.css";
import { Providers } from "@/components/providers/HeroUIProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";

export const metadata = {
  title: "SkillSphere - Learn from the Best, Anywhere",
  description:
    "SkillSphere brings world-class education to your fingertips. Join over 2 million students today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <Providers>
          <SmoothScroll>{children}</SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}