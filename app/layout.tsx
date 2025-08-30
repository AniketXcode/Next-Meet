import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Meet",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/yoom-logo.png",
            // hide Clerk footer credit
            helpPageUrl: "", // optional: removes "Help" link
            termsPageUrl: "", // optional
            privacyPageUrl: "", // optional
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1a2238", // same as your <body> bg
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },

          elements: {
            card: {
              background: "linear-gradient(135deg, #0F172B, #1a2238)",
              borderRadius: "12px",
            },
            logoImage: {
              width: "140px",
              height: "auto",
              marginBottom: "1rem",
            },
            footer: {
              display: "none", // 🚀 removes "Secured by Clerk" credit
            },
          },
        }}
      >
        <body className={`${inter.className} bg-[#1a2238]`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
