import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/template/Theming/ThemingProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SocialMediaButtons } from "@/components/template/SocialMediaButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "assets/images/metadata/favicon.png",
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
    "Portfolio",
  ],
  authors: [{ name: "Alexis Estrine" }],
  openGraph: {
    title: "Alexis Estrine | Portfolio Développeur Web Full-Stack",
    description:
      "Portfolio de développeur web full-stack avec expertise en JavaScript, TypeScript, React, Node.js et bien plus. Découvrez mes compétences à travers mes projets et expériences.",
    url: "https://estrine-alexis.fr/",
    siteName: "Alexis Estrine | Portfolio",
    images: [
      {
        url: "https://estrine-alexis.fr/assets/images/metadata/app-overview.png",
        width: 1200,
        height: 638,
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
    images: [
      "https://estrine-alexis.fr/assets/images/metadata/app-overview.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
  }
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
          <div className="fixed inset-0 bg-background -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-800/50 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-violet-900/40 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-purple-700/40 via-transparent to-transparent" />
          </div>
          {children}
          <Analytics />
          <SocialMediaButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
