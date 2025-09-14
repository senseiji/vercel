import "./../styles/globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Agentic Design Patterns",
  description: "A hands-on guide to building intelligent systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SSW7R0P9EL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SSW7R0P9EL');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        <div className="container">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
