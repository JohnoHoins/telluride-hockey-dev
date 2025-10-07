import React from "react";

export const metadata = {
  title: "Telluride Hockey Development",
  description: "Winter Hockey Skills Camp in Telluride, CO",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
