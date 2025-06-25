import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-medical-primary to-neural-500 rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V19C3 20.1 3.9 21 5 21H11V19H5V3H13V9H21Z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">
                NeuroScan Pro
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-medical-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#demo"
                className="text-gray-600 hover:text-medical-primary transition-colors"
              >
                Demo
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-medical-primary transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-medical-primary transition-colors"
              >
                Contact
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:inline-flex medical-button-secondary">
                Sign In
              </button>
              <button className="medical-button-primary">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Features />
        <Stats />
        <Demo />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
