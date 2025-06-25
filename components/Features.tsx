"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Zap,
  ScanLine,
  Users,
  Layers,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { features } from "@/lib/utils";

const iconMap = {
  brain: Brain,
  zap: Zap,
  scan: ScanLine,
  users: Users,
  layers: Layers,
  "trending-up": TrendingUp,
};

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-medical-light/50 text-medical-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            Advanced Capabilities
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Revolutionary</span>
            <br />
            <span className="bg-gradient-to-r from-medical-primary to-neural-600 bg-clip-text text-transparent">
              Neuroimaging Platform
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Harness the power of artificial intelligence to transform how
            medical professionals analyze and interpret neuroimaging data with
            unprecedented precision and speed.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group medical-card p-8 hover:scale-105 transition-all duration-300 neural-glow"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-medical-primary to-neural-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-medical-primary to-neural-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <span className="text-xs font-medium text-medical-primary bg-medical-light/50 px-2 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>

                  <p className="text-gray-600 text-balance">
                    {feature.description}
                  </p>

                  <button className="inline-flex items-center text-medical-primary font-medium group-hover:text-medical-secondary transition-colors">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-medical-primary via-neural-600 to-medical-accent rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-neural-pattern"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Practice?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of medical professionals who trust NeuroScan Pro
              for critical neuroimaging analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-medical-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-medical-primary transition-colors">
                Schedule Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">FDA Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">SOC 2 Certified</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
