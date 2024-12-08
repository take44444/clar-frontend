import { siteConfig } from "@/config/site";

import React from "react";
import type { Metadata } from 'next'
import LayoutProvider from "@/components/LayoutProvider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: '%s | ' + siteConfig.name,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}

