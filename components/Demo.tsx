'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Upload, 
  Brain, 
  CheckCircle, 
  Clock, 
  Activity,
  Scan,
  BarChart3,
  FileImage,
  Play,
  Pause
} from 'lucide-react'

const demoSteps = [
  {
    id: 1,
    title: "Upload Brain Scan",
    description: "Drag & drop your NIfTI files (.nii/.nii.gz) or select from our sample scans",
    icon: Upload,
    status: "completed",
    details: "Supports MRI, CT, PET, and fMRI formats"
  },
  {
    id: 2,
    title: "AI Analysis",
    description: "Our advanced algorithms process your scan using deep learning models",
    icon: Brain,
    status: "processing",
    details: "98.7% accuracy with real-time processing"
  },
  {
    id: 3,
    title: "Generate Report",
    description: "Comprehensive analysis with 3D visualization and detailed findings",
    icon: BarChart3,
    status: "pending",
    details: "Complete neurological assessment"
  }
]

const sampleScans = [
  {
    name: "Healthy Brain MRI",
    type: "T1-weighted",
    size: "45.2 MB",
    preview: "/api/placeholder/150/150"
  },
  {
    name: "Alzheimer's Case",
    type: "Structural MRI",
    size: "52.8 MB",
    preview: "/api/placeholder/150/150"
  },
  {
    name: "Stroke Analysis",
    type: "Diffusion MRI",
    size: "38.1 MB",
    preview: "/api/placeholder/150/150"
  }
]

export default function Demo() {
  const [selectedStep, setSelectedStep] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedScan, setSelectedScan] = useState(0)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-neural-50/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-neural-100 text-neural-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Scan className="w-4 h-4" />
            Interactive Demo
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Experience</span>
            <br />
            <span className="bg-gradient-to-r from-medical-primary to-neural-600 bg-clip-text text-transparent">
              NeuroScan Pro
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            See how our platform transforms neuroimaging analysis in three simple steps. 
            Try our interactive demo with real medical imaging data.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Analysis Process</h3>
            
            {demoSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`medical-card p-6 cursor-pointer transition-all duration-300 ${
                  selectedStep === step.id ? 'ring-2 ring-medical-primary shadow-lg' : ''
                }`}
                onClick={() => setSelectedStep(step.id)}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    step.status === 'completed' 
                      ? 'bg-success-500 text-white' 
                      : step.status === 'processing'
                      ? 'bg-medical-primary text-white animate-pulse'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {step.status === 'completed' ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : step.status === 'processing' ? (
                      <Activity className="w-6 h-6" />
                    ) : (
                      <step.icon className="w-6 h-6" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        step.status === 'completed' 
                          ? 'bg-success-50 text-success-600' 
                          : step.status === 'processing'
                          ? 'bg-medical-light text-medical-primary'
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {step.status === 'completed' ? 'Complete' : 
                         step.status === 'processing' ? 'Processing...' : 'Pending'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <p className="text-sm text-medical-primary font-medium">{step.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Demo Controls */}
            <div className="flex gap-4 pt-6">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="medical-button-primary"
              >
                {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {isPlaying ? 'Pause Demo' : 'Start Demo'}
              </button>
              <button className="medical-button-secondary">
                <Clock className="w-4 h-4 mr-2" />
                Reset Demo
              </button>
            </div>
          </motion.div>

          {/* Right Side - Visual Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Demo Screen */}
            <div className="medical-card p-8 bg-gradient-to-br from-gray-50 to-white">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">NeuroScan Pro Interface</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {selectedStep === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div className="border-2 border-dashed border-neural-300 rounded-xl p-8 text-center bg-neural-50/50">
                    <Upload className="w-12 h-12 text-neural-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Drop your brain scan files here</p>
                    <button className="medical-button-secondary text-sm">
                      <FileImage className="w-4 h-4 mr-2" />
                      Choose Files
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {sampleScans.map((scan, index) => (
                      <div 
                        key={index}
                        onClick={() => setSelectedScan(index)}
                        className={`border rounded-lg p-3 cursor-pointer transition-all ${
                          selectedScan === index ? 'border-medical-primary bg-medical-light/20' : 'border-gray-200'
                        }`}
                      >
                        <div className="w-full h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded mb-2 flex items-center justify-center">
                          <Brain className="w-8 h-8 text-gray-400" />
                        </div>
                        <div className="text-xs font-medium text-gray-900 truncate">{scan.name}</div>
                        <div className="text-xs text-gray-500">{scan.type}</div>
                        <div className="text-xs text-gray-400">{scan.size}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {selectedStep === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div className="bg-gray-900 rounded-xl p-6 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-medical-primary rounded-full animate-pulse"></div>
                      <span className="text-sm">AI Analysis in Progress...</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Loading scan data</span>
                        <span className="text-success-400">✓</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Preprocessing images</span>
                        <span className="text-success-400">✓</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Running neural networks</span>
                        <div className="w-4 h-4 border-2 border-medical-primary border-t-transparent rounded-full animate-spin"></div>
                      </div>
                      <div className="flex justify-between items-center text-gray-400">
                        <span className="text-sm">Generating report</span>
                        <span>⏳</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">Progress</div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div 
                          className="bg-medical-primary h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '68%' }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                      <div className="text-xs text-gray-400 mt-1">68% complete</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedStep === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-success-50 border border-success-200 rounded-lg p-4">
                      <div className="text-success-600 font-semibold mb-1">Overall Health</div>
                      <div className="text-2xl font-bold text-success-700">Normal</div>
                      <div className="text-xs text-success-600">95% confidence</div>
                    </div>
                    <div className="bg-medical-light border border-medical-primary/20 rounded-lg p-4">
                      <div className="text-medical-primary font-semibold mb-1">Brain Volume</div>
                      <div className="text-2xl font-bold text-medical-primary">1,450cc</div>
                      <div className="text-xs text-medical-primary">Within normal range</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm font-semibold text-gray-900 mb-2">3D Visualization</div>
                    <div className="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                      <Brain className="w-16 h-16 text-gray-400 animate-brain-pulse" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-medical-primary">< 30s</div>
                <div className="text-sm text-gray-600">Processing Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success-600">98.7%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neural-600">24/7</div>
                <div className="text-sm text-gray-600">Availability</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}