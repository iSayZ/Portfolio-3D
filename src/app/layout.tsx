import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/template/Theming/ThemingProvider";
import { SocialMediaButtons } from "@/components/template/SocialMediaButtons";
import { NavBar } from "@/components/template/NavBar";
import { Footer } from "@/components/template/Footer";

const inter = Inter({ subsets: ["latin"] });

// Metadata type is added once the image url has been added
export const metadata = {
  icons: {
    icon: "assets/images/favicon.png",
  },
  title: "Alexis Estrine | Portfolio Développeur Web Full-Stack",
  description:
    "Portfolio de développeur web full-stack avec expertise en JavaScript, TypeScript, React, Node.js et bien plus. Découvrez mes compétences à travers mes projets et expériences.",
  keywords: [
    "Alexis Estrine",
    "Développeur web",
    "Portfolio développeur",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Full-Stack",
    "Frontend",
    "Backend",
    "Développement web",
  ],
  author: "Alexis Estrine",
  openGraph: {
    title: "Alexis Estrine | Portfolio Développeur Web Full-Stack",
    description:
      "Portfolio de développeur web full-stack avec expertise en JavaScript, TypeScript, React, Node.js et bien plus. Découvrez mes compétences à travers mes projets et expériences.",
    // url: 'https://estrine-alexis.fr/',
    siteName: "Alexis Estrine | Portfolio",
    images: [
      {
        // url: 'https://estrine-alexis.fr/images/og-image.jpg', // (1200x630px)
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio Alexis Estrine",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexis Estrine | Portfolio Développeur Web Full-Stack",
    description:
      "Portfolio de développeur web full-stack avec expertise en JavaScript, TypeScript, React, Node.js et bien plus. Découvrez mes compétences à travers mes projets et expériences.",
    // images: ['https://estrine-alexis.fr/images/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`scroll-smooth ${inter.className}`}>
      <body className="bg-neutral-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Gradient Background */}
          <div className="fixed inset-0 bg-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-rose-900/30 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <NavBar />
          {children}
          <SocialMediaButtons />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
