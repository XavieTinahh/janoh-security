
// Route /layout.tsx
import React from "react";
import "@/styles/globals.css";
import Header from "@/layout/Header";

export const metadata = {
  title: "Janoh Security | Security Services & Equipment",
  description:
    "Security services, CCTV and electronic gate installation, and security equipment enquiries in Zimbabwe.",
};

function Footer() {
  return (
    <footer className="w-full border-t border-[#35443b] bg-[#17251e]">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-5 text-xs text-[#adb7ac] sm:px-8 lg:px-12">
        <span>Janoh Security</span>
        <span>© {new Date().getFullYear()} · Security services and equipment in Zimbabwe</span>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[#17251e] text-white">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
