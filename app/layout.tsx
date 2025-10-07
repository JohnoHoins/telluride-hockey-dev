import React from "react";
import "./globals.css";

export const metadata = {
  title: "Telluride Hockey Development",
  description: "Winter Hockey Skills Camp in Telluride, CO",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
