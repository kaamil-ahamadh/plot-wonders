import type { Metadata } from "next";
import "../globals.css";
import { Bottombar, Sidebar, Topbar } from "@/components";
import { ContextProvider } from "@/components/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ContextProvider>
          <ToastContainer
            theme="dark"
            toastStyle={{
              backgroundColor: "#1e40af",
              fontWeight: "bold",
              borderRadius: "3rem",
            }}
          />
          <Topbar title="root" />
          <main className="flex flex-row">
            <Sidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
          </main>
          <Bottombar />
        </ContextProvider>
      </body>
    </html>
  );
}
