import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

export function generateBrainNodes(count: number = 50) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 0.5 + 0.5,
    delay: Math.random() * 2000,
  }));
}

export function generateConnections(nodes: any[], maxConnections: number = 3) {
  const connections: any[] = [];

  nodes.forEach((node, index) => {
    const connectionCount = Math.floor(Math.random() * maxConnections) + 1;

    for (let i = 0; i < connectionCount; i++) {
      const targetIndex = Math.floor(Math.random() * nodes.length);
      if (targetIndex !== index) {
        connections.push({
          id: `${index}-${targetIndex}`,
          from: node,
          to: nodes[targetIndex],
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    }
  });

  return connections;
}

export const medicalStats = [
  {
    value: 2500000,
    label: "Brain Scans Analyzed",
    prefix: "",
    suffix: "+",
    description: "Advanced AI analysis of neuroimaging data",
  },
  {
    value: 98.7,
    label: "Accuracy Rate",
    prefix: "",
    suffix: "%",
    description: "Precision in detecting neurological conditions",
  },
  {
    value: 150,
    label: "Medical Centers",
    prefix: "",
    suffix: "+",
    description: "Trusted by leading healthcare institutions",
  },
  {
    value: 45,
    label: "Countries Served",
    prefix: "",
    suffix: "",
    description: "Global reach in neuroimaging solutions",
  },
];

export const features = [
  {
    title: "AI-Powered Analysis",
    description:
      "Advanced machine learning algorithms analyze brain scans with unprecedented accuracy and speed.",
    icon: "brain",
    stats: "98.7% accuracy",
  },
  {
    title: "Real-time Processing",
    description:
      "Get instant results with our optimized cloud infrastructure and parallel processing capabilities.",
    icon: "zap",
    stats: "< 30 seconds",
  },
  {
    title: "3D Visualization",
    description:
      "Interactive 3D brain models with detailed anatomical structures and pathology highlighting.",
    icon: "scan",
    stats: "HD quality",
  },
  {
    title: "Collaborative Platform",
    description:
      "Share findings securely with your medical team and access reports from anywhere.",
    icon: "users",
    stats: "HIPAA compliant",
  },
  {
    title: "Multi-modal Support",
    description:
      "Support for MRI, CT, PET, and fMRI imaging with automated format detection.",
    icon: "layers",
    stats: "4+ formats",
  },
  {
    title: "Predictive Analytics",
    description:
      "Early detection of neurological conditions using advanced predictive modeling.",
    icon: "trending-up",
    stats: "Early detection",
  },
];
