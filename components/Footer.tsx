"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Shield,
  Award,
  Globe,
} from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Demo", href: "#demo" },
    { name: "Pricing", href: "#pricing" },
    { name: "API Documentation", href: "#docs" },
    { name: "Integrations", href: "#integrations" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
    { name: "Partners", href: "#partners" },
  ],
  resources: [
    { name: "Help Center", href: "#help" },
    { name: "Community", href: "#community" },
    { name: "Research Papers", href: "#research" },
    { name: "Case Studies", href: "#cases" },
    { name: "Webinars", href: "#webinars" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "HIPAA Compliance", href: "#hipaa" },
    { name: "Security", href: "#security" },
    { name: "Compliance", href: "#compliance" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#twitter" },
  { name: "LinkedIn", icon: Linkedin, href: "#linkedin" },
  { name: "GitHub", icon: Github, href: "#github" },
];

const certifications = [
  { name: "HIPAA Compliant", icon: Shield },
  { name: "FDA Approved", icon: Award },
  { name: "SOC 2 Type II", icon: Globe },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-medical-primary to-neural-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-medical-primary to-neural-400 bg-clip-text text-transparent">
                  NeuroScan Pro
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-balance mb-6 leading-relaxed">
                Revolutionary AI-powered neuroimaging platform transforming
                medical diagnostics with unprecedented accuracy and speed.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Mail className="w-4 h-4 text-medical-primary" />
                  contact@neuroscanpro.com
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Phone className="w-4 h-4 text-medical-primary" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-medical-primary" />
                  San Francisco, CA, USA
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-medical-primary rounded-lg flex items-center justify-center transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-white font-semibold mb-4 capitalize">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-medical-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ),
          )}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Certifications */}
            <div className="flex flex-wrap gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <cert.icon className="w-4 h-4 text-success-400" />
                  {cert.name}
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-transparent"
              />
              <button className="bg-medical-primary hover:bg-medical-secondary text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>© 2024 NeuroScan Pro. All rights reserved.</div>
            <div className="flex gap-6">
              <span>Made with ❤️ for medical professionals</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
