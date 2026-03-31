import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jake Bowen | Software Engineer & Builder",
  description: "Jake Bowen's personal portfolio. Software engineer building real products. 2-week SaaS launch, full-stack development, athlete's mindset.",
  keywords: "software engineer, full-stack, python, django, react, startup, portfolio",
  authors: [{ name: "Jake Bowen" }],
  openGraph: {
    title: "Jake Bowen | Software Engineer",
    description: "Eager builder learning by doing. ClearBid founder. Real products, real customers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
