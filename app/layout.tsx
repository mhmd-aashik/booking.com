import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Booking.com",
  description:
    "Booking.com is one of the largest online travel agencies. It is headquartered in Amsterdam, and is a subsidiary of Booking Holdings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
