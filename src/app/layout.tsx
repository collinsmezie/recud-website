import type { Metadata } from "next";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import ClientThemeProvider from './components/ClientThemeProvider';

export const metadata: Metadata = {
  title: "RECUD - Business Process Management Software Solutions",
  description: "Transforming business operations through intelligent process management solutions that drive efficiency, innovation, and growth across all industries.",
  keywords: "business process management, BPM software, process automation, workflow management, enterprise software",
  authors: [{ name: "RECUD" }],
  openGraph: {
    title: "RECUD - Business Process Management Software Solutions",
    description: "Transforming business operations through intelligent process management solutions that drive efficiency, innovation, and growth across all industries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientThemeProvider>
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  );
}
