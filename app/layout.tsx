import type { Metadata } from "next";
import { Bokor, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "./theme-toggle";
import { ChatBot } from "@/components/chat-bot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jomar Godinez | Portfolio",
  description:
    "Software Engineer | Laravel & WordPress | UI/UX | SEO | Freelancer",
  icons: {
    icon: "/images/jomar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" enableSystem defaultTheme="light">
          {children}
        </ThemeProvider>
        <ChatBot />
      </body>
    </html>
  );
}
