import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Tinicoach Design System",
  description: "Tinicoach brand design system — shadcn/ui registry with Montserrat, orange & purple brand tokens.",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

const MontserratSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        MontserratSans.variable,
        GeistMono.variable,
        "bg-background text-foreground",
      )}
    >
      <meta
        name="robots"
        content="noindex, nofollow, noarchive, nosnippet, noimageindex"
      />
      <body className="flex grow">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
