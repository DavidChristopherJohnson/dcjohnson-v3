import type { Metadata } from "next";
import "./globals.css";
import MainHeader from '@/components/main-header';
import MainFooter from "@/components/main-footer";
import LayoutWrapper from "@/components/layout-wrapper";

export const metadata: Metadata = {
  title: "David Christopher Johnson",
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
        <div className="flex flex-col min-h-screen justify-between">
          <MainHeader />
          <div className="flex-grow">
            <main className="flex flex-col items-center w-full">
              <LayoutWrapper>
                {children}
              </LayoutWrapper>
            </main>
          </div>
          <MainFooter />
        </div>
      </body>
    </html>
  );
}
