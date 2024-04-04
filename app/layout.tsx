import type { Metadata } from "next";
import "./globals.css";
import MainHeader from '@/components/main-header';
import MainFooter from "@/components/main-footer";

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
        <div className="flex flex-col h-screen justify-between">
          <MainHeader />
          <div className="flex-grow overflow-scroll">
            <main className="flex flex-col items-center p-5 mt-14 max-sm:mt-5 w-full">
              {children}
            </main>
          </div>
          <MainFooter />
        </div>
      </body>
    </html>
  );
}
