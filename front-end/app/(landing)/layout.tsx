import type { Metadata } from "next";
import "../globals.css";
import { LoadingSpinner, Topbar } from "@/components";
import { ContextProvider } from "@/components/ContextProvider";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Plot Wonders DApp",
  description:
    "Plot Wonders - Buy/Sell/Auction Unique NFT Lands Marketplace On the go..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<LoadingSpinner />}>
          <Topbar title="landing" />
          <main>
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
          </main>
        </Suspense>
      </body>
    </html>
  );
}
