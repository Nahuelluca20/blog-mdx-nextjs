import type {Metadata} from "next";

import {Inter as FontSans} from "next/font/google";

import {ThemeProvider} from "@/components/theme-provider";
import "highlight.js/styles/atom-one-dark.css";
import "./globals.css";
import {cn} from "@/lib/utils";
import Header from "@/components/header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Sider dev blog",
  description: "I write about NextJS, Remix and other things",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen px-5 md:px-2 w-full max-w-[824px]  sm:px-10 py-10 mx-auto bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
