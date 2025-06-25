"use client";

import { motion } from "framer-motion";
import { Brain, ArrowRight, Play, Shield, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { generateBrainNodes, generateConnections } from "@/lib/utils";

export default function Hero() {
  const [nodes, setNodes] = useState<any[]>([]);
  const [connections, setConnections] = useState<any[]>([]);

  useEffect(() => {
    const brainNodes = generateBrainNodes(30);
    const brainConnections = generateConnections(brainNodes, 2);
    setNodes(brainNodes);
    setConnections(brainConnections);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-neural-50/30 to-medical-light/20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-neural-100 text-neural-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" />
              HIPAA Compliant • FDA Approved
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-medical-primary via-neural-600 to-medical-accent bg-clip-text text-transparent">
                NeuroScan
              </span>
              <br />
              <span className="text-gray-900">Pro</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl text-balance"
            >
              Revolutionary AI-powered neuroimaging platform that transforms
              brain scan analysis with
              <span className="text-medical-primary font-semibold">
                {" "}
                98.7% accuracy
              </span>{" "}
              and
              <span className="text-neural-600 font-semibold">
                {" "}
                real-time processing
              </span>
              .
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
            >
              {[
                { icon: Zap, text: "< 30s Processing" },
                { icon: Brain, text: "AI-Powered" },
                { icon: Shield, text: "Secure & Private" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200"
                >
                  <item.icon className="w-4 h-4 text-medical-primary" />
                  <span className="text-sm font-medium text-gray-700">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="medical-button-primary group">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="medical-button-secondary group">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Brain Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Brain Container */}
              <div className="relative h-96 w-96 mx-auto">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-neural-400/20 to-medical-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>

                {/* Brain Outline */}
                <div className="relative h-full w-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-80 h-80 opacity-10 absolute"
                    fill="none"
                  >
                    <path
                      d="M100 20C140 20 170 50 170 90C170 110 160 125 150 135C155 145 160 155 160 170C160 185 145 200 130 200C120 200 110 195 100 190C90 195 80 200 70 200C55 200 40 185 40 170C40 155 45 145 50 135C40 125 30 110 30 90C30 50 60 20 100 20Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-medical-primary"
                    />
                  </svg>

                  {/* Animated Nodes */}
                  {nodes.map((node) => (
                    <motion.div
                      key={node.id}
                      className="absolute w-2 h-2 bg-neural-400 rounded-full"
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        width: `${node.size * 8}px`,
                        height: `${node.size * 8}px`,
                      }}
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: node.delay / 1000,
                      }}
                    />
                  ))}

                  {/* Neural Connections */}
                  {connections.map((connection) => (
                    <motion.div
                      key={connection.id}
                      className="absolute bg-gradient-to-r from-neural-300 to-neural-500"
                      style={{
                        left: `${connection.from.x}%`,
                        top: `${connection.from.y}%`,
                        width:
                          Math.sqrt(
                            Math.pow(connection.to.x - connection.from.x, 2) +
                              Math.pow(connection.to.y - connection.from.y, 2),
                          ) + "px",
                        height: "1px",
                        transformOrigin: "0 0",
                        transform: `rotate(${Math.atan2(
                          connection.to.y - connection.from.y,
                          connection.to.x - connection.from.x,
                        )}rad)`,
                        opacity: connection.opacity,
                      }}
                      animate={{
                        opacity: [
                          connection.opacity * 0.3,
                          connection.opacity,
                          connection.opacity * 0.3,
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Floating Stats */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-3 shadow-lg"
                >
                  <div className="text-xs text-gray-500">Accuracy</div>
                  <div className="text-lg font-bold text-medical-primary">
                    98.7%
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-3 shadow-lg"
                >
                  <div className="text-xs text-gray-500">Processing</div>
                  <div className="text-lg font-bold text-neural-600">
                    &lt; 30s
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-medical-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
