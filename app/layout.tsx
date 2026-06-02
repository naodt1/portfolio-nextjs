import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://naodtadele.vercel.app/"),

    icons: {
        icon: '/favicon.ico'
    },
    title: 'Naod Tadele - Portfolio',
    authors: {
        name: "Naod Tadele",
    },

    description:
        "Welcome to my portfolio! I'm a Flutter mobile app developer passionate about crafting engaging user experiences using innovative technologies. Let's create something amazing together!",
    openGraph: {
        title: "Naod Tadele - Portfolio",
        description:
            "Welcome to my portfolio! I'm a Flutter mobile app developer passionate about crafting engaging user experiences using innovative technologies. Let's create something amazing together!",
        url: "https://naodtadele.vercel.app/",
        siteName: "Naod Tadele - Portfolio",
        images: "/portfolio-web.png",
        type: "website",
    },
    keywords: ["flutter", "mobile app development", "web development", "Naod Tadele", "programming", "computer science"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}><ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
