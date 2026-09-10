import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/layout/page-transition";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CursorSpotlight } from "@/components/shared/cursor-spotlight";
import { IntroPreloader } from "@/components/shared/intro-preloader";
import { IntroProvider } from "@/components/shared/intro-context";

const INTRO_FLASH_GUARD = `
try {
  if (sessionStorage.getItem('intro-shown') === '1') {
    document.documentElement.setAttribute('data-intro-shown', '1');
  }
} catch (e) {}
`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.headline,
  keywords: [
    "Backend Engineer",
    "NestJS Developer",
    "Node.js Backend Engineer",
    "PostgreSQL",
    "Payroll Systems",
    "HRIS",
    "Distributed Systems",
    siteConfig.name,
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.headline,
    siteName: `${siteConfig.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.headline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: [siteConfig.github, siteConfig.gitlab, siteConfig.linkedin],
  };

  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="intro-flash-guard" strategy="beforeInteractive">
          {INTRO_FLASH_GUARD}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TooltipProvider>
          <IntroProvider>
            <IntroPreloader />
            <CursorSpotlight />
            <Navbar />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </IntroProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
