import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rizbi Ahmmad",
  description: "Portfolio of Rizbi Ahmmad",
  icons: {
    icon: "/Rizbi_Ahmmad.png",
    shortcut: "/Rizbi_Ahmmad.png",
    apple: "/Rizbi_Ahmmad.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-gray-50 dark:bg-[#0f111a] text-gray-900 dark:text-gray-100 overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Nav />
          <main className="flex-1 mt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
