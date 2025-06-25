import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeuroScan Pro - Advanced Neuroimaging Analytics",
  description:
    "Revolutionary AI-powered neuroimaging platform for advanced brain analysis and medical diagnostics. Transform the future of neuroscience research.",
  keywords: [
    "neuroimaging",
    "brain analysis",
    "medical AI",
    "neuroscience",
    "brain scans",
    "medical diagnostics",
  ],
  authors: [{ name: "NeuroScan Team" }],
  creator: "NeuroScan Pro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neuroscan-pro.vercel.app",
    title: "NeuroScan Pro - Advanced Neuroimaging Analytics",
    description:
      "Revolutionary AI-powered neuroimaging platform for advanced brain analysis and medical diagnostics.",
    siteName: "NeuroScan Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroScan Pro - Advanced Neuroimaging Analytics",
    description:
      "Revolutionary AI-powered neuroimaging platform for advanced brain analysis and medical diagnostics.",
    creator: "@neuroscanpro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-neural-50">
          {/* Neural Network Background Pattern */}
          <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
            <div className="absolute inset-0 bg-neural-pattern"></div>
          </div>

          {/* Main Content */}
          <main className="relative z-10">{children}</main>

          {/* Floating Medical Elements */}
          <div className="fixed top-20 left-20 w-4 h-4 bg-neural-300 rounded-full opacity-20 animate-float"></div>
          <div className="fixed top-40 right-32 w-3 h-3 bg-medical-primary rounded-full opacity-30 animate-float animation-delay-400"></div>
          <div className="fixed bottom-32 left-1/4 w-2 h-2 bg-neural-500 rounded-full opacity-25 animate-float animation-delay-800"></div>
          <div className="fixed bottom-20 right-20 w-5 h-5 bg-medical-accent rounded-full opacity-15 animate-float animation-delay-600"></div>
        </div>
      </body>
    </html>
  );
}
