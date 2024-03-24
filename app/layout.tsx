import type { Metadata } from "next";
import "./globals.css";
import MainHeader from '@/components/main-header';

export const metadata: Metadata = {
  title: "David Christoper Johnson",
  description: "The personal web site of David Johnson - Engineering Leader & Technologist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <main className="flex min-h-screen flex-col items-center p-5">
          {children}
        </main>
      </body>
    </html>
  );
}
